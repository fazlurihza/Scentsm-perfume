"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const aboutImages = [
  {
    src: "/about-1.jpg",
    alt: "Scentsm bespoke perfume bottles with handwritten formula card",
    caption: "Bespoke Formulation",
  },
  {
    src: "/about-2.jpg",
    alt: "Scentsm custom bottles on marble atelier table",
    caption: "Artisan Craftsmanship",
  },
  {
    src: "/about-3.jpg",
    alt: "Scentsm perfume with raw botanical ingredients and cedarwood",
    caption: "Pure Botanical Essence",
  },
  {
    src: "/about-4.jpg",
    alt: "Scentsm collection with vanilla pods and lavender",
    caption: "Signature Symphony",
  },
];

export default function StorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 4.5 seconds with silky smooth transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="story" className="py-28 lg:py-36 bg-[var(--color-ivory-200)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Smooth Auto-Crossfade Image Side */}
          <ScrollReveal direction="right" duration={900} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl bg-[var(--color-charcoal-900)]">
              {/* Stacked Images for Silky Smooth Crossfade & Ken-Burns Zoom */}
              {aboutImages.map((img, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={img.src}
                    style={{
                      transitionProperty: "opacity, transform",
                      transitionDuration: "1400ms, 8000ms",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1), ease-out",
                    }}
                    className={`absolute inset-0 ${
                      isActive ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 pointer-events-none scale-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    {/* Subtle gradient overlay at bottom for delicate contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-950)]/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}

              {/* Minimal Bottom Indicators & Caption */}
              <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
                <span
                  className="text-xs text-[var(--color-ivory-200)] font-light tracking-wider drop-shadow-md transition-opacity duration-700"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {aboutImages[currentIndex].caption}
                </span>

                {/* Delicate Gold Indicator Bars */}
                <div className="flex items-center gap-1.5 pointer-events-auto">
                  {aboutImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Lihat foto ${dotIdx + 1}`}
                      className={`h-1 transition-all duration-700 rounded-full ${
                        dotIdx === currentIndex
                          ? "w-7 bg-[var(--color-gold-400)] shadow-[0_0_10px_rgba(224,188,88,0.7)]"
                          : "w-2 bg-[var(--color-ivory-100)]/30 hover:bg-[var(--color-ivory-100)]/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Gold border accents with subtle hover */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[var(--color-gold-400)]/40 pointer-events-none transition-transform duration-700 hover:scale-105" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[var(--color-gold-400)]/40 pointer-events-none transition-transform duration-700 hover:scale-105" />
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
