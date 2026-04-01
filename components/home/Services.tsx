"use client";

import Reveal from "@/components/Reveal";

const services = [
  {
    titulo: "Alquiler de Gimnasio",
    descripcion: "Para producciones, sesiones de fotos o eventos.",
    mensaje: "alquiler%20del%20gimnasio",
  },
  {
    titulo: "Alquiler de Ring",
    descripcion: "Uso profesional para sparrings o grabaciones.",
    mensaje: "alquiler%20del%20ring",
  },
];

/**
 * Sección de servicios complementarios del gimnasio.
 * Presenta las opciones de alquiler de instalaciones con tarjetas
 * que mantienen la estética de las secciones de fondo claro.
 */
export default function Services() {
  return (
    <section className="relative bg-[#f2f2f0] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decoración superior: línea de acento que conecta con otras secciones */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <span className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block">
              Espacios Exclusivos
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-archivo)] uppercase tracking-tighter">
              Alquiler de <span className="text-red-600">Instalaciones</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-px bg-red-600 mx-auto mt-4 md:mt-6" />
          </Reveal>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((item, index) => (
            <Reveal key={index} delay={300 + index * 100}>
              <div className="group bg-white border border-zinc-200 p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-zinc-300 rounded-sm">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-zinc-900 text-xl md:text-2xl font-[family-name:var(--font-archivo)] uppercase tracking-tight mb-3">
                    {item.titulo}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm uppercase font-bold leading-relaxed tracking-wider">
                    {item.descripcion}
                  </p>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <a
                    href={`https://wa.me/51980775633?text=Hola,%20quisiera%20información%20sobre%20el%20${item.mensaje}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] border-b-2 border-red-600/20 hover:border-red-600 pb-1 transition-all inline-flex items-center gap-2"
                  >
                    Consultar ahora
                    <span className="text-red-600 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>

                  {/* Indicador visual de disponibilidad */}
                  <span className="text-zinc-400 text-[8px] md:text-[9px] uppercase tracking-wider font-bold">
                    Disponible todo el año
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nota adicional sobre condiciones de alquiler */}
        <Reveal delay={500}>
          <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
            <p className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium leading-relaxed">
              Consultar disponibilidad con anticipación.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Decoración inferior: línea sutil */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
    </section>
  );
}
