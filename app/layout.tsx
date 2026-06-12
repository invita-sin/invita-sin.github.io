import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wedding Template Hub — Katalog Template Undangan Pernikahan",
  description:
    "Temukan template undangan pernikahan digital terbaik. Lihat demo, fork repository, dan deploy ke GitHub Pages dengan mudah.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Wedding Template Hub",
    description: "Katalog template undangan pernikahan digital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
