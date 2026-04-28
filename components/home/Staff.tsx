"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const profesores = [
  {
    nombre: "Victor Paredes",
    cargo: "Ex Seleccionado Nacional",
    img: "/img/victorp.webp",
  },
  {
    nombre: "Luis Paredes",
    cargo: "Ex Entrenador Selección",
    img: "/img/luisp.webp",
  },
  {
    nombre: "Alan Paredes",
    cargo: "7x Campeón Nacional",
    img: "/img/alanp.webp",
  },
];

export default function Staff() {
  return (
    <section
      className="relative bg-[#f2f2f0] py-12 md:py-16 px-6 overflow-hidden"
      data-theme="light"
    >
      {/* MARCA DE AGUA DE PUNTOS (Estilo Metodología) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        {/* MÓVIL: PAR Vertical Masivo (Ocupa todo el fondo) */}
        <div className="md:hidden flex flex-col items-center leading-[0.7] opacity-[0.04]">
          {["P", "A", "R"].map((letra) => (
            <span
              key={letra}
              className="text-[120vw] font-[family-name:var(--font-archivo)] font-black uppercase text-transparent"
              style={{
                backgroundImage: "radial-gradient(#000000 3px, transparent 0)",
                backgroundSize: "15px 15px",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {letra}
            </span>
          ))}
        </div>

        {/* DESKTOP: PAREDES Horizontal */}
        <span
          className="hidden md:block text-[20vw] font-[family-name:var(--font-archivo)] font-black uppercase leading-none text-transparent opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#000000 2.5px, transparent 0)",
            backgroundSize: "15px 15px",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          PAREDES
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* CABECERA COMPACTA */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-2 block">
              PROFESIONALES
            </span>
            <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-archivo)] uppercase leading-[0.85] tracking-tighter">
              Nuestros <span className="text-red-600">Entrenadores</span>
            </h2>
          </Reveal>
        </div>

        {/* GRID DE ENTRENADORES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-4 lg:gap-10 items-start">
          {profesores.map((profesor, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="flex flex-col items-center text-center group">
                {/* IMAGEN CIRCULAR GRANDE */}
                <div className="relative w-52 h-52 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mb-6 overflow-hidden rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 bg-zinc-200 border-2 border-white shadow-2xl shadow-black/10">
                  <Image
                    src={profesor.img}
                    alt={profesor.nombre}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 208px, 240px"
                  />
                </div>

                {/* TEXTO */}
                <h3 className="text-zinc-900 text-xl font-[family-name:var(--font-archivo)] uppercase tracking-tight mb-1">
                  {profesor.nombre}
                </h3>

                <p className="text-zinc-500 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] leading-tight max-w-[180px]">
                  {profesor.cargo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CIERRE SUTIL */}
        <Reveal delay={400}>
          <div className="mt-14 text-center">
            <p className="text-zinc-400 text-[8px] uppercase tracking-[0.3em] font-bold opacity-60">
              Legado Paredes — Santiago de Surco
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
