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
            {/* Socials */}
            <div className="flex gap-2">
              {[
                { href: "https://instagram.com/comercioi9sistema", title: "Instagram", d: "M22 2a1 1 0 000-2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { href: "https://facebook.com/comercioi9sistema", title: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { href: "https://youtube.com/@comercioi9sistema", title: "YouTube", d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" },
                { href: "https://wa.me/5517991845032", title: "WhatsApp", d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" },
              ].map((s) => (
                <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                  </svg>
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
            © 2026 i9 — Todos os direitos reservados.
          </p>
          <span className="font-mono text-[10px]" style={{ color: "rgba(255,255,255,0.16)" }}>
            contato@softwarei9.com.br
          </span>
        </div>
      </div>
    </footer>
  );
}
