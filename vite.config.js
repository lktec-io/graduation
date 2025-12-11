import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // <<< important! relative paths kwa production
  server: {
    port: 5174
  }
})
