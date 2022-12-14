import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  plugins: [vue()],
})
