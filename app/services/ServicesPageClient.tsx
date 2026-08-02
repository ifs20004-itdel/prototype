"use client";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { services, siteConfig } from "@/libs/data";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.3)",
              color: "var(--gold-light)",
            }}
          >
            Layanan Kami
          </div>
          <h1
            className="text-[40px] md:text-[52px] font-bold leading-[1.1] mb-4"
            style={{
              color: "white",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.02em",
            }}
          >
            Solusi lengkap untuk
            <br />
            <span style={{ color: "var(--gold)" }}>kebutuhan bisnis Anda</span>
          </h1>
          <p
            className="text-[17px] max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Kami hadir dengan berbagai layanan profesional yang dirancang untuk
            mendukung pertumbuhan dan operasional bisnis di Riau.
          </p>
        </div>
      </section>
      <section className="pt-10" style={{ background: "var(--white)" }}>
        <div className="text-center">
          <a
            href="/docs/PRODUCT CATALOGUE_PT. TECTONA KARYA SAMPOERNA v1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-[14px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--gold)",
              color: "var(--navy-dark)",
            }}
          >
            Unduh Katalog
            <span aria-hidden="true">
              <ArrowDown />
            </span>
          </a>
        </div>
      </section>
      <section className="py-10" style={{ background: "var(--white)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5 p-5 rounded-sm items-center"
                style={{
                  background: "var(--gray-light)",
                  border: "1px solid var(--line)",
                }}
              >
                <div
                  className="relative w-[140px] h-[110px] overflow-hidden rounded-sm"
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="140px"
                  />
                </div>
                <div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    {service.id}
                  </div>

                  <h2
                    className="text-[19px] md:text-[20px] font-bold leading-snug mb-3"
                    style={{
                      color: "var(--navy)",
                      fontFamily: "var(--font-plus-jakarta)",
                    }}
                  >
                    {service.title}
                  </h2>

                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "var(--text-mute)" }}
                  >
                    {service.full}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 text-center"
        style={{ background: "var(--gray-light)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-[30px] font-bold mb-4"
            style={{
              color: "var(--navy)",
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            Belum menemukan yang Anda cari?
          </h2>
          <p
            className="text-[15.5px] mb-8 max-w-lg mx-auto"
            style={{ color: "var(--text-mute)" }}
          >
            Hubungi kami langsung — tim kami siap mendiskusikan kebutuhan
            spesifik bisnis Anda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block px-7 py-3.5 rounded-sm text-[14px] font-semibold"
              style={{ background: "var(--navy)", color: "white" }}
            >
              Kirim Email
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 rounded-sm text-[14px] font-semibold"
              style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
