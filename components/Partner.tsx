import { brandsLogos } from "@/libs/data";
import Image from "next/image";

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

function MarqueeRow({
  items,
  reverse = false,
  speed = 20,
}: {
  items: { alt: string; src: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const track = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="flex gap-4"
        style={{
          width: "max-content",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {track.map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center rounded-sm px-5 py-3"
            style={{
              width: "160px",
              height: "72px",
              background: "var(--pure-white)",
              border: "1px solid var(--line)",
            }}
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={110}
              height={44}
              className="object-contain  transition-all duration-300"
              style={{ maxHeight: "44px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partner() {
  const rows = chunkArray(brandsLogos, Math.ceil(brandsLogos.length / 3));

  return (
    <section className="py-20" style={{ background: "var(--gray-light)" }}>
      <div className="max-w-7xl mx-auto px-8 text-center mb-12">
        <div
          className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
          style={{ background: "var(--orange-pale)", color: "var(--orange)" }}
        >
          Produk
        </div>
        <h2
          className="text-[32px] md:text-[38px] font-bold mb-3"
          style={{
            color: "var(--navy)",
            fontFamily: "var(--font-plus-jakarta)",
            letterSpacing: "-0.01em",
          }}
        >
          Merek Terpercaya
        </h2>
        <p
          className="text-[15px] max-w-lg mx-auto"
          style={{ color: "var(--text-mute)" }}
        >
          Kami menyediakan produk dari merek industri terkemuka dunia untuk memastikan
          kualitas terbaik bagi setiap klien kami.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {rows.map((row, i) => (
          <MarqueeRow
            key={i}
            items={row}
            reverse={i % 2 !== 0} 
            speed={20 + i * 2}      
          />
        ))}
      </div>
    </section>
  );
}