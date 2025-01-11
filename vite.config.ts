import react from "@vitejs/plugin-react-swc";
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/AnalyzeerExtension/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})