import React from 'react';

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Servicios', href: '/#automatizaciones' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Sobre mi', href: '/#sobre-mi' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass-card nav-glass rounded-3xl border-white/20 px-4 sm:px-6 py-3 sm:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a href="/#inicio" className="inline-flex items-center">
                <img
                  src={`${import.meta.env.BASE_URL}logo-kairas-horizontal-blanco.webp`}
                  alt="KAIRAS"
                  className="h-8 w-auto"
                  width="160"
                  height="32"
                />
              </a>
            </div>

            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  className="text-[10px] font-bold tracking-widest uppercase hover:text-cyber-purple transition-colors cursor-pointer"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center">
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center bg-white text-black px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase hover:bg-slate-200 transition-all"
              >
                Quiero mi diagnostico
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
