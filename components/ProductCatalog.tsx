"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { products, Product } from "@/lib/products";

function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  return (
    <div
      className="catalog-product-card"
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(product);
        }
      }}
      aria-label={`Lihat detail produk ${product.name}`}
    >
      {/* Product Image Wrap */}
      <div className="catalog-product-image-wrap">
        {product.isBestSeller && (
          <div className="catalog-badge-instock">In Stock</div>
        )}
        {product.isNew && <div className="catalog-badge-new">New Arrival</div>}

        <Image
          src={product.imagePath}
          alt={product.name}
          fill
          className="catalog-product-img"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        <div className="catalog-image-overlay" />

        {/* Hover Hint Overlay */}
        <div className="catalog-hover-hint">
          <span className="catalog-hint-pill">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Klik untuk Detail & Aroma
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="catalog-product-content">
        <p className="catalog-product-eyebrow">
          {product.type} · {product.size}
        </p>
        <h3 className="catalog-product-title">{product.name}</h3>
        <p className="catalog-product-tagline">{product.tagline}</p>

        <div className="catalog-product-meta">
          <span className="catalog-meta-badge">{product.scentFamily}</span>
          <span className="catalog-meta-badge-size">{product.size}</span>
        </div>

        {/* Action Indicator */}
        <div className="catalog-card-action">
          <span>Lihat Detail & Piramida Aroma</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  // Close on ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const waNumber = "6281234567890";
  const waMessage = encodeURIComponent(
    `Halo Scentsm, saya tertarik dengan parfum ${product.name} (${product.type} ${product.size}). Boleh info harga dan ketersediaannya?`
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div
      className="product-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="product-modal-dialog">
        {/* Close Button */}
        <button
          className="product-modal-close"
          onClick={onClose}
          aria-label="Tutup jendela detail produk"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="product-modal-grid">
          {/* Left Column: Enlarged Product Photo */}
          <div className="product-modal-gallery">
            {product.isBestSeller && (
              <div className="catalog-badge-instock">In Stock</div>
            )}
            {product.isNew && (
              <div className="catalog-badge-new">New Arrival</div>
            )}

            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="product-modal-img"
              sizes="(max-width: 820px) 100vw, 440px"
              priority
            />

            <div className="product-modal-gallery-overlay" />
          </div>

          {/* Right Column: Detailed Product Info & Fragrance Pyramid */}
          <div className="product-modal-details">
            <div className="product-modal-header">
              <p className="product-modal-eyebrow">
                {product.type} · {product.size}
              </p>
              <h2 id="modal-product-title" className="product-modal-name">
                {product.name}
              </h2>
              <p className="product-modal-tagline">{product.tagline}</p>

              <div className="product-modal-badges">
                <span className="catalog-meta-badge">
                  🌸 {product.scentFamily}
                </span>
                <span className="catalog-meta-badge-size">
                  🧴 {product.size}
                </span>
                <span className="catalog-meta-badge-size">
                  ✨ Daya Tahan: 8–12 Jam
                </span>
              </div>
            </div>

            {/* Description / Story */}
            <p className="product-modal-desc">{product.description}</p>

            {/* Fragrance Pyramid Section */}
            <div className="product-modal-pyramid">
              <div className="pyramid-section-title">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 2 22 22 22" />
                </svg>
                Piramida Aroma (Fragrance Pyramid)
              </div>

              <div className="pyramid-layers-list">
                {/* Top Notes */}
                <div className="pyramid-modal-layer top">
                  <div className="pyramid-modal-label">
                    <span className="layer-title">🌿 Top Notes</span>
                    <span className="layer-timing">Kesan Pertama · 15–30 Menit</span>
                  </div>
                  <div className="pyramid-chips-wrap">
                    {product.notes.top.map((note) => (
                      <span key={note} className="pyramid-chip top-chip">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heart Notes */}
                <div className="pyramid-modal-layer heart">
                  <div className="pyramid-modal-label">
                    <span className="layer-title">🌸 Heart Notes</span>
                    <span className="layer-timing">Karakter Utama · 2–4 Jam</span>
                  </div>
                  <div className="pyramid-chips-wrap">
                    {product.notes.middle.map((note) => (
                      <span key={note} className="pyramid-chip heart-chip">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="pyramid-modal-layer base">
                  <div className="pyramid-modal-label">
                    <span className="layer-title">🪵 Base Notes</span>
                    <span className="layer-timing">Aroma Penutup · 6–8+ Jam</span>
                  </div>
                  <div className="pyramid-chips-wrap">
                    {product.notes.base.map((note) => (
                      <span key={note} className="pyramid-chip base-chip">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-modal-actions">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-wa-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Tanya Harga & Pesan via WhatsApp
              </a>
              <button className="modal-close-btn" onClick={onClose}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="catalog-section" id="katalog">
      <div className="catalog-container">
        {/* Section Header */}
        <div className="catalog-header">
          <p className="catalog-eyebrow">Koleksi Eksklusif</p>
          <h2 className="catalog-title">
            Parfum <em>Ready-Made</em>
          </h2>
          <p className="catalog-subtitle">
            Dibuat dengan standar parfumer profesional — setiap botol adalah
            karya yang menunggu untuk menjadi bagian dari kisahmu.
          </p>
        </div>

        {/* Product Grid */}
        <div className="catalog-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        <p className="catalog-note">
          ✦ Klik kartu produk untuk memperbesar dan melihat piramida aroma lengkap
        </p>
      </div>

      {/* Enlarged Modal when product is selected */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <style jsx>{`
        .catalog-section {
          background: #080808;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .catalog-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(180, 155, 110, 0.4),
            transparent
          );
        }

        .catalog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .catalog-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .catalog-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #b49b6e;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .catalog-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 300;
          color: #f0ece4;
          letter-spacing: 0.04em;
          line-height: 1.15;
          font-family: "Cormorant Garamond", Georgia, serif;
          margin-bottom: 16px;
        }

        .catalog-title em {
          font-style: italic;
          color: #b49b6e;
        }

        .catalog-subtitle {
          font-size: 15px;
          color: #888;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
          justify-items: center;
        }

        .catalog-note {
          text-align: center;
          margin-top: 40px;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(180, 155, 110, 0.5);
        }
      `}</style>
    </section>
  );
}
