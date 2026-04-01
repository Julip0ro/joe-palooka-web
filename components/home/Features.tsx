"use client";

import Reveal from "@/components/Reveal";

const features = [
  {
    num: "01",
    t: "Entrenamiento Pro",
    d: "Metodología basada en los fundamentos técnicos de la alta competencia olímpica.",
  },
  {
    num: "02",
    t: "Equipamiento",
    d: "Sacos de golpeo pesado, peras de velocidad y ring con medidas oficiales.",
  },
  {
    num: "03",
    t: "Comunidad",
    d: "Ambiente de respeto mutuo donde la disciplina es nuestro lenguaje común.",
  },
  {
    num: "04",
    t: "Flexibilidad",
    d: "Múltiples turnos de lunes a sábado que se adaptan a tu ritmo de vida.",
  },
];

/**
 * Sección de características principales del gimnasio.
 * Presenta los pilares fundamentales que distinguen a Joe Palooka
 * como centro de entrenamiento de alto rendimiento.
 */
export default function Features() {
  return (
    <section className="relative bg-[#f2f2f0] py-16 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
      {/* Decoración superior que conecta visualmente con el Hero */}
      <div className="absolute top-0 left-0 w-full h-[6px] md:h-[8px] z-30 flex justify-end">
        <div className="w-full h-full bg-gradient-to-r from-red-600 via-red-600/40 to-transparent opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Bloque de título ubicado a la izquierda */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <Reveal>
              <h2 className="text-zinc-900 text-[clamp(2.5rem,12vw,4.5rem)] font-[family-name:var(--font-archivo)] uppercase leading-[0.9] tracking-tighter">
                La técnica <br />
                <span className="text-red-600">sobre</span> <br />
                la fuerza
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="h-[2px] w-16 md:w-24 bg-red-600 mt-8 md:mt-12 mb-6 md:mb-8" />
              <p className="text-zinc-600 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-sm">
                Joe Palooka es un legado de disciplina. <br />
                <span className="text-zinc-500 font-light italic">
                  No solo enseñamos a golpear, enseñamos a pensar.
                </span>
              </p>
            </Reveal>
          </div>

          {/* Cuadrícula de características */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-300 border border-zinc-300">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#f2f2f0] p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-white transition-all duration-500 group"
              >
                <Reveal delay={index * 100}>
                  <div className="flex flex-col h-full">
                    <span className="text-red-600 font-mono text-[9px] md:text-[10px] tracking-[0.3em] mb-4 md:mb-6 lg:mb-8 block font-bold uppercase">
                      — Característica {item.num}
                    </span>
                    <h3 className="text-zinc-900 text-base sm:text-lg md:text-xl font-[family-name:var(--font-archivo)] uppercase mb-3 md:mb-4 tracking-tight">
                      {item.t}
                    </h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-normal">
                      {item.d}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marca de agua decorativa visible solo en pantallas grandes */}
      <div className="absolute right-0 bottom-10 opacity-[0.03] pointer-events-none select-none hidden lg:block overflow-hidden">
        <span className="text-[15vw] font-black uppercase text-zinc-950 translate-x-1/3">
          PALOOKA
        </span>
      </div>
    </section>
  );
}
