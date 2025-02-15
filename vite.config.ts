import react from "@vitejs/plugin-react-swc";
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/explainer-web/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  publicDir: 'public',
  assetsInclude: ['**/*.xpi'],
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
