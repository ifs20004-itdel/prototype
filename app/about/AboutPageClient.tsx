"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { aboutPage, aboutSummary, stats } from "@/libs/data_v2";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.3)",
              color: "var(--gold-light)",
            }}
          >
            Tentang Kami
          </div>
          <h1
            className="text-[40px] md:text-[52px] font-bold leading-[1.1] mb-4"
            style={{
              color: "white",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.02em",
            }}
          >
            {aboutPage.headline}
          </h1>
          <p
            className="text-[17px] max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {aboutPage.description}
          </p>
        </div>
      </section>

      <section style={{ background: "var(--gold)" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center py-4"
              style={{
                borderRight:
                  i < stats.length - 1 ? "1px solid rgba(27,45,91,0.2)" : "none",
              }}
            >
              <div
                className="text-[30px] font-bold mb-1"
                style={{
                  color: "var(--navy-dark)",
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-[12.5px] font-semibold"
                style={{ color: "rgba(27,45,91,0.65)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--white)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
            >
              Sejarah
            </div>
            <h2
              className="text-[28px] font-bold mb-6"
              style={{
                color: "var(--navy)",
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              Perjalanan kami
            </h2>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "var(--text-mute)" }}
            >
              {aboutPage.history}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div
              className="p-7 rounded-sm"
              style={{
                background: "var(--gray-light)",
                border: "1px solid var(--line)",
              }}
            >
              <div
                className="text-[12px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--gold)" }}
              >
                Visi
              </div>
              <p
                className="text-[15px] leading-relaxed font-medium"
                style={{ color: "var(--navy)" }}
              >
                {aboutPage.vision}
              </p>
            </div>

            <div
              className="p-7 rounded-sm"
              style={{
                background: "var(--gray-light)",
                border: "1px solid var(--line)",
              }}
            >
              <div
                className="text-[12px] font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--gold)" }}
              >
                Misi
              </div>
              <ul className="flex flex-col gap-3">
                {aboutPage.mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "var(--gold-pale)" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--gold)" }}
                      />
                    </div>
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: "var(--text-mute)" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gray-light)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
            >
              Nilai Perusahaan
            </div>
            <h2
              className="text-[30px] font-bold"
              style={{
                color: "var(--navy)",
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              Yang kami pegang teguh
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aboutSummary.values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-sm text-center"
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                </div>
                <h3
                  className="text-[18px] font-bold mb-3"
                  style={{
                    color: "var(--navy)",
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "var(--text-mute)" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
