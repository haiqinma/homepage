#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 || -z "$1" ]]; then
  printf 'Usage: %s OUTPUT_JSON\n' "$(basename "$0")" >&2
  exit 2
fi

output_json=$1
mirror_base="https://fonts.googleapis.cn"
user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'

command -v curl >/dev/null 2>&1 || { echo 'curl is required to fetch Google Fonts from the China mirror' >&2; exit 1; }
command -v jq >/dev/null 2>&1 || { echo 'jq is required to prepare mirrored Google Fonts responses' >&2; exit 1; }

temp_dir=$(mktemp -d "${TMPDIR:-/tmp}/yeying-google-fonts.XXXXXX")
cleanup() {
  unlink "$temp_dir/geist.css" 2>/dev/null || true
  unlink "$temp_dir/geist-mono.css" 2>/dev/null || true
  unlink "$temp_dir/noto-sans-sc.css" 2>/dev/null || true
  rmdir "$temp_dir" 2>/dev/null || true
}
trap cleanup EXIT HUP INT TERM

geist_url='https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap'
geist_mono_url='https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap'
noto_sans_sc_url='https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap'

fetch_css() {
  local request_url=$1 output_file=$2 mirror_url
  mirror_url="${request_url/https:\/\/fonts.googleapis.com/$mirror_base}"
  curl --fail --silent --show-error --location --retry 3 --connect-timeout 10 --max-time 90 \
    --user-agent "$user_agent" --output "$output_file" "$mirror_url"
  grep -Fq 'https://fonts.gstatic.cn/' "$output_file" || {
    printf 'Font CSS from %s did not use the expected fonts.gstatic.cn asset mirror\n' "$mirror_url" >&2
    return 1
  }
}

fetch_css "$geist_url" "$temp_dir/geist.css"
fetch_css "$geist_mono_url" "$temp_dir/geist-mono.css"
fetch_css "$noto_sans_sc_url" "$temp_dir/noto-sans-sc.css"

jq -cn \
  --arg geist_url "$geist_url" --rawfile geist_css "$temp_dir/geist.css" \
  --arg geist_mono_url "$geist_mono_url" --rawfile geist_mono_css "$temp_dir/geist-mono.css" \
  --arg noto_sans_sc_url "$noto_sans_sc_url" --rawfile noto_sans_sc_css "$temp_dir/noto-sans-sc.css" \
  '{($geist_url):$geist_css,($geist_mono_url):$geist_mono_css,($noto_sans_sc_url):$noto_sans_sc_css}' \
  > "$output_json"

jq -e --arg geist_url "$geist_url" --arg geist_mono_url "$geist_mono_url" --arg noto_sans_sc_url "$noto_sans_sc_url" \
  'has($geist_url) and has($geist_mono_url) and has($noto_sans_sc_url)' "$output_json" >/dev/null
printf 'Prepared Google Fonts CSS from %s\n' "$mirror_base"
