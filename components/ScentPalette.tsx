"use client";

import Image from "next/image";
import { scentFamilies } from "@/lib/fragrances";
import ScrollReveal from "@/components/ScrollReveal";

export default function ScentPalette() {
  return (
    <section id="shop" className="py-28 lg:py-36 bg-[var(--color-ivory-100)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal direction="up" duration={800}>
          <div className="text-center mb-20">
            <div className="ornament-divider mb-8">
              <span className="section-label">Inspirasi Wangi</span>
            </div>
            <h2
              className="text-5xl lg:text-7xl font-light text-[var(--color-charcoal-800)] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Pilih{" "}
              <em className="italic text-[var(--color-gold-500)]">Karakter</em>
              <br />
              Wangimu
            </h2>
            <p
              className="text-[var(--color-charcoal-500)] text-lg font-light max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Ini bukan katalog produk — ini adalah palet inspirasi. Pilih
              satu atau gabungkan beberapa keluarga aroma untuk menjadi fondasi
              parfum personalmu.
            </p>
          </div>
        </ScrollReveal>

        {/* Scent Family Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scentFamilies.map((family, index) => (
            <ScrollReveal
              key={family.id}
              direction="up"
              delay={(index % 3) * 140}
              duration={750}
              className="h-full"
            >
              <article
                className="flex flex-col group transition-all duration-500 hover:-translate-y-2 p-3 rounded-sm hover:shadow-[0_15px_35px_-10px_rgba(201,152,51,0.2)] hover:bg-[var(--color-ivory-50)]"
              >
              {/* Image */}
              <div className="relative overflow-hidden bg-[var(--color-ivory-200)] aspect-[4/3] rounded-sm shadow-sm">
                <Image
                  src={family.imageUrl}
                  alt={family.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-950)]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Emoji overlay */}
                <div className="absolute top-4 left-4">
                  <span className="text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{family.emoji}</span>
                </div>
              </div>

              {/* Info */}
              <div className="pt-5 pb-2 flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <h3
                    className="text-2xl font-light text-[var(--color-charcoal-900)] group-hover:text-[var(--color-gold-600)] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {family.name}
                  </h3>
                  <span className="text-[var(--color-gold-600)] text-sm italic font-medium"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {family.nameid}
                  </span>
                </div>

                <p className="text-[var(--color-charcoal-500)] text-xs tracking-wider uppercase font-medium">
                  {family.mood}
                </p>

                <div className="w-10 h-0.5 bg-gradient-to-r from-[var(--color-gold-400)] to-transparent mt-1" />

                <p
                  className="text-[var(--color-charcoal-600)] text-sm font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {family.description}
                </p>

                {/* Example Notes */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {family.exampleNotes.map((note) => (
                    <span
                      key={note}
                      className="text-[0.6rem] tracking-[0.12em] uppercase text-[var(--color-charcoal-700)] bg-[var(--color-ivory-200)]/90 border border-[var(--color-gold-400)]/30 px-2.5 py-1 rounded-sm group-hover:border-[var(--color-gold-400)]/60 transition-colors"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom note */}
      <ScrollReveal direction="up" delay={200} duration={800}>
        <div className="text-center mt-16">
          <div className="ornament-divider mb-6">
            <span className="text-[var(--color-gold-400)] text-lg">✦</span>
          </div>
          <p
            className="text-[var(--color-charcoal-500)] text-base font-light italic max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            "Tidak harus memilih satu aroma. Racikan terbaik lahir dari perpaduan dua atau lebih karakter yang saling melengkapi kepribadianmu."
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
}
