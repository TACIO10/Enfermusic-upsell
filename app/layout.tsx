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
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'window.pixelId="6a668772849ca51086a296f7";' }} />
        <script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js" async defer />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        />
        <script
          data-goatcounter="https://enfermeiro.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
