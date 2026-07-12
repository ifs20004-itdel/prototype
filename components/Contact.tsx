import { siteConfig } from "@/libs/data_v2";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <div
            className="inline-block text-[12px] font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.3)",
              color: "var(--gold-light)",
            }}
          >
            Kontak
          </div>
          <h2
            className="text-[32px] md:text-[38px] font-bold mb-4"
            style={{
              color: "white",
              fontFamily: "var(--font-plus-jakarta)",
              letterSpacing: "-0.01em",
            }}
          >
            Hubungi kami
          </h2>
          <p
            className="text-[15.5px] max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Siap berdiskusi tentang kebutuhan bisnis Anda. Tim kami akan merespons dalam waktu 1x24 jam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-start gap-5 p-6 rounded-sm transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                ✉
              </div>
              <div>
                <div
                  className="text-[12px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Email
                </div>
                <div className="text-[14.5px] font-medium" style={{ color: "white" }}>
                  {siteConfig.email}
                </div>
              </div>
            </a>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 p-6 rounded-sm transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                📱
              </div>
              <div>
                <div
                  className="text-[12px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  WhatsApp
                </div>
                <div className="text-[14.5px] font-medium" style={{ color: "white" }}>
                  Chat langsung dengan tim kami
                </div>
              </div>
            </a>

            <div
              className="flex items-start gap-5 p-6 rounded-sm"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gold)", color: "var(--navy-dark)" }}
              >
                📍
              </div>
              <div>
                <div
                  className="text-[12px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Lokasi
                </div>
                <div
                  className="text-[14.5px] font-medium leading-relaxed"
                  style={{ color: "white" }}
                >
                  {siteConfig.location}
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-sm overflow-hidden flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              minHeight: "300px",
            }}
          >
            <div className="text-center px-6">
              <div className="text-4xl mb-4">🗺️</div>
              <p
                className="text-[14px] font-medium mb-2"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Google Maps
              </p>
              <p
                className="text-[12.5px]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Jl. Melur, The Melur Green House<br />
                Blok D No. 16, Pelalawan, Riau
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
