#!/usr/bin/env python3
"""Create a gzip-compressed tar archive with stable entry metadata and order."""

import argparse
import gzip
import os
import tarfile
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-epoch", type=int, required=True)
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    root = args.root
    if not root.is_dir() or not root.name:
        parser.error(f"archive root must be a directory: {root}")

    with args.output.open("wb") as raw_output:
        with gzip.GzipFile(filename="", mode="wb", fileobj=raw_output, mtime=0) as compressed:
            with tarfile.open(fileobj=compressed, mode="w", format=tarfile.PAX_FORMAT) as archive:
                paths = [root]
                for current, directories, files in os.walk(root, followlinks=False):
                    directories.sort()
                    files.sort()
                    current_path = Path(current)
                    paths.extend(current_path / name for name in directories)
                    paths.extend(current_path / name for name in files)

                for path in paths:
                    archive.add(path, arcname=path.relative_to(root.parent), recursive=False,
                                filter=lambda info: normalize(info, args.source_epoch))


def normalize(info: tarfile.TarInfo, source_epoch: int) -> tarfile.TarInfo:
    info.mtime = source_epoch
    info.uid = 0
    info.gid = 0
    info.uname = ""
    info.gname = ""
    info.pax_headers = {}
    return info


if __name__ == "__main__":
    main()
