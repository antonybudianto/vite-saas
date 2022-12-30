/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),

    /**
     * Enable SW here
     */
    // import { VitePWA } from 'vite-plugin-pwa';
    // VitePWA({
    //   registerType: 'prompt',
    //   workbox: {
    //     navigateFallbackDenylist: [/^\/__\//, /^\/__unsw\.html$/],
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf}'],
    //   },
    // }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
