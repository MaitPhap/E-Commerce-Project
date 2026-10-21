import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://e-commerce-project-ten-indol.vercel.app/'
        // target: 'http://localhost:3000'
      },
      '/images': {
        target: 'https://e-commerce-project-ten-indol.vercel.app/'
      }
    }
  }
})
