import Link from "next/link";
import { siteConfig, footerLinks } from "@/libs/data";

const footerSections = [
  { heading: "Jelajah", links: footerLinks.jelajah },
  { heading: "Kontak", links: footerLinks.kontak },
  { heading: "Lokasi", links: footerLinks.lokasi },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-content mx-auto px-12 pt-[70px] pb-9">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-[60px]">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-[19px] font-semibold mb-4">
            {siteConfig.name}
          </div>
          <p className="text-[13.5px] text-[var(--text-mute)] max-w-[260px]">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Link columns */}
        {footerSections.map((section) => (
          <div key={section.heading}>
            <h4 className="font-mono text-[11.5px] font-normal uppercase tracking-[0.05em] text-[var(--text-dim)] mb-[18px]">
              {section.heading}
            </h4>
            {section.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[13.5px] text-[var(--text-mute)] mb-3 hover:text-[var(--brass)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="flex justify-between font-mono text-[12.5px] text-[var(--text-dim)] pt-6"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <span>© {year} PROTOTYPE</span>
        <span>MADE IN INDONESIA</span>
      </div>
    </footer>
  );
}
