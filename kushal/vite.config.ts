import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // relative asset paths, so the built site works inside any folder
  // (GitHub Pages serves it at /testing1/kushal/, not at the domain root)
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
})
