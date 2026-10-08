"use client";

import { useState } from "react";
import Image from "next/image";
import { products, Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="product-card-wrapper"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`product-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="product-card-front">
          {product.isBestSeller && (
            <div className="badge-bestseller">Best Seller</div>
          )}
          {product.isNew && <div className="badge-new">New Arrival</div>}

          <div className="product-image-wrap">
            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="product-img"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="product-image-overlay" />
          </div>

          <div className="product-info">
            <p className="product-type">{product.type}</p>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-tagline">{product.tagline}</p>
            <div className="product-meta">
              <span className="scent-badge">{product.scentFamily}</span>
              <span className="size-badge">{product.size}</span>
            </div>
            <p className="product-hint">Hover untuk lihat piramida aroma →</p>
          </div>
        </div>

        {/* Back Side — Fragrance Pyramid */}
        <div className="product-card-back">
          <div className="pyramid-header">
            <h3 className="pyramid-product-name">{product.name}</h3>
            <p className="pyramid-subtitle">Fragrance Pyramid</p>
          </div>

          <div className="pyramid-layers">
            {/* Top Notes */}
            <div className="pyramid-layer top-layer">
              <div className="layer-label">
                <span className="layer-icon">🌿</span>
                <span className="layer-name">Top Notes</span>
              </div>
              <div className="notes-list">
                {product.notes.top.map((note) => (
                  <span key={note} className="note-chip top-chip">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="pyramid-divider" />

            {/* Heart Notes */}
            <div className="pyramid-layer heart-layer">
              <div className="layer-label">
                <span className="layer-icon">🌸</span>
                <span className="layer-name">Heart Notes</span>
              </div>
              <div className="notes-list">
                {product.notes.middle.map((note) => (
                  <span key={note} className="note-chip heart-chip">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="pyramid-divider" />

            {/* Base Notes */}
            <div className="pyramid-layer base-layer">
              <div className="layer-label">
                <span className="layer-icon">🪵</span>
                <span className="layer-name">Base Notes</span>
              </div>
              <div className="notes-list">
                {product.notes.base.map((note) => (
                  <span key={note} className="note-chip base-chip">
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button className="inquire-btn">
            Tanya Harga
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}

export default function ProductCatalog() {
  return (
    <section className="catalog-section">
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className="catalog-note">
          ✦ Arahkan kursor ke kartu produk untuk melihat piramida aroma lengkap
        </p>
      </div>

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

        .catalog-grid > * {
          width: 100%;
          max-width: 400px;
        }

        .catalog-note {
          text-align: center;
          margin-top: 40px;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(180, 155, 110, 0.4);
        }
      `}</style>
    </section>
  );
}
