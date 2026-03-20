import type { Metadata } from "next";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "i9 sistema de gestão",
  description: "Sistema completo para gestão comercial: estoque, vendas, financeiro e emissão de NFe e NFCe. Funciona em rede local na sua empresa.",
  icons: {
    icon: "/i9icone.png",
    shortcut: "/i9icone.png",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
