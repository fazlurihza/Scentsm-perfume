"use client";

import { useState, useEffect, useCallback } from "react";
import { occasions, intensities, scentFamilies } from "@/lib/fragrances";

interface OrderBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OrderState {
  occasion: string;
  scentFamilies: string[];
  intensity: string;
  gender: string;
  note: string;
  name: string;
  phone: string;
}

const INITIAL_ORDER: OrderState = {
  occasion: "",
  scentFamilies: [],
  intensity: "",
  gender: "",
  note: "",
  name: "",
  phone: "",
};

const genderOptions = [
  { id: "feminine", label: "Untuk Perempuan", emoji: "👩" },
  { id: "masculine", label: "Untuk Laki-laki", emoji: "👨" },
  { id: "unisex", label: "Unisex", emoji: "🤝" },
];

export default function OrderBuilderDrawer({ isOpen, onClose }: OrderBuilderProps) {
  const [step, setStep] = useState(1);
  const [order, setOrder] = useState<OrderState>(INITIAL_ORDER);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setStep(1); setOrder(INITIAL_ORDER); setSubmitted(false); }, 500);
    }
  }, [isOpen]);

  const toggleScentFamily = (id: string) => {
    setOrder((prev) => ({
      ...prev,
      scentFamilies: prev.scentFamilies.includes(id)
        ? prev.scentFamilies.filter((s) => s !== id)
        : [...prev.scentFamilies, id],
    }));
  };

  const canProceed = () => {
    if (step === 1) return order.occasion !== "" && order.gender !== "";
    if (step === 2) return order.scentFamilies.length > 0;
    if (step === 3) return order.intensity !== "";
    if (step === 4) return order.name.trim() !== "" && order.phone.trim() !== "";
    return false;
  };

  const buildWhatsAppMessage = () => {
    const selectedFamilies = order.scentFamilies
      .map((id) => scentFamilies.find((f) => f.id === id)?.name)
      .join(", ");
    const selectedOccasion = occasions.find((o) => o.id === order.occasion)?.label;
    const selectedIntensity = intensities.find((i) => i.id === order.intensity)?.label;
    const selectedGender = genderOptions.find((g) => g.id === order.gender)?.label;

    const msg = `Halo SCENTSM! 👋

Saya ingin memesan parfum custom dengan detail berikut:

*Nama:* ${order.name}
*No. HP:* ${order.phone}

*Preferensi:*
• Untuk: ${selectedGender}
• Kesempatan: ${selectedOccasion}
• Karakter Aroma: ${selectedFamilies}
• Intensitas: ${selectedIntensity}

${order.note ? `*Catatan Tambahan:*\n${order.note}` : ""}

Mohon info lebih lanjut mengenai harga dan estimasi pembuatan. Terima kasih!`;

    return encodeURIComponent(msg);
  };

  const handleSubmit = () => {
    const waNumber = "6281234567890"; // Ganti dengan nomor WA Scentsm
    const message = buildWhatsAppMessage();
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-overlay fixed inset-0 z-[100] bg-[var(--color-charcoal-950)]/60 backdrop-blur-sm ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Custom Order Builder"
        className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-[480px] z-[101] bg-[var(--color-ivory-100)] flex flex-col shadow-2xl ${
          isOpen ? "open" : ""
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-7 border-b border-[var(--color-ivory-400)]">
          <div>
            <h2
              className="text-2xl font-light text-[var(--color-charcoal-800)]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {submitted ? "Konsultasi Terkirim!" : "Konsultasi Parfum Kustom"}
            </h2>
            {!submitted && (
              <p className="text-[0.65rem] text-[var(--color-charcoal-400)] tracking-[0.2em] uppercase mt-0.5">
                Langkah {step} dari {totalSteps}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-[var(--color-charcoal-400)] hover:text-[var(--color-charcoal-900)] transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        {!submitted && (
          <div className="h-0.5 bg-[var(--color-ivory-400)]">
            <div
              className="h-full bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-400)] transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-8">

          {/* ========== SUBMITTED STATE ========== */}
          {submitted && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-[var(--color-gold-400)] flex items-center justify-center">
                <span className="text-3xl">✅</span>
              </div>
              <div>
                <h3
                  className="text-2xl font-light text-[var(--color-charcoal-800)] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Terima kasih, {order.name}!
                </h3>
                <p className="text-[var(--color-charcoal-500)] text-sm leading-relaxed max-w-xs mx-auto"
                   style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  Pesananmu sudah kami terima melalui WhatsApp. Tim kami akan
                  menghubungimu segera untuk konsultasi lebih lanjut.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[var(--color-charcoal-600)] border-b border-[var(--color-gold-400)] pb-0.5 hover:text-[var(--color-gold-500)] transition-colors duration-300"
              >
                Kembali ke Beranda
              </button>
            </div>
          )}

          {/* ========== STEP 1: Occasion + Gender ========== */}
          {!submitted && step === 1 && (
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-light text-[var(--color-charcoal-800)] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Untuk siapa & kesempatan apa?
                </h3>
                <p className="text-[var(--color-charcoal-400)] text-xs">
                  Ini membantu kami memahami konteks parfum idealmu.
                </p>
              </div>

              {/* Gender */}
              <div>
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-gold-500)] mb-3">
                  Untuk
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {genderOptions.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setOrder((p) => ({ ...p, gender: g.id }))}
                      className={`py-3 px-2 flex flex-col items-center gap-1.5 border text-center transition-all duration-300 ${
                        order.gender === g.id
                          ? "border-[var(--color-gold-400)] bg-[var(--color-gold-50)] text-[var(--color-charcoal-800)]"
                          : "border-[var(--color-ivory-400)] text-[var(--color-charcoal-500)] hover:border-[var(--color-charcoal-400)]"
                      }`}
                    >
                      <span className="text-xl">{g.emoji}</span>
                      <span className="text-[0.6rem] tracking-wide">{g.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-gold-500)] mb-3">
                  Kesempatan
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {occasions.map((occ) => (
                    <button
                      key={occ.id}
                      onClick={() => setOrder((p) => ({ ...p, occasion: occ.id }))}
                      className={`py-3 px-4 flex items-center gap-3 border text-left transition-all duration-300 ${
                        order.occasion === occ.id
                          ? "border-[var(--color-gold-400)] bg-[var(--color-gold-50)] text-[var(--color-charcoal-800)]"
                          : "border-[var(--color-ivory-400)] text-[var(--color-charcoal-500)] hover:border-[var(--color-charcoal-400)]"
                      }`}
                    >
                      <span className="text-lg">{occ.icon}</span>
                      <span className="text-xs font-medium">{occ.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========== STEP 2: Scent Families ========== */}
          {!submitted && step === 2 && (
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-light text-[var(--color-charcoal-800)] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Pilih karakter aromamu
                </h3>
                <p className="text-[var(--color-charcoal-400)] text-xs">
                  Boleh pilih lebih dari satu untuk parfum yang kompleks.
                </p>
              </div>

              <div className="space-y-3">
                {scentFamilies.map((family) => {
                  const selected = order.scentFamilies.includes(family.id);
                  return (
                    <button
                      key={family.id}
                      onClick={() => toggleScentFamily(family.id)}
                      className={`w-full flex items-center gap-4 p-4 border text-left transition-all duration-300 ${
                        selected
                          ? "border-[var(--color-gold-400)] bg-[var(--color-gold-50)]"
                          : "border-[var(--color-ivory-400)] hover:border-[var(--color-charcoal-400)]"
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">{family.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-base font-light text-[var(--color-charcoal-800)]"
                            style={{ fontFamily: "var(--font-cormorant), serif" }}
                          >
                            {family.name}
                          </span>
                          <span className="text-[0.6rem] text-[var(--color-charcoal-400)] italic"
                                style={{ fontFamily: "var(--font-cormorant), serif" }}>
                            {family.nameid}
                          </span>
                        </div>
                        <p className="text-[0.65rem] text-[var(--color-charcoal-400)] truncate">
                          {family.mood}
                        </p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                          selected
                            ? "border-[var(--color-gold-400)] bg-[var(--color-gold-400)]"
                            : "border-[var(--color-ivory-500)]"
                        }`}
                      >
                        {selected && (
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========== STEP 3: Intensity + Notes ========== */}
          {!submitted && step === 3 && (
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-light text-[var(--color-charcoal-800)] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Seberapa kuat wangimu?
                </h3>
                <p className="text-[var(--color-charcoal-400)] text-xs">
                  Tentukan intensitas parfum yang paling nyaman untukmu.
                </p>
              </div>

              {/* Intensity */}
              <div className="space-y-3">
                {intensities.map((intensity) => (
                  <button
                    key={intensity.id}
                    onClick={() => setOrder((p) => ({ ...p, intensity: intensity.id }))}
                    className={`w-full flex items-center gap-4 p-4 border text-left transition-all duration-300 ${
                      order.intensity === intensity.id
                        ? "border-[var(--color-gold-400)] bg-[var(--color-gold-50)]"
                        : "border-[var(--color-ivory-400)] hover:border-[var(--color-charcoal-400)]"
                    }`}
                  >
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            (intensity.id === "light" && dot <= 1) ||
                            (intensity.id === "medium" && dot <= 2) ||
                            (intensity.id === "strong" && dot <= 3)
                              ? "bg-[var(--color-gold-400)]"
                              : "bg-[var(--color-ivory-400)]"
                          }`}
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--color-charcoal-700)]">
                        {intensity.label}
                      </p>
                      <p className="text-[0.6rem] text-[var(--color-charcoal-400)]">
                        {intensity.sub}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Additional Notes */}
              <div>
                <label className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-gold-500)] block mb-3">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  value={order.note}
                  onChange={(e) => setOrder((p) => ({ ...p, note: e.target.value }))}
                  rows={4}
                  placeholder="Ceritakan lebih detail... misalnya: ingin mirip parfum X, tapi lebih manis. Atau: untuk anniversary, suasana malam romantis."
                  className="w-full bg-[var(--color-ivory-200)] border border-[var(--color-ivory-400)] px-4 py-3 text-sm text-[var(--color-charcoal-700)] placeholder:text-[var(--color-charcoal-400)] focus:outline-none focus:border-[var(--color-gold-400)] transition-colors duration-300 resize-none"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                />
              </div>
            </div>
          )}

          {/* ========== STEP 4: Contact Info ========== */}
          {!submitted && step === 4 && (
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-light text-[var(--color-charcoal-800)] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Hampir selesai!
                </h3>
                <p className="text-[var(--color-charcoal-400)] text-xs leading-relaxed">
                  Kami akan menghubungimu via WhatsApp untuk membahas
                  detail pesanan dan harga.
                </p>
              </div>

              {/* Summary */}
              <div className="bg-[var(--color-ivory-200)] border border-[var(--color-ivory-400)] p-5 space-y-2">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-gold-500)] mb-3">
                  Ringkasan Pesananmu
                </p>
                {[
                  {
                    label: "Untuk",
                    value: genderOptions.find((g) => g.id === order.gender)?.label,
                  },
                  {
                    label: "Kesempatan",
                    value: occasions.find((o) => o.id === order.occasion)?.label,
                  },
                  {
                    label: "Karakter",
                    value: order.scentFamilies
                      .map((id) => scentFamilies.find((f) => f.id === id)?.name)
                      .join(" + "),
                  },
                  {
                    label: "Intensitas",
                    value: intensities.find((i) => i.id === order.intensity)?.label,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-xs">
                    <span className="text-[var(--color-charcoal-400)]">{item.label}</span>
                    <span className="text-[var(--color-charcoal-700)] font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Name */}
              <div>
                <label className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-gold-500)] block mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  value={order.name}
                  onChange={(e) => setOrder((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Nama kamu"
                  className="w-full bg-[var(--color-ivory-200)] border border-[var(--color-ivory-400)] px-4 py-3 text-sm text-[var(--color-charcoal-700)] placeholder:text-[var(--color-charcoal-400)] focus:outline-none focus:border-[var(--color-gold-400)] transition-colors duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-gold-500)] block mb-2">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  value={order.phone}
                  onChange={(e) => setOrder((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="08xxxxxxxxxx"
                  className="w-full bg-[var(--color-ivory-200)] border border-[var(--color-ivory-400)] px-4 py-3 text-sm text-[var(--color-charcoal-700)] placeholder:text-[var(--color-charcoal-400)] focus:outline-none focus:border-[var(--color-gold-400)] transition-colors duration-300"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer — Navigation */}
        {!submitted && (
          <div className="border-t border-[var(--color-ivory-400)] px-8 py-6 bg-[var(--color-ivory-100)]">
            <div className="flex items-center gap-4">
              {/* Back */}
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex-shrink-0 text-[0.65rem] font-medium tracking-[0.2em] uppercase text-[var(--color-charcoal-500)] hover:text-[var(--color-charcoal-800)] transition-colors duration-300 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>
                  Kembali
                </button>
              )}

              {/* Next / Submit */}
              {step < totalSteps ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className={`flex-1 btn-luxury text-center transition-opacity duration-300 ${
                    !canProceed() ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <span>Lanjut</span>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`flex-1 btn-luxury text-center flex items-center justify-center gap-2 transition-opacity duration-300 ${
                    !canProceed() ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  {/* WhatsApp icon */}
                  <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.118 1.524 5.847L0 24l6.335-1.524A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.36-.214-3.727.977.994-3.632-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                  </svg>
                  <span>Kirim via WhatsApp</span>
                </button>
              )}
            </div>

            {step === totalSteps && (
              <p className="text-center text-[0.6rem] text-[var(--color-charcoal-400)] mt-3">
                Kamu akan diarahkan ke WhatsApp untuk melanjutkan konsultasi
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
