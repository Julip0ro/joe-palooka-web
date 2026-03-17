"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

/**
 * Componente principal de la página de inicio (Landing Page).
 * Presenta el Hero de alto impacto visual con optimización SEO para el distrito de Surco.
 */
export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-red-600/30">
      <section className="relative flex items-center justify-center w-full h-[92vh] min-h-[600px] overflow-hidden">
        {/* Recurso visual de fondo con filtro de escala de grises persistente */}
        <div
          className="absolute inset-0 z-0 opacity-40 grayscale"
          style={{
            backgroundImage: "url('/img/1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "70% center",
          }}
          aria-hidden="true"
        />

        {/* Capa de gradiente para optimizar contraste y legibilidad */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

        {/* Contenedor de contenido centralizado */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-5xl px-6 mx-auto text-center -mt-20 md:mt-0">
          {/* Identificador geográfico (SEO Local) */}
          <Reveal delay={200}>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-6 md:w-10 bg-red-600" />
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-zinc-500 uppercase font-black whitespace-nowrap">
                Santiago de Surco
              </span>
              <div className="h-[1px] w-6 md:w-10 bg-red-600" />
            </div>
          </Reveal>

          {/* Título principal con tipografía fluida y tratamiento de contorno */}
          <Reveal delay={400}>
            <h1 className="text-[20vw] md:text-[10vw] lg:text-[10rem] font-black uppercase tracking-[-0.05em] text-white leading-[0.8] mb-6 md:mb-8 select-none pointer-events-none">
              BOXEO <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}
              >
                SURCO
              </span>
            </h1>
          </Reveal>

          {/* Propuesta de valor y descripción corta */}
          <Reveal delay={600}>
            <p className="text-zinc-400 text-[11px] md:text-base lg:text-lg max-w-[260px] md:max-w-xl mb-8 md:mb-10 leading-relaxed font-medium">
              Entrena en{" "}
              <span className="text-white border-b border-red-600">
                Joe Palooka
              </span>
              . Uno de los mejores gimnasios dedicados al boxeo del distrito.
            </p>
          </Reveal>

          {/* Acciones principales (Call to Action) */}
          <Reveal
            delay={800}
            className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row md:gap-6 sm:w-auto px-4 sm:px-0"
          >
            <Link
              href="/precios"
              className="w-full sm:min-w-[180px] px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase text-[10px] tracking-[0.2em] transition-all text-center shadow-[0_0_40px_rgba(220,38,38,0.15)] active:scale-95"
            >
              Ver Planes
            </Link>

            <Link
              href="/horarios"
              className="w-full sm:min-w-[180px] px-8 py-4 bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black text-white font-black uppercase text-[10px] tracking-[0.2em] transition-all text-center active:scale-95"
            >
              Horarios
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
