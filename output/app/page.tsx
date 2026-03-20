"use client";

import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Features } from "@/components/Features";
import { Segments } from "@/components/Segments";
import { WhyI9 } from "@/components/WhyI9";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { WaFloat } from "@/components/WaFloat";

export default function Home() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  function scrollToPricing() {
    pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToFeatures() {
    featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Navbar onScrollToPricing={scrollToPricing} onScrollToFeatures={scrollToFeatures} />

      <main>
        <Hero
          onScrollToPricing={scrollToPricing}
          onScrollToFeatures={scrollToFeatures}
        />

        <StatsBar />

        {/* anchor ref on the wrapper div */}
        <div ref={featuresRef}>
          <Features />
        </div>

        <Segments />
        <WhyI9 />
        <Testimonials />

        {/* CTA band before pricing */}
        <section className="py-20 px-6 text-center"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--bdr-s)" }}>
          <span className="inline-block text-[10px] font-bold tracking-[1.4px] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-bdr)", color: "var(--tag-txt)" }}>
            Comece agora
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--txt)" }}>
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-base max-w-sm mx-auto mb-8" style={{ color: "var(--txt3)" }}>
            Escolha o plano ideal e solicite uma demonstração gratuita.
          </p>
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-1 group"
            style={{
              background: "linear-gradient(135deg,#3b7bfa,#6366f1)",
              boxShadow: "0 4px 24px rgba(99,102,241,0.42)",
            }}
          >
            Ver Planos e Preços
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </section>

        {/* Pricing anchor */}
        <div ref={pricingRef}>
          <Pricing />
        </div>
      </main>

      <Footer />
      <WaFloat />
    </>
  );
}
