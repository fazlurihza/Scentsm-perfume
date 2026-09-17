"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Navigation — Left */}
          <nav className="hidden lg:flex items-center gap-10">
            {[
              { label: "Proses", href: "#process" },
              { label: "Aroma", href: "#shop" },
              { label: "Tentang", href: "#story" },
              { label: "Konsultasi", href: "#consultation" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[0.65rem] font-medium tracking-[0.25em] uppercase transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-[var(--color-charcoal-700)]"
                    : "text-[var(--color-ivory-200)]"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--color-gold-400)] transition-all duration-400 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Logo — Center */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="group flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
              <div className="relative h-12 w-14 lg:h-14 lg:w-16">
                <Image 
                  src="/logo.png" 
                  alt="Scentsm Logo" 
                  fill 
                  priority
                  sizes="(max-width: 768px) 56px, 64px"
                  className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                />
              </div>
            </Link>
          </div>

          {/* Right — Hamburger on Mobile */}
          <div className="flex items-center gap-5">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden flex flex-col gap-1.5 p-1 transition-colors duration-300 ${
                scrolled ? "text-[var(--color-charcoal-700)]" : "text-[var(--color-ivory-200)]"
              }`}
            >
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-64 pb-6" : "max-h-0"}`}>
          <nav className="flex flex-col gap-5 pt-4 border-t border-[var(--color-gold-400)]/20">
            {[
              { label: "Proses", href: "#process" },
              { label: "Aroma", href: "#shop" },
              { label: "Tentang Kami", href: "#story" },
              { label: "Konsultasi", href: "#consultation" },
            ].map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                className={`text-[0.7rem] font-medium tracking-[0.25em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-[var(--color-charcoal-700)]" : "text-[var(--color-ivory-100)]"
                }`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
