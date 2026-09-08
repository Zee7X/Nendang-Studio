import type { Metadata, Viewport } from "next";
import { Roboto, Kalam } from "next/font/google";
import { SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Jasa Pembuatan Website | Nendang Studio",
    template: "%s | Nendang Studio",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "jasa pembuatan website",
    "jasa website murah",
    "landing page",
    "company profile",
    "katalog online",
    "website UMKM",
    "web developer Indonesia",
    "Rizick Web Studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Jasa Pembuatan Website | Nendang Studio",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nendang Studio — Website yang Bikin Brand Kamu Makin Nendang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website | Nendang Studio",
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080A0F",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/og-image.jpg`,
  priceRange: "Rp1.000.000 - Rp5.000.000",
  areaServed: "Indonesia",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.github, SITE_CONFIG.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${roboto.variable} ${kalam.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
