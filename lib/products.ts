// Data produk Scentsm
// Setiap produk memiliki informasi lengkap termasuk piramida aroma & akor utama

export interface FragranceNotes {
  top: string[];
  middle: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  type: string; // Eau de Parfume, Eau de Toilette, dll
  tagline: string;
  description: string;
  size: string; // "50ml", "100ml", dll
  price: number; // dalam Rupiah
  scentFamily: string; // "Floral Woody", "Fresh Citrus", dll
  accords?: string[]; // Akor utama aroma
  notes: FragranceNotes;
  imagePath: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "chloris",
    name: "Chloris",
    type: "Eau de Parfume",
    tagline: "Aqua Marine · Crisp Green · Powdery Ozonic Elegance",
    description:
      "Chloris adalah mahakarya aroma yang menyegarkan sekaligus menawan — dibuka dengan semilir aqua marine dan udara ozonic yang lapang, berpadu harmonis dengan kesegaran daun basah (crisp green notes) dan kelopak bunga musim semi, lalu ditutup dengan sentuhan velvety powdery musk dan kayu hangat yang mewah nan abadi.",
    size: "50 ML",
    price: 0, // Hubungi untuk harga
    scentFamily: "Aquatic Green · Powdery Floral",
    accords: [
      "🌊 Aqua / Marine",
      "🌿 Crisp Green",
      "☁️ Ozonic Air",
      "🪶 Soft Powdery",
      "🌸 Floral Elegance",
    ],
    notes: {
      top: [
        "Aqua Marine Accord",
        "Ozonic Mist",
        "Dewy Green Notes",
        "Bergamot",
        "Morning Dew",
      ],
      middle: [
        "Powdery Iris",
        "Green Tea Blossom",
        "Magnolia",
        "Jasmine Petals",
        "Sheer Rose",
      ],
      base: [
        "Powdery White Musk",
        "Sandalwood",
        "Cashmere Woods",
        "Soft Amber",
      ],
    },
    imagePath: "/chloris-box.jpg",
    isBestSeller: true,
  },
];
