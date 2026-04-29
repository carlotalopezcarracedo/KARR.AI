import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostTareasManuales: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <article className="px-6 pt-32 pb-20">
          <div className="max-w-2xl mx-auto">

            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              <a href="/blog/" className="hover:text-white transition-colors">Blog</a>
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Procesos', 'Operativa', 'Automatización'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Qué tareas manuales están frenando tu negocio cada semana
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 6 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                Hay algo que muchos dueños de negocios saben pero nunca han puesto por escrito: cada semana se van horas en cosas que no aportan nada nuevo. No porque el trabajo no sea necesario. Sino porque ya lo hiciste la semana pasada. Y la anterior. Y la que viene lo harás otra vez.
              </p>

              <p>
                El problema no es el trabajo en sí. El problema es que ese trabajo está ocupando el espacio de lo que de verdad importa: atender mejor a los clientes, pensar en cómo crecer, descansar sin el teléfono en la mano.
              </p>

              <p>
                La primera pregunta no es "¿qué puedo automatizar?". Es "¿qué estoy haciendo a mano que no debería?"
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cómo reconocer una tarea que frena tu negocio
              </h2>

              <p>
                No todas las tareas manuales son un problema. Las hay que requieren criterio, experiencia o contacto humano real. Las que frenan son las otras: las repetitivas, las mecánicas, las que cualquier sistema podría hacer igual o mejor que tú.
              </p>

              <p>Una tarea manual frena tu negocio cuando cumple tres condiciones:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Se repite con frecuencia: varias veces a la semana o al mes</li>
                <li>No requiere tu criterio ni tu experiencia para hacerse</li>
                <li>Si no se hace, hay consecuencias reales: leads perdidos, citas olvidadas, clientes sin respuesta</li>
              </ul>

              <p>Si una tarea cumple las tres, es candidata directa a automatizarse.</p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Las tareas manuales más habituales en pymes de servicios
              </h2>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Responder siempre los mismos mensajes
              </h3>

              <p>
                El WhatsApp del negocio recibe las mismas preguntas una y otra vez. Horario, precio, disponibilidad, cómo funciona el servicio, qué necesitan traer. Cada respuesta individual parece pequeña. En conjunto, representan una parte significativa del tiempo de quien atiende el canal. La <a href="/automatizacion-whatsapp-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización de WhatsApp para empresas</a> resuelve este tramo sin que nadie tenga que estar pendiente del teléfono.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Hacer seguimiento de leads sin sistema
              </h3>

              <p>
                Un cliente potencial contacta, pide información, dice que lo piensa y desaparece. Tres semanas después ya nadie recuerda que existe. No hay recordatorio, no hay secuencia, no hay un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">sistema de seguimiento</a>. El resultado es predecible: la oportunidad se pierde sin que nadie haya tomado la decisión de descartarla.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Gestionar citas y recordatorios a mano
              </h3>

              <p>
                Confirmar citas por teléfono o WhatsApp, enviar recordatorios el día antes, gestionar cancelaciones de última hora: todo esto consume tiempo que podría liberarse con automatización básica. Y mientras se hace a mano, hay huecos en la agenda que podrían haberse evitado.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Enviar presupuestos uno a uno
              </h3>

              <p>
                Recopilar información del cliente, calcular, formatear el documento, enviarlo y esperar. En negocios que manejan varias solicitudes a la semana, este proceso puede consumir horas. Y cada hora que pasa sin respuesta es una oportunidad que se enfría.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Actualizar datos y registrar actividad
              </h3>

              <p>
                El estado de cada cliente, qué se dijo en la última llamada, si ya firmaron, si hay algo pendiente. En muchas pymes esta información vive en la cabeza de alguien, en mensajes de WhatsApp o en una hoja de cálculo que nadie tiene actualizada. Cuando se necesita, hay que ir a buscarla.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                El coste real de operar así
              </h2>

              <p>
                No es solo el tiempo. Es la carga mental de tener que acordarse de todo. Es el error que se comete cuando algo se hace de prisa. Es el lead que se pierde porque nadie recordó volver a escribir. Es el cliente que cancela porque no recibió confirmación.
              </p>

              <p>
                La acumulación de tareas manuales crea un techo invisible: el negocio no puede crecer más de lo que la persona de referencia es capaz de gestionar a mano. Ese techo suele aparecer antes de lo esperado.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por dónde empezar
              </h2>

              <p>
                No se trata de automatizarlo todo de golpe. Se trata de identificar <a href="/blog/como-saber-que-proceso-automatizar-primero/" className="text-cyber-purple underline decoration-cyber-purple/50">cuál de estas tareas tiene más impacto si se resuelve primero</a>.
              </p>

              <p>
                Una forma sencilla: anota durante una semana cuánto tiempo dedicas a cada tipo de tarea manual. No hace falta ser preciso. Basta con una aproximación. La tarea que aparezca más veces o que consuma más tiempo es probablemente por donde empezar.
              </p>

              <p>
                A partir de ahí, el siguiente paso es diseñar un sistema que la resuelva sin que tengas que seguir haciéndola tú.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Quieres saber qué tareas tiene más sentido atacar primero en tu negocio?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </article>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Más recursos</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/automatizacion-procesos/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Automatización de procesos</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a href="/crm-pymes-seguimiento-clientes/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Seguimiento de clientes</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
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

export default BlogPostTareasManuales;
