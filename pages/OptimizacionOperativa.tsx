import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const RELATED = [
  { title: 'Automatización de procesos', href: '/automatizacion-procesos-empresas/' },
  { title: 'IA para empresas', href: '/ia-empresas/' },
  { title: 'Seguimiento de clientes', href: '/automatizacion-seguimiento-clientes/' },
];

const OptimizacionOperativa: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="min-h-[100svh] px-6 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 w-[700px] h-[400px] bg-cyber-purple/8 blur-[130px] -z-10 rounded-full" />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">
              <a href="/" className="hover:text-white transition-colors">KAIRAS</a>
              <span className="mx-2 opacity-40">/</span>
              Optimización operativa
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Optimización operativa para pymes que necesitan más orden y menos fricción
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Cuando el negocio crece pero los procesos no escalan, todo se vuelve más lento. Más reuniones de coordinación. Más cosas que se pierden o se repiten. Más dependencia de personas concretas. Eso tiene solución.
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

        {/* Signals */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">El problema</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight max-w-3xl">
              Señales de que tu operativa necesita estructura
            </h2>
            <p className="text-lg text-slate-400 font-light max-w-2xl mb-16 leading-relaxed">
              La mayoría de problemas operativos no se presentan como emergencias. Se acumulan como fricción silenciosa: tiempo perdido, calidad inconsistente, equipo desgastado.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'El conocimiento del negocio está en la cabeza de una persona',
                  desc: 'Cuando esa persona falta, el proceso se detiene. No hay documentación ni flujo alternativo.',
                },
                {
                  title: 'Incorporar a alguien nuevo tarda meses',
                  desc: 'No hay procesos claros ni materiales de referencia. Cada persona aprende por osmosis.',
                },
                {
                  title: 'Siempre hay cosas que "se nos olvidaron"',
                  desc: 'Seguimientos, recordatorios, actualizaciones. Dependen de que alguien lo recuerde, no de que el sistema lo garantice.',
                },
                {
                  title: 'No sabes exactamente cuánto cuesta atender a un cliente',
                  desc: 'Sin trazabilidad de las operaciones, tomar decisiones sobre precios, capacidad o crecimiento es intuición.',
                },
                {
                  title: 'El crecimiento genera caos en lugar de escala',
                  desc: 'Más clientes significa más carga lineal, no más flujo controlado. El negocio crece pero la operativa no lo acompaña.',
                },
                {
                  title: 'Cada proyecto se gestiona de manera diferente',
                  desc: 'No hay un estándar. Lo que funciona bien un mes no funciona al siguiente porque el proceso no está definido.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 rounded-3xl border-white/10 hover:bg-white/5 hover:-translate-y-1 transition-all">
                  <h3 className="text-base font-bold uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What KAIRAS does */}
        <section className="py-32 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">Qué hacemos</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight max-w-3xl">
              Estructura primero. Automatización después.
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-2xl leading-relaxed">
              Automatizar un proceso caótico solo acelera el caos. El orden operativo empieza por entender cómo funciona realmente el negocio, no cómo creemos que funciona.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { n: '01', title: 'Diagnóstico real', desc: 'Mapeamos cómo funciona la operativa hoy: flujos, responsabilidades, herramientas y puntos de fricción.' },
                { n: '02', title: 'Identificación de cuellos de botella', desc: 'Dónde se acumula el trabajo, qué depende de una persona y qué se pierde en el proceso.' },
                { n: '03', title: 'Diseño de procesos claros', desc: 'Definimos los flujos con responsabilidades, criterios de decisión y documentación mínima necesaria.' },
                { n: '04', title: 'Implementación y seguimiento', desc: 'Ponemos en marcha los cambios, formamos al equipo y hacemos seguimiento hasta que la operativa funciona bien.' },
              ].map((step) => (
                <div key={step.n} className="flex flex-col gap-4">
                  <div className="w-8 h-8 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 flex items-center justify-center">
                    <span className="text-[9px] font-mono text-cyber-purple tracking-widest">{step.n}</span>
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wider">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What changes */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-4">El resultado</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
                  Una operativa que no depende de ti en todo momento
                </h2>
                <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
                  El objetivo no es que el negocio sea más complejo. Es que funcione con más consistencia y menos supervisión constante.
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  Cuando los procesos están claros, la automatización tiene donde apoyarse. Y el equipo puede enfocarse en el trabajo que realmente requiere su criterio.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Procesos documentados que cualquier persona del equipo puede seguir.',
                  'Responsabilidades claras: quién hace qué, cuándo y con qué criterio.',
                  'Trazabilidad de las operaciones: sabes qué pasa, cuándo y por qué.',
                  'Capacidad de crecer sin que la calidad operativa se degrade.',
                  'Equipo menos desgastado por la coordinación y más enfocado en valor real.',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mt-2 shrink-0" />
                    <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
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
              Optimización operativa funciona cuando...
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Tienes entre 2 y 20 personas en el equipo y la coordinación consume más tiempo del que debería.',
                'El negocio ha crecido pero los procesos siguen siendo los mismos que al principio.',
                'Hay cosas que dependen de que tú estés presente y no sabes cómo delegar sin perder control.',
                'Tu equipo trabaja mucho pero no siempre hacia lo correcto porque el proceso no es claro.',
                'Quieres implementar automatizaciones pero primero necesitas ordenar los flujos.',
                'Has tenido problemas de calidad o consistencia que no sabes exactamente de dónde vienen.',
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
              Tu negocio no necesita más horas.<br />
              <span className="text-cyber-purple italic">Necesita mejores procesos.</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-xl mx-auto">
              Cuéntame cómo funciona tu operativa hoy y te digo qué cambiaría primero para que funcione mejor.
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

export default OptimizacionOperativa;
