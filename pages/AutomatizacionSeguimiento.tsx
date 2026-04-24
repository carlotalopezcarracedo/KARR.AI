import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'Automatización de WhatsApp', href: '/automatizacion-whatsapp-empresas/' },
  { title: 'Automatización de procesos', href: '/automatizacion-procesos-empresas/' },
  { title: 'IA para empresas', href: '/ia-empresas/' },
];

const AutomatizacionSeguimiento: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="min-h-[100svh] px-6 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyber-purple/10 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              Seguimiento de clientes
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Automatización del seguimiento de clientes para no perder oportunidades
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              La mayoría de clientes no se pierden por el precio. Se pierden porque nadie hizo seguimiento a tiempo. Un mensaje, un recordatorio, una propuesta actualizada. Cosas simples que se olvidan cuando hay volumen.
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
                  Por qué falla el seguimiento cuando hay volumen
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  El seguimiento manual funciona cuando hay poco volumen y mucho tiempo. Cuando ninguna de las dos condiciones se cumple, el seguimiento es lo primero que se sacrifica.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  No es falta de interés ni mala gestión. Es un problema estructural: si el proceso de seguimiento depende de la memoria y la disponibilidad de una persona, es un proceso frágil.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Los leads que no cierran enseguida entran en el olvido', desc: 'Si no hay acción en las primeras 48 horas, el lead se queda en una lista que nadie visita.' },
                  { title: 'No hay proceso: cada persona sigue como puede', desc: 'Unos usan notas, otros recordatorios, otros nada. La consistencia no existe.' },
                  { title: 'La reactivación de clientes fríos no ocurre', desc: 'Clientes que dejaron de comprar hace meses podrían volver con un mensaje correcto en el momento correcto. Nadie lo hace.' },
                  { title: 'El equipo hace seguimiento de lo urgente, no de lo importante', desc: 'Solo se reactiva quien llama o escribe. Los silenciosos se pierden sin que nadie los haya contactado.' },
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

        {/* What KAIRAS automates */}
        <section className="py-32 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Qué automatizamos</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight max-w-3xl">
              El ciclo completo de seguimiento sin intervención manual constante
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-2xl leading-relaxed">
              El objetivo no es sustituir el criterio humano. Es garantizar que ningún contacto se pierda por descuido, volumen o falta de tiempo.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Seguimiento post-primer contacto', desc: 'Tras una consulta o reunión, el sistema activa automáticamente una secuencia de mensajes o recordatorios en los plazos que definas.' },
                { title: 'Recordatorios por inactividad', desc: 'Si un lead lleva X días sin responder, el sistema avisa al equipo o envía un mensaje de seguimiento directo.' },
                { title: 'Reactivación de clientes fríos', desc: 'Contactos que no han comprado en meses reciben mensajes relevantes en el momento adecuado, sin que nadie lo tenga que programar.' },
                { title: 'Secuencias de nurturing', desc: 'Para leads que no están listos todavía, el sistema mantiene el contacto con contenido útil hasta que el momento llega.' },
                { title: 'Notificaciones al equipo con contexto', desc: 'Cuando es momento de intervención humana, el equipo recibe una alerta con todo el historial del contacto.' },
                { title: 'Registro de cada interacción', desc: 'Cada mensaje enviado, abierto o respondido queda registrado. El historial del cliente siempre está completo.' },
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
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Cómo lo implementamos</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Un sistema que trabaja en paralelo a tu equipo
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  Lo primero es entender tu ciclo de cliente real: desde el primer contacto hasta la compra, y desde la compra hasta la renovación o reactivación.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  A partir de ese mapa, definimos qué parte puede funcionar automáticamente y qué necesita siempre la intervención de una persona.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { n: '01', title: 'Mapa del ciclo de cliente', desc: 'Definimos los estados por los que pasa un lead: primer contacto, evaluación, propuesta, seguimiento, cierre, postventa.' },
                  { n: '02', title: 'Identificación de puntos críticos', desc: 'Dónde se pierden más oportunidades, qué plazos tienen más impacto y qué acciones generan más respuesta.' },
                  { n: '03', title: 'Diseño de secuencias y criterios', desc: 'Qué mensaje, en qué momento, por qué canal y con qué criterio de activación.' },
                  { n: '04', title: 'Conexión con tu CRM y canales', desc: 'Integramos con las herramientas que ya usas: CRM, email, WhatsApp, calendario.' },
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
              Automatizar el seguimiento funciona cuando...
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Tienes un ciclo de venta que requiere más de un contacto antes de cerrar.',
                'El equipo no puede dedicar tiempo consistente al seguimiento porque hay otras prioridades.',
                'Hay leads que se pierden en silencio sin que nadie los haya vuelto a contactar.',
                'Tienes clientes inactivos que podrían volver pero nadie los ha contactado desde que dejaron de comprar.',
                'El seguimiento depende de la memoria o los hábitos de cada persona del equipo.',
                'Quieres saber en qué estado está cada lead sin tener que preguntar al equipo.',
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
              Ningún cliente se pierde<br />
              <span className="text-cyber-purple italic">por falta de seguimiento.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-xl mx-auto">
              Cuéntame cómo funciona tu ciclo de cliente hoy y te digo qué parte puede garantizar el sistema de forma automática.
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

export default AutomatizacionSeguimiento;
