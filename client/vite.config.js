import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Components': path.resolve(__dirname, 'src/componenents'),
      '@Pages': path.resolve(__dirname, 'src/pages')
    }
  }
})
