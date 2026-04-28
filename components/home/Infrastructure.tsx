"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const galeria = [
  { img: "/img/r2.jpeg", label: "Ring Oficial" },
  { img: "/img/r1.jpeg", label: "Zona de Trabajo" },
  { img: "/img/r3.jpeg", label: "Equipamiento" },
];

export default function Infrastructure() {
  return (
    <section
      className="relative bg-zinc-950 py-12 md:py-16 px-6 overflow-hidden"
      data-theme="dark"
    >
      {/* MARCA DE AGUA DE PUNTOS: SURCO (Estilo Metodología/Staff) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        {/* Móvil: S Gigante */}
        <span
          className="md:hidden text-[120vw] font-[family-name:var(--font-archivo)] font-black uppercase leading-none text-transparent"
          style={{
            backgroundImage: "radial-gradient(#ffffff 2px, transparent 0)",
            backgroundSize: "14px 14px",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            opacity: 0.03,
          }}
        >
          S
        </span>
        {/* Desktop: SURCO Horizontal */}
        <span
          className="hidden md:block text-[22vw] font-[family-name:var(--font-archivo)] font-black uppercase leading-none text-transparent"
          style={{
            backgroundImage: "radial-gradient(#ffffff 2.5px, transparent 0)",
            backgroundSize: "18px 18px",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            opacity: 0.03,
          }}
        >
          SURCO
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* CABECERA: Alineada con Staff/Features */}
        <div className="mb-10 md:mb-14">
          <Reveal>
            <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-2 block">
              Instalaciones
            </span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-archivo)] uppercase leading-[0.85] tracking-tighter max-w-xl">
              Equipamiento <br />
              <span className="text-red-600">Sin Filtros</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-zinc-500 text-xs md:text-sm mt-4 font-medium uppercase tracking-wide border-l border-red-600/30 pl-4">
              Joe Palooka no es un gimnasio de lujo, es un espacio de
              entrenamiento real. Aquí vienes a sudar y a aprender.
            </p>
          </Reveal>
        </div>

        {/* GRID DE IMÁGENES: Estilo Cinematográfico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 lg:gap-4">
          {galeria.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm shadow-2xl">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover grayscale contrast-[1.1] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Etiqueta minimalista al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                    {item.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CIERRE SUTIL */}
        <Reveal delay={400}>
          <div className="mt-12 text-center">
            <p className="text-zinc-600 text-[8px] uppercase tracking-[0.3em] font-bold">
              EST. 1988 — Santiago de Surco
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
