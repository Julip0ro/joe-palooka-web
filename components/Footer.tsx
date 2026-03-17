import { Instagram, Facebook, MessageCircle, Music2 } from "lucide-react";

/**
 * Componente de cierre de página.
 * Incluye sección de redes sociales, navegación secundaria e información de contacto.
 */
export default function Footer() {
  const SOCIAL_LINKS = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Music2 size={20} />, href: "#", label: "TikTok" },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/51980775633",
      label: "WhatsApp",
    },
  ];

  return (
    <>
      {/* SECCIÓN: BARRA SOCIAL */}
      <section className="w-full bg-black border-t border-zinc-800/90 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-red-500 mb-6 font-bold">
            Síguenos en nuestras redes
          </p>

          <div className="flex items-center justify-center gap-6 md:gap-8">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-xl"
              >
                <div className="text-zinc-400 group-hover:text-white transition-colors">
                  {social.icon}
                </div>
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-zinc-800 text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-md pointer-events-none font-bold">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: PIE DE PÁGINA PRINCIPAL */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-800 pt-12 pb-28 md:pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            {/* Identidad visual */}
            <div className="text-center md:text-left">
              <h2 className="text-[16px] font-black uppercase text-zinc-50">
                Joe Palooka
              </h2>
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.25em] mt-1">
                Santiago de Surco · Lima
              </p>
              <div className="w-16 h-px bg-red-600 mt-4 mx-auto md:mx-0" />
            </div>

            {/* Bloques de información */}
            <div className="flex gap-10 text-center md:text-left">
              <nav aria-label="Navegación secundaria">
                <p className="text-white text-[11px] font-bold uppercase tracking-widest mb-3">
                  Navegación
                </p>
                <div className="flex flex-col gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                  <a href="/" className="hover:text-white transition-colors">
                    Inicio
                  </a>
                  <a
                    href="/horarios"
                    className="hover:text-white transition-colors"
                  >
                    Horarios
                  </a>
                  <a
                    href="/precios"
                    className="hover:text-white transition-colors"
                  >
                    Planes
                  </a>
                  <a
                    href="/contacto"
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </div>
              </nav>

              <div>
                <p className="text-white text-[11px] font-bold uppercase tracking-widest mb-3">
                  Atención Directa
                </p>
                <div className="flex flex-col gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                  <a
                    href="https://wa.me/51980775633"
                    className="hover:text-red-500 transition-colors"
                    target="_blank"
                  >
                    +51 980 775 633
                  </a>
                  <span>Escríbenos por WhatsApp</span>
                  <span className="text-zinc-600">Surco, Lima, Perú</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800 my-8" />

          {/* Información legal y copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
            <p>© {new Date().getFullYear()} Joe Palooka Boxing</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </>
  );
}
