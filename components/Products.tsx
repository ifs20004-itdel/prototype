"use client";

import Image from "next/image";
import { products } from "@/libs/data";

export default function Products() {
  return (
    <section id="products" className="max-w-content mx-auto px-12 py-[100px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] gap-10">
        <div>
          <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--brass)] mb-4">
            Produk
          </div>
          <h2 className="font-display text-[34px] font-medium tracking-[-0.01em]">
            Lini perangkat dengar kami
          </h2>
        </div>
        <p className="text-[14.5px] text-[var(--text-mute)] max-w-[300px]">
          Setiap unit diuji satu per satu sebelum pengiriman.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          gap: "1px",
          background: "var(--line)",
          border: "1px solid var(--line)",
        }}
      >
        {products.map((product) => (
          <div
            key={product.index}
            className="flex flex-col p-8 group transition-colors duration-200"
            style={{ background: "var(--bg)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--surface)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--bg)")
            }
          >
            {/* Index */}
            <div className="font-mono text-[11px] text-[var(--text-dim)] mb-2.5">
              {product.index} / {product.category}
            </div>

            <div
              className="relative rounded-[2px] overflow-hidden mb-6"
              style={{ aspectRatio: "1/1", background: "var(--surface-2)" }}
            >
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="font-display text-[19px] font-medium mb-2">
              {product.name}
            </div>
            <div className="text-[13.5px] text-[var(--text-mute)] mb-[18px] flex-grow">
              {product.description}
            </div>

            <div
              className="flex justify-between items-center pt-4"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <span className="font-mono text-[14.5px] text-[var(--brass)]">
                {product.price}
              </span>
              <span className="font-mono text-[11.5px] text-[var(--text-dim)]">
                {product.spec}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
