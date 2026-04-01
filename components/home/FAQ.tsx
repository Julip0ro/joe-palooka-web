"use client";

import Reveal from "@/components/Reveal";

const faqs = [
  {
    pregunta: "¿Necesito experiencia previa para empezar?",
    respuesta:
      "No. Tenemos clases diseñadas específicamente para quienes nunca han usado guantes. Empezamos desde la base técnica con seguimiento personalizado.",
  },
  {
    pregunta: "¿Qué implementos debo llevar a mi primera clase?",
    respuesta:
      "Ropa deportiva cómoda y agua. Nosotros podemos prestarte guantes inicialmente mientras consigues tu propio equipo. También contamos con venta de implementos en el local.",
  },
  {
    pregunta: "¿Cuentan con camerinos?",
    respuesta:
      "Sí, disponemos de espacios para poder cambiarte antes y despues de entrenar.",
  },
  {
    pregunta: "¿Tienen clases de prueba?",
    respuesta:
      "Puedes consultar sobre la clase de cortesia escribiendo a nuestro WhatsApp.",
  },
];

/**
 * Sección de preguntas frecuentes con diseño de acordeón.
 * Implementa fondo claro para mantener consistencia con las secciones
 * de características y personal del gimnasio.
 */
export default function FAQ() {
  return (
    <section className="relative bg-[#f2f2f0] py-20 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <Reveal>
            <span className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block">
              Resolución de Dudas
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-archivo)] uppercase tracking-tighter">
              Preguntas <span className="text-red-600">Frecuentes</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-px bg-red-600 mx-auto mt-4 md:mt-6" />
          </Reveal>
        </div>

        {/* Listado de preguntas en formato acordeón */}
        <div className="space-y-2 md:space-y-3">
          {faqs.map((item, index) => (
            <Reveal key={index} delay={300 + index * 80}>
              <details className="group border-b border-zinc-200 overflow-hidden transition-all duration-500">
                <summary className="list-none py-4 md:py-5 px-4 md:px-6 cursor-pointer flex justify-between items-center hover:bg-zinc-100/80 transition-colors">
                  <span className="text-zinc-800 font-bold text-sm md:text-base lg:text-lg tracking-wide pr-6">
                    {item.pregunta}
                  </span>
                  {/* Icono de flecha minimalista que rota al abrir */}
                  <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <div className="absolute w-full h-[2px] bg-red-600 transition-transform duration-500 group-open:rotate-180" />
                    <div className="absolute w-[2px] h-full bg-red-600 transition-transform duration-500 group-open:rotate-90" />
                  </div>
                </summary>

                <div className="px-4 md:px-6 pb-5 md:pb-6 pt-2 text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
                  {item.respuesta}
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        {/* Nota adicional con llamado a acción */}
        <Reveal delay={700}>
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-white border border-zinc-200 text-center rounded-sm">
            <p className="text-zinc-600 text-xs md:text-sm uppercase tracking-wide font-medium mb-3">
              ¿Tienes otra consulta?
            </p>
            <a
              href="https://wa.me/51980775633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-red-700 transition-colors border-b-2 border-red-600/20 hover:border-red-600 pb-1"
            >
              Escríbenos al WhatsApp
              <span className="text-red-600">→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Decoración lateral opcional para pantallas grandes */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none hidden xl:block">
        <span className="text-[8vw] font-black uppercase text-zinc-800 [writing-mode:vertical-lr] tracking-tighter">
          FAQ
        </span>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />
    </section>
  );
}
