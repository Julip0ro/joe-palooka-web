"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

/**
 * Sección que muestra las instalaciones del gimnasio.
 * Presenta imágenes del ring, zona de trabajo y equipamiento.
 */
export default function Infrastructure() {
  return (
    <section className="relative bg-[#121212] px-4 sm:px-6">
      <div className="max-w-5xl mx-auto pt-10 sm:pt-12 md:pt-20 pb-10 sm:pb-12 md:pb-20">
        {/* Bloque de texto principal */}
        <div className="mb-6 sm:mb-8 md:mb-10 max-w-2xl">
          <Reveal>
            <h2 className="text-white text-[clamp(1.8rem,6vw,3rem)] sm:text-[clamp(2rem,7vw,3.5rem)] md:text-[clamp(2.2rem,8vw,4.5rem)] font-[family-name:var(--font-archivo)] uppercase leading-[0.85] sm:leading-[0.8] tracking-tighter mb-3 sm:mb-4">
              Infraestructura <br />
              <span className="text-red-600">Sin Filtros</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed border-l border-red-600/40 pl-4 sm:pl-5">
              Joe Palooka no es un gimnasio de lujo, es un espacio de
              entrenamiento real. Aquí vienes a sudar y a aprender.
            </p>
          </Reveal>
        </div>

        {/* Galería de imágenes responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-3">
          {/* Imagen del ring oficial */}
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/img/r2.jpeg"
                alt="Ring oficial de boxeo Joe Palooka"
                fill
                className="object-cover grayscale opacity-60 hover:opacity-100 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-black/60 backdrop-blur-sm text-[8px] sm:text-[9px] text-white font-bold uppercase">
                Ring Oficial
              </div>
            </div>
          </Reveal>

          {/* Imagen de la zona de trabajo */}
          <Reveal delay={200}>
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/img/r1.jpeg"
                alt="Zona de entrenamiento Joe Palooka"
                fill
                className="object-cover grayscale opacity-60 hover:opacity-100 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-black/60 backdrop-blur-sm text-[8px] sm:text-[9px] text-white font-bold uppercase">
                Zona de Trabajo
              </div>
            </div>
          </Reveal>

          {/* Imagen de sacos y peras */}
          <Reveal delay={300}>
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 sm:col-span-2 md:col-span-1">
              <Image
                src="/img/r3.jpeg"
                alt="Sacos y peras de velocidad Joe Palooka"
                fill
                className="object-cover grayscale opacity-60 hover:opacity-100 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-black/60 backdrop-blur-sm text-[8px] sm:text-[9px] text-white font-bold uppercase">
                Sacos y Peras
              </div>
            </div>
          </Reveal>
        </div>

        {/* Nota final minimalista */}
        <Reveal delay={400}>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 opacity-60">
            <div className="hidden sm:block h-px grow bg-white/10" />
            <p className="text-zinc-500 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-center whitespace-normal sm:whitespace-nowrap">
              Espacio apto para sparring real y técnica olímpica
            </p>
            <div className="hidden sm:block h-px grow bg-white/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
