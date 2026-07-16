import { siteConfig } from "@/libs/data";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  function ContactIcon({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--gold)" }}
      >
        {children}
      </div>
    );
  }

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
            Siap berdiskusi tentang kebutuhan bisnis Anda. Tim kami akan
            merespons dalam waktu 1x24 jam.
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
              <ContactIcon>
                <Mail size={18} color="white" strokeWidth={2} />
              </ContactIcon>
              <div>
                <div
                  className="text-[12px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Email
                </div>
                <div
                  className="text-[14.5px] font-medium"
                  style={{ color: "white" }}
                >
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
              <ContactIcon>
                <MessageCircle size={18} color="white" strokeWidth={2} />
              </ContactIcon>

              <div>
                <div
                  className="text-[12px] uppercase tracking-widest font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  WhatsApp
                </div>
                <div
                  className="text-[14.5px] font-medium"
                  style={{ color: "white" }}
                >
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
              <ContactIcon>
                <MapPin size={18} color="white" strokeWidth={2} />
              </ContactIcon>
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
            className="rounded-sm overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              minHeight: "300px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3579640503788!2d101.86067811979211!3d0.38675254011558285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5c4ed1ce83be9%3A0x6dd2db919aba89fb!2sJl.%20Melur%2C%20Pangkalan%20Kerinci%20Kota%2C%20Kec.%20Pangkalan%20Kerinci%2C%20Kabupaten%20Pelalawan%2C%20Riau%2028654!5e0!3m2!1sid!2sid!4v1784163403623!5m2!1sid!2sid"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="PT. Tectona Karya Sampoerna"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
