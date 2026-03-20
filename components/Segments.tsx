"use client";
import { useEffect, useRef } from "react";

const segs = [
  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Construção Civil" },
  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Lar e Decoração" },
  { icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z", label: "Moda e Vestuário" },
  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Tecnologia e TI" },
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: "Alimentação" },
  { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Oficina Mecânica" },
  { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Celulares e Reparo" },
  { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", label: "Mercados" },
  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Pet Shop" },
];

export function Segments() {
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
      style={{ background: "var(--bg-surf)", borderTop: "1px solid var(--bdr-s)", borderBottom: "1px solid var(--bdr-s)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-[10px] font-bold tracking-[1.4px] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-bdr)", color: "var(--tag-txt)" }}>
            Segmentos
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--txt)" }}>
            Feito para o seu negócio
          </h2>
          <p className="text-base max-w-sm mx-auto" style={{ color: "var(--txt3)" }}>
            Seja qual for o segmento, o i9 se adapta à sua realidade.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 reveal">
          {segs.map((s, i) => (
            <div key={i}
              className="glass-card rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 p-3
                transition-all duration-200 hover:-translate-y-2 cursor-default group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <svg className="w-7 h-7 transition-colors duration-200" style={{ color: "var(--accent)" }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
              </svg>
              <span className="text-[11px] font-semibold text-center leading-tight transition-colors duration-200
                group-hover:text-[var(--accent)]" style={{ color: "var(--txt2)" }}>
                {s.label}
              </span>
            </div>
          ))}
          {/* wildcard */}
          <div className="rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 p-3
            transition-all duration-200 hover:-translate-y-2 cursor-default"
            style={{ border: "1.5px dashed var(--tag-bdr)", background: "var(--tag-bg)" }}
          >
            <svg className="w-7 h-7" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <span className="text-[11px] font-semibold text-center leading-tight" style={{ color: "var(--tag-txt)" }}>
              A sua empresa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
