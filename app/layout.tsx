import type { Metadata } from "next";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "I9 — Sistema de Gerenciamento Comercial",
  description: "Sistema completo para gestão comercial: estoque, vendas, financeiro e emissão de NFe e NFCe. Funciona em rede local na sua empresa.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
