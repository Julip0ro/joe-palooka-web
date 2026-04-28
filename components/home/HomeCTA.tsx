"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HomeCTA() {
  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-zinc-950 border-t border-white/5">
      {/* 1. MARCA DE AGUA RESPONSIVA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden">
        <span className="text-[35vw] md:text-[25vw] font-[family-name:var(--font-archivo)] font-black uppercase leading-none tracking-tighter">
          Round
        </span>
      </div>

      {/* 2. CONTENIDO CENTRALIZADO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 text-center">
        {/* SUBTÍTULO */}
        <Reveal delay={0} className="duration-500">
          <span className="text-red-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6 block">
            El momento es ahora
          </span>
        </Reveal>

        {/* TÍTULO CON TAMAÑO DINÁMICO (Usando clamp para evitar desbordes) */}
        <Reveal delay={100} className="duration-500">
          <h2 className="text-white text-[clamp(2.5rem,10vw,6.5rem)] font-[family-name:var(--font-archivo)] uppercase leading-[0.9] tracking-tighter mb-8 md:mb-12">
            ¿Listo para el <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              primer round?
            </span>
          </h2>
        </Reveal>

        {/* BOTÓN RESPONSIVO */}
        <Reveal delay={200} className="duration-500">
          <div className="flex flex-col items-center">
            <Link
              href="/precios"
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-red-600 text-white hover:bg-white hover:text-black font-black uppercase text-[10px] md:text-[11px] tracking-[0.25em] transition-all duration-500 rounded-sm shadow-[0_0_40px_rgba(220,38,38,0.15)] active:scale-95"
            >
              Inscribirme
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
