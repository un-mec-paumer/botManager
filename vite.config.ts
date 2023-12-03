import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv'

dotenv.config()
const PORT = parseInt(process.env.PORT as string)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: PORT || 3000,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET POST',
      'Access-Control-Allow-Headers': '*',
    },
    
  },
})
