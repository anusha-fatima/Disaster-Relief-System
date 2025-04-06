import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Remove 'react-router-dom' from external dependencies
        'react-intersection-observer',
        'sweetalert2',
        'sweetalert2-react-content',
        '@supabase/supabase-js'
      ]
    }
  },
  optimizeDeps: {
    include: [
      'react-router-dom',
      'react',
      'react-dom'
    ]
  },
  base: '/', // Ensure base URL is set
})


