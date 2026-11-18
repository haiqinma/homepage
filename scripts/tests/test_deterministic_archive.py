#!/usr/bin/env python3
import hashlib
import os
import subprocess
import sys
import tempfile
from pathlib import Path


script = Path(__file__).resolve().parents[1] / "create_deterministic_archive.py"
with tempfile.TemporaryDirectory(prefix="homepage-archive-test-") as temp:
    base = Path(temp)
    root = base / "site-v1.2.3-abcdef0"
    (root / "assets").mkdir(parents=True)
    (root / "index.html").write_text("<h1>Example</h1>\n")
    (root / "assets" / "app.js").write_text("console.log('stable');\n")
    first = base / "first.tar.gz"
    second = base / "second.tar.gz"

    def build(output: Path) -> None:
        subprocess.run([sys.executable, str(script), "--source-epoch", "1700000000",
                        "--root", str(root), "--output", str(output)], check=True)

    build(first)
    os.utime(root / "index.html", (1800000000, 1800000000))
    os.utime(root / "assets" / "app.js", (1800000001, 1800000001))
    build(second)
    digest = lambda path: hashlib.sha256(path.read_bytes()).hexdigest()
    assert digest(first) == digest(second), "archive bytes changed when input mtimes changed"

print("deterministic archive test passed")
