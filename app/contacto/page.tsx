"use client";

import Reveal from "@/components/Reveal";

/**
 * ContactoPage - Gestión de canales de atención y ubicación.
 * Estilo industrial unificado con la marca Joe Palooka.
 */
export default function ContactoPage() {
  // Dirección unificada para Google Maps
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Calle+Doña+Elsa+157+Surco+Lima";

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-red-600/30 px-6 pt-10 p-6 relative overflow-hidden font-[family-name:var(--font-inter)]">
      {/* CAPA ORNAMENTAL: Fondo Hero con efecto espejo y gradiente */}
      <div
        className="absolute inset-0 z-0 opacity-30 grayscale pointer-events-none"
        style={{
          backgroundImage: "url('/img/2m.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          transform: "scaleX(-1)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none" />

      {/* BLOQUE DE TÍTULO */}
      <Reveal delay={100}>
        <h1 className="relative z-10 text-center text-[15vw] md:text-6xl font-[family-name:var(--font-archivo)] uppercase mb-3 md:mb-6 leading-tight tracking-tighter text-white">
          contacto
        </h1>
      </Reveal>

      {/* SUBTÍTULO INFORMATIVO */}
      <Reveal delay={200}>
        <p className="relative z-10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-300 max-w-[90vw] md:max-w-none leading-relaxed text-center mx-auto mb-6 md:mb-12 uppercase">
          <span className="inline-block md:whitespace-nowrap">
            Únete a la familia Palooka
          </span>
        </p>
      </Reveal>

      {/* TARJETA PRINCIPAL DE CONTACTO */}
      <Reveal delay={200}>
        <div className="relative z-10 max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 shadow-2xl flex flex-col md:flex-row">
          {/* LADO IZQUIERDO: Fotografía de marca con badge de ubicación */}
          <div
            className="relative min-h-[250px] md:min-h-[450px] md:w-1/2 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: "url('/img/1.jpeg')" }}
          >
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-10">
              <p className="text-[9px] text-white uppercase font-bold tracking-[0.2em] flex items-center gap-2">
                Surco, Lima
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/20 to-zinc-950/60 md:to-transparent" />
          </div>

          {/* LADO DERECHO: Panel de información y accesos directos */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-zinc-950">
            {/* Identificador de marca de agua */}
            <span className="absolute -right-4 -bottom-4 text-7xl font-black text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-archivo)]">
              PALOOKA
            </span>

            <div className="relative z-10 space-y-10">
              {/* SECCIÓN: DIRECCIÓN (Clickeable a Google Maps) */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-5 items-start group cursor-pointer"
              >
                <div className="mt-1 bg-red-600/10 p-3 rounded-2xl border border-red-600/20 transition-colors group-hover:bg-red-600/20">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-2 opacity-50">
                    Dirección
                  </h3>
                  <p className="text-white text-lg font-bold leading-tight group-hover:text-red-500 transition-colors">
                    Calle Doña Elsa 157
                  </p>
                  <p className="text-zinc-500 text-xs mt-1 italic">
                    A espaldas del Estadio Julio Montjoy
                  </p>
                </div>
              </a>

              {/* SECCIÓN: HORARIOS */}
              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-red-600/10 p-3 rounded-2xl border border-red-600/20">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-2 opacity-50">
                    Horarios
                  </h3>
                  <p className="text-white text-lg font-bold uppercase">
                    Lunes a Sábado
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-red-500 font-black text-sm">
                      07:00
                    </span>
                    <div className="h-px w-4 bg-zinc-800" />
                    <span className="text-red-500 font-black text-sm">
                      20:00
                    </span>
                  </div>
                </div>
              </div>

              {/* SECCIÓN: CANALES DIGITALES */}
              <div className="space-y-4">
                {/* Enlace WhatsApp */}
                <a
                  href="https://wa.me/51980775633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 items-center p-5 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-3xl transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="bg-zinc-800 group-hover:bg-green-600/10 p-3 rounded-2xl transition-colors">
                    <svg
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2a10 10 0 00-8.66 15l-1.3 4.75L6.9 20.5A10 10 0 1012 2zm4.91 13.41c-.2.56-1.17 1.1-1.6 1.15-.41.05-.92.07-1.48-.11-.34-.11-.78-.25-1.35-.49-2.37-1.03-3.92-3.44-4.04-3.6-.12-.17-.96-1.27-.96-2.42 0-1.15.6-1.71.81-1.94.21-.23.46-.29.61-.29.15 0 .31.01.44.01.14 0 .32-.05.5.38.2.48.68 1.66.74 1.78.06.12.1.27.02.44-.07.17-.11.27-.22.41-.11.14-.23.31-.33.41-.11.11-.22.22-.09.43.13.21.59.98 1.27 1.59.87.78 1.61 1.02 1.84 1.13.23.11.36.09.49-.05.13-.14.56-.65.71-.87.15-.23.3-.19.5-.11.21.08 1.33.63 1.56.74.23.11.38.17.43.26.05.09.05.52-.15 1.08z" />
                    </svg>
                  </div>
                  <p className="text-zinc-200 font-bold uppercase text-sm">
                    WhatsApp Directo
                  </p>
                </a>

                {/* Contenedor de Redes Sociales */}
                <div className="flex gap-4 items-center p-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
                  <div className="bg-zinc-800 p-3 rounded-2xl">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="7" y="2" width="10" height="20" rx="2" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] mb-2">
                      Redes Sociales
                    </h4>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/joe.palooka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/gimnasio.palooka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACCESO FINAL: Google Maps Button */}
              <div className="pt-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-white text-black px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
                >
                  Ver en Google Maps
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
