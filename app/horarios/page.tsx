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
   * Efecto de posicionamiento inicial.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      todayRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex flex-col items-center min-h-screen pt-10 p-6 md:p-10 overflow-hidden bg-zinc-950 selection:bg-red-600/30 font-[family-name:var(--font-inter)]">
      {/* MEDIA ASSETS */}
      <div
        className="absolute top-0 left-0 w-full h-[65vh] z-0 opacity-30 grayscale pointer-events-none 
                   bg-[url('/img/4m.png')] bg-cover 
                   bg-[position:25%_40%] md:bg-[position:center_40%]"
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 w-full h-[65vh] z-10 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Título en Archivo Black con tipografía fluida */}
        <Reveal delay={100}>
          <h1 className="text-center text-[15vw] md:text-6xl font-[family-name:var(--font-archivo)] uppercase mb-3 md:mb-6 leading-tight tracking-tighter">
            horarios
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[10px] md:text-xs font-[family-name:var(--font-inter)] font-bold tracking-[0.2em] text-zinc-300 max-w-[90vw] md:max-w-none leading-relaxed text-center mx-auto mb-6 md:mb-12 uppercase">
            <span className="inline-block md:whitespace-nowrap">
              HORARIOS COMPLETAMENTE FLEXIBLES
            </span>
          </p>
        </Reveal>

        {/* LISTADO DE CRONOGRAMA */}
        <div className="w-full max-w-2xl flex flex-col gap-6 mx-auto">
          {cronograma.map((item, index) => {
            const esHoy = item.dia === hoy;

            return (
              <Reveal key={index} delay={index * 80}>
                <details
                  ref={esHoy ? todayRef : null}
                  open={esHoy}
                  className="group bg-zinc-950/70 border border-zinc-700 rounded-sm scroll-mt-[130px] transition-all overflow-hidden"
                >
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center hover:bg-zinc-100/10 transition-colors">
                    <h3 className="font-bold text-xl uppercase text-white flex items-center tracking-tight font-[family-name:var(--font-archivo)]">
                      {item.dia}
                      {esHoy && (
                        <span className="ml-3 text-[10px] bg-red-600 text-white px-2 py-1 rounded-full font-bold leading-none font-[family-name:var(--font-inter)]">
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

                  <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
                    <p className="font-black text-zinc-500 text-[11px] tracking-[0.2em] uppercase">
                      SESIÓN: 60 a 90 MIN
                    </p>

                    {item.clases.map((clase, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-800/70 border-l-4 border-red-600 p-4 shadow-inner flex justify-between items-center"
                      >
                        <div>
                          <span className="text-[16px] font-bold text-zinc-100">
                            {clase.horario}
                          </span>
                          <p className="text-[13px] text-red-600 font-bold uppercase mt-1 tracking-wide">
                            Profesor:{" "}
                            <span className="text-zinc-100">
                              {clase.profesor}
                            </span>
                          </p>
                        </div>

                        <button
                          onClick={() => router.push("/precios")}
                          className="bg-zinc-800 text-zinc-400 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-600 hover:scale-110 active:scale-95 transition-all"
                          aria-label="Ver precios del plan"
                        >
                          <span className="block transform -rotate-90 text-[12px] font-bold">
                            ▼
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </details>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
