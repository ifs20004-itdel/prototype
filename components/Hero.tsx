import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/libs/data";

export default function Hero() {
  return (
    <section className="max-w-content mx-auto px-12 pt-[90px] grid md:grid-cols-[0.95fr_1.05fr] gap-[70px] items-center">
      <div>
        <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--brass)] mb-6 flex items-center gap-2.5">
          <span className="w-[7px] h-[7px] rounded-full bg-[var(--brass)] inline-block" />
          {heroContent.eyebrow}
        </div>
        <h1 className="font-display text-[52px] leading-[1.08] font-medium tracking-[-0.02em] mb-6">
          {heroContent.headline[0]}
          <br />
          <span className="text-[var(--text-dim)]">{heroContent.headlineDimWord}</span>{" "}
          {heroContent.headline[1].replace(heroContent.headlineDimWord + " ", "")}
        </h1>
        <p className="text-[16px] text-[var(--text-mute)] max-w-[420px] mb-10">
          {heroContent.description}
        </p>

        <div className="flex gap-[18px] items-center">
          <Link
            href={heroContent.ctaPrimary.href}
            className="inline-block bg-[var(--brass)] text-[#15130F] px-7 py-[15px] rounded-[1px] text-[13.5px] font-semibold tracking-[0.01em] hover:bg-[var(--brass-light)] transition-colors duration-200"
          >
            {heroContent.ctaPrimary.label}
          </Link>
          <Link
            href={heroContent.ctaSecondary.href}
            className="flex items-center gap-2 text-[13.5px] font-medium text-[var(--text-mute)] hover:text-[var(--text)] transition-colors duration-200"
          >
            {heroContent.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Right — image + specs overlay */}
      <div
        className="relative rounded-[2px] overflow-hidden"
        style={{
          aspectRatio: "1 / 1.05",
          background: "var(--surface)",
          border: "1px solid var(--line)",
        }}
      >
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          fill
          className="object-cover opacity-[0.92]"
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
        />

        {/* Specs panel */}
        <div
          className="absolute top-0 right-0 bottom-0 w-[180px] hidden md:flex flex-col justify-center gap-[22px] px-5 py-6"
          style={{
            background: "rgba(11,11,13,0.82)",
            backdropFilter: "blur(6px)",
            borderLeft: "1px solid var(--line)",
          }}
        >
          {heroContent.specs.map((spec) => (
            <div key={spec.label}>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.05em] text-[var(--text-dim)] mb-[5px]">
                {spec.label}
              </div>
              <div className="font-mono text-[15px] text-[var(--brass)]">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
