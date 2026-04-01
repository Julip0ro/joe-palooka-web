"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cronograma } from "@/data/cronograma";
import Reveal from "@/components/Reveal";

/**
 * HorariosPage - Gestión de cronograma semanal.
 * Tipografía: Archivo Black para títulos, Inter para el cuerpo y datos.
 */
export default function HorariosPage() {
  const router = useRouter();

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const hoy = diasSemana[new Date().getDay()];
  const todayRef = useRef<HTMLDetailsElement>(null);

  /**
   * Efecto de posicionamiento inicial con retraso para asegurar
   * que el navbar no interfiera con el scroll.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (todayRef.current) {
        const elementPosition = todayRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex flex-col items-center min-h-screen pt-24 md:pt-32 pb-20 md:pb-32 px-4 sm:px-6 md:px-10 overflow-hidden bg-zinc-950 selection:bg-red-600/30 font-[family-name:var(--font-inter)]">
      {/* Imagen de fondo decorativa */}
      <div
        className="absolute top-0 left-0 w-full h-[50vh] md:h-[65vh] z-0 opacity-30 grayscale pointer-events-none 
                   bg-[url('/img/4m.png')] bg-cover 
                   bg-[position:25%_40%] md:bg-[position:center_40%]"
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 w-full h-[50vh] md:h-[65vh] z-10 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950 pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Título en Archivo Black con tipografía fluida */}
        <Reveal delay={100}>
          <h1 className="text-center text-[12vw] sm:text-[10vw] md:text-6xl font-[family-name:var(--font-archivo)] uppercase mb-2 md:mb-4 leading-tight tracking-tighter">
            horarios
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-inter)] font-bold tracking-[0.2em] text-zinc-400 max-w-[90vw] md:max-w-none leading-relaxed text-center mx-auto mb-8 md:mb-12 uppercase">
            <span className="inline-block md:whitespace-nowrap">
              HORARIOS COMPLETAMENTE FLEXIBLES
            </span>
          </p>
        </Reveal>

        {/* Listado de cronograma */}
        <div className="w-full max-w-2xl flex flex-col gap-4 md:gap-6 mx-auto">
          {cronograma.map((item, index) => {
            const esHoy = item.dia === hoy;

            return (
              <Reveal key={index} delay={index * 50}>
                <details
                  ref={esHoy ? todayRef : null}
                  open={esHoy}
                  className="group bg-zinc-950/70 border border-zinc-800 rounded-sm scroll-mt-32 transition-all overflow-hidden"
                >
                  <summary className="list-none p-4 sm:p-5 md:p-6 cursor-pointer flex justify-between items-center hover:bg-zinc-100/10 transition-colors">
                    <h3 className="font-bold text-lg sm:text-xl uppercase text-white flex items-center tracking-tight font-[family-name:var(--font-archivo)]">
                      {item.dia}
                      {esHoy && (
                        <span className="ml-2 sm:ml-3 text-[8px] sm:text-[9px] md:text-[10px] bg-red-600 text-white px-2 py-0.5 sm:py-1 rounded-full font-bold leading-none font-[family-name:var(--font-inter)]">
                          HOY
                        </span>
                      )}
                    </h3>

                    <span
                      className="text-transparent group-open:rotate-180 transition-transform duration-300"
                      style={{ WebkitTextStroke: "1px #dc2626" }}
                    >
                      ▼
                    </span>
                  </summary>

                  <div className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 pt-2 flex flex-col gap-3 sm:gap-4">
                    <p className="font-black text-zinc-500 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase">
                      SESIÓN: 60 a 90 MIN
                    </p>

                    {item.clases.map((clase, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-800/70 border-l-4 border-red-600 p-3 sm:p-4 shadow-inner flex justify-between items-center"
                      >
                        <div>
                          <span className="text-sm sm:text-base font-bold text-zinc-100">
                            {clase.horario}
                          </span>
                          <p className="text-[11px] sm:text-[13px] text-red-600 font-bold uppercase mt-1 tracking-wide">
                            Profesor:{" "}
                            <span className="text-zinc-100">
                              {clase.profesor}
                            </span>
                          </p>
                        </div>

                        <button
                          onClick={() => router.push("/precios")}
                          className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600 text-red-600 hover:text-white rounded-md transition-all text-[10px] sm:text-[11px] font-bold uppercase tracking-wider"
                          aria-label="Ver planes"
                        >
                          Ver planes
                        </button>
                      </div>
                    ))}
                  </div>
                </details>
              </Reveal>
            );
          })}
        </div>

        {/* Espaciador inferior adicional para separación del footer */}
        <div className="mt-12 md:mt-16" />
      </div>
    </main>
  );
}
