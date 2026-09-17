import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SCENTSM — Eau de Parfum",
  description:
    "Temukan koleksi parfum premium SCENTSM. Setiap wangi diciptakan untuk merayakan kepribadianmu — manis, segar, sensual, dan elegan. Tersedia dalam kemasan 30ml.",
  keywords:
    "parfum lokal, scentsm, eau de parfum, parfum wanita, parfum pria, parfum indonesia, parfum murah berkualitas",
  openGraph: {
    title: "SCENTSM — Eau de Parfum",
    description:
      "Koleksi parfum premium 30ml. Winter, Scandalous, Your Scent, Black Opium, dan masih banyak lagi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
