import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-serve-json',
      closeBundle() {
        copyFileSync('serve.json', 'dist/serve.json')
      },
    },
  ],
})
