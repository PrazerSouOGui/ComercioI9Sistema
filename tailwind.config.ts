import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        brand: {
          50:  "#eef4ff",
          100: "#dce9ff",
          200: "#b2ccff",
          400: "#6699ff",
          500: "#3b7bfa",
          600: "#2459e8",
          700: "#1a42cc",
        },
        ink: {
          900: "#060c1a",
          800: "#0c1428",
          700: "#111f3a",
          600: "#1a2e52",
        },
      },
      animation: {
        "grid-drift": "gridDrift 22s linear infinite",
        "pulse-ring": "pulseRing 2.4s ease-out infinite",
        "blink-dot": "blinkDot 2s ease-in-out infinite",
        "fade-up": "fadeUp .55s ease both",
      },
      keyframes: {
        gridDrift: {
          from: { backgroundPosition: "0 0" },
          to:   { backgroundPosition: "64px 64px" },
        },
        pulseRing: {
          "0%":   { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(2.1)", opacity: "0" },
        },
        blinkDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: { xs: "4px" },
      boxShadow: {
        aero:    "0 8px 32px rgba(59,123,250,0.18), 0 1px 0 rgba(255,255,255,0.12) inset",
        "aero-sm":"0 4px 16px rgba(59,123,250,0.12), 0 1px 0 rgba(255,255,255,0.08) inset",
        card:    "0 1px 3px rgba(0,0,0,0.08), 0 4px 14px rgba(0,0,0,0.05)",
        "card-h":"0 8px 32px rgba(36,89,232,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
