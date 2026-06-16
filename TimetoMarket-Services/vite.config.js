import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TimetoMarket-Services/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor'
          }
          if (id.includes('node_modules/react-router-dom/')) {
            return 'router'
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'motion'
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
    sourcemap: false,
  },
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
    },
  },
})
