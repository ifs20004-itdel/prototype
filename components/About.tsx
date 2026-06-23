import Image from "next/image";
import { aboutContent } from "@/libs/data";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="max-w-content mx-auto px-12 py-[100px] grid md:grid-cols-[1.05fr_0.95fr] gap-[80px] items-center">
        {/* Text */}
        <div>
          <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--brass)] mb-4">
            {aboutContent.eyebrow}
          </div>
          <h3 className="font-display text-[29px] font-medium leading-[1.3] mb-[22px] whitespace-pre-line">
            {aboutContent.headline}
          </h3>
          {aboutContent.paragraphs.map((para, i) => (
            <p key={i} className="text-[15px] text-[var(--text-mute)] mb-7">
              {para}
            </p>
          ))}

          {/* Stats */}
          <div
            className="grid grid-cols-3 mt-10"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            {aboutContent.stats.map((stat, i) => (
              <div
                key={i}
                className="pt-5"
                style={{
                  borderRight:
                    i < aboutContent.stats.length - 1
                      ? "1px solid var(--line)"
                      : "none",
                  paddingRight: i < aboutContent.stats.length - 1 ? "20px" : "0",
                }}
              >
                <div className="font-display text-[28px] font-semibold text-[var(--brass)]">
                  {stat.value}
                </div>
                <div className="text-[12.5px] text-[var(--text-mute)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className="relative rounded-[2px] overflow-hidden"
          style={{
            aspectRatio: "1 / 1.15",
            border: "1px solid var(--line)",
          }}
        >
          <Image
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
