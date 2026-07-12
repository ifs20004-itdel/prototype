"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { services, siteConfig } from "@/libs/data_v2";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Page hero */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
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
            Solusi lengkap untuk<br />
            <span style={{ color: "var(--gold)" }}>kebutuhan bisnis Anda</span>
          </h1>
          <p
            className="text-[17px] max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Kami hadir dengan berbagai layanan profesional yang dirancang untuk mendukung pertumbuhan dan operasional bisnis di Riau.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-24" style={{ background: "var(--white)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-0">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="grid md:grid-cols-[1fr_2fr] gap-10 py-14"
              style={{
                borderBottom:
                  i < services.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              {/* Left — id + title */}
              <div>
                <div
                  className="text-[11px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-dim)" }}
                >
                  {service.id}
                </div>
                <div className="text-4xl mb-5">{service.icon}</div>
                <h2
                  className="text-[24px] font-bold"
                  style={{
                    color: "var(--navy)",
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  {service.title}
                </h2>
              </div>

              {/* Right — full description */}
              <div className="flex flex-col justify-center">
                <p
                  className="text-[15.5px] leading-relaxed mb-8"
                  style={{ color: "var(--text-mute)" }}
                >
                  {service.full}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold transition-colors duration-200"
                  style={{ color: "var(--navy)" }}
                >
                  Tanyakan layanan ini
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[12px]"
                    style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
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
            Hubungi kami langsung — tim kami siap mendiskusikan kebutuhan spesifik bisnis Anda.
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

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
