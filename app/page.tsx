"use client";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Methodology from "@/components/home/Methodology";
import ZoomOutSection from "@/components/home/ZoomOutSection";
import Staff from "@/components/home/Staff";
import Infrastructure from "@/components/home/Infrastructure";
import Services from "@/components/home/Services";
import FAQ from "@/components/home/FAQ";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-red-600/30 font-[family-name:var(--font-inter)]">
      <section data-theme="dark">
        <Hero />
      </section>

      <section data-theme="light">
        <Features />
      </section>

      <section data-theme="dark">
        <Methodology />
      </section>

      <section data-theme="light">
        <Staff />
      </section>

      <ZoomOutSection />

      <section data-theme="dark">
        <Infrastructure />
      </section>

      <section data-theme="light">
        <Services />
      </section>

      <section data-theme="light">
        <FAQ />
      </section>

      <section data-theme="dark">
        <HomeCTA />
      </section>
    </main>
  );
}
