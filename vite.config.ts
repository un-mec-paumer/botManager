import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    port: Number(process.env.PORT) || 3000,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET POST',
      'Access-Control-Allow-Headers': '*',
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        profil: path.resolve(__dirname, "profil.html"),
        contact: path.resolve(__dirname, "contact.html"),
        signIn: path.resolve(__dirname, "signIn.html"),
      },
    },
  },
  
})
