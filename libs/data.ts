export const siteConfig = {
  name: "Proto Web",
  tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ipsum felis.",
  location: "Jakarta, DKI Jakarta",
  email: "hello@example.com",
  whatsapp: "https://wa.me/628123456789",
  instagram: "https://instagram.com/prototype",
  hours: "Senin–Jumat, 09.00–17.00",
};

export const heroContent = {
  eyebrow: "Develop & Maintain by Proto Team",
  headline: ["Under Development,", " using Next.js."],
  headlineDimWord: "created",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum ipsum felis, at blandit nunc finibus eget.",
  ctaPrimary: { label: "Lihat Produk", href: "#products" },
  ctaSecondary: { label: "Kisah kami →", href: "#about" },
  image: {
    src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
    alt: "Product Example",
  },
  specs: [
    { label: "Driver", value: "10mm Ti" },
    { label: "Respons", value: "20Hz–40kHz" },
    { label: "Baterai", value: "28 jam" },
    { label: "Garansi", value: "24 bulan" },
  ],
};

export const aboutContent = {
  eyebrow: "Tentang Kami",
  headline: "This website still in development,\nwork in progress.",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus vitae erat eu tempus. Sed vel viverra lorem. Nunc in nisl congue, iaculis enim eu, tempus eros.Donec eros turpis, sollicitudin vitae odio vitae, sagittis aliquam odio. Etiam at tincidunt tellus. Sed libero ligula, ornare vitae lacus sit amet, tempor blandit erat. Nam vel ex non nunc tristique placerat accumsan at sapien.",
    "Aliquam porta ipsum eget pulvinar laoreet. Nam faucibus varius imperdiet."
  ],
  stats: [
    { value: "6", label: "Tahun riset & produksi" },
    { value: "12pt", label: "Kontrol kualitas per unit" },
    { value: "8.000+", label: "Unit terkirim" },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&q=80",
    alt: "Proses perakitan perangkat audio",
  },
};

export const products = [
  {
    index: "01",
    category: "EARPHONE",
    name: "Earphone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rp 890.000",
    spec: "32Ω",
    image: {
      src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
      alt: "Earphone",
    },
  },
  {
    index: "02",
    category: "SPEAKER",
    name: "Speaker",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rp 1.450.000",
    spec: "20W",
    image: {
      src: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
      alt: "Cask speaker portabel",
    },
  },
  {
    index: "03",
    category: "DAC-AMP",
    name: "Mono DAC Amplifier",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Rp 1.980.000",
    spec: "32bit",
    image: {
      src: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?w=600&q=80",
      alt: "Mono DAC Amplifier",
    },
  },
];

export const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Produk", href: "#products" },
];

export const footerLinks = {
  jelajah: [
    { label: "Beranda", href: "#" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Produk", href: "#products" },
  ],
  kontak: [
    { label: "WhatsApp", href: "https://wa.me/628123456789" },
    { label: "Instagram", href: "https://instagram.com/prototype_web" },
    { label: "hello@example.id", href: "mailto:hello@example.id" },
  ],
  lokasi: [
    { label: "Jakarta, DKI Jakarta", href: "#" },
    { label: "Senin–Jumat, 09.00–17.00", href: "#" },
  ],
};
