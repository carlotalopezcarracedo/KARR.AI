import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'IA para empresas', href: '/ia-empresas/' },
  { title: 'Automatización de WhatsApp', href: '/automatizacion-whatsapp-empresas/' },
  { title: 'Seguimiento de clientes', href: '/automatizacion-seguimiento-clientes/' },
];

const AutomatizacionProcesos: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="min-h-[100svh] px-6 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              Automatización de procesos
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Automatización de procesos para pymes que necesitan trabajar con menos carga manual
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Atención, presupuestos, seguimiento, avisos, registros. Hay tareas en tu negocio que pueden funcionar solas. El problema no es la tecnología. Es saber cuáles automatizar primero y cómo hacerlo sin romper lo que ya funciona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacto" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                Solicitar diagnóstico
              </a>
              <a href="/" className="glass-card inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase border-white/10 hover:border-cyber-purple/50 transition-all hover:bg-white/5">
                Volver al inicio
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">El problema</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Hacer todo a mano tiene un coste que casi nunca se mide
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  Cada tarea manual que se repite en tu empresa consume tiempo, genera errores y crea dependencias de personas concretas. Cuando alguien falta, el proceso se detiene. Cuando hay más volumen, la calidad cae.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  No es un problema de productividad individual. Es un problema de diseño de proceso. Y tiene solución concreta.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Datos duplicados entre herramientas', desc: 'El mismo dato se introduce en tres sitios distintos porque los sistemas no están conectados.' },
                  { title: 'Tiempo en gestiones sin valor directo', desc: 'Confirmaciones manuales, recordatorios en papel, exportaciones que se repiten cada semana.' },
                  { title: 'Procesos que dependen de la memoria de alguien', desc: 'Si no se acuerda nadie, no se hace. Así se pierden clientes, citas y oportunidades.' },
                  { title: 'Imposible escalar sin añadir más personal', desc: 'El volumen crece pero el tiempo no. Sin sistema, la única solución parece contratar más.' },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-8 rounded-3xl border-white/10 hover:bg-white/5 transition-all">
                    <h3 className="text-base font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What KAIRAS resolves */}
        <section className="py-32 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Qué puede funcionar solo</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight max-w-3xl">
              Las automatizaciones de mayor impacto en pymes de servicios
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-2xl leading-relaxed">
              No todo se puede automatizar. Ni todo se debe. Lo primero es identificar las tareas con más retorno y menos riesgo. Ahí empieza el trabajo.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Formularios conectados al CRM', desc: 'Cada nuevo lead o solicitud entra directamente en tu sistema sin que nadie lo introduzca a mano.' },
                { title: 'Presupuestos y propuestas automáticas', desc: 'El cliente rellena un formulario. El sistema genera el documento y lo envía en segundos.' },
                { title: 'Recordatorios y avisos por fecha', desc: 'Citas, vencimientos, revisiones. El sistema avisa sin que nadie lo gestione ni lo recuerde.' },
                { title: 'Confirmaciones y acuses de recibo', desc: 'Cada acción del cliente genera una respuesta automática contextualizada.' },
                { title: 'Registro automático de actividad', desc: 'Llamadas, emails, citas pasadas. Todo documentado sin intervención manual.' },
                { title: 'Notificaciones internas al equipo', desc: 'Cuando ocurre algo relevante, el equipo lo sabe sin que nadie lo comunique.' },
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 rounded-3xl flex flex-col gap-4 hover:bg-white/5 hover:-translate-y-1 transition-all border-white/10">
                  <h3 className="text-base font-bold uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How KAIRAS works */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Cómo trabajamos</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Primero el diagnóstico.<br />Después el sistema.
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  No llegamos con una herramienta ya decidida. Llegamos con preguntas. ¿Qué tareas consumen más tiempo? ¿Cuáles se repiten cada semana? ¿Cuáles dependen de que alguien esté disponible? A partir de ahí, diseñamos el sistema.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { n: '01', title: 'Diagnóstico operativo', desc: 'Mapeamos los flujos actuales e identificamos qué procesos tienen mayor retorno si se automatizan.' },
                  { n: '02', title: 'Diseño del flujo', desc: 'Definimos qué activa qué, qué pasa si algo falla y qué necesita siempre intervención humana.' },
                  { n: '03', title: 'Conexión de herramientas', desc: 'Conectamos las herramientas que ya usas. No añadimos complejidad innecesaria.' },
                  { n: '04', title: 'Prueba y ajuste', desc: 'Validamos con casos reales antes de dejar el sistema funcionando. Afinamos hasta que es fiable.' },
                ].map((step) => (
                  <div key={step.n} className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-mono text-cyber-purple tracking-widest">{step.n}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold uppercase tracking-wider mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="py-32 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Para quién tiene sentido</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-12 leading-tight max-w-2xl">
              Automatizar procesos funciona cuando...
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Tu equipo dedica más de dos horas semanales a tareas repetitivas que podrían funcionar solas.',
                'Hay pasos en tu flujo de trabajo que dependen de la memoria o disponibilidad de una persona.',
                'Usas varias herramientas sin conectar e introduces datos manualmente en cada una.',
                'Cuando aumenta el volumen, la calidad operativa cae porque el equipo no da abasto.',
                'Tienes claro el proceso, pero no el tiempo ni el conocimiento para automatizarlo.',
                'Necesitas escalar sin que el coste operativo escale en la misma proporción.',
              ].map((text, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-4 border-white/10 hover:bg-white/5 transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mt-2 shrink-0" />
                  <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8">Explora también</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map((page) => (
                <a key={page.href} href={page.href} className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                  <span className="text-sm font-bold uppercase tracking-wider">{page.title}</span>
                  <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
              Cuéntame qué haces a mano.<br />
              <span className="text-cyber-purple italic">Te digo qué puede funcionar solo.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-xl mx-auto">
              Un diagnóstico para identificar los procesos con mayor retorno si se automatizan en tu negocio. Sin compromiso.
            </p>
            <a href="/#contacto" className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-[110]">
        <a href={`mailto:${CONTACT_EMAIL}`} className="w-16 h-16 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center active:scale-95 transition-all" aria-label="Enviar email">
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default AutomatizacionProcesos;
