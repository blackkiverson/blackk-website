#!/usr/bin/env bash
# Converts every PNG/JPG in public/images to WebP, capped at 1600px wide, then
# moves the original out of public/ so it is not shipped in the build.
# Originals land in assets-src/ (kept in the repo, never deployed).
# Safe to re-run. Requires cwebp:  brew install webp
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIR="$ROOT/public/images"
KEEP="$ROOT/assets-src"
MAXW=1600
QUALITY=82

command -v cwebp >/dev/null || { echo "cwebp not found. Run: brew install webp"; exit 1; }
mkdir -p "$KEEP"

before=0; after=0; n=0
shopt -s nullglob nocaseglob
for f in "$DIR"/*.png "$DIR"/*.jpg "$DIR"/*.jpeg; do
  base="${f%.*}"; out="$base.webp"; name="$(basename "$out")"

  w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/{print $2}')
  if [ -n "${w:-}" ] && [ "$w" -gt "$MAXW" ]; then
    cwebp -quiet -q "$QUALITY" -resize "$MAXW" 0 "$f" -o "$out"
  else
    cwebp -quiet -q "$QUALITY" "$f" -o "$out"
  fi

  if [ ! -s "$out" ]; then echo "FAILED  $name (leaving original in place)"; continue; fi

  b=$(wc -c < "$f"); a=$(wc -c < "$out")
  before=$((before+b)); after=$((after+a)); n=$((n+1))
  printf "%-28s %7dK -> %5dK  (%d%%)\n" "$name" $((b/1024)) $((a/1024)) $((100*a/b))
  mv "$f" "$KEEP/"
done

if [ "$n" -gt 0 ]; then
  echo "---------------------------------------------------"
  printf "%d images: %dK -> %dK, saved %dK (%d%%)\n" \
    "$n" $((before/1024)) $((after/1024)) $(((before-after)/1024)) $((100-100*after/before))
  echo "Originals moved to assets-src/ (not deployed)."
else
  echo "Nothing to convert."
fi
