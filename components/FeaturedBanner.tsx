"use client";

import Image from "next/image";

interface FeaturedBannerProps {
  onOpenOrderBuilder: () => void;
}

const testimonials = [
  {
    name: "Rina A.",
    city: "Jakarta",
    text: "Aku minta wangi yang manis tapi dewasa, buat kerja. Tim Scentsm langsung ngerti dan hasilnya melebihi ekspektasi!",
    stars: 5,
  },
  {
    name: "Bima R.",
    city: "Surabaya",
    text: "Minta parfum custom buat kado anniversary istri. Dikonsultasikan dulu dengan sabar, hasilnya istri nangis terharu.",
    stars: 5,
  },
  {
    name: "Dhea S.",
    city: "Bandung",
    text: "Prosesnya seru banget! Bisa cerita mau wangi kayak gimana dan mereka bikin persis sesuai keinginan. Recommended!",
    stars: 5,
  },
];

export default function FeaturedBanner({ onOpenOrderBuilder }: FeaturedBannerProps) {
  return (
    <section id="order" className="bg-[var(--color-charcoal-950)]">
      {/* Main CTA Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
        {/* Image Side */}
        <div className="relative h-72 lg:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=1200&q=85"
            alt="Custom perfume consultation"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal-950)]/50 to-transparent lg:bg-gradient-to-l" />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-24">
          <span className="section-label text-[var(--color-gold-400)] mb-6">
            Mulai Sekarang
          </span>

          <h2
            className="text-5xl lg:text-6xl font-light text-[var(--color-ivory-100)] leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Parfummu,
            <br />
            <em className="italic text-[var(--color-gold-300)]">Ceritamu.</em>
          </h2>

          <p
            className="text-[var(--color-ivory-400)] text-lg font-light leading-relaxed mb-8 max-w-sm"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Tidak perlu tau nama-nama notes yang rumit. Cukup ceritakan
            suasana, karakter, atau momen yang ingin kamu abadikan — kami
            yang akan meraciknya.
          </p>

          {/* Features list */}
          <ul className="space-y-3 mb-10">
            {[
              "✦ Konsultasi gratis tanpa komitmen",
              "✦ Racikan khusus, tidak dijual ke orang lain",
              "✦ Revisi hingga kamu puas",
              "✦ Pengiriman ke seluruh Indonesia",
            ].map((item) => (
              <li
                key={item}
                className="text-[var(--color-ivory-400)] text-sm font-light flex items-center gap-3"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={onOpenOrderBuilder}
            className="btn-luxury self-start flex items-center gap-2"
          >
            <span>Mulai Konsultasi</span>
          </button>
        </div>
      </div>

      {/* Testimonials Strip */}
      <div className="border-t border-[var(--color-charcoal-800)] px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[0.6rem] tracking-[0.3em] uppercase text-[var(--color-gold-400)]/70 mb-10">
            Apa Kata Mereka
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-[var(--color-charcoal-800)] p-7 hover:border-[var(--color-gold-400)]/30 transition-colors duration-400"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[var(--color-gold-400)] text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="text-[var(--color-charcoal-300)] text-sm font-light leading-relaxed italic mb-5"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-gold-400)]/20 flex items-center justify-center">
                    <span className="text-[0.6rem] text-[var(--color-gold-400)] font-semibold">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-[var(--color-ivory-400)] text-xs font-medium">
                      {t.name}
                    </p>
                    <p className="text-[var(--color-charcoal-600)] text-[0.6rem]">
                      {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
