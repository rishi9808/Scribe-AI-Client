import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//change port to 8080

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        dir: "../src/main/resources/static",
      }
    }
  }

})
