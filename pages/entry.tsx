import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import AutomatizacionProcesos from './AutomatizacionProcesos';
import IAEmpresas from './IAEmpresas';
import OptimizacionOperativa from './OptimizacionOperativa';
import AutomatizacionWhatsApp from './AutomatizacionWhatsApp';
import AutomatizacionSeguimiento from './AutomatizacionSeguimiento';
import Galicia from './Galicia';
import Blog from './Blog';
import BlogPost1 from './BlogPost1';
import Servicios from './Servicios';
import ContactoPage from './ContactoPage';
import CRMPymesSeguimientoClientes from './CRMPymesSeguimientoClientes';
import AutomatizacionClinicas from './AutomatizacionClinicas';

const pageMap: Record<string, React.FC> = {
  servicios: Servicios,
  contacto: ContactoPage,
  'automatizacion-procesos': AutomatizacionProcesos,
  'automatizacion-procesos-empresas': AutomatizacionProcesos,
  'ia-empresas': IAEmpresas,
  'optimizacion-operativa-pymes': OptimizacionOperativa,
  'automatizacion-whatsapp-empresas': AutomatizacionWhatsApp,
  'automatizacion-seguimiento-clientes': AutomatizacionSeguimiento,
  'crm-pymes-seguimiento-clientes': CRMPymesSeguimientoClientes,
  'automatizacion-clinicas': AutomatizacionClinicas,
  'automatizacion-empresas-galicia': Galicia,
  'automatizacion-ia-empresas-galicia': Galicia,
  'blog': Blog,
  'blog-post-1': BlogPost1,
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
