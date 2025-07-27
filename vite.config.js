import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["uritisaiabhishek.dev", "www.uritisaiabhishek.dev"]
  }
})
