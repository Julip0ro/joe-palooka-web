"use client";
import Reveal from "@/components/Reveal";

/**
 * Página de Planes y Precios.
 * Incluye imagen de fondo 1m.png con tratamiento visual y gradientes de profundidad.
 */
export default function PreciosPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 selection:bg-red-600/30 overflow-hidden font-[family-name:var(--font-inter)]">
      {/* BACKGROUND ASSETS: Imagen 1m.png Reflejada */}
      <div
        className="absolute top-0 left-0 w-full h-[60%] z-0 opacity-40 grayscale pointer-events-none bg-[position:60%_40%] md:bg-[position:center_40%]"
        style={{
          backgroundImage: "url('/img/8m.png')",
          backgroundSize: "cover",
        }}
      />
      {/* Gradiente para fundir el Hero con el resto del contenido */}
      <div className="absolute top-0 left-0 w-full h-[60%] z-10 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-20 pb-10 pt-10">
        <Reveal delay={100}>
          {/* mb-2 para cel (bien pegado), md:mb-5 para laptop */}
          <h1 className="text-white text-center text-[15vw] md:text-6xl font-[family-name:var(--font-archivo)] uppercase mb-2 md:mb-5 leading-tight tracking-tighter">
            Planes
          </h1>
        </Reveal>

        <Reveal delay={200}>
          {/* mb-6 para cel, md:mb-12 para laptop. Eliminamos espacios extra en móvil */}
          <p className="text-[10px] md:text-xs font-[family-name:var(--font-inter)] font-bold tracking-[0.2em] text-zinc-300 max-w-[90vw] md:max-w-none leading-relaxed text-center mx-auto mb-6 md:mb-12 uppercase">
            <span className="inline-block md:whitespace-nowrap">
              Acceso libre a todos los turnos con cualquiera de nuestros planes
            </span>
          </p>
        </Reveal>

        {/* SECCIÓN: CONTENEDOR DE PLANES DE MEMBRESÍA */}
        {/* Ajustamos el padding de cel a p-2 para que no empuje la carta hacia abajo */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch p-2 md:p-4">
          {/* CARD 1 */}
          <Reveal
            delay={200}
            className="relative z-10 bg-zinc-900/80 rounded-[2rem] p-6 pt-10 shadow-2xl border border-yellow-300 max-w-[320px] w-full flex flex-col justify-between"
          >
            <div>
              <div className="z-20 absolute -top-3 left-6 bg-yellow-300 text-black px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-lg">
                EL MEJOR COSTO
              </div>
              <div className="absolute inset-0 z-0 rounded-[2rem] blur-[10px] bg-[conic-gradient(from_225deg_at_48%_52%,rgba(253,224,71,0.25)_0%,transparent_22%,rgba(253,224,71,0.18)_48%,transparent_72%,rgba(253,224,71,0.25)_100%)] opacity-80 pointer-events-none" />
              <div className="relative z-10 mb-8 min-h-[80px]">
                <h2 className="text-yellow-300 text-2xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                  MEMBRESIA
                </h2>
                <p className="text-white text-sm mt-2 leading-tight font-medium">
                  Entrena de lunes a sábado en cualquiera de nuestros horarios
                  por 3 meses.
                </p>
              </div>
              <div className="relative z-10 mb-8 min-h-[140px] flex flex-col justify-end">
                <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">
                  Desde
                </p>
                <p className="text-zinc-100 text-sm line-through decoration-zinc-300 h-5">
                  S/ 750
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300 text-4xl font-black">
                    S/ 500
                  </span>
                  <span className="text-black text-[10px] font-bold bg-yellow-300 px-2 py-1 rounded">
                    33 % OFF
                  </span>
                </div>
                <p className="text-zinc-100 text-xs mt-3 font-medium h-8">
                  Mensualidad con mejor costo beneficio
                </p>
                <p className="text-zinc-400 text-[10px] mt-1 uppercase tracking-wider font-bold">
                  Lunes a sábado por 3 meses
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20la%20Membresía%20Trimestral"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 block w-full bg-yellow-300 hover:bg-yellow-100 text-black font-black py-3 rounded-full text-center text-base transition-all"
            >
              ¡Lo quiero!
            </a>
          </Reveal>

          {/* CARD 2 */}
          <Reveal delay={300} className="relative max-w-[320px] w-full">
            <div className="absolute -top-3 left-6 bg-zinc-700 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow z-10">
              Popular
            </div>
            <div className="relative bg-zinc-900/90 rounded-[2rem] p-6 pt-10 shadow-lg border border-zinc-700 flex flex-col justify-between overflow-hidden h-full backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-[1px] rounded-[2rem] border border-white/5" />
              <div>
                <div className="mb-8 min-h-[80px]">
                  <h2 className="text-white text-2xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                    Estandar x3
                  </h2>
                  <p className="text-zinc-200 text-sm mt-2 leading-tight font-medium">
                    Entrena 3 veces por semana en cualquiera de nuestros
                    horarios.
                  </p>
                </div>
                <div className="mb-8 min-h-[140px] flex flex-col justify-end">
                  <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mb-1 h-4">
                    desde
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-4xl font-black">
                      S/ 180
                    </span>
                  </div>
                  <p className="text-zinc-300 text-xs mt-3 font-medium h-8">
                    Mensualidad estándar
                  </p>
                  <p className="text-zinc-400 text-[10px] mt-1 uppercase tracking-wider font-bold">
                    12 sesiones al mes
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Estandar%20x3"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-black bg-zinc-100 hover:bg-zinc-300 font-black py-3 rounded-full text-center text-base transition-all"
              >
                ¡Lo quiero!
              </a>
            </div>
          </Reveal>

          {/* CARD 3 */}
          <Reveal delay={400} className="relative max-w-[320px] w-full">
            <div className="absolute -top-3 left-6 bg-red-600 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow z-10">
              Promoción
            </div>
            <div className="relative bg-zinc-900/90 rounded-[2rem] p-6 pt-10 shadow-lg border border-zinc-700 flex flex-col justify-between overflow-hidden h-full backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-[1px] rounded-[2rem] border border-white/5" />
              <div>
                <div className="mb-8 min-h-[80px]">
                  <h2 className="text-red-600 text-2xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tighter">
                    Plan Escolar
                  </h2>
                  <p className="text-zinc-200 text-sm mt-2 leading-tight font-medium">
                    Entrena 3 veces por semana en cualquiera de nuestros
                    horarios.
                  </p>
                </div>
                <div className="mb-8 min-h-[140px] flex flex-col justify-end">
                  <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mb-1">
                    Desde
                  </p>
                  <p className="text-zinc-100 text-sm line-through decoration-zinc-400 h-5">
                    S/ 180
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-4xl font-black">
                      S/ 120
                    </span>
                    <span className="text-white text-[10px] font-bold bg-red-600 px-2 py-1 rounded">
                      30 % OFF
                    </span>
                  </div>
                  <p className="text-zinc-300 text-xs mt-3 font-medium h-8">
                    Mensualidad para estudiantes menores de 17 años
                  </p>
                  <p className="text-zinc-400 text-[10px] mt-1 uppercase tracking-wider font-bold">
                    12 sesiones al mes
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Escolar"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-600 hover:bg-red-500 text-white font-black py-3 rounded-full text-center text-base transition-all"
              >
                ¡Lo quiero!
              </a>
            </div>
          </Reveal>
        </div>

        {/* NOTAS LEGALES */}
        <Reveal
          delay={500}
          className="mt-10 max-w-md md:max-w-4xl mx-auto px-6 mb-10 text-center"
        >
          <p className="text-zinc-300 text-[11px] md:text-xs font-medium leading-relaxed">
            * No hay reembolsos ni acumulación de sesiones para el mes
            siguiente.{" "}
            <span className="text-zinc-100 font-bold block mt-1 md:inline md:mt-0">
              ¿Te saltaste una clase?
            </span>{" "}
            Recupérala cualquier sábado de tu mes vigente.
          </p>
        </Reveal>

        {/* OTRAS OFERTAS */}
        <Reveal className="flex items-center justify-center gap-4 mt-16 mb-6">
          <div className="h-px w-16 bg-red-800" />
          <span className="text-[10px] tracking-[0.3em] text-red-500 uppercase font-bold">
            Otras ofertas
          </span>
          <div className="h-px w-16 bg-red-800" />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-white text-center text-2xl md:text-3xl font-bold uppercase mb-10 font-[family-name:var(--font-archivo)] tracking-tight">
            más opciones
          </h2>
        </Reveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {/* CARD: ESTÁNDAR X2 */}
          <Reveal
            delay={200}
            className="bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-6 pt-10 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <h3 className="text-white text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tight">
                Estandar x2
              </h3>
              <p className="text-zinc-300 text-sm mt-2 leading-tight font-medium">
                Entrena 2 veces por semana en cualquier horario.
              </p>
              <div className="mt-8">
                <span className="text-white text-4xl font-black">S/ 150</span>
                <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-black mt-2">
                  8 sesiones al mes
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Estandar%20x2"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border border-zinc-700 text-black hover:bg-zinc-500 hover:text-white font-black py-3 rounded-xl text-center text-xs uppercase tracking-widest mt-8 transition-all"
            >
              ¡Lo quiero!
            </a>
          </Reveal>

          {/* CARD: LUNES A SÁBADO */}
          <Reveal
            delay={300}
            className="bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-6 pt-10 border-2 border-red-600 flex flex-col justify-between relative"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              Recomendado
            </div>
            <div>
              <h3 className="text-white text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tight">
                Lunes a sábado
              </h3>
              <p className="text-zinc-300 text-sm mt-2 leading-tight font-medium">
                Entrena todos los días disponibles sin límites.
              </p>
              <div className="mt-8">
                <span className="text-white text-4xl font-black">S/ 300</span>
                <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-black mt-2">
                  sesiones ilimitadas
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Lunes%20a%20Sábado"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 rounded-xl text-center text-xs uppercase tracking-widest mt-8 transition-all"
            >
              ¡Lo quiero!
            </a>
          </Reveal>

          {/* CARD: LUNES A VIERNES */}
          <Reveal
            delay={400}
            className="bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-6 pt-10 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <h3 className="text-white text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tight">
                Lunes a viernes
              </h3>
              <p className="text-zinc-300 text-sm mt-2 leading-tight font-medium">
                Entrena entre semana. Ideal para oficina.
              </p>
              <div className="mt-8">
                <span className="text-white text-4xl font-black">S/ 250</span>
                <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-black mt-2">
                  sesiones ilimitadas
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20el%20Plan%20Lunes%20a%20Viernes"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border border-zinc-700 text-black hover:bg-zinc-500 hover:text-white font-black py-3 rounded-xl text-center text-xs uppercase tracking-widest mt-8 transition-all"
            >
              ¡Lo quiero!
            </a>
          </Reveal>
        </div>

        {/* CLASES ÚNICAS */}
        <Reveal className="flex items-center justify-center gap-4 mt-16 mb-6">
          <div className="h-px w-16 bg-red-800" />
          <span className="text-[10px] tracking-[0.3em] text-red-500 uppercase font-bold">
            clases unicas
          </span>
          <div className="h-px w-16 bg-red-800" />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-white text-center text-2xl md:text-3xl font-bold uppercase mb-10 font-[family-name:var(--font-archivo)] tracking-tight">
            entrena a tu ritmo
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          {/* CARD: CLASE GRUPAL */}
          <Reveal
            delay={200}
            className="bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-6 pt-10 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <h3 className="text-white text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tight">
                Clase grupal
              </h3>
              <p className="text-zinc-300 text-sm mt-2 leading-tight font-medium">
                Entrena una sesión en grupo.
              </p>
              <div className="mt-6">
                <span className="text-white text-3xl font-black">S/ 20</span>
                <p className="text-zinc-400 text-[10px] uppercase tracking-wider font-bold mt-1">
                  por clase
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20la%20Clase%20Grupal"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border border-zinc-700 text-black hover:bg-zinc-500 hover:text-white font-black py-3 rounded-xl text-center text-xs uppercase tracking-widest mt-8 transition-all"
            >
              ¡Lo quiero!
            </a>
          </Reveal>

          {/* CARD: CLASE PERSONAL */}
          <Reveal
            delay={300}
            className="bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-6 pt-10 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <h3 className="text-white text-xl font-black uppercase font-[family-name:var(--font-archivo)] tracking-tight">
                Clase personal
              </h3>
              <p className="text-zinc-300 text-sm mt-2 leading-tight font-medium">
                Entrenamiento individual con entrenador.
              </p>
              <div className="mt-6">
                <span className="text-white text-3xl font-black">S/ 60</span>
                <p className="text-zinc-400 text-[10px] uppercase tracking-wider font-bold mt-1">
                  por clase
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/51980775633?text=Hola!%20Quiero%20información%20sobre%20la%20Clase%20Personal"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border border-zinc-700 text-black hover:bg-zinc-500 hover:text-white font-black py-3 rounded-xl text-center text-xs uppercase tracking-widest mt-8 transition-all"
            >
              ¡Lo quiero!
            </a>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
