import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 9101,
    proxy: {
      '/': {
        target: 'https://github.com',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\//, '')
        },
      }
    }
  },
})
