"use client";

export function Footer() {
  return (
    <footer style={{ background: "#040810" }} className="pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-extrabold mb-3" style={{ color: "var(--accent)" }}>i9</div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.38)" }}>
              Sistema de gerenciamento comercial completo para empresas que precisam de controle, eficiência e segurança.
            </p>
            <div className="space-y-2 mb-5">
              {[
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "contato@softwarei9.com.br" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "(17) 99184-5032" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#60a5fa" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{item.text}</span>
                </div>
              ))}
            </div>
            {/* Socials — somente texto, sem ícones */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { href: "https://instagram.com/comercioi9sistema", label: "Instagram" },
                { href: "https://facebook.com/comercioi9sistema", label: "Facebook" },
                { href: "https://youtube.com/@comercioi9sistema", label: "YouTube" },
                { href: "https://wa.me/5517991845032", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Sistema",
              links: [
                { label: "Recursos", href: "#features" },
                { label: "Segmentos", href: "#features" },
                { label: "Por que i9?", href: "#features" },
                { label: "Depoimentos", href: "#features" },
              ],
            },
            {
              title: "Planos",
              links: [
                { label: "Individual", href: "#pricing" },
                { label: "Empresarial", href: "#pricing" },
                { label: "Corporativo", href: "#pricing" },
              ],
            },
            {
              title: "Contato",
              links: [
                { label: "WhatsApp", href: "https://wa.me/5517991845032" },
                { label: "E-mail", href: "mailto:contato@softwarei9.com.br" },
                { label: "Instagram", href: "https://instagram.com/comercioi9sistema" },
                { label: "Facebook", href: "https://facebook.com/comercioi9sistema" },
                { label: "YouTube", href: "https://youtube.com/@comercioi9sistema" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold uppercase tracking-[1.2px] mb-4"
                style={{ color: "rgba(255,255,255,0.22)" }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}
                      className="text-xs transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.42)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)"; }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.22)" }}>
            © 2026 Comercio i9 — Todos os direitos reservados.
          </p>
          <span className="font-mono text-[10px]" style={{ color: "rgba(255,255,255,0.16)" }}>
            contato@softwarei9.com.br
          </span>
        </div>
      </div>
    </footer>
  );
}
