import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Espere! Sua compra ainda não está completa",
  description: "Assista ao recado antes de concluir sua compra.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head>
    <script dangerouslySetInnerHTML={{ __html: 'window.pixelId="6a668772849ca51086a296f7";' }} />
    <script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js" async defer />
    <script src="https://cdn.utmify.com.br/scripts/utms/latest.js" data-utmify-prevent-xcod-sck="" data-utmify-prevent-subids="" async defer />
    <script data-goatcounter="https://enfermeiro.goatcounter.com/count" src="https://gc.zgo.at/count.js" async />
  </head><body>{children}</body></html>;
}
