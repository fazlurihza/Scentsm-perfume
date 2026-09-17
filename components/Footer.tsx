"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[var(--color-charcoal-950)] text-[var(--color-ivory-200)] border-t border-[var(--color-gold-400)]/20 overflow-hidden"
    >
      {/* Ambient luxury glow in background */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[var(--color-gold-500)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[var(--color-gold-400)]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Upper Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-14 w-16 drop-shadow-[0_2px_12px_rgba(201,152,51,0.3)]">
                <Image
                  src="/logo.png"
                  alt="Scentsm Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-[0.6rem] text-[var(--color-gold-300)] tracking-[0.35em] uppercase mb-4 font-semibold">
              Bespoke Perfume Atelier · Custom Scent Formula
            </p>
            <p
              className="text-[var(--color-ivory-300)]/70 text-sm font-light leading-relaxed max-w-sm mb-8"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Scentsm menghadirkan pengalaman meracik formula parfum personal yang sepenuhnya disesuaikan dengan identitas, mood, dan cerita unik dirimu.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-gold-300)] mb-3 font-semibold">
                Dapatkan Info & Inspirasi Aroma
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex max-w-md shadow-lg shadow-black/40">
                <input
                  type="email"
                  placeholder="Masukkan alamat email kamu"
                  className="flex-1 bg-[var(--color-charcoal-900)] border border-[var(--color-gold-400)]/30 px-4 py-3 text-xs text-[var(--color-ivory-100)] placeholder:text-[var(--color-charcoal-400)] focus:outline-none focus:border-[var(--color-gold-400)] focus:ring-1 focus:ring-[var(--color-gold-400)] transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-gold-300)] to-[var(--color-gold-500)] text-[var(--color-charcoal-950)] text-[0.65rem] font-bold tracking-[0.25em] uppercase px-7 transition-all duration-300 hover:brightness-110 shadow-[0_0_15px_rgba(224,188,88,0.25)]"
                >
                  Daftar
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[var(--color-gold-300)] mb-6">
              Eksplorasi
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Proses Pembuatan", href: "#process" },
                { label: "Inspirasi Karakter Aroma", href: "#shop" },
                { label: "Tentang Scentsm", href: "#story" },
                { label: "Konsultasi Kustom", href: "#consultation" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[var(--color-ivory-300)]/80 hover:text-[var(--color-gold-300)] text-sm font-light transition-colors duration-300 relative group inline-block"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--color-gold-400)] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-[var(--color-gold-300)] mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-3.5">
              <li
                className="text-[var(--color-ivory-300)]/80 text-sm font-light flex items-center gap-2"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                <span className="text-[var(--color-gold-400)]">📍</span>
                <span>Indonesia</span>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ivory-300)]/80 hover:text-[var(--color-gold-300)] text-sm font-light transition-colors duration-300 flex items-center gap-2.5 group"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-gold-400)] group-hover:scale-110 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.118 1.524 5.847L0 24l6.335-1.524A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.36-.214-3.727.977.994-3.632-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                  </svg>
                  <span>WhatsApp Konsultasi</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@scentsm.id"
                  className="text-[var(--color-ivory-300)]/80 hover:text-[var(--color-gold-300)] text-sm font-light transition-colors duration-300 flex items-center gap-2.5 group"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-gold-400)] group-hover:scale-110 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>hello@scentsm.id</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/your.scentsm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ivory-300)]/80 hover:text-[var(--color-gold-300)] text-sm font-light transition-colors duration-300 flex items-center gap-2.5 group"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-gold-400)] group-hover:scale-110 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@your.scentsm</span>
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/your.scentsm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @your.scentsm"
                className="w-10 h-10 border border-[var(--color-gold-400)]/40 rounded-full flex items-center justify-center text-[var(--color-gold-400)] hover:bg-[var(--color-gold-400)] hover:text-[var(--color-charcoal-950)] hover:shadow-[0_0_15px_rgba(224,188,88,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok Scentsm"
                className="w-10 h-10 border border-[var(--color-gold-400)]/40 rounded-full flex items-center justify-center text-[var(--color-gold-400)] hover:bg-[var(--color-gold-400)] hover:text-[var(--color-charcoal-950)] hover:shadow-[0_0_15px_rgba(224,188,88,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.043.87.12V9.41a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.58a8.31 8.31 0 0 0 4.87 1.57V6.7a4.84 4.84 0 0 1-1.1-.01z" />
                </svg>
              </a>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Scentsm"
                className="w-10 h-10 border border-[var(--color-gold-400)]/40 rounded-full flex items-center justify-center text-[var(--color-gold-400)] hover:bg-[var(--color-gold-400)] hover:text-[var(--color-charcoal-950)] hover:shadow-[0_0_15px_rgba(224,188,88,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.118 1.524 5.847L0 24l6.335-1.524A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.36-.214-3.727.977.994-3.632-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-charcoal-800)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-charcoal-500)] text-[0.65rem] tracking-wide">
            © {new Date().getFullYear()} Scentsm Bespoke Parfumerie. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Panduan Konsultasi"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[var(--color-charcoal-500)] hover:text-[var(--color-gold-400)] text-[0.65rem] tracking-wide transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
