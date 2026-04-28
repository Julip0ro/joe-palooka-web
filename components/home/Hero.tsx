"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Calendar, Trophy } from "lucide-react";
import data from "@/data/anuncio.json";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para disparar la apertura del modal
  const handleOpenAnuncio = () => {
    window.dispatchEvent(new Event("abrir-anuncio"));
  };

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-[#121212] font-[family-name:var(--font-inter)]">
      {/* IMAGEN DE FONDO CON PARALLAX */}
      <div
        className="absolute inset-0 z-0 opacity-40 grayscale overflow-hidden pointer-events-none"
        style={{
          transform: `translateY(${offsetY * 0.3}px) translateX(-3%) scale(1.1)`,
          willChange: "transform",
        }}
      >
        <div className="relative w-full h-full md:transform-gpu md:animate-slow-zoom">
          <Image
            src="/img/heroban1.webp"
            alt="Joe Palooka Boxing Club"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Máscaras de contraste */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#121212] via-transparent to-[#121212]/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

      {/* Barra lateral decorativa */}
      <div className="hidden md:flex absolute top-0 right-0 w-28 lg:w-48 h-full z-20 items-center justify-center border-l border-white/10">
        <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-red-600/60 via-red-600/40 to-white/10" />
        <div className="relative z-30">
          <span className="text-white/70 font-[family-name:var(--font-archivo)] text-sm lg:text-lg uppercase tracking-[0.5em] lg:tracking-[0.6em] [writing-mode:vertical-lr] rotate-180 select-none whitespace-nowrap">
            EST. <span className="text-white font-black">1988</span> — SURCO,
            LIMA
          </span>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12 md:pr-28 lg:pr-48 flex flex-col justify-center items-start text-left">
        <Reveal delay={200}>
          <span className="text-zinc-400 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block">
            Santiago de Surco / Lima
          </span>
        </Reveal>

        <Reveal delay={400}>
          <h1 className="text-[clamp(3rem,12vw,8rem)] sm:text-[clamp(3.5rem,13vw,9rem)] font-[family-name:var(--font-archivo)] uppercase tracking-[-0.03em] sm:tracking-[-0.05em] text-white leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 select-none break-words">
            Joe <br /> Palooka
          </h1>
        </Reveal>

        <Reveal delay={600}>
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-[280px] sm:max-w-sm md:max-w-md mb-8 sm:mb-10 leading-relaxed font-medium">
            Domina el arte del boxeo en Joe Palooka. El centro de alto
            rendimiento referente en Surco.
          </p>
        </Reveal>

        <Reveal
          delay={800}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <Link
            href="/precios"
            className="px-8 sm:px-10 py-4 sm:py-5 bg-red-600 hover:bg-zinc-900 text-white font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.2em] transition-all duration-500 text-center rounded-sm shadow-xl active:scale-95"
          >
            Ver Planes
          </Link>
          <Link
            href="/horarios"
            className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.2em] transition-all duration-500 text-center rounded-sm active:scale-95"
          >
            Horarios
          </Link>
        </Reveal>

        {/* --- CARTELITO DE EVENTO (Botón) --- */}
        {data.activo && (
          <div className="hidden lg:block absolute bottom-12 right-16 xl:right-32">
            <Reveal delay={1000}>
              <button
                onClick={handleOpenAnuncio}
                className="bg-black/20 backdrop-blur-md border-l-2 border-red-600 p-4 w-52 shadow-xl hover:bg-zinc-900/80 transition-all active:scale-95 text-left group"
              >
                <span className="text-red-600 font-black text-[8px] uppercase tracking-[0.3em] mb-1 block group-hover:translate-x-1 transition-transform">
                  {data.subtitulo}
                </span>
                <h3 className="text-white font-[family-name:var(--font-archivo)] text-sm uppercase leading-tight mb-3">
                  {data.titulo}
                </h3>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-zinc-400 text-[9px] font-bold uppercase tracking-wider">
                    <Calendar size={10} className="text-red-600" />
                    27 JUN
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-[9px] font-bold uppercase tracking-wider">
                    <Trophy size={10} className="text-red-600" />
                    60kg - 65kg
                  </div>
                </div>
              </button>
            </Reveal>
          </div>
        )}
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 sm:gap-3 group transition-opacity hover:opacity-100 opacity-50"
      >
        <span className="text-[8px] sm:text-[9px] text-white uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">
          BAJAR
        </span>
        <div className="w-[1px] h-10 sm:h-14 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-red-600 animate-scroll-line" />
        </div>
      </button>

      <style jsx global>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
