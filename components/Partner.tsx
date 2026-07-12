import { testimonials } from "@/libs/data_v2";

export default function Partner() {
  return (
    <section className="py-24" style={{ background: "var(--white)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
          >
            Testimoni
          </div>
          <h2
            className="text-[32px] md:text-[38px] font-bold"
            style={{
              color: "var(--navy)",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.01em",
            }}
          >
            Apa kata mitra kami
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-sm p-7 flex flex-col"
              style={{
                background: "var(--gray-light)",
                border: "1px solid var(--line)",
              }}
            >
              {/* Quote mark */}
              <div
                className="text-[48px] leading-none font-bold mb-4 -mt-2"
                style={{ color: "var(--gold)", fontFamily: "Georgia, serif" }}
              >
                "
              </div>

              <p
                className="text-[14.5px] leading-relaxed flex-grow mb-6 italic"
                style={{ color: "var(--text-mute)" }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div
                className="w-10 h-0.5 mb-5"
                style={{ background: "var(--gold)" }}
              />

              {/* Attribution */}
              <div>
                <div
                  className="text-[14px] font-semibold"
                  style={{ color: "var(--navy)" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-[12.5px] mt-0.5"
                  style={{ color: "var(--text-dim)" }}
                >
                  {t.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
