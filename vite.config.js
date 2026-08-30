import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // base: '/react-cicd-learning/', // Setting when CI/CD with GitHub Pages
  base: '/', // Setting when CI/CD with Jenkins and Netlify or any other platforms
  plugins: [react()],
})
