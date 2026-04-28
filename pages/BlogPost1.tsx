import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPost1: React.FC = () => {
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
              {['Automatización', 'Pymes', 'Productividad'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Las automatizaciones que más tiempo recuperan en una pyme de servicios
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">28 abril 2026 · 6 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                Hay tareas que se repiten en tu negocio cada semana. Siempre las mismas. Las haces porque alguien tiene que hacerlas, pero en el fondo sabes que no aportan nada nuevo. Solo consumen tiempo. Estas son exactamente las que más impacto tienen cuando se automatizan.
              </p>

              <p>
                No todas las automatizaciones valen igual. Algunas ahorran diez minutos a la semana y requieren un mes de implementación. Otras liberan horas cada día desde el primer momento. La diferencia está en saber cuáles atacar primero.
              </p>

              <p>
                Después de trabajar con pymes de servicios en Galicia y España, hay un patrón claro. Estas son las cinco automatizaciones que más tiempo recuperan, ordenadas por impacto habitual.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                1. Responder siempre las mismas preguntas
              </h2>

              <p>
                La atención al cliente consume tiempo desproporcionado en la mayoría de pymes de servicios. No porque los clientes sean exigentes, sino porque el 70-80% de las preguntas son siempre las mismas: horarios, precios, disponibilidad, cómo funciona el servicio, qué necesitan traer.
              </p>

              <p>
                Un asistente entrenado con la información real de tu negocio puede responder estas preguntas en WhatsApp o en la web, a cualquier hora, con tu tono y tu criterio. Sin que nadie tenga que estar pendiente del teléfono.
              </p>

              <p>
                El impacto no es solo el tiempo ahorrado. Es la energía mental que deja de gastarse en interrupciones constantes.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                2. La gestión de citas y recordatorios
              </h2>

              <p>
                Si gestionas citas manualmente —por mensaje, por llamada, apuntando en el calendario— estás dedicando tiempo a una tarea que puede funcionar sola. Un sistema de agendamiento conectado permite que el cliente reserve directamente, reciba confirmación automática y reciba un recordatorio el día antes.
              </p>

              <p>
                El impacto real no está solo en el tiempo de gestión. Está en la reducción de no-shows. En la mayoría de negocios que implementan recordatorios automáticos, el porcentaje de citas que no se presentan cae entre un 30 y un 50%.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                3. El seguimiento de clientes que nadie hace
              </h2>

              <p>
                Hay clientes que estuvieron cerca de comprar y nunca compraron. Clientes que dejaron de responder sin motivo aparente. Clientes a los que habría que llamar tres meses después de una primera reunión. Nadie hace ese seguimiento porque cuando llega el momento, ya nadie recuerda que existe.
              </p>

              <p>
                Un sistema de seguimiento automatizado cambia esto por completo. Se define cuándo contactar y qué decir según la fase en la que está cada cliente. El sistema lo ejecuta sin que nadie tenga que acordarse.
              </p>

              <p>
                Esta automatización suele recuperar entre un 15 y un 25% de los clientes que se habían dado por perdidos.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                4. La generación de presupuestos
              </h2>

              <p>
                Preparar un presupuesto a medida tarda tiempo. Si recibes varias solicitudes a la semana y cada una requiere recopilar información, calcular, formatear y enviar, el tiempo se acumula rápido. Y si el presupuesto no llega en menos de 24 horas, muchos clientes ya han contactado con la competencia.
              </p>

              <p>
                Cuando el proceso se automatiza —el cliente rellena un formulario, el sistema genera el documento y lo envía— el tiempo de respuesta baja a minutos. La conversión sube porque la velocidad genera confianza.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                5. El registro manual de actividad
              </h2>

              <p>
                En muchas pymes, los datos sobre clientes, proyectos y operaciones viven en múltiples sitios: el email, el WhatsApp, una hoja de cálculo, la memoria de alguien. Cuando se necesita tomar una decisión o hacer un seguimiento, primero hay que dedicar tiempo a reunir la información.
              </p>

              <p>
                Automatizar el registro de actividad —que cada interacción quede documentada en el CRM sin que nadie la introduzca manualmente— cambia la calidad de las decisiones. Tienes la información cuando la necesitas, donde la necesitas.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por dónde empezar
              </h2>

              <p>
                No tiene sentido automatizar las cinco cosas a la vez. El primer paso es identificar cuál de estas áreas consume más tiempo en tu negocio específico y tiene más impacto si mejora.
              </p>

              <p>
                A veces el cuello de botella está en la atención al cliente. A veces en el seguimiento. A veces en la documentación. La respuesta depende de cómo funciona tu operativa ahora mismo.
              </p>

              <p>
                El error más común es elegir la automatización que parece más tecnológica o interesante, en lugar de la que resuelve el problema más doloroso.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Quieres saber cuál tiene más impacto en tu negocio?</p>
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
              <a href="/automatizacion-seguimiento-clientes/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
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

export default BlogPost1;
