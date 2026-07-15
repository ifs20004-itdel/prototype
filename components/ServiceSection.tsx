import Link from "next/link";
import { services, servicesHeader } from "@/libs/data";
import { Settings2, Wrench, Factory, ContainerIcon  } from "lucide-react";

const serviceIcons = [
  <Settings2 size={28} strokeWidth={1.5} />,   
  <Wrench size={28} strokeWidth={1.5} />,      
  <Factory size={28} strokeWidth={1.5} />,
  <ContainerIcon  size={28} strokeWidth={1.5} />,
];

export default function ServicesSection() {
  return (
    <section className="py-24" style={{ background: "var(--gray-light)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div
            className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
          >
            {servicesHeader.eyebrow}
          </div>
          <h2
            className="text-[32px] md:text-[38px] font-bold mb-4"
            style={{
              color: "var(--navy)",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.01em",
            }}
          >
            {servicesHeader.headline}
          </h2>
          <p
            className="text-[15.5px] max-w-xl mx-auto"
            style={{ color: "var(--text-mute)" }}
          >
            {servicesHeader.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="rounded-sm p-8 transition-all duration-200 group"
              style={{
                background: "var(--white)",
                border: "1px solid var(--line)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(212,160,23,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: "var(--text-dim)" }}
                >
                  {service.id}
                </span>
                <span style={{ color: "var(--gold)" }}>{serviceIcons[i]}</span>
              </div>

              <h3
                className="text-[19px] font-bold mb-3"
                style={{
                  color: "var(--navy)",
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "var(--text-mute)" }}
              >
                {service.short}
              </p>

              <div
                className="mt-6 h-0.5 w-0 transition-all duration-300 group-hover:w-12"
                style={{ background: "var(--gold)" }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-7 py-3.5 rounded-sm text-[14px] font-semibold transition-colors duration-200"
            style={{
              background: "var(--navy)",
              color: "white",
            }}
          >
            Lihat Semua Layanan →
          </Link>
        </div>
      </div>
    </section>
  );
}
