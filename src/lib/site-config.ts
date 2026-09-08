export const SITE_CONFIG = {
  name: "Nendang Studio",
  tagline: "Website yang Bikin Brand Kamu Makin Nendang",
  description:
    "Jasa pembuatan website modern, cepat, responsive, dan SEO-friendly untuk UMKM, personal brand, company profile, landing page, dan katalog online.",
  url: "https://nendang-studio.vercel.app",
  // Nomor WhatsApp asli: +62 857-1270-2437
  whatsapp: "6285712702437",
  whatsappMessage:
    "Halo Nendang Studio, saya tertarik membuat website. Boleh konsultasi dulu?",
  email: "halo@nendangstudio.id",
  instagram: "https://instagram.com/nendangstudio",
  github: "https://github.com/Zee7X",
  linkedin: "https://linkedin.com/company/nendangstudio",
} as const;

export function waLink(message: string = SITE_CONFIG.whatsappMessage): string {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
