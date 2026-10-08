import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT. Tectona Karya Sampoerna — Mitra Bisnis Terpercaya di Riau",
  description:
    "PT. Tectona Karya Sampoerna adalah perusahaan jasa dan trading yang berkomitmen memberikan solusi profesional dan berintegritas untuk industri di Pelalawan, Riau.",
  keywords: [
    "Tectona Karya Sampoerna",
    "perusahaan Pelalawan",
    "kontraktor Riau",
    "jasa bisnis Pelalawan",
  ],
  verification: {
      google: "bJEVp8m1X8XVjR81BhDqOVjUM48VG537MROfEmuedC8",
  },
  openGraph: {
    title: "PT. Tectona Karya Sampoerna",
    description: "Mitra bisnis terpercaya untuk industri di Riau.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
