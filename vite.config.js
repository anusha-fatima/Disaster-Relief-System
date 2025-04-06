import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: []
    }
  },
  optimizeDeps: {
    include: [
      'react-router-dom',
      'react',
      'react-dom',
      'react-intersection-observer',
      '@supabase/supabase-js',
      'sweetalert2',
      'sweetalert2-react-content'
    ]
  },
  base: '/'
})