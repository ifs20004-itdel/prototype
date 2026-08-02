import Image from "next/image";
import { productCategories } from "@/libs/data";

export default function ProductCategories() {
  return (
    <section className="py-20" style={{ background: "var(--navy-light)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.3)",
              color: "var(--gold-light)",
            }}
          >
            Produk Range
          </div>

          <h2
            className="text-[30px] md:text-[38px] font-bold mb-3"
            style={{
              color: "white",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.01em",
            }}
          >
            Produk dan Kapabilitas Kami
          </h2>

          <p
            className="text-[15px] max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Kami menyediakan produk heat exchanger, mesin industri, serta
            fasilitas workshop untuk mendukung kebutuhan operasional dan
            fabrikasi pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {productCategories.map((product) => (
            <article key={product.title} className="group">
              <div
                className="relative overflow-hidden rounded-[22px]"
                style={{
                  aspectRatio: "3 / 5",
                  background: "var(--gray-light)",
                  border: "5px solid white",
                }}
              >
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              <div
                className="mt-3 min-h-12 flex items-center justify-center rounded-xl px-3 text-center"
                style={{ background: "var(--gold)" }}
              >
                <h3
                  className="text-[15px] md:text-[18px] font-bold uppercase leading-tight"
                  style={{
                    color: "white",
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  {product.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}