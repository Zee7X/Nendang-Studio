import type { LucideIcon } from "lucide-react";
import { AppWindow, Building2, ShoppingCart } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  accent: string; // tailwind text color class
  href: string;
};

export const services: Service[] = [
  {
    icon: AppWindow,
    title: "Landing Page",
    description:
      "Website satu halaman yang fokus buat ningkatin konversi. Cocok untuk promo, produk, atau campaign.",
    cta: "Mulai Sekarang",
    accent: "text-pink",
    href: "#harga",
  },
  {
    icon: Building2,
    title: "Company Profile",
    description:
      "Tampilkan profesionalisme bisnismu dengan website perusahaan yang elegan, terpercaya, dan informatif.",
    cta: "Lihat Detail",
    accent: "text-cyan",
    href: "#harga",
  },
  {
    icon: ShoppingCart,
    title: "Katalog Online",
    description:
      "Pamerin produk kamu dengan desain katalog yang menarik dan mudah dikelola.",
    cta: "Lihat Detail",
    accent: "text-yellow",
    href: "#harga",
  },
];
