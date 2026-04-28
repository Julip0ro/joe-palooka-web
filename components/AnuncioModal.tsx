"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import data from "@/data/anuncio.json";

export default function AnuncioModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    // 1. FUNCIÓN PARA ABRIR EL MODAL DESDE EL EXTERIOR (Hero)
    const triggerOpen = () => {
      setShouldRender(true);
      // Pequeño timeout para que la transición de CSS se dispare tras el render
      setTimeout(() => setIsOpen(true), 10);
    };

    // 2. ESCUCHAR EL EVENTO PERSONALIZADO
    window.addEventListener("abrir-anuncio", triggerOpen);

    // 3. LOGICA ORIGINAL: APERTURA AUTOMÁTICA
    if (data.activo) {
      const timer = setTimeout(() => {
        setShouldRender(true);
        setTimeout(() => setIsOpen(true), 50);
      }, 1200);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("abrir-anuncio", triggerOpen);
      };
    }

    return () => window.removeEventListener("abrir-anuncio", triggerOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Esperamos a que la animación termine antes de quitarlo del DOM
    setTimeout(() => setShouldRender(false), 600);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "anuncio-overlay") {
      handleClose();
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 20) {
      setShowScrollHint(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      id="anuncio-overlay"
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 transition-all duration-1000 ease-in-out ${
        isOpen
          ? "bg-black/60 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-0 opacity-0 pointer-events-none"
      }`}
    >
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col md:flex-row shadow-2xl transition-all duration-700 delay-100 ease-out transform ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-12 scale-95 opacity-0"
        }`}
      >
        {/* BOTÓN CERRAR: Círculo rojo fijo - Destaca en iPhone SE */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 md:top-4 md:right-4 z-[210] p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-zinc-900 transition-all active:scale-90 border-2 border-[#f2f2f0]"
          aria-label="Cerrar"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* CONTENEDOR CON SCROLL (Optimizado para pantallas pequeñas) */}
        <div
          onScroll={handleScroll}
          className="w-full flex flex-col md:flex-row bg-[#f2f2f0] overflow-y-auto md:overflow-hidden rounded-sm no-scrollbar relative"
        >
          {/* LADO IZQUIERDO: IMAGEN (Respetando 1080x1350) */}
          <div className="relative w-full md:w-[45%] bg-zinc-950 aspect-[4/5] md:aspect-auto shrink-0">
            <Image
              src={data.imagen}
              alt={data.titulo}
              fill
              className="object-cover object-top md:object-center"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>

          {/* LADO DERECHO: CONTENIDO */}
          <div className="w-full md:w-[55%] p-6 sm:p-10 md:p-12 flex flex-col justify-center relative min-h-[350px]">
            <span className="text-red-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-2 block">
              {data.subtitulo}
            </span>

            <h2 className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-archivo)] uppercase leading-[0.85] tracking-tighter mb-4 md:mb-6">
              {data.titulo}
            </h2>

            <div className="h-0.5 w-12 bg-red-600 mb-4 md:mb-6" />

            <p className="text-zinc-700 text-xs sm:text-sm md:text-base leading-relaxed mb-8 font-medium max-w-sm text-pretty">
              {data.descripcion}
            </p>

            <div className="flex flex-col gap-4">
              {/* BOTÓN INSCRIPCIÓN: Estilo exacto del HERO */}
              <a
                href={data.linkBoton}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-zinc-900 text-white text-center py-4 px-10 font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.2em] transition-all duration-500 rounded-sm active:scale-95 shadow-xl shadow-red-600/20"
              >
                {data.textoBoton}
              </a>

              <button
                onClick={handleClose}
                className="text-zinc-400 hover:text-red-600 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors py-3 md:py-0"
              >
                volver a la pagina
              </button>
            </div>

            {/* AYUDA VISUAL SCROLL (iPhone SE) */}
            {showScrollHint && (
              <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce pointer-events-none">
                <span className="text-[8px] uppercase tracking-widest font-bold text-zinc-400">
                  Ver más
                </span>
                <ChevronDown size={16} className="text-red-600" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
