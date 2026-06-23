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
  title: "Website Prototype — Version 1.0",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ipsum felis, at blandit nunc finibus eget.",
  keywords: [
    "earphone",
    "speaker portabel",
    "DAC",
    "audio interface",
    "perangkat audio",
    "Jakarta",
  ],
  openGraph: {
    title: "Website Prototype — Version 1.0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ipsum felis, at blandit nunc finibus eget.",
    type: "website",
    locale: "id_ID",
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
