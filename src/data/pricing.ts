export type PricingPlan = {
  name: string;
  price: string;
  pricePrefix?: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Rp 1.000.000",
    pricePrefix: "Mulai dari",
    description: "Landing page profesional untuk mulai tampil online.",
    features: [
      "Landing page profesional",
      "Responsive (Mobile & Desktop)",
      "Optimasi dasar SEO",
      "Revisi 2x",
    ],
    cta: "Pilih Paket",
    featured: false,
  },
  {
    name: "Business",
    price: "Rp 2.500.000",
    pricePrefix: "Mulai dari",
    description: "Company profile lengkap untuk bisnis yang serius grow.",
    features: [
      "Company profile lengkap",
      "Hingga 5 halaman",
      "Optimasi SEO on-page",
      "Integrasi WhatsApp",
      "Revisi 3x",
    ],
    cta: "Pilih Paket",
    featured: true,
  },
  {
    name: "Custom",
    price: "Rp 5.000.000",
    pricePrefix: "Mulai dari",
    description: "Sistem & fitur khusus, kita diskusikan bareng.",
    features: [
      "Sesuai kebutuhan proyek",
      "Fitur custom",
      "Integrasi sistem pihak ketiga",
      "Dukungan prioritas",
      "Revisi fleksibel",
    ],
    cta: "Konsultasi Dulu",
    featured: false,
  },
];
