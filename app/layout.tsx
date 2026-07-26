import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import "./headlines.css";
import "./conversion-updates.css";
import "./headline-size.css";
import "./hero-product.css";
import "./folds.css";
import "./authority-offer.css";
import "./fernanda-story.css";
import "./story-images.css";
import "./related-icons.css";
import "./audio-samples.css";
import "./testimonials-real.css";
import "./bonuses.css";
import "./pricing-options.css";
import "./hero-offer-showcase.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const imageUrl = `${protocol}://${host}/og.png`;
  return {
    title: "Método da Memória Musical | Concursos de Enfermagem",
    description: "Revise os assuntos mais cobrados em concursos de enfermagem com músicas criadas para facilitar a memorização.",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "Método da Memória Musical",
      description: "Memorize melhor. Revise onde estiver.",
      locale: "pt_BR",
      type: "website",
      images: [{ url: imageUrl, width: 1732, height: 909, alt: "Memória Musical para concursos de enfermagem" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Método da Memória Musical",
      description: "Memorize melhor. Revise onde estiver.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${manrope.variable} ${playfair.variable}`}>{children}</body></html>;
}
