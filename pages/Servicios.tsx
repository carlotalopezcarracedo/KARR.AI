import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const services = [
  {
    title: 'Automatizacion de procesos',
    desc: 'Identificamos tareas repetitivas y las dejamos funcionando con reglas claras y trazabilidad.',
    href: '/automatizacion-procesos/',
  },
  {
    title: 'Automatizacion para empresas en Galicia',
    desc: 'Acompanamiento cercano para pymes de servicios con foco operativo y ejecucion realista.',
    href: '/automatizacion-empresas-galicia/',
  },
  {
    title: 'Automatizacion de WhatsApp',
    desc: 'Respuestas, filtrado y seguimiento comercial sin perder cercania con el cliente.',
    href: '/automatizacion-whatsapp-empresas/',
  },
  {
    title: 'CRM y seguimiento de clientes',
    desc: 'Secuencias de seguimiento, reactivacion y visibilidad del pipeline para no perder oportunidades.',
    href: '/crm-pymes-seguimiento-clientes/',
  },
  {
    title: 'Automatizacion para clinicas',
    desc: 'Recordatorios, citas y seguimiento asistencial con menos carga administrativa diaria.',
    href: '/automatizacion-clinicas/',
  },
];

const Servicios: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="px-6 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">Servicios KAIRAS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.92] mb-8">
              Servicios de automatizacion para pymes
            </h1>
            <p className="text-lg text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              Disenamos sistemas de automatizacion e IA aplicada para pymes de servicios en Galicia.
              Empezamos por el cuello de botella que mas tiempo consume y construimos desde ahi.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="glass-card p-8 rounded-3xl border-white/10 hover:border-cyber-purple/30 hover:bg-white/5 transition-all group"
              >
                <h2 className="text-lg font-black uppercase tracking-wider mb-3 group-hover:text-cyber-purple transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyber-purple">
                  Ver servicio <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl border-white/10 text-center">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase mb-5">
              No sabes por cual empezar
            </h2>
            <p className="text-slate-400 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Revisamos tu caso y priorizamos la primera automatizacion con mayor impacto operativo.
            </p>
            <a
              href="/contacto/"
              className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
            >
              Cuentame que parte de tu negocio se esta atascando
            </a>
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

export default Servicios;
