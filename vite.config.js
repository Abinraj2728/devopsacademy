import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/devopsacademy/',
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: false, // <-- THIS FIXES THE CLIENTBOX BUILD ERROR
  },
})