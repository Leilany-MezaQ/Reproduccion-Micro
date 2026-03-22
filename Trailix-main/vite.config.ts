/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      manifest: {
        name: 'Trailix',
        short_name: 'Trailix',
        description:
          'Tu dosis diaria de cine. Explora y descubre los últimos trailers de películas y series en un solo lugar.',
        start_url: '/',
        display: 'minimal-ui',
        theme_color: '#ffffff',
        icons: [
          {
            sizes: '192x192',
            src: 'https://bhxjicxiqcykhomkpmpb.supabase.co/storage/v1/object/public/assets/android-chrome-192x192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: 'https://bhxjicxiqcykhomkpmpb.supabase.co/storage/v1/object/public/assets/android-chrome-512x512.png',
            type: 'image/png',
          },
          {
            sizes: '180x180',
            src: 'https://bhxjicxiqcykhomkpmpb.supabase.co/storage/v1/object/public/assets/apple-touch-icon-180x180.png',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
