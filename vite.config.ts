import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This line sets up the alias
    },
  },
  build: {
    outDir: 'dist', // Ensure this matches your deployment expectations
  },
});
