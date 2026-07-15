"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/libs/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        background: "var(--white)",
        borderBottom: "1px solid var(--line)",
      }}
      className="sticky top-0 z-50 shadow-sm"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PT. Tectona Karya Sampoerna"
            width={120}
            height={20}
            className="object-contain"
            priority
          />
        </Link> */}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium transition-colors duration-200"
              style={{ color: "var(--navy)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--orange)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--navy)")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-sm text-[13px] font-semibold transition-colors duration-200"
            style={{ background: "var(--navy)", color: "white" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--orange)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--navy)")
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
              style={{ background: "var(--navy)" }}
            />
          ))}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col gap-4"
          style={{
            background: "var(--gray-light)",
            borderTop: "1px solid var(--line)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium py-1"
              style={{ color: "var(--navy)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-block text-center px-5 py-2.5 rounded-sm text-[13px] font-semibold mt-1"
            style={{ background: "var(--navy)", color: "white" }}
            onClick={() => setOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </header>
  );
}