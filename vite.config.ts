import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '192.168.1.100',
      'a4c7834c-37b3-4a03-acf0-699af67c4e3f-00-1uwdzz6z2cnsp.riker.replit.dev'
    ]
  },
  plugins: [react()],
});
