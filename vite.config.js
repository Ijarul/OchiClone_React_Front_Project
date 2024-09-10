import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/OchiClone_React_Front_Project/",
  plugins: [react()],
})
