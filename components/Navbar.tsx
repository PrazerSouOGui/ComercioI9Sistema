"use client";
import { useState, useEffect } from "react";

interface NavProps {
  onScrollToPricing: () => void;
  onScrollToFeatures: () => void;
}

export function Navbar({ onScrollToPricing, onScrollToFeatures }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  // false = "Conheça o sistema" (estado inicial)
  // true  = "Conheça os planos" (após primeiro clique)
  const [showPlanos, setShowPlanos] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("i9-theme");
    if (saved === "dark") setDark(true);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("i9-theme", next ? "dark" : "light");
  }

  function handleMainBtn() {
    if (!showPlanos) {
      // Primeiro clique: rola para o sistema e troca label
      onScrollToFeatures();
      setShowPlanos(true);
    } else {
      // Segundo clique: rola para planos e volta ao label inicial
      onScrollToPricing();
      setShowPlanos(false);
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 flex items-center justify-between px-4 sm:px-8 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10 shadow-sm" : "bg-transparent"
      }`}
      style={{ userSelect: "none" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/i9icone.png"
          alt="i9 logo"
          width={34}
          height={34}
          className="sm:w-[38px] sm:h-[38px]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title="Alternar tema"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-150"
          style={{
            background: "rgba(59, 58, 58, 0.49)",
            border: "1px solid rgba(37, 37, 37, 0.12)",
            color: "rgb(233, 233, 233)",
          }}
        >
          {dark ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </button>

        {/* Main CTA — alterna entre "Conheça o sistema" e "Conheça os planos" */}
        <button
          onClick={handleMainBtn}
          className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px whitespace-nowrap"
          style={{
            background: "var(--accent)",
            boxShadow: "0 2px 12px rgba(36,89,232,0.4)",
          }}
        >
          {showPlanos ? "Conheça os planos" : "Conheça o sistema"}
        </button>
      </div>
    </nav>
  );
}
