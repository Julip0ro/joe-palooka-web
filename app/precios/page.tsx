"use client";
import Reveal from "@/components/Reveal";

/**
 * Página de Planes y Precios.
 * Diseño unificado con tarjetas de estilo consistente.
 */
export default function PreciosPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 selection:bg-red-600/30 overflow-hidden font-[family-name:var(--font-inter)]">
      {/* Sección superior con imagen de fondo - Oscura */}
      <div className="relative border-b border-white/5" data-theme="dark">
        {/* Imagen de fondo */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 opacity-40 grayscale pointer-events-none bg-[position:60%_40%] md:bg-[position:center_40%]"
          style={{
            backgroundImage: "url('/img/8m.png')",
            backgroundSize: "cover",
          }}
          aria-hidden="true"
        />

        {/* Gradiente de transición */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none" />

        {/* Contenido de la sección superior */}
        <div className="relative z-20 pb-16 pt-24 md:pt-32 px-4 sm:px-6">
          {/* Encabezado */}
          <Reveal delay={30}>
            <h1 className="text-white text-center text-[12vw] sm:text-[10vw] md:text-6xl font-[family-name:var(--font-archivo)] uppercase mb-2 md:mb-4 leading-tight tracking-tighter">
              Planes
            </h1>
          </Reveal>

          <Reveal delay={60}>
            <p className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-inter)] font-bold tracking-[0.2em] text-zinc-400 max-w-[90vw] md:max-w-none leading-relaxed text-center mx-auto mb-10 md:mb-16 uppercase">
              <span className="inline-block md:whitespace-nowrap">
                Acceso libre a todos los turnos con cualquiera de nuestros
                planes
              </span>
            </p>
          </Reveal>

          {/* Membresías principales con glassmorphism y bordes de color */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-6 px-4 sm:px-0">
            {/* Tarjeta Membresía - Borde Amarillo */}
            <Reveal delay={90}>
              <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto md:max-w-none w-full">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 px-6 py-4">
                  <h2 className="text-black text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                    Membresía
                  </h2>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    Entrena de lunes a sábado en cualquiera de nuestros horarios
                    por 3 meses.
                  </p>
                  <div className="mt-auto">
                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                      Desde
                    </p>
                    <p className="text-zinc-400 text-sm line-through decoration-zinc-500">
                      S/ 750
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white text-3xl font-black">
                        S/ 500
                      </span>
                      <span className="text-yellow-400 text-[10px] font-bold bg-yellow-500/30 px-2 py-0.5 rounded">
                        33% OFF
                      </span>
                    </div>
                    <p className="text-zinc-400 text-[10px] uppercase tracking-wider mt-2">
                      Lunes a sábado · 3 meses
                    </p>
                  </div>
                  <a
                    href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20la%20Membresía%20Trimestral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full bg-yellow-500 hover:bg-yellow-400 text-black text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                  >
                    ¡Lo quiero!
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Tarjeta Estándar x3 - Borde Gris */}
            <Reveal delay={120}>
              <div className="bg-black/40 backdrop-blur-sm border border-zinc-500/30 rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto md:max-w-none w-full">
                <div className="bg-gradient-to-r from-zinc-600 to-zinc-500 px-6 py-4">
                  <h2 className="text-white text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                    Estándar x3
                  </h2>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    Entrena 3 veces por semana en cualquiera de nuestros
                    horarios.
                  </p>
                  <div className="mt-auto">
                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                      Desde
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white text-3xl font-black">
                        S/ 180
                      </span>
                    </div>
                    <p className="text-zinc-400 text-[10px] uppercase tracking-wider mt-2">
                      12 sesiones al mes
                    </p>
                  </div>
                  <a
                    href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Estándar%20x3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full bg-zinc-500 hover:bg-zinc-400 text-white text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                  >
                    ¡Lo quiero!
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Tarjeta Plan Escolar - Borde Rojo */}
            <Reveal delay={150}>
              <div className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto md:max-w-none w-full">
                <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
                  <h2 className="text-white text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                    Plan Escolar
                  </h2>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    Entrena 3 veces por semana en cualquiera de nuestros
                    horarios.
                  </p>
                  <div className="mt-auto">
                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                      Desde
                    </p>
                    <p className="text-zinc-400 text-sm line-through decoration-zinc-500">
                      S/ 180
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white text-3xl font-black">
                        S/ 120
                      </span>
                      <span className="text-red-400 text-[10px] font-bold bg-red-500/30 px-2 py-0.5 rounded">
                        30% OFF
                      </span>
                    </div>
                    <p className="text-zinc-400 text-[10px] uppercase tracking-wider mt-2">
                      Para menores de 17 años · 12 sesiones
                    </p>
                  </div>
                  <a
                    href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Escolar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full bg-red-600 hover:bg-red-500 text-white text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                  >
                    ¡Lo quiero!
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Sección inferior con fondo beige/hueso */}
      <div className="relative bg-[#f2f2f0] overflow-hidden" data-theme="light">
        {/* Decoración superior - Línea de gradiente roja */}
        <div className="absolute top-0 left-0 w-full h-[6px] md:h-[8px] z-30 flex justify-end">
          <div className="w-full h-full bg-gradient-to-r from-red-600 via-red-600/40 to-transparent opacity-80" />
        </div>

        <div className="py-16 md:py-20">
          {/* Marca de agua PALOOKA */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[15vw] md:text-[12vw] font-[family-name:var(--font-archivo)] font-black uppercase text-zinc-800 opacity-[0.03] leading-none tracking-tighter whitespace-nowrap">
              PALOOKA
            </span>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            {/* Subtítulo Otras ofertas */}
            <Reveal delay={180}>
              <h2 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-[family-name:var(--font-archivo)] uppercase tracking-tighter text-zinc-800 mb-8 md:mb-10">
                Otras ofertas
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 mb-16 px-4 sm:px-0">
              {/* Estándar x2 */}
              <Reveal delay={210}>
                <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto md:max-w-none w-full">
                  <div className="bg-gradient-to-r from-zinc-600 to-zinc-500 px-6 py-4">
                    <h3 className="text-white text-lg font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                      Estándar x2
                    </h3>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Entrena 2 veces por semana en cualquier horario.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-zinc-900 text-3xl font-black">
                          S/ 150
                        </span>
                      </div>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-2">
                        8 sesiones al mes
                      </p>
                    </div>
                    <a
                      href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Estándar%20x2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full bg-zinc-600 hover:bg-zinc-500 text-white text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                    >
                      ¡Lo quiero!
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Ilimitado (Lunes a Sábado) */}
              <Reveal delay={240}>
                <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto md:max-w-none w-full">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
                    <h3 className="text-white text-lg font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                      Ilimitado
                    </h3>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Entrena todos los días disponibles sin límites.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-zinc-900 text-3xl font-black">
                          S/ 300
                        </span>
                      </div>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-2">
                        Lunes a sábado · Sesiones ilimitadas
                      </p>
                    </div>
                    <a
                      href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Ilimitado"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full bg-red-600 hover:bg-red-500 text-white text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                    >
                      ¡Lo quiero!
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Semanal (Lunes a Viernes) */}
              <Reveal delay={270}>
                <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto md:max-w-none w-full">
                  <div className="bg-gradient-to-r from-zinc-600 to-zinc-500 px-6 py-4">
                    <h3 className="text-white text-lg font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                      Semanal
                    </h3>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Entrena entre semana. Ideal para oficina.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-zinc-900 text-3xl font-black">
                          S/ 250
                        </span>
                      </div>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-2">
                        Lunes a viernes · Sesiones ilimitadas
                      </p>
                    </div>
                    <a
                      href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Semanal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block w-full bg-zinc-600 hover:bg-zinc-500 text-white text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                    >
                      ¡Lo quiero!
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Clases únicas */}
            <div className="max-w-3xl mx-auto">
              <Reveal delay={300}>
                <h2 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-[family-name:var(--font-archivo)] uppercase tracking-tighter text-zinc-800 mb-8 md:mb-10">
                  Clases únicas
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
                {/* Clase Grupal */}
                <Reveal delay={330}>
                  <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto sm:max-w-none w-full">
                    <div className="bg-gradient-to-r from-zinc-600 to-zinc-500 px-6 py-4">
                      <h3 className="text-white text-lg font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                        Clase Grupal
                      </h3>
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Entrena una sesión en grupo.
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-zinc-900 text-3xl font-black">
                            S/ 20
                          </span>
                          <span className="text-zinc-500 text-[10px] uppercase">
                            por clase
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20la%20Clase%20Grupal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block w-full bg-zinc-600 hover:bg-zinc-500 text-white text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                      >
                        ¡Lo quiero!
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* Clase Personal */}
                <Reveal delay={360}>
                  <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col max-w-[320px] mx-auto sm:max-w-none w-full">
                    <div className="bg-gradient-to-r from-zinc-600 to-zinc-500 px-6 py-4">
                      <h3 className="text-white text-lg font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                        Clase Personal
                      </h3>
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Entrenamiento individual con entrenador.
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-zinc-900 text-3xl font-black">
                            S/ 60
                          </span>
                          <span className="text-zinc-500 text-[10px] uppercase">
                            por clase
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20la%20Clase%20Personal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block w-full bg-zinc-600 hover:bg-zinc-500 text-white text-center py-3 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
                      >
                        ¡Lo quiero!
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Nota legal */}
            <Reveal delay={390}>
              <div className="mt-16 text-center max-w-2xl mx-auto">
                <p className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                  * No hay reembolsos ni acumulación de sesiones para el mes
                  siguiente.
                  <br />
                  <span className="text-zinc-400">
                    ¿Te saltaste una clase? Recupérala cualquier sábado de tu
                    mes vigente.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
