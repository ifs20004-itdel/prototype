import Link from "next/link";
import { siteConfig, navLinks } from "@/libs/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--navy-dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                TKS
              </div>
              <div>
                <div
                  className="text-[15px] font-bold"
                  style={{ color: "white", fontFamily: "var(--font-plus-jakarta)" }}
                >
                  PT. Tectona Karya Sampoerna
                </div>
              </div>
            </div>
            <p
              className="text-[13.5px] leading-relaxed max-w-[280px]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h4
              className="text-[12px] uppercase tracking-widest font-semibold mb-5"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Navigasi
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[13.5px] mb-3 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h4
              className="text-[12px] uppercase tracking-widest font-semibold mb-5"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Kontak
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-[13.5px] mb-3 transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {siteConfig.email}
            </a>
            <p
              className="text-[13.5px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {siteConfig.location}
            </p>
          </div>
        </div>

        <div
          className="w-full h-px mb-6"
          style={{ background: "rgba(212,160,23,0.2)" }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="text-[12.5px]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © {year} PT. Tectona Karya Sampoerna. Hak cipta dilindungi.
          </p>
          <p
            className="text-[12.5px]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Pelalawan, Riau — Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
