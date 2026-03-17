export default function ContactoPage() {
  return (
    <main className="min-h-screen pb-16 pt-10 px-6">
      {/* REFERENCIA SUPERIOR */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-16 bg-zinc-800"></div>
        <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
          Joe Palooka Boxing
        </span>
        <div className="h-px w-16 bg-zinc-800"></div>
      </div>

      {/* TÍTULO */}
      <h1 className="text-white text-center text-3xl font-bold uppercase mb-10">
        Contacto
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* INFO DE CONTACTO */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          {/* TEXTO INTRO */}
          <p className="text-zinc-400 max-w-sm leading-relaxed">
            Únete a la familia Joe Palooka. Estamos listos para entrenar
            contigo.
          </p>

          {/* LÍNEA SEPARADORA */}
          <div className="w-full max-w-sm h-px bg-zinc-800"></div>

          {/* CONTENIDO */}
          <div className="space-y-6 w-full max-w-sm">
            {/* UBICACIÓN */}
            <div className="flex gap-4 items-start text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-7-4.35-7-10a7 7 0 1114 0c0 5.65-7 10-7 10z"
                />
                <circle cx="12" cy="11" r="2.5" />
              </svg>

              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">
                  Ubicación
                </h4>

                {/* PEQUEÑA LÍNEA DECORATIVA */}
                <div className="w-10 h-px bg-red-600 mt-1 mb-2"></div>

                <p className="text-zinc-400">
                  Doña Elsa 157, Santiago de Surco
                </p>
              </div>
            </div>

            {/* LÍNEA SEPARADORA */}
            <div className="h-px bg-zinc-800"></div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/51980775633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-start group text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 00-8.66 15l-1.3 4.75L6.9 20.5A10 10 0 1012 2zm4.91 13.41c-.2.56-1.17 1.1-1.6 1.15-.41.05-.92.07-1.48-.11-.34-.11-.78-.25-1.35-.49-2.37-1.03-3.92-3.44-4.04-3.6-.12-.17-.96-1.27-.96-2.42 0-1.15.6-1.71.81-1.94.21-.23.46-.29.61-.29.15 0 .31.01.44.01.14 0 .32-.05.5.38.2.48.68 1.66.74 1.78.06.12.1.27.02.44-.07.17-.11.27-.22.41-.11.14-.23.31-.33.41-.11.11-.22.22-.09.43.13.21.59.98 1.27 1.59.87.78 1.61 1.02 1.84 1.13.23.11.36.09.49-.05.13-.14.56-.65.71-.87.15-.23.3-.19.5-.11.21.08 1.33.63 1.56.74.23.11.38.17.43.26.05.09.05.52-.15 1.08z" />
              </svg>

              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">
                  WhatsApp
                </h4>

                <div className="w-10 h-px bg-red-600 mt-1 mb-2"></div>

                <p className="text-zinc-400 group-hover:text-white transition-colors">
                  +51 980 775 633
                </p>

                {/* EJEMPLO DE CTA OPCIONAL */}
                <span className="text-[10px] tracking-widest text-red-600 uppercase">
                  Escríbenos →
                </span>
              </div>
            </a>

            {/* LÍNEA SEPARADORA */}
            <div className="h-px bg-zinc-800"></div>

            {/* REDES */}
            <div className="flex gap-4 items-start text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <circle cx="12" cy="18" r="1" />
              </svg>

              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">
                  Redes Sociales
                </h4>

                <div className="w-10 h-px bg-red-600 mt-1 mb-3"></div>

                <div className="flex gap-5">
                  {/* EJEMPLOS */}
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white uppercase text-[10px] font-black tracking-[0.25em] border-b border-zinc-800 pb-1 hover:border-red-600 transition-all"
                  >
                    Instagram
                  </a>

                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white uppercase text-[10px] font-black tracking-[0.25em] border-b border-zinc-800 pb-1 hover:border-red-600 transition-all"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="relative group w-full pt-8 md:pt-0">
          {/* GLOW SUAVE */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-zinc-800/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          {/* MARCO */}
          <div className="w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-zinc-300/30 bg-zinc-700 relative">
            {/* MAPA */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.1300187262499!2d-77.00183773047863!3d-12.144954499256214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b81a3031e153%3A0xa752bdb1d6262cba!2sDo%C3%B1a%20Elsa%20157!5e0!3m2!1ses!2spe!4v1773623480483!5m2!1ses!2spe"
              className="w-full h-full md:grayscale md:invert md:opacity-80 md:contrast-125 md:brightness-90"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* TEXTO DECORATIVO OPCIONAL */}
          <p className="text-[10px] tracking-[0.25em] text-zinc-500 uppercase mt-3 text-center">
            Surco • Lima
          </p>
        </div>
      </div>
    </main>
  );
}
