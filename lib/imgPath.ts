// Returns the correct image path for the current environment.
// In production (GitHub Pages), prepends the /blackspowerfc basePath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function imgPath(src: string): string {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src;
  return `${basePath}${src}`;
}
