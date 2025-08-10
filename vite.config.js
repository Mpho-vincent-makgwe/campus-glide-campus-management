import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      config: true // This tells Vite to look for postcss.config.js
    }
  }
});