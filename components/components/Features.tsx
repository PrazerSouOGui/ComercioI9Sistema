"use client";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: "users",
    title: "Cadastros Ilimitados",
    items: ["Clientes", "Produtos", "Fornecedores", "Categorias", "Funcionários e Vendedores", "Formas de Pagamento", "Transportadoras", "Contas, Compromissos e Cheques"],
  },
  {
    icon: "chart",
    title: "Movimentação",
    items: ["Controle do Caixa", "Pedido de Venda", "Orçamento", "Ordem de Serviço", "Frente Caixa (PDV)", "Contas a Receber / Pagar", "Folha de Pagamento", "Controle Financeiro Completo"],
  },
  {
    icon: "doc",
    title: "Emissão Fiscal",
    items: ["Nota Fiscal Eletrônica (NFe)", "Nota ao Consumidor (NFCe)", "Cupom Fiscal / SAT", "Controle de Notas Emitidas", "Emissão de Boletos"],
  },
  {
    icon: "graph",
    title: "Relatórios",
    items: ["Relatórios de Clientes e Produtos", "Relatórios Financeiros detalhados", "Gráficos nos Relatórios", "Recibos com Logotipo da empresa", "Resumo Financeiro do Sistema"],
  },
  {
    icon: "gear",
    title: "Utilitários",
    items: ["Usuários com Permissões por Nível", "Envio por Email automático", "Exportação PDF, Word, Excel", "Controle de Estoque integrado", "Configuração de Boletos"],
  },
  {
    icon: "lock",
    title: "Segurança",
    items: ["Controle de Acesso por Usuário", "Permissões Personalizadas", "Dados Criptografados", "Backup protegido"],
  },
];

function FeatureIcon({ name }: { name: string }) {
  const cls = "w-5 h-5";
  const icons: Record<string, React.ReactNode> = {
    users: <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    chart: <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
    doc:  <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
    graph:<svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>,
    gear: <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    lock: <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>,
  };
  return <>{icons[name]}</>;
}

export function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[10px] font-bold tracking-[1.4px] uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--tag-bg)", border: "1px solid var(--tag-bdr)", color: "var(--tag-txt)" }}>
            Recursos
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--txt)" }}>
            Tudo que sua empresa precisa
          </h2>
          <p className="text-base max-w-md mx-auto leading-relaxed" style={{ color: "var(--txt3)" }}>
            Do estoque à nota fiscal, um sistema só.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl p-6 group transition-all duration-250
                hover:-translate-y-1 hover:shadow-[var(--sh-h)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Top accent line on hover */}
              <div className="h-px w-full rounded-full mb-5 transition-all duration-300
                opacity-0 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
              />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "var(--tag-bg)",
                  border: "1px solid var(--tag-bdr)",
                  color: "var(--accent)",
                }}
              >
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="font-display text-base font-bold mb-3" style={{ color: "var(--txt)" }}>
                {f.title}
              </h3>
              <ul className="space-y-2">
                {f.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--txt2)" }}>
                    <span className="mt-[3px] w-4 h-4 min-w-[1rem] rounded-full flex-shrink-0"
                      style={{
                        background: "var(--accent)",
                        WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\") center/11px no-repeat",
                        mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\") center/11px no-repeat",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
