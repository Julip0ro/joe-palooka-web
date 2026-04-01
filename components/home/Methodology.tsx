"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const puntos = [
  {
    titulo: "Técnica Olímpica",
    descripcion:
      "Fundamentos biomecánicos de alta competencia para maximizar potencia y precisión en cada golpe.",
  },
  {
    titulo: "Estrategia de Ring",
    descripcion:
      "Gestión de la distancia, lectura del oponente y dominio del centro del cuadrilátero.",
  },
  {
    titulo: "Preparación Real",
    descripcion:
      "Ciclos de entrenamiento basados en competencia, adaptados a tu progreso individual.",
  },
];

/**
 * Sección que presenta la metodología de entrenamiento del gimnasio.
 * Enfatiza el enfoque técnico basado en estándares de alta competencia.
 */
export default function Methodology() {
  return (
    <section className="relative bg-[#121212] overflow-hidden min-h-screen lg:min-h-[800px] flex items-stretch">
      {/* Contenedor de imagen ubicado en el lado derecho */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0 opacity-60 lg:opacity-100">
        <div className="relative w-full h-full">
          <Image
            src="/img/boxh1.webp"
            alt="Metodología Joe Palooka"
            fill
            className="object-cover object-top lg:object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* Degradado que desvanece el borde izquierdo de la imagen en desktop */}
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#121212] via-[#121212]/40 to-transparent w-full" />

          {/* Degradado móvil que desvanece de abajo hacia arriba para legibilidad del texto */}
          <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        </div>
      </div>

      {/* Contenido textual desplazado hacia el centro */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center px-8 sm:px-12 md:px-16 py-24 md:py-32">
        <div className="max-w-xl w-full mx-auto lg:mx-0 lg:ml-16 xl:ml-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-red-600" />
              <span className="text-red-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
                Sistema de trabajo
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-white text-[clamp(2.5rem,8vw,4.5rem)] font-[family-name:var(--font-archivo)] uppercase leading-[0.85] tracking-tighter mb-12 md:mb-16">
              Entrena como la <br />
              <span className="text-red-600">Selección Nacional</span>
            </h2>
          </Reveal>

          <div className="space-y-10 md:space-y-14">
            {puntos.map((item, index) => (
              <Reveal key={index} delay={300 + index * 100}>
                <div className="group border-l-2 border-white/5 hover:border-red-600 pl-6 transition-colors duration-500">
                  <h3 className="text-white text-lg md:text-xl font-[family-name:var(--font-archivo)] uppercase mb-3 tracking-tight">
                    {item.titulo}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <div className="mt-16 border-t border-white/5 pt-8">
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-black">
                Surco · Lima · Perú
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
