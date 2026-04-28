import React from 'react';
import { Zap, ShieldCheck, TrendingUp, Lock, ChevronDown } from 'lucide-react';

const badges = [
  { Icon: Zap, text: 'Optimización' },
  { Icon: ShieldCheck, text: 'Cero Errores' },
  { Icon: TrendingUp, text: 'Escalabilidad' },
  { Icon: Lock, text: 'Control Total' },
];

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-20 overflow-y-hidden overflow-x-hidden">
      {/* Animated blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-purple/10 blur-[120px] rounded-full -z-10 sm:animate-blob mix-blend-screen"></div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-cyan/5 blur-[100px] rounded-full -z-10 sm:animate-blob animation-delay-2000 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="reveal inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-purple"></span>
          </span>
          <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.08em] sm:tracking-[0.2em] uppercase text-white/70 whitespace-nowrap">
            Menos tareas, más libertad.
          </span>
        </div>

        <div className="relative isolate mb-12">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[220px] w-[94%] max-w-[980px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.42)_0%,rgba(139,92,246,0.2)_36%,rgba(139,92,246,0.08)_58%,transparent_76%)] blur-2xl"></div>

          <p className="reveal stagger-1 relative text-[clamp(2.25rem,11.8vw,3.5rem)] sm:text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.88] tracking-tighter uppercase [text-shadow:0_0_55px_rgba(139,92,246,0.28)] overflow-visible">
            <span className="block whitespace-nowrap px-[0.04em] sm:px-0">TE DEVUELVO</span>
            <span className="block whitespace-nowrap pl-[0.04em] pr-[0.14em] sm:px-0">
              TU <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-purple to-white animate-text pr-[0.06em] sm:pr-0">{`TIEMPO\u00A0`}</span>
            </span>
          </p>
        </div>

        <h1 className="reveal stagger-2 text-sm sm:text-base font-bold tracking-[0.18em] uppercase text-white/50 mb-3 -mt-6">
          Automatización e IA para pymes de servicios en Galicia
        </h1>

        <p className="reveal stagger-3 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Procesos más claros para empresas que ya no quieren operar a mano.
        </p>

        <div className="reveal stagger-4 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
          {badges.map(({ Icon, text }) => (
            <div key={text} className="w-36 flex items-center gap-2 glass-card p-3 rounded-xl border-white/5 hover:bg-white/10 group transition-all duration-300">
              <Icon className="text-cyber-purple w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-tight">{text}</span>
            </div>
          ))}
        </div>

        <div className="reveal stagger-5 flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/contacto/" className="relative overflow-hidden bg-white text-black px-12 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] group inline-flex items-center justify-center">
            <span className="relative z-10">Cuéntame qué parte de tu negocio se está atascando</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-slate-200"></div>
          </a>
          <a href="#automatizaciones" className="glass-card px-12 py-5 rounded-xl font-black text-sm tracking-widest uppercase text-white border-white/10 hover:border-cyber-purple transition-all hover:bg-white/5 inline-flex items-center justify-center">
            Ver automatizaciones
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/30 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
