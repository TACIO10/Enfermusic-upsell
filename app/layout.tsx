import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://memoria-musical-enfermagem.taciojoga10.chatgpt.site"),
  title: "Memória Musical | Revisão para Concursos de Enfermagem",
  description:
    "Reforce os assuntos mais cobrados nos concursos de enfermagem com músicas que acompanham sua rotina.",
  openGraph: {
    title: "Memória Musical | Concursos de Enfermagem",
    description: "Faça a matéria voltar à memória.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memória Musical | Concursos de Enfermagem",
    description: "Faça a matéria voltar à memória.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
