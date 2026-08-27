import fs from 'node:fs';
import path from 'node:path';

const DIR = path.resolve('public/images');

/** Preferred first: a WebP wins over the PNG it was generated from. */
const EXTENSIONS = ['.webp', '.avif', '.png', '.jpg', '.jpeg'];

/** A PNG is only usable if it ends with the IEND chunk. Truncated downloads
 *  otherwise sail through a size check and then fail at build time. */
function intact(file: string): boolean {
  const size = fs.statSync(file).size;
  if (size < 2000) return false;
  if (!file.endsWith('.png')) return true;
  const buf = Buffer.alloc(8);
  const fd = fs.openSync(file, 'r');
  try {
    fs.readSync(fd, buf, 0, 8, size - 8);
  } finally {
    fs.closeSync(fd);
  }
  return buf.toString('hex') === '49454e44ae426082';
}

/**
 * Resolves a bare image name ("axe-cover") to a public URL, trying each known
 * extension in preference order. Returns null when nothing usable is present,
 * which lets a component fall back to a designed placeholder rather than
 * rendering a broken image.
 *
 * Callers pass names without an extension so that running
 * `scripts/optimise-images.sh` swaps every PNG for a WebP with no code change.
 */
export function resolveImage(name?: string): string | null {
  if (!name) return null;
  const base = name.replace(/\.(webp|avif|png|jpe?g)$/i, '');
  for (const ext of EXTENSIONS) {
    const file = path.join(DIR, base + ext);
    try {
      if (intact(file)) return `/images/${base}${ext}`;
    } catch {
      // Missing file, try the next extension.
    }
  }
  return null;
}

export function hasImage(name?: string): boolean {
  return resolveImage(name) !== null;
}
