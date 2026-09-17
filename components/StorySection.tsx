"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function StorySection() {
  return (
    <section id="story" className="py-28 lg:py-36 bg-[var(--color-ivory-200)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <ScrollReveal direction="right" duration={900} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
              <Image
                src="/about.jpg"
                alt="Scentsm atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Gold border accents with subtle hover */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[var(--color-gold-400)]/40 pointer-events-none transition-transform duration-700 hover:scale-110" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[var(--color-gold-400)]/40 pointer-events-none transition-transform duration-700 hover:scale-110" />
          </ScrollReveal>

          {/* Text Side */}
          <ScrollReveal direction="left" duration={900} delay={150} className="lg:pl-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[var(--color-gold-400)]" />
              <span className="section-label">Tentang Scentsm</span>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-light text-[var(--color-charcoal-800)] leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Wangimu adalah{" "}
              <em className="italic text-[var(--color-gold-500)]">
                petualangan.
              </em>
            </h2>

            <div
              className="space-y-5 text-[var(--color-charcoal-500)] font-light leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              <p className="text-lg">
                Hadir menyapamu lewat indra paling sensitif dari diri, sensasi yang membangkitkan semangat, kenangan, dan ingatan ingatan akan sekitar.
              </p>
              <p className="text-lg">
                Biarkan ia menuntun petualangan yang tak terlupakan.
              </p>
              <p className="text-lg">
                Aromanya nyata, penuh petualangan indra yang dinantikan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
