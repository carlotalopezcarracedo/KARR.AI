import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'Empresas en Galicia', href: '/automatizacion-empresas-galicia/' },
  { title: 'Automatizacion de WhatsApp', href: '/automatizacion-whatsapp-empresas/' },
  { title: 'CRM y seguimiento', href: '/crm-pymes-seguimiento-clientes/' },
];

const AutomatizacionProcesos: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="min-h-[85svh] px-6 pt-32 pb-20 relative overflow-hidden flex items-center">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">
                KAIRAS
              </a>
              <span className="mx-2 opacity-40">/</span>
              Automatizacion de procesos
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Automatización de procesos para pymes: deja de repetir lo que ya puede ir solo
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-4 leading-relaxed">
              Identificamos qué procesos de tu negocio merecen automatizarse y los montamos para que funcionen
              sin tu intervención constante.
            </p>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Y el resultado es lo que KAIRAS viene a ordenar: menos tareas manuales y más tiempo para lo importante.
            </p>
            <a
              href="/contacto/"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
            >
              Analizamos dónde estás perdiendo tiempo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
              Automatización de procesos para pymes: qué tareas conviene ordenar primero
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-3xl border-white/10">
                <h3 className="text-base font-bold uppercase tracking-wider mb-3">Seguimiento comercial</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Recordatorios y secuencias para leads inactivos, propuestas pendientes y reactivaciones.
                  Sin que nadie tenga que acordarse ni ejecutar cada paso a mano.
                </p>
              </div>
              <div className="glass-card p-8 rounded-3xl border-white/10">
                <h3 className="text-base font-bold uppercase tracking-wider mb-3">Atencion y respuesta inicial</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Respuestas tempranas a consultas frecuentes, filtrado de mensajes y derivacion al equipo
                  cuando hace falta criterio humano.
                </p>
              </div>
              <div className="glass-card p-8 rounded-3xl border-white/10">
                <h3 className="text-base font-bold uppercase tracking-wider mb-3">Agenda y citas</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Confirmaciones y recordatorios automaticos para reducir no-shows y evitar seguimiento manual.
                </p>
              </div>
              <div className="glass-card p-8 rounded-3xl border-white/10">
                <h3 className="text-base font-bold uppercase tracking-wider mb-3">Datos y coordinacion interna</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Registro en CRM, notificaciones internas y trazabilidad de tareas para que el equipo trabaje
                  con contexto y menos interrupciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <h2 className="text-2xl font-black tracking-tighter uppercase mb-4">Como trabajamos</h2>
              <ul className="text-sm text-slate-400 leading-relaxed space-y-3 list-disc pl-5">
                <li>Diagnostico operativo para detectar donde se pierde mas tiempo.</li>
                <li>Priorizacion por impacto y facilidad de implantacion.</li>
                <li>Configuracion del flujo con tus herramientas actuales.</li>
                <li>Pruebas y seguimiento para ajustar antes de escalar.</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <h2 className="text-2xl font-black tracking-tighter uppercase mb-4">Siguiente paso</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Si hoy tienes procesos manuales que se repiten cada semana, podemos priorizar el primero
                que conviene automatizar y definir un plan de ejecucion realista.
              </p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.18em] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Analizamos dónde estás perdiendo tiempo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8">Explora tambien</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map((page) => (
                <a
                  key={page.href}
                  href={page.href}
                  className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">{page.title}</span>
                  <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-[110]">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center active:scale-95 transition-all"
          aria-label="Enviar email"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default AutomatizacionProcesos;
