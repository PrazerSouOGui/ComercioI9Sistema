"use client";

const stats = [
  { n: "∞",    l: "Cadastros ilimitados" },
  { n: "10+",  l: "Segmentos atendidos"  },
  { n: "NFe",  l: "Emissão fiscal completa" },
  { n: "Rede", l: "Multi-estação local"  },
];

export function StatsBar() {
  return (
    <div className="glass-card relative z-10 -mt-1">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-6 px-4 text-center
              border-r border-b sm:border-b-0 border-[var(--bdr-s)]
              last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r
              hover:bg-white/10 dark:hover:bg-white/[0.03] transition-colors duration-200"
          >
            <span
              className="font-display text-2xl font-extrabold tracking-tight leading-none mb-1"
              style={{ color: "var(--accent)" }}
            >
              {s.n}
            </span>
            <span className="text-xs font-medium" style={{ color: "var(--txt3)" }}>
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
