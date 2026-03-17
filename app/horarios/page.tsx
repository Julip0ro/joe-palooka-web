"use client";
import { useEffect, useRef, useState } from "react";
import { cronograma } from "@/data/cronograma";

export default function HorariosPage() {
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

  useEffect(() => {
    // El pequeño delay asegura que el navegador haya renderizado todo antes de scrollear
    const timer = setTimeout(() => {
      if (todayRef.current) {
        todayRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="p-6 md:p-10 flex flex-col items-center pt-10 min-h-screen">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-16 bg-zinc-800"></div>
        <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
          Joe Palooka Boxing
        </span>
        <div className="h-px w-16 bg-zinc-800"></div>
      </div>

      <h2 className="text-3xl font-bold uppercase text-white tracking-tighter text-center">
        Horarios
      </h2>

      <p className="text-xs md:text-xs text-zinc-400 max-w-md mt-5 leading-relaxed text-center mx-auto mb-8">
        <span className="text-zinc-50">Sin turnos fijos:</span> Elige el horario
        que quieras con cualquiera de nuestros planes.
      </p>

      <div className="w-full max-w-2xl flex flex-col gap-6 mx-auto">
        {cronograma.map((item, index) => {
          const esHoy = item.dia === hoy;

          return (
            <details
              key={index}
              ref={esHoy ? todayRef : null}
              open={esHoy}
              className="group bg-zinc-950/70 border border-zinc-700 rounded-sm scroll-mt-24 transition-all overflow-hidden"
            >
              <summary className="list-none p-6 cursor-pointer flex justify-between items-center hover:bg-zinc-100/10 transition-colors">
                <h3 className="font-bold text-xl uppercase text-white flex items-center tracking-tight">
                  {item.dia}
                  {esHoy && (
                    <span className="ml-3 text-[10px] bg-red-600 text-white px-2 py-1 rounded-full font-black leading-none">
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
                <p className="font-black text-zinc-500 text-[11px] tracking-[0.2em]">
                  SESIÓN: 60 a 90 MIN
                </p>

                {item.clases.map((clase, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-800/70 border-l-4 border-red-600 p-4 shadow-inner flex justify-between items-center"
                  >
                    <div>
                      <span className="text-[16px] font-black text-zinc-100">
                        {clase.horario}
                      </span>
                      <p className="text-[13px] text-red-600 font-bold uppercase mt-1 tracking-wide">
                        Profesor:{" "}
                        <span className="text-zinc-100">{clase.profesor}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => (window.location.href = "/precios")}
                      className="bg-zinc-800 text-zinc-400 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-600 hover:scale-110 transition-all"
                    >
                      <span className="block transform -rotate-90 text-[12px] font-bold">
                        ▼
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}
