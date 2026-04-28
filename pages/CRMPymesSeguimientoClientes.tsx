import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const CRMPymesSeguimientoClientes: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">CRM y seguimiento</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.92] mb-8">
              CRM para pymes y seguimiento de clientes sin tareas manuales
            </h1>
            <p className="text-lg text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              Ordenamos tu pipeline, activamos recordatorios y automatizamos secuencias para que cada
              oportunidad avance sin depender de memoria ni de perseguir tareas.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <h2 className="text-lg font-black uppercase tracking-wider mb-4">Que implementamos</h2>
              <ul className="text-sm text-slate-400 leading-relaxed space-y-3 list-disc pl-5">
                <li>Segmentacion por fase comercial y prioridad.</li>
                <li>Seguimiento automatico por inactividad y etapa.</li>
                <li>Alertas al equipo cuando hay senal de compra.</li>
                <li>Registro de interacciones en CRM sin doble carga manual.</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl border-white/10">
              <h2 className="text-lg font-black uppercase tracking-wider mb-4">Cuando suele aportar mas</h2>
              <ul className="text-sm text-slate-400 leading-relaxed space-y-3 list-disc pl-5">
                <li>Leads sin seguimiento por falta de tiempo.</li>
                <li>Embudo comercial repartido en WhatsApp y hojas sueltas.</li>
                <li>Reactivacion de cartera fria sin proceso definido.</li>
                <li>Baja visibilidad de conversion por etapa.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <a
              href="/contacto/"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
            >
              Analizamos donde estas perdiendo tiempo
              <ArrowRight className="w-4 h-4" />
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

export default CRMPymesSeguimientoClientes;
