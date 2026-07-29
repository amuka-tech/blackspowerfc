// Returns the correct image path for the current environment.
// In production (GitHub Pages), prepends the /blackspowerfc basePath.
// NEXT_PUBLIC_ vars are inlined at build time into the client bundle,
// so this works correctly on both server and client-side navigation.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function imgPath(src: string): string {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src;
  // Avoid double-prefixing if already prefixed
  if (basePath && src.startsWith(basePath)) return src;
  return `${basePath}${src}`;
}
