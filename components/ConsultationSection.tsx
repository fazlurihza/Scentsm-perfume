"use client";

import ScrollReveal from "@/components/ScrollReveal";

interface ConsultationSectionProps {
  onStartConsultation: () => void;
}

export default function ConsultationSection({
  onStartConsultation,
}: ConsultationSectionProps) {
  return (
    <section
      id="consultation"
      className="relative py-28 lg:py-36 bg-[var(--color-charcoal-950)] text-[var(--color-ivory-100)] overflow-hidden border-t border-[var(--color-gold-400)]/20"
    >
      {/* Ambient breathing background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[var(--color-gold-500)]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <ScrollReveal direction="up" duration={800}>
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[var(--color-gold-400)]" />
            <span className="section-label text-[var(--color-gold-300)]">
              Layanan Konsultasi
            </span>
            <div className="w-8 h-px bg-[var(--color-gold-400)]" />
          </div>

          {/* Title */}
          <h2
            className="text-4xl lg:text-6xl font-light text-[var(--color-ivory-100)] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Siap Menciptakan{" "}
            <em className="italic text-[var(--color-gold-300)]">
              Aroma Pribadimu?
            </em>
          </h2>

          {/* Description */}
          <p
            className="text-[var(--color-ivory-300)]/70 text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Ceritakan karakter, kenangan, atau suasana yang ingin kamu wujudkan.
            Tim perfumer kami akan mendampingi dan meracik formula khusus yang 100%
            eksklusif hanya untukmu.
          </p>
        </ScrollReveal>

        {/* 3 Pillars with staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-left">
          {[
            {
              icon: "💬",
              title: "Konsultasi 1-on-1",
              desc: "Diskusikan preferensi aroma, mood, dan occasion langsung bersama kami.",
            },
            {
              icon: "⚗️",
              title: "Racikan Kustom",
              desc: "Kombinasi formulasi top, heart, dan base notes pilihan berkualitas tinggi.",
            },
            {
              icon: "✨",
              title: "100% Milikmu",
              desc: "Formula unik yang tidak akan pernah dijual atau diberikan ke orang lain.",
            },
          ].map((item, index) => (
            <ScrollReveal
              key={item.title}
              direction="up"
              delay={index * 140}
              duration={700}
              className="h-full"
            >
              <div
                className="h-full p-6 rounded-sm bg-[var(--color-charcoal-900)]/60 border border-[var(--color-gold-400)]/20 hover:border-[var(--color-gold-400)]/60 hover:-translate-y-1.5 transition-all duration-400 hover:shadow-[0_10px_30px_rgba(201,152,51,0.15)] group"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3
                  className="text-lg text-[var(--color-ivory-100)] font-light mb-2 group-hover:text-[var(--color-gold-300)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-charcoal-300)] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Single Dedicated CTA Button with ScrollReveal */}
        <ScrollReveal direction="up" delay={350} duration={800}>
          <div>
            <button
              onClick={onStartConsultation}
              className="btn-luxury text-xs tracking-[0.25em] px-10 py-4 shadow-[0_0_30px_rgba(201,152,51,0.25)] hover:shadow-[0_0_45px_rgba(201,152,51,0.45)] hover:scale-105 transition-all duration-300"
            >
              <span>Mulai Konsultasi</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>

            <p className="text-[0.7rem] text-[var(--color-charcoal-400)] mt-4 font-light tracking-wide">
              Gratis konsultasi awal · Tidak ada biaya sebelum formulamu disepakati
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
