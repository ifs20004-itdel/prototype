import Link from "next/link";
import { heroContent, stats } from "@/libs/data_v2";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 50%, var(--navy-light) 100%)",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 80%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold accent line top */}
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

          {/* Headline */}
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

          {/* Description */}
          <p
            className="text-[17px] leading-relaxed mb-10 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {heroContent.description}
          </p>

          {/* Actions */}
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

          {/* Stats strip */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="px-6 py-5 text-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                }}
              >
                <div
                  className="text-[28px] font-bold mb-1"
                  style={{
                    color: "var(--gold)",
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[12px] font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
