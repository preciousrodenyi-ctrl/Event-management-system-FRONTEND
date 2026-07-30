import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  preview: {
    allowedHosts: [
      "event-management-system-frontend-1.onrender.com"
    ]
  }
})