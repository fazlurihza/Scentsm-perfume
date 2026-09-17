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
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  }, []);

  // Auto-slide effect every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section id="story" className="py-28 lg:py-36 bg-[var(--color-ivory-200)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Slider Side */}
          <ScrollReveal direction="right" duration={900} className="relative">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl bg-[var(--color-charcoal-900)] group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Stacked Images for Smooth Crossfade & Ken-Burns Zoom */}
              {aboutImages.map((img, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={img.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />
                    {/* Subtle gradient overlay at bottom for controls visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-950)]/60 via-transparent to-transparent opacity-80" />
                  </div>
                );
              })}

              {/* Prev / Next Controls (Appear on hover) */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-charcoal-950)]/50 backdrop-blur-md border border-[var(--color-gold-400)]/40 text-[var(--color-ivory-100)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-gold-500)] hover:text-[var(--color-charcoal-950)] hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--color-charcoal-950)]/50 backdrop-blur-md border border-[var(--color-gold-400)]/40 text-[var(--color-ivory-100)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-gold-500)] hover:text-[var(--color-charcoal-950)] hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Slide Counter Badge */}
              <div className="absolute top-4 right-4 z-20 bg-[var(--color-charcoal-950)]/60 backdrop-blur-md border border-[var(--color-gold-400)]/30 px-3 py-1 rounded-full text-[0.65rem] text-[var(--color-gold-300)] tracking-[0.2em] font-medium">
                0{currentIndex + 1} / 0{aboutImages.length}
              </div>

              {/* Bottom Indicators & Caption */}
              <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between">
                <span className="text-xs text-[var(--color-ivory-200)] font-light tracking-wide drop-shadow-md" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  {aboutImages[currentIndex].caption}
                </span>

                {/* Dots / Lines */}
                <div className="flex items-center gap-2">
                  {aboutImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        dotIdx === currentIndex
                          ? "w-6 bg-[var(--color-gold-400)] shadow-[0_0_8px_rgba(224,188,88,0.6)]"
                          : "w-2 bg-[var(--color-ivory-100)]/40 hover:bg-[var(--color-ivory-100)]/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
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
