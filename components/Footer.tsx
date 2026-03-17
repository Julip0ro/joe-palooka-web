export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 pt-12 pb-28 md:pb-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* FILA PRINCIPAL */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* MARCA */}
          <div className="text-center md:text-left">
            <h2 className="text-[16px] font-black uppercase text-zinc-50">
              Joe Palooka
            </h2>

            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.25em] mt-1">
              Santiago de Surco · Lima
            </p>

            {/* línea decorativa */}
            <div className="w-16 h-px bg-red-600 mt-4 mx-auto md:mx-0"></div>
          </div>

          {/* LINKS (estructura básica que todo footer tiene) */}
          <div className="flex gap-10 text-center md:text-left">
            <div>
              <p className="text-white text-[11px] font-bold uppercase tracking-widest mb-3">
                Navegación
              </p>

              <div className="flex flex-col gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                <a className="hover:text-white transition-colors">Inicio</a>

                <a className="hover:text-white transition-colors">Horarios</a>

                <a className="hover:text-white transition-colors">Planes</a>

                <a className="hover:text-white transition-colors">Contacto</a>
              </div>
            </div>

            {/* REDES */}
            <div>
              <p className="text-white text-[11px] font-bold uppercase tracking-widest mb-3">
                Redes
              </p>

              <div className="flex flex-col gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
                <a className="hover:text-white transition-colors">Instagram</a>

                <a className="hover:text-white transition-colors">Facebook</a>

                <a className="hover:text-white transition-colors">TikTok</a>
              </div>
            </div>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="w-full h-px bg-zinc-800 my-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
          <p>© {new Date().getFullYear()} Joe Palooka Boxing</p>

          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
