"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Componente utilitario para resetear la posición del scroll.
 * Se dispara ante cada cambio de ruta detectado por el hook usePathname.
 */
export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Asegura un salto inmediato sin animaciones residuales
      });
    } catch (error) {
      // Fallback para navegadores antiguos
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
