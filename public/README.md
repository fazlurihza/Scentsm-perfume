# 📁 Public Images — Scentsm

Letakkan foto produk kamu di folder ini.

## Struktur yang Direkomendasikan

```
public/
├── images/
│   ├── products/
│   │   ├── winter.jpg
│   │   ├── scandalous.jpg
│   │   ├── your-scent.jpg       ← Kamu sudah punya foto ini!
│   │   ├── pink-chiffon.jpg
│   │   ├── peach.jpg
│   │   ├── avril.jpg
│   │   ├── strawberry.jpg
│   │   ├── bubble-gum.jpg
│   │   ├── crush.jpg
│   │   ├── roman-wish.jpg
│   │   ├── cuddle.jpg
│   │   ├── black-opium.jpg
│   │   ├── summer-time.jpg
│   │   └── tropical.jpg
│   ├── hero-bg.jpg              ← Foto untuk hero section
│   └── story-bg.jpg             ← Foto untuk story section
└── logo.png                     ← Logo SCENTSM (dari file yang kamu share)
```

## Cara Menggunakan Foto Produk Sendiri

Setelah menaruh foto di folder di atas, ubah `imageUrl` di `lib/fragrances.ts`:

```typescript
// Ganti dari:
imageUrl: "https://images.unsplash.com/...",

// Menjadi:
imageUrl: "/images/products/your-scent.jpg",
```

## Format yang Didukung
- JPG / JPEG
- PNG  
- WebP (paling direkomendasikan — ukuran file lebih kecil)

## Ukuran Foto yang Ideal
- **Produk**: 800 x 1067px (rasio 3:4) — portrait
- **Hero**: 1920 x 1080px (landscape)

---

> 💡 **Tips**: Foto dengan background putih bersih atau abu-abu muda akan
> terlihat paling premium di grid produk.
