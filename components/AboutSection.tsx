import Image from "next/image";
import Link from "next/link";
import { aboutSummary } from "@/libs/data";

export default function AboutSection() {
  return (
    <section className="py-24" style={{ background: "var(--white)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ aspectRatio: "3/3" }}
            >
              <Image
                src={aboutSummary.image.src}
                alt={aboutSummary.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 w-32 h-32 rounded-sm -z-10"
              style={{
                background: "var(--gold-pale)",
                border: "2px solid var(--gold)",
              }}
            />
          </div>

          <div>
            <div
              className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
            >
              {aboutSummary.eyebrow}
            </div>

            <h2
              className="text-[32px] md:text-[36px] font-bold leading-[1.2] mb-6 whitespace-pre-line"
              style={{
                color: "var(--navy)",
                fontFamily: "var(--font-plus-jakarta)",
                letterSpacing: "-0.01em",
              }}
            >
              {aboutSummary.headline}
            </h2>

            <p
              className="text-[15.5px] leading-relaxed mb-3"
              style={{ color: "var(--text-mute)" }}
            >
              {aboutSummary.description}
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {aboutSummary.values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--gold)" }}
                  />
                  <div
                    className="text-[14px] font-semibold"
                    style={{ color: "var(--navy)" }}
                  >
                    {v.title}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={aboutSummary.cta.href}
              className="inline-flex items-center gap-2 text-[14px] font-semibold transition-colors duration-200"
              style={{ color: "var(--navy)" }}
            >
              {aboutSummary.cta.label}
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
