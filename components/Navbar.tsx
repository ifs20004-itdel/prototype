"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig, navLinks } from "@/libs/data_v2";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ background: "var(--navy)" }}
      className="sticky top-0 z-50 shadow-md"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          {/* <div
            className="px-3 py-1.5 rounded-sm"
            style={{ background: "white" }}
          >
            <Image
              src="/logo.png"
              alt="PT. Tectona Karya Sampoerna"
              width={160}
              height={44}
              className="object-contain"
            />
          </div> */}

          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={75}
            height={75}
            className="object-contain rounded-full"
            style={{ background: "white", padding: "4px" }}
          /> */}
          <div>
            <div
              className="font-display text-[15px] font-700 leading-tight tracking-wide"
              style={{ color: "white", fontFamily: "var(--font-plus-jakarta)" }}
            >
              {siteConfig.shortName}
            </div>
            <div
              className="text-[11px] font-medium tracking-wide"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Karya Sampoerna
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-sm text-[13px] font-semibold transition-colors duration-200"
            style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--gold-light)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--gold)")
            }
          >
            Hubungi Kami
          </Link>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-200"
              style={{ background: "white" }}
            />
          ))}
        </button>
      </nav>
      {open && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col gap-4"
          style={{
            background: "var(--navy-dark)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium py-1"
              style={{ color: "rgba(255,255,255,0.8)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-block text-center px-5 py-2.5 rounded-sm text-[13px] font-semibold mt-1"
            style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
            onClick={() => setOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </header>
  );
}
