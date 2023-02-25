import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Pages': path.resolve[__dirname, '/src/pages'],
      '@Components': path.resolve[__dirname, '/src/componenents'],
      '@Assets': path.resolve[__dirname, '/src/assets']
    }
  }
})
