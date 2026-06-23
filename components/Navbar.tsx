"use client";

import Link from "next/link";
import { siteConfig, navLinks } from "@/libs/data";

export default function Navbar() {
  return (
    <nav
      style={{ borderBottom: "1px solid var(--line)" }}
      className="flex justify-between items-center px-12 py-6 max-w-content mx-auto"
    >
      <div className="flex items-center gap-2.5 font-display text-[19px] font-semibold tracking-[0.01em]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="#C9A876" strokeWidth="1.4" />
          <circle cx="11" cy="11" r="3" fill="#C9A876" />
        </svg>
        {siteConfig.name}
      </div>
      <div className="hidden md:flex gap-11">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium tracking-[0.01em] text-[var(--text-mute)] hover:text-[var(--text)] transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="#products"
        style={{ border: "1px solid var(--line-strong)" }}
        className="hidden md:inline-block px-[22px] py-2.5 rounded-[1px] text-[12.5px] font-medium tracking-[0.03em] hover:border-[var(--brass)] hover:text-[var(--brass)] transition-all duration-200"
      >
        Hubungi Kami
      </Link>
    </nav>
  );
}
