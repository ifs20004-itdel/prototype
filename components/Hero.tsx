import Link from "next/link";
import Image from "next/image";
import { heroContent, strengths, stats } from "@/libs/data";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 50%, var(--navy-light) 100%)",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 80%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--gold)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-widest mb-8"
            style={{
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.3)",
              color: "var(--gold-light)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            {heroContent.eyebrow}
          </div>

          <h1
            className="text-[44px] md:text-[58px] leading-[1.1] font-bold mb-3"
            style={{
              color: "white",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.02em",
            }}
          >
            {heroContent.headline}
          </h1>
          <h1
            className="text-[44px] md:text-[58px] leading-[1.1] font-bold mb-8"
            style={{
              color: "var(--gold)",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.02em",
            }}
          >
            {heroContent.subheadline}
          </h1>

          <p
            className="text-[17px] leading-relaxed mb-10 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href={heroContent.ctaPrimary.href}
              className="inline-block px-7 py-3.5 rounded-sm text-[14.5px] font-semibold transition-colors duration-200"
              style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
            >
              {heroContent.ctaPrimary.label}
            </Link>
            <Link
              href={heroContent.ctaSecondary.href}
              className="inline-block px-7 py-3.5 rounded-sm text-[14.5px] font-semibold transition-all duration-200"
              style={{
                background: "transparent",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.35)",
              }}
            >
              {heroContent.ctaSecondary.label}
            </Link>
          </div>

          <div className="mt-14">
            <div
              className="text-[12px] font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Mengapa memilih kami
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {strengths.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-3 px-3 py-5 rounded-sm"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={s.icon}
                      alt={s.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div
                    className="text-[12px] font-semibold leading-relaxed w-full"
                    style={{ color: "white" }}
                  >
                    {s.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
