#!/usr/bin/env bash
# Stamps every asset link with a fresh version so browsers refetch, then commits + pushes.
# Usage: ./deploy.sh "commit message"
set -e
cd "$(dirname "$0")"
STAMP=$(date +%s)
sed -i -E "s/(\?v=)[0-9a-z]+/\1$STAMP/g" index.html
sed -i -E "s/version: \"[0-9a-z]+\"/version: \"$STAMP\"/" config.js
git add -A
git commit -q -m "${1:-update}" || true
git push origin HEAD:main
echo "deployed with stamp $STAMP"
