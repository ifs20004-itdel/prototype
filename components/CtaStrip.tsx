import Link from "next/link";
import { ctaContent } from "@/libs/data";

export default function CtaStrip() {
  return (
    <section
      className="text-center px-12 py-[90px]"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--brass)] mb-4 flex justify-center">
        {ctaContent.eyebrow}
      </div>
      <h2 className="font-display text-[36px] font-medium max-w-[580px] mx-auto mb-8 leading-[1.25]">
        {ctaContent.headline}
      </h2>
      <Link
        href={ctaContent.cta.href}
        className="inline-block bg-[var(--brass)] text-[#15130F] px-7 py-[15px] rounded-[1px] text-[13.5px] font-semibold tracking-[0.01em] hover:bg-[var(--brass-light)] transition-colors duration-200"
      >
        {ctaContent.cta.label}
      </Link>
    </section>
  );
}
