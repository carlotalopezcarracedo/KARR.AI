import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'Automatización de procesos', href: '/automatizacion-procesos-empresas/' },
  { title: 'Optimización operativa', href: '/optimizacion-operativa-pymes/' },
  { title: 'Automatización de WhatsApp', href: '/automatizacion-whatsapp-empresas/' },
];

const IAEmpresas: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyber-purple/8 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              IA para empresas
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.92] mb-8 max-w-5xl">
              IA para empresas aplicada a procesos reales
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mb-12 leading-relaxed">
              No hace falta entender de tecnología para usar IA bien. Hace falta saber qué problema concreto quieres resolver. Ahí empieza el trabajo útil. Sin hype, sin proyectos interminables.
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

        {/* Problem */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">El problema</p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Hay demasiada IA que no hace nada útil en tu negocio
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  Demos impresionantes. Proyectos piloto de seis meses. Consultorías que generan informes pero no tocan tu operativa. Herramientas genéricas que no encajan en tu flujo real.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  La IA es útil cuando resuelve algo concreto: clasificar un lead, responder una duda frecuente, resumir una reunión, analizar datos que ya tienes. Cuando parte de un problema específico, no de una tecnología.
                </p>
              </div>
              <div className="glass-card p-10 rounded-3xl border-white/5">
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Lo que sí funciona</p>
                <div className="space-y-6">
                  {[
                    'IA entrenada con el conocimiento propio de tu negocio, no respuestas genéricas.',
                    'Automatización que parte de un proceso ya definido, no de una herramienta buscando uso.',
                    'Implementaciones en semanas, no proyectos de seis meses sin entregable claro.',
                    'Métricas concretas: tiempo ahorrado, leads atendidos, errores reducidos.',
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

        {/* Concrete applications */}
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Aplicaciones concretas</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight max-w-3xl">
              Dónde aplica IA de forma concreta
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-2xl leading-relaxed">
              Cada aplicación parte de un problema operativo real, no de una capacidad tecnológica que busca un hueco donde encajar.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Atención al cliente automatizada',
                  desc: 'Asistente entrenado con tu información: servicios, precios, procedimientos, preguntas frecuentes. Responde con tu tono, con tu criterio. Disponible en WhatsApp, web o email.',
                },
                {
                  title: 'Clasificación y filtrado de leads',
                  desc: 'Define qué hace un lead ideal y el sistema clasifica automáticamente cada nueva solicitud: listo para contactar, necesita más información, fuera de perfil.',
                },
                {
                  title: 'Procesamiento de documentos',
                  desc: 'Facturas, formularios, emails, contratos. La IA extrae los datos relevantes y los registra donde corresponde sin intervención manual.',
                },
                {
                  title: 'Resumen de reuniones y llamadas',
                  desc: 'Tras una llamada o reunión, el sistema genera automáticamente un resumen con los puntos clave y los pasos siguientes acordados.',
                },
                {
                  title: 'Análisis de datos internos',
                  desc: 'Datos que ya tienes dispersos en hojas de cálculo, CRM o herramientas de gestión. La IA cruza, detecta patrones y genera alertas cuando algo merece atención.',
                },
                {
                  title: 'Asistencia en redacción operativa',
                  desc: 'Borradores de propuestas, respuestas a clientes, actualizaciones de estado. La IA genera la base, el equipo revisa y envía. Menos tiempo de escritura, misma calidad.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 rounded-3xl border-white/5 hover:bg-white/5 transition-all">
                  <h3 className="text-base font-bold uppercase tracking-wider mb-4">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How KAIRAS works */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Cómo trabajamos</p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  El problema primero.<br />La herramienta después.
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  No llegamos con una tecnología ya decidida buscando dónde aplicarla. Llegamos a entender qué frena tu negocio. A partir de ahí elegimos si la IA tiene sentido, dónde y cómo.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  A veces la respuesta es automatización pura. A veces es IA. A veces es simplemente ordenar el proceso antes de automatizar nada.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { n: '01', title: 'Diagnóstico del problema', desc: 'Identificamos qué consumes más tiempo, qué genera más errores y qué tiene mayor impacto si mejora.' },
                  { n: '02', title: 'Selección de la solución', desc: 'Decidimos si la IA es la respuesta correcta, qué modelo o herramienta encaja y cómo se integra.' },
                  { n: '03', title: 'Entrenamiento con tu contexto', desc: 'La IA se configura con tu información: servicios, criterios, tono, casos habituales.' },
                  { n: '04', title: 'Validación y puesta en marcha', desc: 'Probamos con casos reales antes de desplegar. Ajustamos hasta que el comportamiento es el correcto.' },
                ].map((step) => (
                  <div key={step.n} className="flex gap-6 items-start">
                    <span className="text-[10px] font-mono text-cyber-purple tracking-widest pt-1 w-8 shrink-0">{step.n}</span>
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
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Para quién tiene sentido</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-12 leading-tight max-w-2xl">
              La IA aplicada es útil cuando...
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Tu equipo dedica horas a responder las mismas preguntas de clientes una y otra vez.',
                'Recibes muchas consultas de personas que no encajan en tu perfil de cliente y nadie las filtra.',
                'Tienes información dispersa en documentos, emails o sistemas que nadie cruza ni analiza.',
                'El equipo hace tareas de redacción o síntesis repetitivas que no requieren juicio creativo.',
                'Quieres usar IA en tu negocio pero no sabes por dónde empezar ni qué tiene sentido aplicar.',
                'Has probado herramientas genéricas de IA y ninguna se adapta bien a tu contexto concreto.',
              ].map((text, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-4 border-white/5">
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
              Sin hype.<br />
              <span className="text-cyber-purple italic">Solo lo que funciona en tu negocio.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-xl mx-auto">
              Cuéntame qué frena tu operativa y evaluamos juntos si la IA tiene sentido, dónde y cómo implementarla.
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

export default IAEmpresas;
