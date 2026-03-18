import React from 'react';

type InterventionLevel = {
  id: string;
  title: string;
  desc: string;
  ideal: string;
  featured?: boolean;
};

const interventionLevels: InterventionLevel[] = [
  {
    id: '01',
    title: 'Diagnóstico Operativo',
    desc: 'Detectamos dónde pierdes tiempo, qué fricción se repite y qué merece optimización.',
    ideal: 'Negocios con sobrecarga operativa y poca claridad sobre qué optimizar primero.',
  },
  {
    id: '02',
    title: 'Optimización de Proceso',
    desc: 'Resolvemos un cuello de botella concreto con una implementación clara y rápida.',
    ideal: 'Equipos que tienen un bloqueo puntual en atención, gestión o conversión.',
  },
  {
    id: '03',
    title: 'Sistema a Medida',
    desc: 'Diseñamos una solución más completa para conectar procesos y dar estructura a la operativa.',
    ideal: 'Operativas en crecimiento que necesitan orden, conexión y escalabilidad real.',
    featured: true,
  },
  {
    id: '04',
    title: 'Soporte y Evolución',
    desc: 'Afinamos, mantenemos y ampliamos el sistema cuando el negocio lo necesita.',
    ideal: 'Sistemas ya activos que requieren mejoras continuas sin perder estabilidad.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="pt-20 pb-14 sm:py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal text-5xl font-black tracking-tighter uppercase mb-12 sm:mb-16 text-center">Niveles de Intervención</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interventionLevels.map((level, index) => {
            const revealClass = level.featured ? 'reveal-scale' : 'reveal';
            const staggerClass = `stagger-${index + 1}`;

            if (level.featured) {
              return (
                <div key={level.id} className={`${revealClass} ${staggerClass} relative group h-full`}>
                  <div className="absolute -inset-1 bg-gradient-to-b from-cyber-purple to-cyber-cyan rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                  <div className="relative h-full glass-card bg-black/90 p-8 rounded-[2rem] flex flex-col border-white/20 transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-[10px] font-mono text-cyber-cyan tracking-widest uppercase">Fase {level.id} // Recomendado</div>
                      <span className="material-symbols-outlined text-cyber-cyan animate-spin-slow">settings</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 uppercase leading-tight">{level.title}</h3>
                    <p className="text-sm text-slate-300 mb-8 flex-grow leading-relaxed">{level.desc}</p>

                    <div className="mb-1 p-3 bg-white/10 rounded-xl border border-white/20">
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-cyan mb-1">Ideal para:</span>
                      <span className="text-xs text-white font-medium">{level.ideal}</span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={level.id} className={`${revealClass} ${staggerClass} glass-card p-8 rounded-3xl flex flex-col hover:bg-white/5`}>
                <div className="text-[10px] font-mono text-white/40 mb-4 tracking-widest uppercase">Fase {level.id}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase leading-tight">{level.title}</h3>
                <p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">{level.desc}</p>

                <div className="mb-1 p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-cyber-purple mb-1">Ideal para:</span>
                  <span className="text-xs text-white">{level.ideal}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 sm:mt-20 p-8 sm:p-12 glass-card rounded-[3rem] text-center border-white/10 hover:border-white/20 transition-all">
          <h3 className="text-3xl font-bold uppercase mb-6">¿Dudas sobre por dónde empezar?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Escríbeme y definiremos tu hoja de ruta hacia la eficiencia total.</p>
          <a href="#contacto" className="inline-flex items-center justify-center bg-white text-black px-6 sm:px-10 py-4 rounded-xl font-extrabold uppercase text-[11px] sm:text-sm tracking-[0.08em] sm:tracking-widest whitespace-nowrap hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
