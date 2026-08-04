import Image from "next/image";
import { brandsLogos } from "@/libs/data";

export default function BrandGrid() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.3)",
              color: "var(--gold-light)",
            }}
          >
            Produk
          </div>

          <h2
            className="text-[30px] md:text-[38px] font-bold mb-3"
            style={{
              color: "black",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.01em",
            }}
          >
            Merek yang Kami Sediakan
          </h2>

          <p
            className="text-[15px] leading-relaxed max-w-xl mx-auto text-black"
          >
            Produk dan solusi dari berbagai merek industri terpercaya untuk
            mendukung kebutuhan operasional dan proyek Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {brandsLogos.map((brand) => (
            <div
              key={brand.alt}
              className="
                group
                relative
                h-[82px]
                sm:h-[92px]
                lg:h-[98px]
                rounded-xl
                overflow-hidden
                flex
                items-center
                justify-center
                px-4
                py-3
              "
              style={{
                background: "var(--pure-white)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                  sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 33vw,
                    20vw
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}