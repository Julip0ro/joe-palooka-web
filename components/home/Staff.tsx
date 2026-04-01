"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const profesores = [
  {
    nombre: "Victor Paredes",
    especialidad: "Ex Seleccionado Nacional",
    img: "/img/victorp.webp",
  },
  {
    nombre: "Luis Paredes",
    especialidad: "Ex Entrenador de la Selección Peruana",
    img: "/img/luisp.webp",
  },
  {
    nombre: "Alan Paredes",
    especialidad: "7x Campeón Nacional",
    img: "/img/alanp.webp",
  },
];

/**
 * Sección que presenta al cuerpo de entrenadores del gimnasio.
 * Muestra la trayectoria y especialidad de cada maestro de boxeo.
 */
export default function Staff() {
  return (
    <section className="relative bg-[#e5e5e5] py-8 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Marca de agua con el apellido familiar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
        <span className="text-[18vw] sm:text-[20vw] md:text-[22vw] font-[family-name:var(--font-archivo)] font-black uppercase text-zinc-950 opacity-[0.03] leading-none tracking-tighter">
          Paredes
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Cabecera de la sección */}
        <div className="flex flex-col items-center mb-6 md:mb-12 lg:mb-14">
          <Reveal>
            <h2 className="text-zinc-950 text-[clamp(1.6rem,5vw,3rem)] md:text-[clamp(2rem,8vw,4rem)] font-[family-name:var(--font-archivo)] uppercase tracking-tighter leading-none text-center">
              Nuestros <span className="text-red-600">Entrenadores</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="h-[2px] w-8 md:w-12 bg-red-600 mt-3 md:mt-6 mx-auto" />
          </Reveal>
        </div>

        {/* Cuadrícula de tarjetas de entrenadores - tarjetas más pequeñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-5 max-w-4xl mx-auto">
          {profesores.map((profesor, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative flex flex-col bg-white/40 p-1.5 md:p-2 transition-all duration-500 hover:bg-white shadow-sm hover:shadow-xl border border-black/5 rounded-sm">
                {/* Contenedor de imagen con enfoque en el rostro */}
                <div className="relative aspect-[3/4] overflow-hidden transition-all duration-700 bg-zinc-300 md:grayscale md:contrast-[1.1] md:group-hover:grayscale-0">
                  <Image
                    src={profesor.img}
                    alt={profesor.nombre}
                    fill
                    className="object-cover object-top transform transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectPosition:
                        profesor.nombre === "Alan Paredes"
                          ? "center 20%"
                          : "center center",
                    }}
                  />

                  {/* Superposición de degradado inferior para mejorar legibilidad del nombre */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                  {/* Nombre ubicado en la parte inferior de la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 text-left pointer-events-none">
                    <h3 className="text-white text-lg sm:text-xl md:text-3xl font-[family-name:var(--font-archivo)] uppercase leading-tight tracking-tighter drop-shadow-2xl">
                      {profesor.nombre.split(" ")[0]}
                      <br />
                      <span className="text-sm sm:text-base md:text-xl font-normal opacity-90">
                        {profesor.nombre.split(" ")[1]}
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Información profesional del entrenador */}
                <div className="py-3 md:py-4 px-2 md:px-3 text-center">
                  <p className="text-red-600 font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-1">
                    Entrenador
                  </p>
                  <p className="text-zinc-600 text-[8px] sm:text-[9px] md:text-[11px] uppercase font-bold tracking-tight leading-tight max-w-[160px] mx-auto">
                    {profesor.especialidad}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Texto de cierre */}
        <Reveal delay={400}>
          <div className="mt-8 md:mt-12 lg:mt-14 text-center max-w-xl mx-auto px-4">
            <p className="text-zinc-500 text-[8px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed font-medium">
              Selección nacional, campeonatos y trayectoria.
              <br />
              Un{" "}
              <span className="text-zinc-800 font-bold">
                legado familiar
              </span>{" "}
              que se transmite en cada round.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
