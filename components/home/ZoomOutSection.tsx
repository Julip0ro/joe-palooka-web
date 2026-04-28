"use client";

import { useEffect, useRef } from "react";

export default function ZoomOutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      if (imageRef.current) {
        imageRef.current.style.transform = "scale(1)";
      }
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)),
      );

      // zoom muy sutil y centrado
      const scale = 1.05 - progress * 0.05;

      imageRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "scale(1.05)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/zooms.webp')",
            filter: "grayscale(100%)",
          }}
        />
      </div>
    </section>
  );
}
