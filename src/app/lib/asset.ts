// Public files are served from the deployment base: '/' locally and
// '/<repository>/' on GitHub Pages. Vite rewrites imports and HTML references,
// but not paths that are built at runtime from data files.
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
