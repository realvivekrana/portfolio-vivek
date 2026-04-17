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
    chunkSizeWarningLimit: 700,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core - MUST stay together
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/scheduler')) {
            return 'vendor-react';
          }
          
          // React Router
          if (id.includes('node_modules/react-router')) {
            return 'vendor-react';
          }
          
          // Three.js
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }
          
          // React Three Fiber + Drei
          if (id.includes('node_modules/@react-three')) {
            return 'vendor-r3f';
          }
          
          // Framer Motion
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer';
          }
          
          // All other node_modules
          if (id.includes('node_modules/')) {
            return 'vendor-misc';
          }
        },
        
        // Clean filenames
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Fonts → own folder
          if (/\.(woff2?|ttf|eot)$/.test(assetInfo.name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          // Images → own folder
          if (/\.(png|jpe?g|webp|gif|svg)$/.test(assetInfo.name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          // CSS
          if (/\.css$/.test(assetInfo.name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
    exclude: [],
  },
}));
