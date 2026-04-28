"use client";

import { useEffect, useRef, useState } from "react";

const puntos = [
  {
    titulo: "Técnica Olímpica",
    descripcion:
      "Fundamentos biomecánicos para maximizar potencia y precisión.",
  },
  {
    titulo: "Estrategia de Ring",
    descripcion: "Gestión de distancia y dominio del centro del cuadrilátero.",
  },
  {
    titulo: "Preparación Real",
    descripcion: "Ciclos de entrenamiento adaptados a tu progreso individual.",
  },
];

export default function Methodology() {
  const pyramidRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!pyramidRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1,
      );

      pyramidRef.current.style.opacity = `${1 - progress * 0.9}`;
      pyramidRef.current.style.transform = `translateY(${progress * 120}px)`;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950 py-20 px-6"
    >
      {/* PIRÁMIDE */}
      <div
        ref={pyramidRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260vw] md:w-full h-[65vh] md:h-[45vh] pointer-events-none z-0"
        style={{
          background: "rgba(255,255,255,0.08)",
          clipPath: "polygon(0% 100%, 100% 100%, 50% 0%)",
        }}
      />

      {/* TEXTURA DE FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        className={`relative z-10 max-w-5xl mx-auto w-full transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
          {/* CONTENEDOR DE TÍTULO CON BANDERA */}
          <div className="flex flex-col items-center relative">
            {/* BANDERA DE PERÚ DE PUNTOS RESPONSIVA */}
            <div className="absolute top-[60%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-36 md:w-full md:max-w-[480px] md:h-72 pointer-events-none opacity-30 z-[-1] flex">
              <div
                className="flex-1"
                style={{
                  backgroundImage:
                    "radial-gradient(#ff0000 2.5px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div
                className="flex-1"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 2.5px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div
                className="flex-1"
                style={{
                  backgroundImage:
                    "radial-gradient(#ff0000 2.5px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>

            <span className="text-white text-[10px] uppercase tracking-[0.5em] mb-4">
              Metodología
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-archivo)] uppercase leading-tight tracking-tight">
              Entrena como la <br />
              Selección
            </h2>
          </div>

          <div className="max-w-md mx-auto space-y-8 text-left">
            {puntos.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start gap-3">
                  {/* acento sutil */}
                  <div className="w-[2px] h-4 bg-red-600 mt-1" />

                  <div>
                    <h3 className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
                      {item.titulo}
                    </h3>

                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
