import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memória Musical para sempre",
  description: "Tenha acesso vitalício ao Memória Musical, sem mensalidades ou renovações.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head>
    <script src="https://cdn.utmify.com.br/scripts/utms/latest.js" data-utmify-prevent-xcod-sck="" data-utmify-prevent-subids="" async defer />
    <script data-goatcounter="https://enfermeiro.goatcounter.com/count" src="https://gc.zgo.at/count.js" async />
  </head><body>{children}</body></html>;
}
