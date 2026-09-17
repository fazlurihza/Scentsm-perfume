"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Bespoke Perfume Atelier Scentsm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="hero-overlay absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 65% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-0">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <div className="w-10 h-px bg-[var(--color-gold-400)]" />
            <span className="section-label text-[var(--color-gold-400)]">
              Bespoke Parfumerie
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif leading-[0.88] font-light text-[var(--color-ivory-100)] mb-8 animate-fade-in-up animate-delay-100"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
            }}
          >
            <span className="block">Ciptakan</span>
            <span className="block italic text-[var(--color-gold-300)]">
              Wangimu
            </span>
            <span className="block">Sendiri.</span>
          </h1>

          {/* Description */}
          <p
            className="text-[var(--color-ivory-300)] text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-lg animate-fade-in-up animate-delay-200"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Kami tidak menjual parfum dari rak. Setiap tetes yang kami ciptakan
            adalah ekspresi unik dari dirimu — dibuat khusus sesuai selera,
            karakter, dan momenmu.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-in-up animate-delay-300">
            {[
              { icon: "✦", text: "100% Custom" },
              { icon: "✦", text: "Konsultasi Gratis" },
              { icon: "✦", text: "Hanya Milikmu" },
            ].map((v) => (
              <div key={v.text} className="flex items-center gap-2">
                <span className="text-[var(--color-gold-400)] text-xs">
                  {v.icon}
                </span>
                <span className="text-[var(--color-ivory-300)] text-xs tracking-[0.2em] uppercase font-light">
                  {v.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
            <a href="#consultation" className="btn-luxury">
              <span>Mulai Konsultasi</span>
            </a>
            <a href="#process" className="btn-luxury-outline">
              <span>Lihat Prosesnya</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-4 h-4 relative z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <div className="absolute bottom-24 right-8 lg:right-16 z-10 hidden lg:block animate-float">
        <div className="bg-[var(--color-charcoal-900)]/85 backdrop-blur-md border border-[var(--color-gold-400)]/30 px-7 py-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:border-[var(--color-gold-400)]/60 transition-all duration-500">
          <div
            className="text-4xl font-light text-[var(--color-gold-300)] mb-1"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            ∞
          </div>
          <p className="text-[0.6rem] text-[var(--color-ivory-400)] tracking-[0.25em] uppercase leading-relaxed">
            Kombinasi Wangi
            <br />
            Tanpa Batas
          </p>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[0.55rem] text-[var(--color-ivory-400)] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--color-gold-400)] to-transparent relative overflow-hidden">
          <div className="w-full h-2 bg-[var(--color-gold-400)] scroll-dot absolute top-0" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-400)]/30 to-transparent" />
    </section>
  );
}
