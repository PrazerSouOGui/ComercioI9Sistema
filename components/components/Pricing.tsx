"use client";
import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Individual",
    desc: "Para autônomos e microempresas",
    price: "69,90",
    items: ["1 Computador", "Todos os recursos inclusos", "Emissão NFe e NFCe", "Suporte técnico", "Atualizações gratuitas"],
    featured: false,
  },
  {
    name: "Empresarial",
    desc: "Para empresas em crescimento",
    price: "99,90",
    items: ["Até 3 Computadores", "Todos os recursos inclusos", "Emissão NFe e NFCe", "Suporte técnico prioritário", "Atualizações gratuitas", "Trabalho em rede"],
    featured: true,
  },
  {
    name: "Corporativo",
    desc: "Para grandes operações",
    price: "149,90",
    items: ["Acima de 3 Computadores", "Todos os recursos inclusos", "Emissão NFe e NFCe", "Suporte técnico VIP", "Atualizações gratuitas", "Treinamento incluído"],
    featured: false,
  },
];

export function Pricing() {
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
    <section id="pricing" ref={ref} className="py-24 px-6"
      style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[10px] font-bold tracking-[1.4px] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-bdr)", color: "var(--tag-txt)" }}>
            Planos
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--txt)" }}>
            Preços simples e transparentes
          </h2>
          <p className="text-base max-w-sm mx-auto" style={{ color: "var(--txt3)" }}>
            Todos os planos tem acesso ao sistema completo e ao suporte.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {plans.map((p, i) => (
            <div key={i}
              className={`reveal relative rounded-2xl p-7 flex flex-col transition-all duration-250 hover:-translate-y-1 ${
                p.featured ? "aero-featured" : "glass-card"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2
                  px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white whitespace-nowrap"
                  style={{ background: "linear-gradient(90deg,var(--accent),var(--accent2))", boxShadow: "0 2px 10px rgba(99,102,241,0.4)" }}>
                  Mais Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-lg font-bold mb-1" style={{ color: "var(--txt)" }}>{p.name}</h3>
                <p className="text-xs" style={{ color: "var(--txt3)" }}>{p.desc}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-medium" style={{ color: "var(--txt3)" }}>R$</span>
                  <span className="font-display text-4xl font-extrabold tracking-tight" style={{ color: "var(--txt)" }}>
                    {p.price}
                  </span>
                  <span className="text-xs" style={{ color: "var(--txt3)" }}>/mês</span>
                </div>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--txt2)" }}>
                    <span className="mt-0.5 w-4 h-4 min-w-[1rem] rounded-full flex-shrink-0"
                      style={{
                        background: p.featured ? "#6366f1" : "var(--accent)",
                        WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\") center/11px no-repeat",
                        mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\") center/11px no-repeat",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5517991845032"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-150 block ${
                  p.featured
                    ? "text-white hover:brightness-110 hover:-translate-y-px"
                    : "hover:bg-opacity-10"
                }`}
                style={p.featured
                  ? {
                      background: "linear-gradient(90deg,var(--accent),var(--accent2))",
                      boxShadow: "0 4px 14px rgba(99,102,241,0.4)",
                    }
                  : {
                      background: "transparent",
                      border: "1.5px solid var(--tag-bdr)",
                      color: "var(--accent)",
                    }
                }
              >
                Escolher Plano
              </a>
            </div>
          ))}
        </div>

        {/* Discounts */}
        <div className="reveal glass-card rounded-2xl p-7">
          <h3 className="font-display text-base font-bold text-center mb-1 flex items-center justify-center gap-2"
            style={{ color: "var(--txt)" }}>
            <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"/>
            </svg>
            Descontos por período
          </h3>
          <p className="text-xs text-center mb-6" style={{ color: "var(--txt3)" }}>
            Economize mais comprometendo-se por mais tempo
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { strong: "—", label: "Plano Mensal", sub: "Valor integral" },
              { strong: "5% OFF", label: "Plano Trimestral", sub: "3 meses" },
              { strong: "10% OFF", label: "Plano Anual", sub: "12 meses" },
            ].map((d, i) => (
              <div key={i} className="rounded-xl p-4 text-center"
                style={{ background: "var(--bg)", border: "1px solid var(--bdr-s)" }}>
                <strong className="font-display block text-xl font-extrabold mb-1"
                  style={{ color: "var(--accent)" }}>{d.strong}</strong>
                <p className="text-xs leading-snug" style={{ color: "var(--txt3)" }}>
                  {d.label}<br />{d.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--txt)" }}>Vamos conversar?</h3>
          <p className="text-sm mb-6" style={{ color: "var(--txt3)" }}>
            Fale com a gente e solicite uma demonstração gratuita agora.
          </p>
          <a
            href="https://wa.me/5517991845032"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg,#3b7bfa,#6366f1)",
              boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
            }}
          >
            Solicitar Demonstração
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
