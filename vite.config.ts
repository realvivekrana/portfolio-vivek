import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Raise warning limit while we optimize chunks
    chunkSizeWarningLimit: 600,
    
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — separate chunk
          'vendor-react': [
            'react',
            'react-dom',
            'react-router-dom',
            '@tanstack/react-query'
          ],
          
          // Three.js — biggest library, own chunk
          'vendor-three': [
            'three',
            '@react-three/fiber',
            '@react-three/drei'
          ],
          
          // Animation libraries — own chunk
          'vendor-animation': [
            'framer-motion',
            'gsap'
          ],
          
          // UI components — own chunk
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-toast',
            '@radix-ui/react-slot',
            '@radix-ui/react-label'
          ],
          
          // Form libraries — own chunk
          'vendor-form': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ],
        },
      },
    },
  },
}));
