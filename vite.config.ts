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
          servicios: path.resolve(__dirname, 'servicios/index.html'),
          contacto: path.resolve(__dirname, 'contacto/index.html'),
          automatizacionProcesos: path.resolve(__dirname, 'automatizacion-procesos/index.html'),
          automatizacionProcesosOld: path.resolve(__dirname, 'automatizacion-procesos-empresas/index.html'),
          iaEmpresas: path.resolve(__dirname, 'ia-empresas/index.html'),
          optimizacionOperativa: path.resolve(__dirname, 'optimizacion-operativa-pymes/index.html'),
          automatizacionWhatsApp: path.resolve(__dirname, 'automatizacion-whatsapp-empresas/index.html'),
          automatizacionSeguimiento: path.resolve(__dirname, 'automatizacion-seguimiento-clientes/index.html'),
          crmPymesSeguimientoClientes: path.resolve(__dirname, 'crm-pymes-seguimiento-clientes/index.html'),
          automatizacionClinicas: path.resolve(__dirname, 'automatizacion-clinicas/index.html'),
          galiciaNew: path.resolve(__dirname, 'automatizacion-empresas-galicia/index.html'),
          galicia: path.resolve(__dirname, 'automatizacion-ia-empresas-galicia/index.html'),
          blog: path.resolve(__dirname, 'blog/index.html'),
          blogPost1: path.resolve(__dirname, 'blog/automatizaciones-que-recuperan-tiempo-pymes/index.html'),
        },
      },
    },
  };
});
