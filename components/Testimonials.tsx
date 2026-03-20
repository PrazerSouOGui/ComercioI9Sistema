"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    stars: 5,
    text: "O i9 transformou completamente a nossa loja. Controlamos estoque, vendas e emitimos notas fiscais com muito mais facilidade. O suporte é excelente!",
    name: "Maria Clara Santos",
    role: "Proprietária — Casa de Rações Pata Amiga",
    initials: "MC",
    img: "/Maria.png",
  },
  {
    stars: 5,
    text: "Usamos o i9 há 3 anos e não trocamos por nada. Sistema completo, funciona em rede perfeitamente e nossos dados ficam seguros no nosso próprio servidor.",
    name: "Roberto Figueiredo",
    role: "Diretor Comercial — Distribuidora RF",
    initials: "RF",
    img: "/Roberto.png",
  },
  {
    stars: 5,
    text: "Emissão de Nota e Cupom fiscal ficou simples com o i9. O sistema é intuitivo e os relatórios nos ajudam muito nas decisões. Melhor investimento que fizemos!",
    name: "Ana Paula Oliveira",
    role: "Gerente Geral — Mercado Santa Rosa",
    initials: "AO",
    img: "/ana.png",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => { if (en.isIntersecting) en.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6"
      style={{ background: "var(--bg-surf)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-[10px] font-bold tracking-[1.4px] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-bdr)", color: "var(--tag-txt)" }}>
            Depoimentos
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--txt)" }}>
            Quem usa, recomenda
          </h2>
          <p className="text-base max-w-sm mx-auto" style={{ color: "var(--txt3)" }}>
            Empresas que transformaram sua gestão com o i9.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i}
              className="reveal glass-card rounded-2xl p-7 transition-all duration-250 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} className="w-4 h-4" fill="#fbbf24" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-loose mb-6 italic" style={{ color: "var(--txt2)" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))" }}>
                  <img
                    src={t.img} alt={t.initials}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <span className="absolute">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "var(--txt)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--txt3)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
