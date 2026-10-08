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

      <style jsx>{`
        .product-card-wrapper {
          perspective: 1200px;
          height: 560px;
          cursor: pointer;
        }

        .product-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .product-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .product-card-front,
        .product-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
        }

        /* FRONT */
        .product-card-front {
          background: #0a0a0a;
          border: 1px solid rgba(180, 155, 110, 0.2);
        }

        .badge-bestseller,
        .badge-new {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 10;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .badge-bestseller {
          background: linear-gradient(135deg, #b49b6e, #d4b896);
          color: #0a0a0a;
        }

        .badge-new {
          background: linear-gradient(135deg, #3b8b7a, #5ab8a3);
          color: #fff;
        }

        .product-image-wrap {
          position: relative;
          width: 100%;
          height: 68%;
          overflow: hidden;
        }

        .product-img {
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card-wrapper:hover .product-img {
          transform: scale(1.08);
        }

        .product-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(10, 10, 10, 0.8) 100%
          );
        }

        .product-info {
          padding: 20px 22px 22px;
        }

        .product-type {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b49b6e;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .product-name {
          font-size: 28px;
          font-weight: 300;
          color: #f0ece4;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
          font-family: "Cormorant Garamond", Georgia, serif;
        }

        .product-tagline {
          font-size: 11px;
          color: #888;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }

        .product-meta {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .scent-badge,
        .size-badge {
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        .scent-badge {
          background: rgba(180, 155, 110, 0.12);
          border: 1px solid rgba(180, 155, 110, 0.3);
          color: #b49b6e;
        }

        .size-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #888;
        }

        .product-hint {
          font-size: 10px;
          color: rgba(180, 155, 110, 0.5);
          letter-spacing: 0.05em;
          font-style: italic;
        }

        /* BACK */
        .product-card-back {
          background: linear-gradient(145deg, #0d0d0d 0%, #111 50%, #0a0a0a 100%);
          border: 1px solid rgba(180, 155, 110, 0.25);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          padding: 28px 24px 24px;
          gap: 0;
        }

        .pyramid-header {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(180, 155, 110, 0.15);
        }

        .pyramid-product-name {
          font-size: 26px;
          font-weight: 300;
          color: #f0ece4;
          letter-spacing: 0.08em;
          font-family: "Cormorant Garamond", Georgia, serif;
        }

        .pyramid-subtitle {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #b49b6e;
          margin-top: 2px;
        }

        .pyramid-layers {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .pyramid-layer {
          padding: 10px 0;
        }

        .pyramid-divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(180, 155, 110, 0.2),
            transparent
          );
        }

        .layer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .layer-icon {
          font-size: 14px;
        }

        .layer-name {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b49b6e;
        }

        .notes-list {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .note-chip {
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.04em;
        }

        .top-chip {
          background: rgba(100, 170, 150, 0.1);
          border: 1px solid rgba(100, 170, 150, 0.3);
          color: #8ecab8;
        }

        .heart-chip {
          background: rgba(200, 120, 150, 0.1);
          border: 1px solid rgba(200, 120, 150, 0.3);
          color: #d4879f;
        }

        .base-chip {
          background: rgba(180, 155, 110, 0.1);
          border: 1px solid rgba(180, 155, 110, 0.3);
          color: #b49b6e;
        }

        .inquire-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px;
          margin-top: 16px;
          background: linear-gradient(135deg, #b49b6e, #c8ab7e);
          color: #0a0a0a;
          border: none;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .inquire-btn:hover {
          background: linear-gradient(135deg, #c8ab7e, #d4b896);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(180, 155, 110, 0.3);
        }
      `}</style>
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
