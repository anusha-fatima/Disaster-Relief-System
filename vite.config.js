import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: []
    }
  },
  optimizeDeps: {
    include: [
      'react-intersection-observer',
      'sweetalert2',
      'sweetalert2-react-content',
      '@supabase/supabase-js',
      'react-router-dom',
      'react',
      'react-dom'
    ]
  },
  base: '/', 
})
