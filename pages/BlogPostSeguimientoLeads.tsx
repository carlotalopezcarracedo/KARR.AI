import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostSeguimientoLeads: React.FC = () => {
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
              {['Leads', 'CRM', 'Ventas'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              Seguimiento de leads en pymes: cuándo insistir y cuándo parar
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 7 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                La mayoría de ventas no se pierden en el primer contacto. Se pierden después. En el silencio que sigue a un "me lo pienso". En el mensaje que nadie mandó porque no había sistema para recordarlo. En el lead que respondió con interés hace tres semanas y al que nadie volvió a escribir.
              </p>

              <p>
                El seguimiento comercial es donde más dinero se deja sobre la mesa en pymes de servicios. No porque no se sepa que hay que hacerlo. Sino porque hacerlo bien, de forma consistente y sin agobiar, es difícil si depende de que alguien se acuerde.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Por qué el seguimiento irregular cuesta más de lo que parece
              </h2>

              <p>
                Un lead que contacta tiene ya un interés. Ha dado el primer paso. Convertirlo cuesta mucho menos que conseguir uno nuevo. Cuando ese lead no recibe seguimiento adecuado, la inversión en conseguirlo —tiempo, marketing, esfuerzo— se pierde.
              </p>

              <p>
                El problema no es la falta de voluntad. Es la falta de sistema. Sin un proceso definido, el seguimiento depende de la memoria de quien lleva las ventas. Y la memoria falla, especialmente cuando hay mucho volumen o mucho trabajo simultáneo.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cuándo tiene sentido insistir
              </h2>

              <p>
                Insistir no significa molestar. Significa volver a contactar con algo de valor, en el momento adecuado y con la frecuencia correcta.
              </p>

              <p>Tiene sentido insistir cuando:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Han pasado entre 3 y 7 días desde el último contacto sin respuesta</li>
                <li>El lead mostró interés real: pidió información, hizo preguntas, solicitó un presupuesto</li>
                <li>Tienes algo concreto que aportarle: información relevante, respuesta a su duda, un ejemplo aplicado a su caso</li>
                <li>No ha dicho explícitamente que no está interesado</li>
              </ul>

              <p>
                La clave es que cada contacto aporte algo. Un mensaje que solo dice "¿qué tal, sigues pensándolo?" genera rechazo. Un mensaje que resuelve una duda o comparte algo relevante mantiene el interés abierto.
              </p>

              <h3 className="text-base font-black uppercase tracking-wider text-white/80 pt-2">
                Con qué frecuencia contactar
              </h3>

              <p>No hay una fórmula universal, pero hay rangos que funcionan en la mayoría de pymes de servicios:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li><span className="text-white font-medium">Primer seguimiento:</span> 3-5 días después del contacto inicial sin respuesta</li>
                <li><span className="text-white font-medium">Segundo seguimiento:</span> 7-10 días después del primero</li>
                <li><span className="text-white font-medium">Tercer seguimiento:</span> 2-3 semanas después</li>
                <li><span className="text-white font-medium">Seguimiento de largo plazo:</span> 1-3 meses después, si el lead sigue en el radar</li>
              </ul>

              <p>
                Pasado el tercer intento sin respuesta, la prioridad baja. Pero el lead no desaparece: pasa a un seguimiento de largo plazo con menos frecuencia.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cuándo parar (y cómo hacerlo bien)
              </h2>

              <p>Parar no significa abandonar definitivamente. Significa cambiar de estrategia.</p>

              <p>Señales de que un lead no va a convertir a corto plazo:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Ha dicho explícitamente que no está interesado</li>
                <li>Ha dejado de responder después de tres contactos bien espaciados</li>
                <li>Ha cambiado de situación: presupuesto, timing, decisión tomada con otro</li>
              </ul>

              <p>
                Cuando esto ocurre, el error es desaparecer sin más. El último contacto puede ser una oportunidad: dejar la puerta abierta, sin presión. Algo tan sencillo como: "Entiendo que ahora no es el momento. Si en algún momento cambia la situación, aquí estamos."
              </p>

              <p>
                Este tipo de cierre deja una impresión positiva. Y los leads que paran no están muertos: están <a href="/blog/reactivar-leads-frios-sin-perseguir/" className="text-cyber-purple underline decoration-cyber-purple/50">fríos, y pueden volver en meses</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cómo hacer seguimiento sin que dependa de tu memoria
              </h2>

              <p>
                La única forma de hacer seguimiento consistente es que haya un sistema que lo gestione, no una persona que se acuerde.
              </p>

              <p>Lo mínimo que necesitas para que funcione:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Un registro de cada lead con la fecha del último contacto y el próximo paso</li>
                <li>Un recordatorio automático cuando llegue el momento de volver a escribir</li>
                <li>Un criterio claro sobre qué decir en cada momento del proceso</li>
              </ul>

              <p>
                Esto puede hacerse con un <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM básico</a>, con una hoja de cálculo bien estructurada o con una herramienta de automatización. Lo que no funciona es tenerlo en la memoria o en notas dispersas.
              </p>

              <p>
                Con el sistema correcto, el seguimiento deja de depender de la energía y la memoria de una persona. Se vuelve predecible, consistente y, en muchos casos, <a href="/automatizacion-procesos/" className="text-cyber-purple underline decoration-cyber-purple/50">automático</a>.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿Tu seguimiento de leads depende de que alguien se acuerde?</p>
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
              <a href="/blog/reactivar-leads-frios-sin-perseguir/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">Reactivar leads fríos</span>
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

export default BlogPostSeguimientoLeads;
