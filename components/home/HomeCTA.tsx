"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HomeCTA() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 border-t border-white/5">
      {/* 1. MARCA DE AGUA COMPACTA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden">
        <span className="text-[25vw] font-[family-name:var(--font-archivo)] font-black uppercase leading-none tracking-tighter">
          Round
        </span>
      </div>

      {/* 2. CONTENIDO CENTRALIZADO */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal delay={200}>
          <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">
            — El momento es ahora
          </span>
        </Reveal>

        <Reveal delay={400}>
          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-archivo)] uppercase leading-[0.9] tracking-tighter mb-10">
            ¿Listo para el <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
            >
              primer round?
            </span>
          </h2>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-col items-center">
            {/* BOTÓN MÁS COMPACTO */}
            <Link
              href="/precios"
              className="px-12 py-4 bg-red-600 text-white hover:bg-white hover:text-black font-black uppercase text-[11px] tracking-[0.3em] transition-all duration-500 rounded-sm shadow-[0_0_50px_rgba(220,38,38,0.2)] active:scale-95"
            >
              Inscribirme
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
