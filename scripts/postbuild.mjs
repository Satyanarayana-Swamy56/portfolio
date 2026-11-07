// Cleans files the Sites uploader refuses (hidden files and source maps) from
// the build output, and gives GitHub Pages an SPA fallback so deep links such
// as /work/freshfetch resolve to the app shell instead of a 404.
import { copyFileSync, existsSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist', import.meta.url))

function clean(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (name.startsWith('.') || name.endsWith('.map')) {
      rmSync(path, { recursive: true, force: true })
      continue
    }
    if (statSync(path).isDirectory()) clean(path)
  }
}

clean(dist)

const client = join(dist, 'client')
const index = join(client, 'index.html')
if (existsSync(index)) copyFileSync(index, join(client, '404.html'))
