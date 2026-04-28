"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

/**
 * Features - Versión Minimalista y Compacta
 * Imagen horizontal a la izquierda, texto directo a la derecha.
 */
export default function Features() {
  return (
    <section className="relative bg-[#f2f2f0] py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LADO IZQUIERDO: IMAGEN CINEMÁTICA (MÁS BAJA) */}
          <Reveal>
            <div className="relative aspect-video overflow-hidden rounded-sm grayscale contrast-[1.1] brightness-90 border border-zinc-200">
              <Image
                src="/img/1m.png"
                alt="Joe Palooka Boxing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>

          {/* LADO DERECHO: TEXTO DIRECTO */}
          <div className="flex flex-col">
            <Reveal>
              <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
                Alto Rendimiento
              </span>
              <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-archivo)] uppercase leading-[0.85] tracking-tighter mb-6">
                Técnica <br />
                <span className="text-red-600">sobre</span> fuerza.
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-medium max-w-md">
                Entrenamos bajo fundamentos olímpicos, integrando biomecánica de
                alta competencia con equipamiento profesional. Somos una
                comunidad de respeto y disciplina con horarios flexibles de
                lunes a sábado en el corazón de Surco.
              </p>
            </Reveal>

            {/* Detalle final mínimo */}
            <Reveal delay={300} className="mt-8">
              <p className="text-zinc-400 text-[9px] uppercase tracking-[0.2em] font-bold">
                Santiago de Surco, Lima
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
