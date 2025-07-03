import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { join } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      ViteImageOptimizer({
        test: /\.(jpe?g|png|tiff|webp|svg|avif)$/i,
        jpeg: { quality: 80 },
        png: { quality: 80 },
        webp: { quality: 80 },
        avif: { quality: 80 },
        cache: true,
        cacheLocation: join(process.cwd(), 'node_modules/.cache/image-optimizer'),
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
      host: true,
      port: 5173,
      // allowedHosts: ['XXX.com'], // real domain
    },
  };
});
