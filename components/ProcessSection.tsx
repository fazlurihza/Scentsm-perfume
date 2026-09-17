"use client";

import { processSteps } from "@/lib/fragrances";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 lg:py-36 bg-[var(--color-charcoal-950)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal direction="up" duration={800}>
          <div className="text-center mb-20">
            <div className="ornament-divider mb-8">
              <span className="section-label text-[var(--color-gold-400)]">
                Bagaimana Prosesnya
              </span>
            </div>
            <h2
              className="text-5xl lg:text-6xl font-light text-[var(--color-ivory-100)] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Dari{" "}
              <em className="italic text-[var(--color-gold-300)]">Ceritamu</em>
              <br />
              Menjadi Wangi
            </h2>
            <p
              className="text-[var(--color-charcoal-300)] text-lg font-light max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Proses sederhana, hasil yang istimewa. Kami menemanimu di setiap
              langkah — dari nol hingga parfum jadi di tanganmu.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {processSteps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              direction="up"
              delay={index * 130}
              duration={700}
              className="relative group h-full"
            >
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-[var(--color-gold-400)]/40 to-[var(--color-gold-400)]/10 z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center px-6 py-10 border border-[var(--color-charcoal-800)] group-hover:border-[var(--color-gold-400)]/50 transition-all duration-500 bg-[var(--color-charcoal-950)] group-hover:bg-[var(--color-charcoal-900)] group-hover:shadow-[0_10px_35px_rgba(201,152,51,0.1)]">
                {/* Number */}
                <span
                  className="text-6xl font-light text-[var(--color-charcoal-800)] group-hover:text-[var(--color-gold-400)]/25 transition-colors duration-500 absolute top-4 right-5"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full border border-[var(--color-charcoal-700)] group-hover:border-[var(--color-gold-400)] group-hover:bg-[var(--color-gold-400)]/10 flex items-center justify-center mb-6 transition-all duration-500">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-light text-[var(--color-ivory-200)] mb-3 group-hover:text-[var(--color-gold-300)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[var(--color-charcoal-300)] text-sm font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
