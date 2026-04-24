import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import AutomatizacionProcesos from './AutomatizacionProcesos';
import IAEmpresas from './IAEmpresas';
import OptimizacionOperativa from './OptimizacionOperativa';
import AutomatizacionWhatsApp from './AutomatizacionWhatsApp';
import AutomatizacionSeguimiento from './AutomatizacionSeguimiento';
import Galicia from './Galicia';

const pageMap: Record<string, React.FC> = {
  'automatizacion-procesos-empresas': AutomatizacionProcesos,
  'ia-empresas': IAEmpresas,
  'optimizacion-operativa-pymes': OptimizacionOperativa,
  'automatizacion-whatsapp-empresas': AutomatizacionWhatsApp,
  'automatizacion-seguimiento-clientes': AutomatizacionSeguimiento,
  'automatizacion-ia-empresas-galicia': Galicia,
};

const rootEl = document.getElementById('root')!;
const pageName = rootEl.dataset.page ?? '';
const Page = pageMap[pageName] ?? null;

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    {Page ? <Page /> : null}
  </React.StrictMode>
);
