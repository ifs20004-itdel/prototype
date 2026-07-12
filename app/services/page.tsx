import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";


export const metadata: Metadata = {
  title: "Layanan — PT. Tectona Karya Sampoerna",
  description:
    "Layanan profesional PT. Tectona Karya Sampoerna — pengadaan, kontraktor, konsultasi bisnis, dan manajemen proyek di Riau.",
};
export default function ServicesPage() {
  return <ServicesPageClient />;
}
