import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/',
    appType: 'mpa',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    optimizeDeps: {
      include: ['lucide-react'],
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          automatizacionProcesos: path.resolve(__dirname, 'automatizacion-procesos-empresas/index.html'),
          iaEmpresas: path.resolve(__dirname, 'ia-empresas/index.html'),
          optimizacionOperativa: path.resolve(__dirname, 'optimizacion-operativa-pymes/index.html'),
          automatizacionWhatsApp: path.resolve(__dirname, 'automatizacion-whatsapp-empresas/index.html'),
          automatizacionSeguimiento: path.resolve(__dirname, 'automatizacion-seguimiento-clientes/index.html'),
          galicia: path.resolve(__dirname, 'automatizacion-ia-empresas-galicia/index.html'),
        },
      },
    },
  };
});