"use client";

import Reveal from "@/components/Reveal";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  Calendar,
} from "lucide-react";

/**
 * ContactoPage - Gestión de canales de atención y ubicación estratégica.
 * Diseño optimizado para conversión y consistencia con la identidad de marca.
 */
export default function ContactoPage() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Gym+de+boxeo+Joe+Palooka/@-12.1449301,-77.0037255,814m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105b81a300c2f21:0x265edfb57e9b0cae!8m2!3d-12.1449301!4d-77.0011506!16s%2Fg%2F11gyxfvmh_?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <main className="relative min-h-screen bg-zinc-950 selection:bg-red-600/30 overflow-hidden font-[family-name:var(--font-inter)]">
      {/* Sección superior con imagen de fondo - Oscura */}
      <div className="relative border-b border-white/5" data-theme="dark">
        {/* Imagen de fondo */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 opacity-30 grayscale pointer-events-none"
          style={{
            backgroundImage: "url('/img/2m.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            transform: "scaleX(-1)",
          }}
          aria-hidden="true"
        />

        {/* Gradiente de transición */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-zinc-950/80 via-zinc-950/50 to-zinc-950 pointer-events-none" />

        {/* Contenido de la sección superior */}
        <div className="relative z-20 pb-16 pt-24 md:pt-32 px-4 sm:px-6">
          {/* Encabezado */}
          <Reveal delay={30}>
            <h1 className="text-white text-center text-[12vw] sm:text-[10vw] md:text-6xl font-[family-name:var(--font-archivo)] uppercase mb-2 md:mb-4 leading-tight tracking-tighter">
              Contacto
            </h1>
          </Reveal>

          <Reveal delay={60}>
            <p className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-inter)] font-bold tracking-[0.2em] text-zinc-400 max-w-[90vw] md:max-w-none leading-relaxed text-center mx-auto mb-10 md:mb-16 uppercase">
              <span className="inline-block md:whitespace-nowrap">
                Únete a la familia Palooka
              </span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* Sección de información de contacto con fondo beige/hueso */}
      <div className="relative bg-[#f2f2f0] overflow-hidden" data-theme="light">
        {/* Decoración superior - Línea de gradiente roja */}
        <div className="absolute top-0 left-0 w-full h-[6px] md:h-[8px] z-30 flex justify-end">
          <div className="w-full h-full bg-gradient-to-r from-red-600 via-red-600/40 to-transparent opacity-80" />
        </div>

        {/* Marca de agua PALOOKA - Centrada en móvil, lateral en desktop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden md:justify-start md:left-8 lg:left-12">
          <span className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-[family-name:var(--font-archivo)] font-black uppercase text-zinc-800 opacity-[0.03] leading-none tracking-tighter whitespace-nowrap md:[writing-mode:vertical-lr] md:rotate-180">
            PALOOKA
          </span>
        </div>

        {/* Segunda marca de agua en el lado derecho para desktop */}
        <div className="absolute inset-0 hidden md:flex items-center justify-end pointer-events-none select-none overflow-hidden md:right-8 lg:right-12">
          <span className="text-[10vw] lg:text-[8vw] font-[family-name:var(--font-archivo)] font-black uppercase text-zinc-800 opacity-[0.03] leading-none tracking-tighter whitespace-nowrap [writing-mode:vertical-lr]">
            BOXING
          </span>
        </div>

        <div className="py-16 md:py-20">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            {/* Tarjeta principal */}
            <Reveal delay={90}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Lado izquierdo - Imagen y ubicación */}
                  <div className="relative min-h-[300px] md:min-h-[450px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/img/1.jpeg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={16} className="text-red-500" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                          Santiago de Surco, Lima
                        </span>
                      </div>
                      <p className="text-white text-sm font-bold">
                        Calle Doña Elsa 157
                      </p>
                      <p className="text-zinc-300 text-[11px] mt-1">
                        A espaldas del Estadio Julio Montjoy
                      </p>
                    </div>
                  </div>

                  {/* Lado derecho - Información de contacto */}
                  <div className="p-6 md:p-8 lg:p-10">
                    <h2 className="text-zinc-900 text-xl md:text-2xl font-[family-name:var(--font-archivo)] uppercase tracking-tighter mb-6">
                      Información de contacto
                    </h2>

                    <div className="space-y-5">
                      {/* Horarios */}
                      <div className="flex gap-4 items-start">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <Clock size={18} className="text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                            Horarios
                          </h3>
                          <p className="text-zinc-900 font-bold text-base">
                            Lunes a Sábado
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-red-600 font-black text-sm">
                              07:00
                            </span>
                            <div className="h-px w-4 bg-zinc-300" />
                            <span className="text-red-600 font-black text-sm">
                              20:00
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Dirección */}
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-4 items-start group cursor-pointer"
                      >
                        <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                          <MapPin size={18} className="text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                            Dirección
                          </h3>
                          <p className="text-zinc-900 font-bold text-base group-hover:text-red-600 transition-colors">
                            Calle Doña Elsa 157
                          </p>
                          <p className="text-zinc-500 text-[11px] mt-0.5">
                            Santiago de Surco, Lima
                          </p>
                        </div>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/51980775633"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-4 items-start group cursor-pointer"
                      >
                        <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                          <MessageCircle size={18} className="text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                            WhatsApp
                          </h3>
                          <p className="text-zinc-900 font-bold text-base group-hover:text-red-600 transition-colors">
                            +51 980 775 633
                          </p>
                          <p className="text-zinc-500 text-[10px] mt-0.5">
                            Respondemos en minutos
                          </p>
                        </div>
                      </a>

                      {/* Redes Sociales */}
                      <div className="flex gap-4 items-start">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <Instagram size={18} className="text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                            Redes Sociales
                          </h3>
                          <div className="flex gap-4">
                            <a
                              href="https://www.instagram.com/joe.palooka"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-zinc-600 hover:text-red-600 transition-colors text-sm font-medium"
                            >
                              <Instagram size={14} />
                              Instagram
                            </a>
                            <a
                              href="https://www.facebook.com/gimnasio.palooka"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-zinc-600 hover:text-red-600 transition-colors text-sm font-medium"
                            >
                              <Facebook size={14} />
                              Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-8 pt-4 border-t border-zinc-200">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-red-600 text-white font-black py-3 rounded-lg text-sm uppercase tracking-wider transition-all duration-300"
                      >
                        <MapPin size={16} />
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Llamado a la acción final */}
            <Reveal delay={120}>
              <div className="mt-12 text-center">
                <div className="h-px w-12 bg-red-600 mx-auto mb-8 opacity-50" />
                <h2 className="text-zinc-900 text-2xl md:text-3xl font-[family-name:var(--font-archivo)] uppercase tracking-tighter mb-4">
                  ¿Listo para el{" "}
                  <span className="text-red-600">primer round?</span>
                </h2>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-8 max-w-xs mx-auto">
                  Consulta por nuestra clase de cortesía
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/precios"
                    className="w-full sm:w-auto px-8 py-3 bg-zinc-900 hover:bg-red-600 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-lg transition-all duration-300 text-center"
                  >
                    Ver Membresías
                  </Link>
                  <Link
                    href="/horarios"
                    className="w-full sm:w-auto px-8 py-3 border border-zinc-300 text-zinc-700 hover:border-red-600 hover:text-red-600 font-black uppercase text-[10px] tracking-[0.2em] rounded-lg transition-all duration-300 text-center"
                  >
                    Revisar Horarios
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Nota adicional */}
            <Reveal delay={150}>
              <div className="mt-12 text-center">
                <p className="text-zinc-400 text-[9px] uppercase tracking-[0.2em]">
                  ¿Prefieres escribirnos? Escríbenos a nuestro WhatsApp o
                  visítanos en el gimnasio
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
