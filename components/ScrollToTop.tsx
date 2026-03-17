"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece solo después de bajar 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`hidden md:flex fixed bottom-8 right-8 z-50 items-center justify-center 
      w-12 h-12 bg-zinc-900 border border-zinc-800 text-red-600 shadow-2xl transition-all duration-300
      hover:bg-red-600 hover:text-white hover:scale-110 active:scale-95
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      {/* Icono de triángulo afilado (similar al de tus días) */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 6l-8 12h16z" />
      </svg>
    </button>
  );
}
