"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

/**
 * Componente Home: Landing Page unificada.
 * Optimizaciones: Aceleración por GPU, Lazy Loading, Reducción de Jank en animaciones.
 */
export default function Home() {
  const profesores = [
    {
      nombre: "Victor Paredes",
      especialidad: "EX SELECCIONADO NACIONAL 🇵🇪",
      img: "/img/victorp.webp",
    },
    {
      nombre: "Luis Paredes",
      especialidad: "EX ENTRENADOR SELECCIÓN PERÚ 🇵🇪",
      img: "/img/luisp.webp",
    },
    {
      nombre: "Alan Paredes",
      especialidad: "7X CAMPEÓN NACIONAL • PRO (17)",
      img: "/img/alanp.webp",
    },
  ];

  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-red-600/30 font-[family-name:var(--font-inter)]">
      {/* 1. SECCIÓN HERO (Optimización de fondo y scroll indicator) */}
      <section className="relative flex items-center justify-center w-full h-[92vh] min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40 grayscale transform-gpu"
          style={{
            backgroundImage: "url('/img/1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "70% center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center w-full max-w-5xl px-6 mx-auto text-center -mt-20 md:-mt-5">
          <Reveal delay={200}>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-6 md:w-10 bg-zinc-100" />
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-zinc-300 uppercase font-bold whitespace-nowrap">
                Santiago de Surco
              </span>
              <div className="h-[1px] w-6 md:w-10 bg-zinc-100" />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <h1 className="text-[17vw] md:text-[10vw] lg:text-[10rem] font-[family-name:var(--font-archivo)] uppercase tracking-[-0.05em] text-white leading-[0.8] mb-6 md:mb-8 select-none pointer-events-none">
              Joe <br /> Palooka
            </h1>
          </Reveal>

          <Reveal delay={600}>
            <p className="text-zinc-400 text-[11px] md:text-base lg:text-lg max-w-[260px] md:max-w-xl mb-8 md:mb-10 leading-relaxed font-medium">
              Domina el arte del boxeo en{" "}
              <span className="text-white border-b border-red-600">
                Joe Palooka
              </span>
              . El centro de alto rendimiento referente en Santiago de Surco.
            </p>
          </Reveal>

          <Reveal
            delay={800}
            className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row md:gap-6 sm:w-auto px-4 sm:px-0"
          >
            <Link
              href="/precios"
              className="w-full sm:min-w-[180px] px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-[10px] tracking-[0.2em] transition-all text-center shadow-[0_0_40px_rgba(220,38,38,0.15)] active:scale-95"
            >
              Ver Planes
            </Link>
            <Link
              href="/horarios"
              className="w-full sm:min-w-[180px] px-8 py-4 bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black text-white font-bold uppercase text-[10px] tracking-[0.2em] transition-all text-center active:scale-95"
            >
              Horarios
            </Link>
          </Reveal>
        </div>

        {/* INDICADOR DE SCROLL (Visible solo en desktop para reducir carga en móvil) */}
        <div className="absolute bottom-10 left-10 z-30 flex items-center gap-3 opacity-30 select-none pointer-events-none hidden md:flex">
          <div className="h-12 w-[1px] bg-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-600 to-transparent animate-scroll-line" />
          </div>
          <span className="text-[7px] uppercase tracking-[0.6em] text-zinc-400 font-bold [writing-mode:vertical-lr]">
            Scroll
          </span>
        </div>
      </section>

      {/* 2. SECCIÓN: SOBRE EL GYM (Estilo blanco) */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <h2 className="text-black text-[12vw] md:text-7xl font-[family-name:var(--font-archivo)] uppercase leading-[0.9] tracking-tighter sticky top-24">
                La técnica <br /> sobre <br /> la{" "}
                <span className="text-red-600">fuerza</span>
              </h2>
            </Reveal>
            <div className="space-y-16">
              <Reveal delay={200}>
                <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-medium">
                  Joe Palooka es un legado de disciplina. Enfocamos cada sesión
                  en la técnica purista del boxeo, adaptándonos tanto a
                  principiantes como a competidores.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Entrenamiento Pro",
                    d: "Basado en fundamentos de competencia.",
                  },
                  {
                    t: "Equipamiento",
                    d: "Sacos, peras y ring de medidas oficiales.",
                  },
                  { t: "Comunidad", d: "Ambiente de respeto y apoyo mutuo." },
                  {
                    t: "Flexibilidad",
                    d: "Múltiples turnos de lunes a sábado.",
                  },
                ].map((b, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="p-6 border border-zinc-200 rounded-2xl hover:border-red-600 transition-colors bg-white">
                      <h4 className="text-black font-black uppercase text-xs tracking-widest mb-2">
                        {b.t}
                      </h4>
                      <p className="text-zinc-500 text-xs leading-relaxed">
                        {b.d}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN: METODOLOGÍA (Fondo rojo) */}
      <section className="relative py-24 md:py-40 px-6 bg-red-600 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20 grayscale mix-blend-multiply pointer-events-none transform-gpu"
          style={{
            backgroundImage: "url('/img/1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <span className="absolute top-0 right-[-5%] text-white/[0.08] font-black text-[30vw] uppercase leading-none pointer-events-none select-none font-[family-name:var(--font-archivo)]">
          MÉTODO
        </span>

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <span className="text-black font-black uppercase text-[10px] tracking-[0.5em] mb-6 block">
              Sistema de Alto Rendimiento
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="text-white text-[12vw] md:text-7xl font-[family-name:var(--font-archivo)] uppercase tracking-tighter leading-[0.85] mb-12">
              Entrena como la <br />{" "}
              <span className="text-black">Selección Peruana</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                t: "Técnica Olímpica",
                d: "Fundamentos de alta competencia aplicados desde el nivel básico.",
              },
              {
                t: "Disciplina Pro",
                d: "Entrenamientos estructurados bajo estándares de selección nacional.",
              },
              {
                t: "Evolución Real",
                d: "Sistema progresivo que garantiza resultados técnicos en corto plazo.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="bg-black/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl group transform-gpu">
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4 group-hover:text-black transition-colors">
                    {item.t}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed font-medium">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN: STAFF (Optimización de carga de imágenes) */}
      <section className="py-24 md:py-32 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 z-0 opacity-[0.05] pointer-events-none select-none">
          <img
            src="/img/icono.png"
            alt="Icon"
            className="w-[60vw] md:w-[35vw] grayscale invert transform-gpu"
            loading="lazy"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-white text-5xl md:text-8xl font-[family-name:var(--font-archivo)] uppercase leading-none tracking-tighter mb-16">
              Nuestros <br /> <span className="text-red-600">Coaches</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4">
            {profesores.map((pro, index) => (
              <Reveal key={index} delay={index * 150}>
                <div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-red-600/40 transform-gpu">
                  {/* Uso de img con object-cover y decoding async para fluidez */}
                  <img
                    src={pro.img}
                    alt={pro.nombre}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <p className="text-red-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] mb-2">
                      {pro.especialidad}
                    </p>
                    <h3 className="text-white text-2xl md:text-3xl font-[family-name:var(--font-archivo)] uppercase tracking-tighter">
                      {pro.nombre}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-zinc-950 flex justify-center py-2">
        <Reveal delay={100}>
          <div className="h-[1.5px] w-[50vw] md:w-[25vw] bg-white opacity-80" />
        </Reveal>
      </div>

      {/* 5. SECCIÓN: INFRAESTRUCTURA (Fondo negro) */}
      <section className="py-24 md:py-32 px-6 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1 relative z-10">
              <Reveal>
                <h2 className="text-white font-[family-name:var(--font-archivo)] uppercase tracking-[-0.02em] md:tracking-tighter">
                  <span className="block sm:hidden text-[30px] leading-[1.05]">
                    Infraestructura de{" "}
                    <span className="text-red-600">Nivel</span>
                  </span>
                  <span className="hidden sm:block text-5xl lg:text-7xl leading-[0.85]">
                    Infraestructura <br /> de{" "}
                    <span className="text-red-600">Nivel</span>
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative p-6 md:p-8 border-l-2 border-red-600 bg-zinc-900/30 rounded-r-2xl">
                  <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-3">
                    Ring Profesional
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    Entrena en un{" "}
                    <span className="text-white font-bold">
                      ring con medidas oficiales
                    </span>
                    . Nuestro espacio está diseñado para el desplazamiento real
                    de una pelea profesional.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">
                  Sacos de 100lb • Peras de velocidad • Área de sombra
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <Reveal className="col-span-2">
                <div className="relative aspect-video md:aspect-[16/7] overflow-hidden rounded-2xl group border border-zinc-800 transform-gpu">
                  <img
                    src="/img/r2.jpeg"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    alt="Ring"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                  <span className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-70">
                    Medidas Oficiales
                  </span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="aspect-square overflow-hidden rounded-2xl group border border-zinc-800 transform-gpu">
                  <img
                    src="/img/r1.jpeg"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                    alt="Gym"
                  />
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="aspect-square overflow-hidden rounded-2xl group border border-zinc-800 transform-gpu">
                  <img
                    src="/img/r3.jpeg"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                    alt="Gym"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-zinc-900/50 py-24 px-6 border-y border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-white text-3xl font-bold uppercase mb-12 font-[family-name:var(--font-archivo)]">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <div className="space-y-4 text-left">
            {[
              {
                q: "¿Necesito experiencia previa?",
                a: "No. Tenemos clases diseñadas para quienes nunca han usado guantes.",
              },
              {
                q: "¿Qué implementos debo llevar?",
                a: "Ropa deportiva y agua. Podemos prestarte guantes inicialmente.",
              },
              {
                q: "¿Cuentan con espacio para cambiarse?",
                a: "Sí, disponemos de camerinos equipados para tu comodidad.",
              },
              {
                q: "¿Hay clases de prueba?",
                a: "Escríbenos directamente al WhatsApp para consultar disponibilidad.",
              },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 100}>
                <details className="group border border-zinc-800 rounded-2xl overflow-hidden transform-gpu">
                  <summary className="list-none p-6 cursor-pointer bg-zinc-900 flex justify-between items-center group-open:bg-zinc-800 transition-colors">
                    <span className="text-zinc-200 font-bold text-sm uppercase tracking-wide">
                      {f.q}
                    </span>
                    <span className="text-red-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="p-6 text-zinc-400 text-sm leading-relaxed bg-zinc-950/50">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center bg-zinc-950 relative overflow-hidden">
        <Reveal>
          <h2 className="text-white text-[12vw] md:text-8xl font-[family-name:var(--font-archivo)] uppercase leading-none tracking-tighter mb-10">
            ¿Listo para <br /> el primer{" "}
            <span className="text-red-600">round?</span>
          </h2>
          <Link
            href="/precios"
            className="inline-block px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all active:scale-95 rounded-2xl"
          >
            Inscribirme ahora
          </Link>
        </Reveal>
      </section>

      <footer className="py-10 bg-zinc-950 opacity-20 pointer-events-none flex items-center justify-center overflow-hidden">
        <span className="text-zinc-600 font-black text-[18vw] leading-none uppercase font-[family-name:var(--font-archivo)] text-center block w-full">
          Palooka
        </span>
      </footer>

      <style jsx global>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s infinite cubic-bezier(0.65, 0, 0.35, 1);
        }
      `}</style>
    </main>
  );
}
