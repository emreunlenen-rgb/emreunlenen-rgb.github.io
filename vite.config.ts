import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages kullanıcı sitesi: https://emreunlenen-rgb.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
