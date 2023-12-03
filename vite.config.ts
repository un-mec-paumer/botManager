import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv'

dotenv.config()
const { PORT } = process.env
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port:3000 || parseInt(PORT as string),
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': '*',
    },
  },
})
