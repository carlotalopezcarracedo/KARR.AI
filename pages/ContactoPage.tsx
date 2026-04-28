import React from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const ContactoPage: React.FC = () => {
  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content">
        <section className="px-6 pt-32 pb-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-cyber-purple mb-6">Contacto KAIRAS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.92] mb-8">
              Cuentame donde se atasca tu negocio
            </h1>
            <p className="text-lg text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              Cuentanos como funciona tu negocio y analizamos donde puedes recuperar tiempo.
              Revisamos tu caso y te respondemos con el siguiente paso.
            </p>
          </div>
        </section>

        <Contact headingLevel={2} />
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

export default ContactoPage;
