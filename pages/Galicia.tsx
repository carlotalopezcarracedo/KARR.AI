import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'Automatización de procesos', href: '/automatizacion-procesos-empresas/' },
  { title: 'IA para empresas', href: '/ia-empresas/' },
  { title: 'Optimización operativa', href: '/optimizacion-operativa-pymes/' },
];

const Galicia: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-purple/8 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              Galicia
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.92] mb-8 max-w-5xl">
              Automatización e IA para empresas en Galicia
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mb-12 leading-relaxed">
              KAIRAS trabaja con pymes y negocios de servicios en Galicia para reducir carga operativa, ordenar procesos y aplicar IA donde tiene sentido real. Trabajo en remoto y presencial en toda la comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contacto" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                Solicitar diagnóstico
              </a>
              <a href="/" className="glass-card inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase border-white/10 hover:border-cyber-purple/50 transition-all hover:bg-white/5">
                Volver al inicio
              </a>
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">El contexto local</p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Por qué la automatización importa especialmente en pymes gallegas
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  Galicia tiene una estructura empresarial muy particular: alta proporción de autónomos y equipos pequeños en sectores de servicios. Negocios con mucho volumen operativo y pocos recursos para invertir en soluciones genéricas grandes.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  La automatización aquí no es una inversión en tecnología por tendencia. Es una ventaja competitiva real para negocios que necesitan trabajar con más orden, menos carga y mayor consistencia sin crecer proporcionalmente en personal.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border-white/5">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Lo que diferencia a KAIRAS en Galicia</p>
                <div className="space-y-6">
                  {[
                    'Conozco el tejido empresarial gallego: sus sectores, sus ritmos y sus restricciones reales.',
                    'Trabajo en remoto y presencialmente en toda la comunidad según lo que tiene más sentido.',
                    'No vendo soluciones estándar. Cada implementación parte del negocio concreto.',
                    'El objetivo siempre es que el sistema funcione de forma autónoma, no que dependas de mí.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mt-2 shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Sectores prioritarios</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight max-w-3xl">
              Los sectores de servicios en Galicia que más se benefician
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-2xl leading-relaxed">
              Cualquier negocio de servicios con procesos repetitivos, atención a clientes y gestión administrativa tiene margen de mejora. Estos son los sectores donde el impacto es más directo.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Clínicas y consultas',
                  desc: 'Gestión de citas, recordatorios a pacientes, seguimiento post-consulta y comunicación automatizada. Menos tiempo en teléfono, más tiempo en atención.',
                },
                {
                  title: 'Inmobiliarias y gestorías',
                  desc: 'Atención a leads por WhatsApp, filtrado de consultas, generación de documentación y seguimiento de operaciones abiertas.',
                },
                {
                  title: 'Agencias y consultoras',
                  desc: 'Generación automatizada de presupuestos, seguimiento de propuestas, onboarding de nuevos clientes y reporting periódico.',
                },
                {
                  title: 'Centros de formación y coaching',
                  desc: 'Gestión de inscripciones, recordatorios de sesiones, seguimiento de alumnos y comunicaciones automatizadas.',
                },
                {
                  title: 'Comercio y hostelería',
                  desc: 'Reservas, confirmaciones, reactivación de clientes fríos, gestión de pedidos y avisos operativos al equipo.',
                },
                {
                  title: 'Profesionales independientes',
                  desc: 'Autónomos con alta carga administrativa que necesitan orden y automatización sin complejidad técnica ni grandes inversiones.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 rounded-3xl border-white/5 hover:bg-white/5 transition-all">
                  <h3 className="text-base font-bold uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Presence */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Presencia en Galicia</p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Remoto y presencial en toda la comunidad
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  La mayor parte del trabajo es en remoto: diagnóstico, diseño, implementación y seguimiento se pueden hacer con la misma calidad sin necesidad de presencia física. Para quien prefiere el trato cara a cara, trabajo con negocios en toda Galicia.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  No hay costes adicionales por ubicación. El valor del trabajo no depende de los kilómetros.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'A Coruña',
                  'Vigo',
                  'Santiago de Compostela',
                  'Pontevedra',
                  'Ferrol',
                  'Ourense',
                  'Lugo',
                  'Toda Galicia',
                ].map((city) => (
                  <div key={city} className="glass-card p-5 rounded-2xl border-white/5 text-center">
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-300">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How KAIRAS works */}
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Cómo trabajamos</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-12 leading-tight max-w-2xl">
              Un diagnóstico para entender tu negocio concreto
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { n: '01', title: 'Primera conversación', desc: 'Entendemos tu negocio, tu operativa actual y dónde está el mayor coste o fricción.' },
                { n: '02', title: 'Diagnóstico operativo', desc: 'Mapeamos los procesos, identificamos los cuellos de botella y definimos qué tiene más impacto si mejora.' },
                { n: '03', title: 'Propuesta a medida', desc: 'Sin plantillas. La solución se diseña para tu negocio concreto, tu equipo y tus herramientas.' },
                { n: '04', title: 'Implementación y acompañamiento', desc: 'Ponemos en marcha la solución y hacemos seguimiento hasta que funciona de forma autónoma.' },
              ].map((step) => (
                <div key={step.n} className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-cyber-purple tracking-widest">{step.n}</span>
                  <h3 className="text-base font-bold uppercase tracking-wider">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
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
                <a key={page.href} href={page.href} className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 transition-all border-white/5">
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
              Habla conmigo<br />
              <span className="text-cyber-purple italic">sobre tu negocio en Galicia.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-xl mx-auto">
              Diagnóstico sin compromiso para entender dónde está la mayor oportunidad de mejora en tu operativa.
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

export default Galicia;
