// Data produk Scentsm
// Setiap produk memiliki informasi lengkap termasuk piramida aroma

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
    tagline: "Soft · Sensual · Timelessly Elegant",
    description:
      "Chloris adalah simbol keanggunan abadi — perpaduan bunga-bunga musim semi yang segar dengan hangatnya kayu yang mewah. Cocok untuk wanita yang ingin memancarkan kecantikan yang tulus dan tak lekang oleh waktu.",
    size: "50 ML",
    price: 0, // Hubungi untuk harga
    scentFamily: "Floral Woody",
    notes: {
      top: ["Bergamot", "Green Tea", "Morning Dew", "Watery Green Notes"],
      middle: [
        "Magnolia",
        "Jasmine Petals",
        "Muguet",
        "Sheer Rose",
        "Tea Blossom",
      ],
      base: ["Sandalwood", "Clean Musk", "Cashmere Woods", "Soft Amber"],
    },
    imagePath: "/chloris-box.jpg",
    isBestSeller: true,
  },
];
