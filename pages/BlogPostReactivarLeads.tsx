import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostReactivarLeads: React.FC = () => {
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
              {['Leads', 'Reactivación', 'CRM'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Cómo reactivar leads fríos sin perseguir a nadie
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 6 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                En la mayoría de negocios hay una base de contactos que en algún momento mostraron interés y luego desaparecieron. Pidieron información, solicitaron un presupuesto, vinieron a una primera reunión. Y después, silencio.
              </p>

              <p>
                No convirtieron porque no era el momento, porque algo cambió, porque el seguimiento se quedó a medias. No porque no fueran a comprar nunca.
              </p>

              <p>
                Esos leads fríos son uno de los activos más infrautilizados de cualquier pyme de servicios. Y reactivarlos es más fácil de lo que parece, si se hace con el enfoque correcto.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por qué los leads se enfrían (y no es culpa del cliente)
              </h2>

              <p>
                Un lead frío no es un lead que no quiere comprar. Es un lead que, en el momento en que contactó, no encontró el sistema ni el acompañamiento suficiente para avanzar.
              </p>

              <p>Las razones más habituales por las que un lead se enfría:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>El seguimiento fue irregular o desapareció después del primer contacto</li>
                <li>El primer contacto no fue suficientemente rápido y el interés bajó antes de consolidarse</li>
                <li>El momento no era el adecuado y nadie volvió a contactar cuando podría haberlo sido</li>
                <li>La propuesta inicial no encajó bien con su situación real, y nadie lo exploró</li>
              </ul>

              <p>
                En casi todos estos casos, el lead no tomó la decisión activa de descartar el servicio. Simplemente, el proceso se quedó sin continuidad.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Qué diferencia un lead frío de uno muerto
              </h2>

              <p>Un lead frío es recuperable. Uno muerto, no. Y la diferencia importa porque el enfoque es completamente distinto.</p>

              <p>Un lead está muerto cuando:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Ha dicho explícitamente que no está interesado</li>
                <li>Ha cambiado completamente de situación: cerró el negocio, cambió de sector</li>
                <li>Ha contratado con un competidor y está satisfecho con el resultado</li>
              </ul>

              <p>Un lead está frío cuando:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Dejó de responder sin dar explicación</li>
                <li>Mostró interés pero el seguimiento se perdió en el camino</li>
                <li>Dijo "me lo pienso" hace varios meses y nunca volvió a contactar</li>
              </ul>

              <p>
                Con un lead muerto, no merece la pena invertir esfuerzo. Con un lead frío, un contacto bien hecho puede despertar una conversación que parecía cerrada.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cómo reactivar un lead frío sin parecer desesperado
              </h2>

              <p>
                El error más común al intentar reactivar un lead frío es hacer exactamente lo que se hizo antes: escribir para preguntar si siguen interesados. Eso raramente funciona y, en muchos casos, genera el efecto contrario.
              </p>

              <p>Lo que funciona es volver con algo de valor, sin presión y con un contexto que justifique el contacto:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Compartir algo relevante para su negocio o sector: un artículo, un ejemplo concreto, un cambio en el mercado</li>
                <li>Mencionar algo que ha cambiado en tu oferta y que podría encajar mejor con su situación actual</li>
                <li>Proponer una conversación breve sin compromiso, con el enfoque de entender cómo está su negocio ahora</li>
              </ul>

              <p>
                El tono debe ser genuino y sin presión. Si el lead no responde después de uno o dos intentos bien espaciados, no merece la pena insistir. No todos los leads fríos se reactivarán, y eso está bien.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                El timing importa
              </h3>

              <p>
                Hay momentos del año en que los leads fríos tienen más probabilidad de reactivarse. Los inicios de trimestre —enero, abril, septiembre— suelen coincidir con decisiones de negocio o revisión de presupuestos. También los momentos previos a eventos relevantes para el sector del lead.
              </p>

              <p>
                Si tienes varios leads fríos de un mismo perfil, tiene sentido agrupar los intentos de reactivación en esos momentos en lugar de contactarlos de forma aleatoria.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                El sistema que evita que los leads se enfríen en el futuro
              </h2>

              <p>
                Reactivar leads es útil. Pero el objetivo real es que no se enfríen en primer lugar.
              </p>

              <p>
                Eso requiere un proceso: que cada lead tenga asignado un próximo paso, una fecha y alguien responsable de ejecutarlo. Un buen <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM con seguimiento automatizado</a> hace que ese sistema no dependa de que alguien se acuerde. Sin él, los leads que no convierten de inmediato siempre acabarán cayendo en el olvido.
              </p>

              <p>Lo mínimo que funciona:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Un registro centralizado de todos los leads con su estado y el próximo contacto previsto</li>
                <li><a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50">Recordatorios automáticos</a> para que nadie tenga que acordarse de cuándo escribir</li>
                <li>Un criterio claro sobre cuándo cambiar el estado de un lead de activo a frío a descartado</li>
              </ul>

              <p>
                Con esto en su sitio, los leads que hoy están fríos son, en muchos casos, clientes que todavía no han llegado. Para saber cuándo y cómo contactarlos en cada fase, lee también sobre <a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className="text-cyber-purple underline decoration-cyber-purple/50">seguimiento de leads en pymes</a>.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Tienes leads inactivos sin sistema para recuperarlos?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Hablamos sin compromiso
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </article>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Más recursos</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/crm-pymes-seguimiento-clientes/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">CRM para pymes</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a href="/blog/seguimiento-leads-pymes-cuando-insistir/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Cuándo insistir con un lead</span>
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

export default BlogPostReactivarLeads;
