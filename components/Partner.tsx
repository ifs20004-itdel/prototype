import { brandsLogos } from "@/libs/data";
import Image from "next/image";

const duplicated = [...brandsLogos, ...brandsLogos];

export default function Partner() {
  return (
    // <section className="py-24" style={{ background: "var(--white)" }}>
    //   <div className="max-w-6xl mx-auto px-6">
    //     <div className="text-center mb-14">
    //       <h2
    //         className="text-[32px] md:text-[38px] font-bold"
    //         style={{
    //           color: "var(--navy)",
    //           fontFamily: "var(--font-plus-jakarta)",
    //           letterSpacing: "-0.01em",
    //         }}
    //       >
    //         Merek Terpercaya
    //       </h2>
    //     </div>

    //   </div>
    // </section>
    <section className="py-20" style={{ background: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-8 text-center mb-12">
        <div
          className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
          style={{ background: "var(--orange-pale)", color: "var(--orange)" }}
        >
          Produk
        </div>
        <h2
          className="text-[32px] md:text-[38px] font-bold"
          style={{
            color: "var(--navy)",
            fontFamily: "var(--font-plus-jakarta)",
            letterSpacing: "-0.01em",
          }}
        >
          Merek Terpercaya
        </h2>
        <p
          className="text-[15px] mt-3 max-w-lg mx-auto"
          style={{ color: "var(--text-mute)" }}
        >
          Kami bermitra dengan merek-merek industri terkemuka dunia untuk
          memastikan kualitas terbaik bagi klien kami.
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex gap-6 marquee-track">
          {duplicated.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center rounded-sm px-6 py-4"
              style={{
                width: "160px",
                height: "80px",
                background: "var(--pure-white)",
                border: "1px solid var(--line)",
              }}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={48}
                className="object-contain"
                style={{ maxHeight: "48px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
