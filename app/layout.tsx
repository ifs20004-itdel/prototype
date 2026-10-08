import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
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
      className={`${plusJakarta.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
