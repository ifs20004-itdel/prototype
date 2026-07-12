import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "Tentang Kami — PT. Tectona Karya Sampoerna",
  description: "Mengenal lebih jauh PT. Tectona Karya Sampoerna — sejarah, visi, misi, dan nilai-nilai perusahaan kami.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}