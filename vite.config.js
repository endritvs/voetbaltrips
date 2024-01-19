import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import path from 'path'; // Import the 'path' module

export default defineConfig({
  plugins: [
    Vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
