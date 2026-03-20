"use client";
import { useEffect, useRef } from "react";

const bigCards = [
  { num: "∞", title: "Cadastros ilimitados", desc: "Clientes, produtos, fornecedores — sem limite, sem custo extra por volume." },
  { num: "3x", title: "Mais velocidade no caixa", desc: "PDV ágil e intuitivo que reduz filas e acelera o atendimento." },
  { num: "10%", title: "Economia no plano anual", desc: "Menos por mês pagando por um ano." },
];

const whyCards = [
  {
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    title: "Instalação Local",
    desc: "Seus dados ficam no seu servidor.",
    tag: "Seus dados",
  },
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Multi-Estação em Rede",
    desc: "Vários computadores sincronizados em tempo real na mesma rede local.",
    tag: "Rede local",
  },
  {
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Suporte Técnico Real",
    desc: "Uma equipe humana, atenciosa e especializada. Sem robôs, sem fila infinita.",
    tag: "Atendimento",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Seguro e Confiável",
    desc: "Sistema estável, dados criptografados e controle de acesso por usuário.",
    tag: "Criptografia",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Atualizações Gratuitas",
    desc: "Melhorias e atualizações fiscais chegam sem custo adicional.",
    tag: "Sempre atual",
  },
  {
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: "Identidade Visual",
    desc: "Documentos impressos com o logotipo da sua empresa. Profissionalismo em cada detalhe.",
    tag: "Sua marca",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Relatórios com Gráficos",
    desc: "Visualize o desempenho do negócio e tome decisões mais inteligentes.",
    tag: "Inteligência",
  },
  {
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
    title: "Exportação Total",
    desc: "Exporte qualquer relatório em PDF, Word ou Excel com facilidade.",
    tag: "PDF · Excel · Word",
  },
];

export function WhyI9() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => { if (en.isIntersecting) en.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(165deg,#040814 0%,#0a1630 42%,#06112a 100%)" }}
    >
      {/* subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage: "radial-gradient(ellipse 100% 100% at 50% 0%,black 40%,transparent 80%)",
        }}
      />
      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(79,118,247,0.18) 0%,transparent 65%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[10px] font-bold tracking-[1.4px] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(165,180,252,0.2)", color: "#a5b4fc" }}>
            Por que i9?
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white mb-4">
            Gestão que faz diferença de verdade
          </h2>
          <p className="text-base max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.46)" }}>
            Não é só um software. É a estrutura que deixa você no controle do que importa.
          </p>
        </div>

        {/* Big number row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {bigCards.map((c, i) => (
            <div key={i}
              className="reveal rounded-2xl p-7 transition-all duration-250 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg,rgba(59,123,250,0.16),rgba(99,102,241,0.10))",
                border: "1px solid rgba(99,123,255,0.22)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 4px 24px rgba(59,123,250,0.12), 0 1px 0 rgba(255,255,255,0.08) inset",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="font-display text-5xl font-extrabold mb-3 leading-none"
                style={{
                  background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                {c.num}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyCards.map((c, i) => (
            <div key={i}
              className="reveal rounded-2xl p-5 transition-all duration-220 hover:-translate-y-1 group"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(79,70,229,0.2)", color: "#a78bfa" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{c.title}</h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{c.desc}</p>
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(79,70,229,0.18)", border: "1px solid rgba(99,102,241,0.28)", color: "#818cf8" }}>
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
