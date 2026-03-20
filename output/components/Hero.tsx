"use client";

interface HeroProps {
  onScrollToPricing: () => void;
  onScrollToFeatures: () => void;
}

export function Hero({ onScrollToPricing, onScrollToFeatures }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg,#050918 0%,#091530 45%,#060c1e 100%)" }}
    >
      {/* Animated grid */}
      <div className="hero-grid" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(59,123,250,0.28) 0%,transparent 68%)" }} />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(99,102,241,0.15) 0%,transparent 65%)" }} />

      {/* Aero orbs */}
      <div className="absolute top-28 right-[12%] w-24 h-24 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.22) 0%, rgba(59,123,250,0.18) 40%, rgba(36,89,232,0.06) 100%)",
          boxShadow: "0 8px 32px rgba(59,123,250,0.25), 0 2px 0 rgba(255,255,255,0.3) inset, inset 0 -2px 0 rgba(0,0,80,0.2)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      />
      <div className="absolute bottom-36 left-[10%] w-14 h-14 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.18) 0%, rgba(99,102,241,0.15) 45%, transparent 100%)",
          boxShadow: "0 4px 16px rgba(99,102,241,0.2), 0 1px 0 rgba(255,255,255,0.25) inset",
          border: "1px solid rgba(255,255,255,0.14)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto" style={{ paddingTop: "80px" }}>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8
          border border-white/10 text-[#93c5fd] text-xs font-semibold tracking-widest uppercase
          animate-[fadeUp_.5s_ease_.1s_both]"
          style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-[blinkDot_2s_ease-in-out_infinite]" />
          Sistema de Gestão Completo
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-2.5px] leading-[1.05] mb-6
          animate-[fadeUp_.55s_ease_.2s_both]"
        >
          Gerencie sua<br />
          empresa com inteligencia{" "} <br />
          <span className="grad-text">Inove</span>
        </h1>

        <p className="text-lg text-white/55 max-w-lg mx-auto leading-relaxed mb-10
          animate-[fadeUp_.55s_ease_.32s_both]"
        >
          O i9 une estoque, financeiro, fiscal e vendas em um sistema que roda em rede dentro da sua empresa — seguro, rápido e sem dependência de nuvem.
        </p>

        {/* THE BUTTONS */}
        <div className="flex items-center justify-center gap-3 flex-wrap animate-[fadeUp_.55s_ease_.44s_both]">
          <button
            onClick={onScrollToPricing}
            className="group flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg,#3b7bfa,#6366f1)",
              boxShadow: "0 4px 24px rgba(99,102,241,0.45), 0 1px 0 rgba(255,255,255,0.22) inset",
            }}
          >
            Conheça os Planos
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          <button
            onClick={onScrollToFeatures}
            className="flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold
              text-white/80 hover:text-white transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Ver Recursos
          </button>
        </div>

        {/* Trust row */}
        <div className="flex items-center justify-center gap-5 mt-13 flex-wrap animate-[fadeUp_.55s_ease_.56s_both]">
          {[
            "NFe e NFCe inclusos",
            "Funciona em rede local",
            "Cadastros ilimitados",
            "Suporte técnico",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.36)" }}>
              <span className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
