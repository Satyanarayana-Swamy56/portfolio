import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// `vite build --mode pages` produces a plain static bundle for GitHub Pages:
// no Worker, and every asset written under the repository's base path.
export default defineConfig(({ mode }) => {
  const pages = mode === 'pages'
  return {
    base: pages ? (process.env.VITE_BASE || '/') : '/',
    plugins: [react(), tailwindcss(), ...(pages ? [] : [cloudflare()])],
    build: pages ? { outDir: 'dist/client' } : {},
    server: { port: 5173, strictPort: false },
  }
})
