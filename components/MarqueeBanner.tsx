"use client";

const messages = [
  "Parfum Custom Sesuai Selera",
  "✦",
  "Konsultasi Gratis",
  "✦",
  "Tidak Dijual ke Orang Lain",
  "✦",
  "Revisi Hingga Puas",
  "✦",
  "Pengiriman Se-Indonesia",
  "✦",
  "100% Halal & Berkualitas",
  "✦",
  "Ciptakan Wangi Unikmu",
  "✦",
];

export default function MarqueeBanner() {
  const items = [...messages, ...messages];

  return (
    <div className="bg-[var(--color-charcoal-900)] py-4 overflow-hidden border-y border-[var(--color-gold-400)]/20 shadow-inner">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {items.map((msg, i) => (
          <span
            key={i}
            className={
              msg === "✦"
                ? "text-[var(--color-gold-400)] mx-6 text-sm drop-shadow-[0_0_8px_rgba(224,188,88,0.5)]"
                : "text-[var(--color-ivory-200)] text-[0.7rem] font-light tracking-[0.25em] uppercase mx-2"
            }
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
