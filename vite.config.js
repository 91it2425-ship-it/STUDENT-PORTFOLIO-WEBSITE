import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@styles': resolve(__dirname, './src/styles'),
      '@assets': resolve(__dirname, './src/assets'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },

  server: {
    port: 5173,
    strictPort: false,
    open: true,
    cors: true,
    // HMR for fast development
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },

  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    
    // Optimized build for performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // Rollup options for code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `fonts/[name]-[hash][extname]`
          } else if (ext === 'css') {
            return `css/[name]-[hash][extname]`
          }
          return `[name]-[hash][extname]`
        },
      },
    },

    // Performance optimization
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
  },

  // Optimization options
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },

  // Environment variables
  define: {
    __VITE_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },

  // CSS configuration
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },

  // Logging
  logLevel: 'info',
})
