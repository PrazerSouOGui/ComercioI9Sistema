import type { Metadata } from "next";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "i9 Software",
  description: "Sistema completo para gestão comercial: estoque, vendas, financeiro e emissão de NFe e NFCe. Funciona em rede local na sua empresa.",
  icons: {
    icon: "/i9icone.png",
    apple: "/i9icone.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="icon" href="/i9icone.png" type="image/png" />
        <link rel="apple-touch-icon" href="/i9icone.png" />
        <meta name="theme-color" content="#07090f" />
      </head>
      <body>{children}</body>
    </html>
  );
}
