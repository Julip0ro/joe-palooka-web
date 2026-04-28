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
    const triggerOpen = () => {
      setShouldRender(true);
      setTimeout(() => setIsOpen(true), 10);
    };

    window.addEventListener("abrir-anuncio", triggerOpen);

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
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-1000 ease-in-out ${
        isOpen
          ? "bg-black/70 backdrop-blur-sm opacity-100"
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

      {/* 
        CONTENEDOR: 
        En movil: w-[90%] para que no toque los bordes y max-h-[80vh] para que sea más corto.
        En PC: md:w-full md:max-w-4xl md:max-h-[92vh] (Tu diseño original)
      */}
      <div
        className={`relative w-[90%] md:w-full md:max-w-4xl max-h-[80vh] md:max-h-[92vh] flex flex-col md:flex-row shadow-2xl transition-all duration-700 delay-100 ease-out transform ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-12 scale-95 opacity-0"
        }`}
      >
        {/* 
          BOTÓN CERRAR:
          En movil: top-2 right-2 (POSITIVO para que esté DENTRO del cuadro y se vea siempre)
          En PC: md:top-4 md:right-4 (Tu diseño original)
        */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-[210] p-2 md:p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-zinc-900 transition-all active:scale-90 border-2 border-[#f2f2f0]"
          aria-label="Cerrar"
        >
          <X size={18} className="md:w-5 md:h-5" strokeWidth={3} />
        </button>

        <div
          onScroll={handleScroll}
          className="w-full flex flex-col md:flex-row bg-[#f2f2f0] overflow-y-auto md:overflow-hidden rounded-xl md:rounded-sm no-scrollbar relative"
        >
          {/* LADO IZQUIERDO: IMAGEN 
              En movil: h-[180px] para que sea pequeña y no desplace todo el texto hacia abajo
          */}
          <div className="relative w-full md:w-[45%] h-[180px] md:h-auto bg-zinc-950 shrink-0">
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
          <div className="w-full md:w-[55%] p-5 md:p-12 flex flex-col justify-center relative">
            <span className="text-red-600 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 block">
              {data.subtitulo}
            </span>

            {/* Título más pequeño en movil (text-2xl) para que no ocupe toda la pantalla */}
            <h2 className="text-zinc-900 text-2xl md:text-6xl font-[family-name:var(--font-archivo)] uppercase leading-[0.9] tracking-tighter mb-4 md:mb-6">
              {data.titulo}
            </h2>

            <div className="h-0.5 w-10 bg-red-600 mb-4 md:mb-6" />

            <p className="text-zinc-700 text-[11px] md:text-base leading-relaxed mb-6 md:mb-8 font-medium max-w-sm">
              {data.descripcion}
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={data.linkBoton}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-zinc-900 text-white text-center py-3.5 md:py-4 px-10 font-bold uppercase text-[9px] md:text-[11px] tracking-[0.2em] transition-all duration-500 rounded-sm active:scale-95 shadow-xl shadow-red-600/20"
              >
                {data.textoBoton}
              </a>

              <button
                onClick={handleClose}
                className="text-zinc-400 hover:text-red-600 text-[9px] uppercase tracking-[0.2em] font-bold transition-colors py-2 md:py-0"
              >
                volver a la pagina
              </button>
            </div>

            {showScrollHint && (
              <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce pointer-events-none">
                <ChevronDown size={14} className="text-red-600" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
