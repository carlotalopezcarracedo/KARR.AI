import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONTACT_EMAIL = 'carlota.kairas@gmail.com';

const BlogPostWhatsAppAppVsAPI: React.FC = () => {
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
              {['WhatsApp', 'API', 'Herramientas'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
              WhatsApp Business App vs API: qué necesita una pyme
            </h1>

            <p className="text-slate-500 text-xs font-mono mb-12">29 abril 2026 · 7 min de lectura</p>

            <div className="prose-kairas space-y-8 text-slate-300 text-base leading-relaxed font-light">

              <p className="text-lg text-slate-300 leading-relaxed">
                Cuando una pyme empieza a usar WhatsApp para el negocio, la app gratuita parece suficiente. Responde mensajes, permite configurar un horario de atención y tiene respuestas rápidas predefinidas. Para un negocio pequeño con poco volumen, cumple.
              </p>

              <p>
                El problema llega cuando el negocio crece. Más clientes, más mensajes, más personas que necesitan atender el canal. La app empieza a quedarse corta y aparece la pregunta: ¿necesito la API de WhatsApp?
              </p>

              <p>
                La respuesta depende de cómo funciona tu negocio. Este artículo explica las diferencias reales entre las dos opciones, sin tecnicismos, para que puedas decidir con criterio.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                WhatsApp Business App: para qué sirve y para qué no
              </h2>

              <p>
                La app gratuita de WhatsApp Business es una versión mejorada de la app personal, diseñada para pequeños negocios. Permite crear un perfil de empresa, configurar respuestas automáticas básicas, establecer un horario de atención y organizar los chats con etiquetas.
              </p>

              <p>Funciona bien cuando:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Hay una o dos personas gestionando el canal</li>
                <li>El volumen de mensajes es manejable: decenas, no cientos</li>
                <li>No necesitas integrar WhatsApp con otras herramientas de gestión</li>
                <li>Las automatizaciones básicas —mensaje de bienvenida, mensaje de ausencia— son suficientes</li>
              </ul>

              <p>Sus limitaciones son concretas:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Solo puede usarse en un dispositivo a la vez (con multidevice, hasta 4 dispositivos vinculados)</li>
                <li>No se puede integrar con un CRM de forma nativa</li>
                <li>Las automatizaciones son muy limitadas: solo mensajes predefinidos</li>
                <li>No permite enviar mensajes masivos de forma segura ni trazable</li>
                <li>No escala si hay varios agentes respondiendo simultáneamente</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                La API de WhatsApp: qué permite hacer
              </h2>

              <p>
                La API de WhatsApp (también llamada WhatsApp Business API o Cloud API) es la versión para negocios que necesitan más. No es una app que se instala: es una conexión técnica que permite integrar WhatsApp con otras plataformas y automatizar flujos de conversación completos.
              </p>

              <p>Lo que permite hacer:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Varios agentes respondiendo simultáneamente desde una misma línea</li>
                <li>Integración con CRM, herramientas de automatización y plataformas de atención al cliente</li>
                <li>Flujos automatizados complejos: no solo mensajes de bienvenida, sino secuencias completas</li>
                <li>Envío de notificaciones y mensajes proactivos a clientes, con templates aprobados por Meta</li>
                <li>Seguimiento de conversaciones y métricas reales sobre el canal</li>
              </ul>

              <p>
                La diferencia clave respecto a la app: la API permite que WhatsApp deje de ser un canal manual y se convierta en parte de la operativa real del negocio. Es lo que está detrás de la <a href="/automatizacion-whatsapp-empresas/" className="text-cyber-purple underline decoration-cyber-purple/50">automatización de WhatsApp para empresas</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Las diferencias que nadie explica bien
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 pr-4 text-white font-black uppercase tracking-wider text-xs"></th>
                      <th className="text-left py-3 pr-4 text-cyber-purple font-black uppercase tracking-wider text-xs">App gratuita</th>
                      <th className="text-left py-3 text-cyber-purple font-black uppercase tracking-wider text-xs">API</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      ['Precio', 'Gratuita', 'Coste variable (BSP + mensajes)'],
                      ['Usuarios simultáneos', '1-4 dispositivos', 'Ilimitado'],
                      ['Automatizaciones', 'Básicas (bienvenida, ausencia)', 'Avanzadas (flujos completos)'],
                      ['Integración con CRM', 'No nativa', 'Sí'],
                      ['Envío masivo', 'Limitado y arriesgado', 'Sí, con templates aprobados'],
                      ['Configuración', 'Minutos', 'Requiere implementación técnica'],
                      ['Para quién', 'Negocio pequeño, bajo volumen', 'Equipo o necesidad de automatización'],
                    ].map(([label, app, api]) => (
                      <tr key={label}>
                        <td className="py-3 pr-4 text-white font-medium text-xs">{label}</td>
                        <td className="py-3 pr-4 text-slate-400 text-xs">{app}</td>
                        <td className="py-3 text-slate-400 text-xs">{api}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Cuándo tiene sentido dar el salto a la API
              </h2>

              <p>
                No siempre merece la pena. La API tiene costes y requiere implementación. Para un negocio que gestiona 20 mensajes al día con una persona, la app gratuita es suficiente y no tiene sentido complicar lo que funciona.
              </p>

              <p>Tiene sentido plantearse la API cuando:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Más de una persona necesita atender WhatsApp a la vez</li>
                <li>Quieres automatizar respuestas, seguimientos o notificaciones de forma real</li>
                <li>Necesitas integrar WhatsApp con tu <a href="/crm-pymes-seguimiento-clientes/" className="text-cyber-purple underline decoration-cyber-purple/50">CRM o herramienta de gestión</a></li>
                <li>El volumen de mensajes supera lo que una persona puede gestionar con calidad</li>
                <li>Quieres enviar recordatorios o notificaciones automáticas a clientes de forma trazable</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white pt-4">
                Qué necesitas para implementar la API
              </h2>

              <p>
                La API de WhatsApp no se contrata directamente con Meta para la mayoría de empresas: se accede a través de un proveedor BSP (Business Solution Provider) o directamente a través de la Cloud API de Meta con una cuenta verificada.
              </p>

              <p>Lo que necesitas tener antes de empezar:</p>

              <ul className="space-y-2 pl-4 border-l border-cyber-purple/30">
                <li>Una cuenta de Meta Business verificada</li>
                <li>Un número de teléfono dedicado, distinto del que usas en la app</li>
                <li>Un proveedor o plataforma que gestione la conexión</li>
                <li>Una implementación técnica para conectarlo con tus herramientas de gestión</li>
              </ul>

              <p>
                El coste depende del volumen de mensajes y del proveedor. Para pymes de servicios con uso moderado, los costes mensuales son asumibles si el sistema aporta valor real. El error es implementar la API sin tener claro qué problema concreto resuelve. Si todavía gestionas el canal a mano, lee antes sobre <a href="/blog/dejar-de-gestionar-whatsapp-empresa-a-mano/" className="text-cyber-purple underline decoration-cyber-purple/50">cuándo tiene sentido dejar de hacerlo</a>.
              </p>

            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">¿No sabes qué opción encaja mejor con tu negocio?</p>
              <a
                href="/contacto/"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
              >
                Analizamos tu caso
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </article>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-6">Más recursos</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/automatizacion-whatsapp-empresas/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">WhatsApp para empresas</span>
                <ArrowRight className="w-4 h-4 text-cyber-purple group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a href="/crm-pymes-seguimiento-clientes/" className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-cyber-purple/30 hover:bg-white/5 transition-all border-white/10">
                <span className="text-sm font-bold uppercase tracking-wider">CRM para pymes</span>
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

export default BlogPostWhatsAppAppVsAPI;
