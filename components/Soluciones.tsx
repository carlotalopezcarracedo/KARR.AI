import React from 'react';
import { ArrowRight } from 'lucide-react';

const pages = [
  { title: 'Automatizacion de procesos', desc: 'Tareas repetitivas que pueden funcionar solas.', href: '/automatizacion-procesos/' },
  { title: 'Empresas en Galicia', desc: 'Automatizacion e IA con foco local para pymes de servicios.', href: '/automatizacion-empresas-galicia/' },
  { title: 'WhatsApp automatizado', desc: 'Atencion y seguimiento sin estar pendiente del movil.', href: '/automatizacion-whatsapp-empresas/' },
  { title: 'CRM y seguimiento', desc: 'Recordatorios y reactivaciones sistematicas de clientes.', href: '/crm-pymes-seguimiento-clientes/' },
  { title: 'Automatizacion de clinicas', desc: 'Citas, recordatorios y comunicacion asistencial.', href: '/automatizacion-clinicas/' },
  { title: 'Servicios', desc: 'Vista completa de todas las soluciones activas de KAIRAS.', href: '/servicios/' },
];

const Soluciones: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-3">Areas de trabajo</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase leading-tight">
              Cada cuello de botella operativo
              <br className="hidden sm:block" /> tiene su propia solucion
            </h2>
          </div>
          <a
            href="/contacto/"
            className="text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-cyber-purple transition-colors whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            Diagnostico operativo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="glass-card p-6 rounded-2xl flex items-start justify-between gap-4 group hover:border-cyber-purple/30 transition-all border-white/5 hover:bg-white/5"
            >
              <div>
                <span className="block text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-white transition-colors">
                  {page.title}
                </span>
                <span className="text-xs text-slate-500">{page.desc}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
