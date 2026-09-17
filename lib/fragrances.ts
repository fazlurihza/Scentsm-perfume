// Scentsm tidak memiliki produk bawaan.
// Data ini berisi "keluarga aroma" yang tersedia sebagai inspirasi
// bagi pelanggan untuk mendeskripsikan wangi pesanan mereka.

export interface ScentFamily {
  id: string;
  name: string;
  nameid: string; // Indonesian name
  emoji: string;
  description: string;
  exampleNotes: string[];
  mood: string;
  imageUrl: string;
  color: string; // accent color hint
}

export interface OccasionOption {
  id: string;
  label: string;
  icon: string;
}

export interface IntensityOption {
  id: string;
  label: string;
  sub: string;
}

export const scentFamilies: ScentFamily[] = [
  {
    id: "floral",
    name: "Floral",
    nameid: "Bunga-Bunga",
    emoji: "🌸",
    description:
      "Wangi bunga yang lembut, romantis, dan feminin. Cocok untuk kamu yang ingin terlihat elegan dan memikat.",
    exampleNotes: ["Rose", "Jasmine", "Peony", "Lily", "Orchid", "Magnolia"],
    mood: "Romantic · Feminine · Elegant",
    imageUrl: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80", // Alternative Pink Roses
    color: "#e879a0",
  },
  {
    id: "woody",
    name: "Woody",
    nameid: "Kayu & Tanah",
    emoji: "🌲",
    description:
      "Hangat, dalam, dan maskulin. Aroma kayu dan tanah yang menciptakan kesan kuat namun sophisticated.",
    exampleNotes: ["Sandalwood", "Cedarwood", "Oud", "Vetiver", "Patchouli"],
    mood: "Strong · Earthy · Sophisticated",
    imageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80", // Wood logs / forest
    color: "#92563b",
  },
  {
    id: "fresh",
    name: "Fresh",
    nameid: "Segar & Bersih",
    emoji: "💨",
    description:
      "Ringan, bersih, dan menyegarkan. Sempurna untuk penggunaan sehari-hari — dari pagi hingga malam.",
    exampleNotes: ["Bergamot", "Lemon", "Sea Salt", "Cucumber", "Green Tea"],
    mood: "Clean · Energetic · Versatile",
    imageUrl: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800&q=80", // Fresh green leaves / dew
    color: "#3b9e8e",
  },
  {
    id: "oriental",
    name: "Oriental",
    nameid: "Mewah & Eksotis",
    emoji: "✨",
    description:
      "Kaya, sensual, dan misterius. Kombinasi rempah, resin, dan musk yang menciptakan daya tarik tak tertahankan.",
    exampleNotes: ["Amber", "Musk", "Vanilla", "Incense", "Saffron", "Cardamom"],
    mood: "Sensual · Mysterious · Luxurious",
    imageUrl: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80", // Amber Resin
    color: "#b8892a",
  },
  {
    id: "sweet",
    name: "Sweet",
    nameid: "Manis & Ceria",
    emoji: "🍬",
    description:
      "Manis, ceria, dan penuh semangat. Aroma gourmand yang membuatmu jadi pusat perhatian di mana pun.",
    exampleNotes: ["Vanilla", "Caramel", "Praline", "Raspberry", "Cotton Candy"],
    mood: "Playful · Youthful · Addictive",
    imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80", // Colorful macarons
    color: "#e07ca3",
  },
  {
    id: "citrus",
    name: "Citrus",
    nameid: "Citrus & Buah",
    emoji: "🍊",
    description:
      "Cerah, segar, dan penuh energi. Burst of citrus yang langsung mengangkat mood dari pagi hari.",
    exampleNotes: ["Lemon", "Grapefruit", "Mandarin", "Bergamot", "Yuzu"],
    mood: "Bright · Uplifting · Energetic",
    imageUrl: "/citrus.jpg", // Assorted fresh citrus fruits & berries
    color: "#e8a020",
  },
];

export const occasions: OccasionOption[] = [
  { id: "daily", label: "Sehari-hari", icon: "☀️" },
  { id: "work", label: "Kerja / Kuliah", icon: "💼" },
  { id: "date", label: "Kencan", icon: "🌹" },
  { id: "party", label: "Pesta / Event", icon: "🎉" },
  { id: "sport", label: "Olahraga", icon: "🏃" },
  { id: "sleep", label: "Santai di Rumah", icon: "🏡" },
];

export const intensities: IntensityOption[] = [
  { id: "light", label: "Ringan", sub: "Subtle · Day wear" },
  { id: "medium", label: "Sedang", sub: "Balanced · Versatile" },
  { id: "strong", label: "Kuat", sub: "Bold · Long-lasting" },
];

export const processSteps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Ceritakan kepada kami seperti apa wangi impianmu — karakter, suasana, atau inspirasi apa pun yang kamu miliki.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Pemilihan Notes",
    description:
      "Bersama tim parfumer kami, kita pilih kombinasi top, heart, dan base notes yang paling sesuai dengan keinginanmu.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Racikan & Uji",
    description:
      "Kami meracik formula khusus untukmu. Jika ada yang perlu disesuaikan, kami lakukan hingga kamu puas.",
    icon: "⚗️",
  },
  {
    number: "04",
    title: "Pengiriman",
    description:
      "Parfummu dikemas dengan cantik dan dikirimkan langsung ke pintumu. Hanya milikmu, tidak ada yang sama.",
    icon: "📦",
  },
];
