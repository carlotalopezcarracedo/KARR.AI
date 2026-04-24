import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'Automatización de procesos', href: '/automatizacion-procesos-empresas/' },
  { title: 'Seguimiento de clientes', href: '/automatizacion-seguimiento-clientes/' },
  { title: 'IA para empresas', href: '/ia-empresas/' },
];

const AutomatizacionWhatsApp: React.FC = () => {
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
              Automatización de WhatsApp
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.92] mb-8 max-w-5xl">
              Automatización de WhatsApp para empresas sin perder el control humano
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mb-12 leading-relaxed">
              WhatsApp es el canal de contacto más directo que tiene tu negocio. También es el que más tiempo consume cuando no está organizado. Se puede automatizar sin perder el trato personal que lo hace valioso.
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
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">El problema</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight max-w-3xl">
              El coste real de gestionar WhatsApp a mano
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: 'Mensajes sin respuesta durante horas',
                  desc: 'Fuera del horario comercial, en reuniones, de vacaciones. Cada hora sin respuesta es un lead que evalúa a la competencia.',
                },
                {
                  title: 'Las mismas preguntas respondidas mil veces',
                  desc: 'Precios, disponibilidad, horarios, formas de pago. El equipo interrumpe lo que hace para responder siempre lo mismo.',
                },
                {
                  title: 'Leads que se enfrían por seguimiento lento',
                  desc: 'El primer contacto es el más importante. Si la respuesta tarda, el interés cae. Sin sistema, dependes de quién esté disponible.',
                },
                {
                  title: 'Citas sin confirmar, clientes sin recordatorio',
                  desc: 'La gestión manual de citas genera cancelaciones de última hora, huecos en la agenda y clientes que olvidan.',
                },
                {
                  title: 'Ningún registro de las conversaciones',
                  desc: 'Sin integración con CRM o herramienta de gestión, cada conversación existe solo en el teléfono de quien la atendió.',
                },
                {
                  title: 'Calidad inconsistente según quién responda',
                  desc: 'Cada miembro del equipo atiende a su manera. El cliente recibe experiencias distintas dependiendo del día y de la persona.',
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

        {/* What automation does */}
        <section className="py-24 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Qué resolvemos</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight max-w-3xl">
              Qué puede hacer un sistema automatizado de WhatsApp
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-2xl leading-relaxed">
              La automatización de WhatsApp no es un chatbot genérico que frustra a los clientes. Es un sistema entrenado con tu contexto, que responde como tú responderías, y que sabe cuándo derivar a una persona real.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Respuestas a preguntas frecuentes', desc: 'Entrenamos el sistema con tus servicios, precios, horarios y criterios. Responde de forma precisa y consistente en cualquier momento.' },
                { title: 'Filtrado y clasificación de conversaciones', desc: 'El sistema distingue quién necesita atención inmediata, quién puede esperar y quién está fuera de tu perfil de cliente.' },
                { title: 'Agendamiento automático integrado', desc: 'Conectamos WhatsApp con tu calendario. El cliente puede reservar, confirmar o reagendar directamente desde la conversación.' },
                { title: 'Recordatorios de cita y seguimiento', desc: 'El sistema envía confirmaciones antes de la cita y mensajes de seguimiento después, según los criterios que definas.' },
                { title: 'Derivación a equipo humano con contexto', desc: 'Cuando una conversación requiere intervención real, se transfiere al equipo con el historial completo, sin que el cliente tenga que repetir nada.' },
                { title: 'Registro en CRM o herramienta de gestión', desc: 'Cada conversación relevante se registra automáticamente donde corresponde, sin que nadie lo haga manualmente.' },
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 rounded-3xl flex flex-col gap-4 hover:bg-white/5 transition-all border-white/5">
                  <h3 className="text-sm font-bold uppercase tracking-wider">{item.title}</h3>
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
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Cómo lo implementamos</p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  El sistema aprende tu negocio. No al revés.
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  El primer paso siempre es entender cómo gestionas las conversaciones hoy: qué se pregunta más, qué requiere tu intervención y qué se podría automatizar sin perder calidad.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  A partir de ahí, configuramos un sistema que responde con tu tono, con tu información y con tus criterios de derivación.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { n: '01', title: 'Auditoría de conversaciones actuales', desc: 'Analizamos qué tipos de mensajes recibes, qué se repite más y dónde se pierde tiempo o calidad.' },
                  { n: '02', title: 'Definición de criterios', desc: 'Qué responde el sistema, qué deriva al equipo y en qué casos actúa de qué manera.' },
                  { n: '03', title: 'Entrenamiento y configuración', desc: 'El sistema se configura con tu información: servicios, precios, respuestas tipo, tono de comunicación.' },
                  { n: '04', title: 'Integración con tu ecosistema', desc: 'Conectamos con tu calendario, CRM y las herramientas que ya uses. Sin cambiar lo que funciona.' },
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
              La automatización de WhatsApp es útil cuando...
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'WhatsApp es tu canal principal de contacto con clientes y gestionas más de 20 conversaciones semanales.',
                'El equipo interrumpe constantemente su trabajo para responder preguntas repetitivas.',
                'Recibes mensajes fuera de horario que se quedan sin respuesta hasta el día siguiente.',
                'Tienes clientes que no confirmaron su cita o que no recibieron seguimiento después de un contacto.',
                'Cada persona del equipo atiende de manera diferente y no hay un estándar de respuesta.',
                'Quieres crecer el número de clientes sin crecer proporcionalmente el tiempo de gestión.',
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
              Tu WhatsApp atendiendo clientes.<br />
              <span className="text-cyber-purple italic">Las 24 horas.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-xl mx-auto">
              Cuéntame cómo gestionas WhatsApp hoy y te digo qué parte puede funcionar sola sin perder la calidad del trato.
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

export default AutomatizacionWhatsApp;
