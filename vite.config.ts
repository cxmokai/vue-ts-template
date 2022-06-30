import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: '',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
