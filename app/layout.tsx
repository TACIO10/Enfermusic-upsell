import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playlist para Treinar o Ouvido | Oferta Especial",
  description: "Acelere sua percepção musical com uma playlist selecionada para treinar ouvido absoluto e relativo.",
  openGraph: {
    title: "Playlist para Treinar o Ouvido",
    description: "Ouvido absoluto e relativo — oferta especial para alunos do Loop Auditivo.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Playlist para Treinar o Ouvido", description: "Ouvido absoluto e relativo.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head>
    <script dangerouslySetInnerHTML={{ __html: 'window.pixelId="6a668772849ca51086a296f7";' }} />
    <script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js" async defer />
    <script src="https://cdn.utmify.com.br/scripts/utms/latest.js" data-utmify-prevent-xcod-sck="" data-utmify-prevent-subids="" async defer />
    <script data-goatcounter="https://enfermeiro.goatcounter.com/count" src="https://gc.zgo.at/count.js" async />
  </head><body>{children}</body></html>;
}
