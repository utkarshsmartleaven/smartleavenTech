import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // output directory for the build
    assetsDir: 'assets',  // directory for static assets within dist
  },
  base: './',  // ensures assets use relative paths
})
