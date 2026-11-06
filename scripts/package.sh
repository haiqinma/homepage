#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ref=""
version=""
output_dir=""

usage() {
  printf 'Usage: %s --ref COMMIT --version MAJOR.MINOR.PATCH --output-dir DIR\n' "$(basename "$0")"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --ref|--version|--output-dir)
      option="$1"
      [[ $# -ge 2 && -n "$2" ]] || { usage >&2; exit 2; }
      case "$option" in
        --ref) ref="$2" ;;
        --version) version="$2" ;;
        --output-dir) output_dir="$2" ;;
      esac
      shift 2
      ;;
    --help|-h) usage; exit 0 ;;
    *) usage >&2; exit 2 ;;
  esac
done

[[ -n "$ref" && -n "$version" && -n "$output_dir" ]] || { usage >&2; exit 2; }
[[ "$version" =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$ ]] || {
  printf 'Version must use major.minor.patch format: %s\n' "$version" >&2
  exit 2
}
command -v jq >/dev/null 2>&1 || { echo 'jq is required' >&2; exit 1; }
command -v tar >/dev/null 2>&1 || { echo 'tar is required' >&2; exit 1; }
command -v curl >/dev/null 2>&1 || { echo 'curl is required' >&2; exit 1; }
if command -v sha256sum >/dev/null 2>&1; then sha_command=sha256sum
elif command -v shasum >/dev/null 2>&1; then sha_command=shasum
else echo 'sha256sum or shasum is required' >&2; exit 1
fi

commit="$(git -C "$root_dir" rev-parse --verify "${ref}^{commit}")"
head_commit="$(git -C "$root_dir" rev-parse HEAD)"
[[ "$commit" == "$head_commit" ]] || {
  echo 'Package source must be checked out at the requested commit.' >&2
  exit 1
}
if [[ -n "$(git -C "$root_dir" status --porcelain --untracked-files=all)" ]]; then
  echo 'Package source checkout must be clean.' >&2
  exit 1
fi

mkdir -p "$output_dir"
output_dir="$(cd "$output_dir" && pwd)"
if [[ -n "$(find "$output_dir" -mindepth 1 -maxdepth 1 -print -quit)" ]]; then
  echo 'Output directory must be empty; refusing to overwrite existing files.' >&2
  exit 1
fi

short_commit="${commit:0:7}"
stage_dir="$(mktemp -d "${TMPDIR:-/tmp}/homepage-package.XXXXXX")"
trap 'rm -rf "$stage_dir"' EXIT HUP INT TERM
artifacts='[]'

sha256_file() {
  if [[ "$sha_command" == sha256sum ]]; then sha256sum "$1" | awk '{print $1}'
  else shasum -a 256 "$1" | awk '{print $1}'
  fi
}

get_artifact_version() {
  local unit_id="$1" map_file="$root_dir/scripts/artifact-versions.conf" map_unit map_version extra found=""
  [[ -f "$map_file" ]] || { printf '%s\n' "$version"; return; }
  while read -r map_unit map_version extra || [[ -n "${map_unit:-}" ]]; do
    [[ -z "${map_unit:-}" || "$map_unit" == \#* ]] && continue
    [[ -z "${extra:-}" && "$map_unit" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ && "$map_version" =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$ ]] || { echo "Invalid entry in $map_file" >&2; return 1; }
    [[ "$map_unit" != "$unit_id" ]] || { [[ -z "$found" ]] || { echo "Duplicate unit in $map_file: $unit_id" >&2; return 1; }; found="$map_version"; }
  done < "$map_file"
  printf '%s\n' "${found:-$version}"
}

add_static_artifact() {
  local unit_id="$1" site_id="$2" source_dir="$3"
  local artifact_version package_root
  artifact_version="$(get_artifact_version "$unit_id")"
  package_root="${unit_id}-v${artifact_version}-${short_commit}"
  local package_name="${package_root}.tar.gz"
  local package_dir="$stage_dir/$package_root"
  local staged_archive="$stage_dir/$package_name"
  local checksum artifact
  [[ -f "$source_dir/index.html" ]] || { echo "Missing static entry: $source_dir/index.html" >&2; return 1; }
  mkdir -p "$package_dir"
  cp -R "$source_dir/." "$package_dir/"
  tar -czf "$staged_archive" -C "$stage_dir" "$package_root"
  checksum="$(sha256_file "$staged_archive")"
  artifact="$(jq -cnS \
    --arg unit "$unit_id" --arg site "$site_id" --arg version "$artifact_version" \
    --arg package "$package_name" --arg sha "$checksum" --arg root "$package_root" \
    '{unit_id:$unit,type:"static",version:$version,package:$package,sha256:$sha,package_root:$root,static_targets:[{site_id:$site,path:("/opt/deploy/static/" + $site),health_check_path:"/index.html"}]}')"
  artifacts="$(jq -cn --argjson current "$artifacts" --argjson next "$artifact" '$current + [$next]')"
}

build_site() {
  local site_dir="$1"
  if [[ "$site_dir" == tidukongjian ]]; then
    local google_fonts_map="$stage_dir/google-fonts-mirror.json"
    (
      cd "$root_dir/$site_dir"
      npm install --no-audit --no-fund
      bash "$root_dir/scripts/prepare_google_fonts_mirror.sh" "$google_fonts_map"
      # next/font/google hard-codes fonts.googleapis.com; provide mirror CSS while
      # Next downloads fonts.gstatic.cn assets and embeds them in the static site.
      NEXT_FONT_GOOGLE_MOCKED_RESPONSES="$google_fonts_map" npm run build
    )
  else
    (cd "$root_dir/$site_dir" && npm install --no-audit --no-fund && npm run build)
  fi
}

build_site yeying
[[ -d "$root_dir/yeying/output" ]] || { echo 'Missing yeying/output after build.' >&2; exit 1; }
add_static_artifact homepage-yeying homepage-yeying "$root_dir/yeying/output"

build_site tidukongjian
[[ -d "$root_dir/tidukongjian/output" ]] || { echo 'Missing tidukongjian/output after static export.' >&2; exit 1; }
add_static_artifact homepage-tidukongjian homepage-tidukongjian "$root_dir/tidukongjian/output"

wallet_stage="$stage_dir/wallet-source"
mkdir -p "$wallet_stage"
for item in index.html main.js styles.css assets docs robots.txt sitemap.xml; do
  [[ -e "$root_dir/wallet/$item" ]] || { echo "Missing wallet static input: wallet/$item" >&2; exit 1; }
  cp -R "$root_dir/wallet/$item" "$wallet_stage/"
done
add_static_artifact homepage-wallet homepage-wallet "$wallet_stage"

for package_name in $(printf '%s\n' "$artifacts" | jq -r '.[].package'); do
  mv "$stage_dir/$package_name" "$output_dir/$package_name"
done
jq -cnS --arg repository homepage --arg source_commit "$commit" --argjson artifacts "$artifacts" \
  '{schema_version:1,repository:$repository,source_commit:$source_commit,artifacts:$artifacts}' \
  > "$output_dir/release-manifest.json"
printf 'Created %s static artifacts for %s at %s\n' "$(jq -r '.artifacts | length' "$output_dir/release-manifest.json")" "$commit" "$output_dir"
