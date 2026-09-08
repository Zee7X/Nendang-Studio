import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // portfolio thumbnails are local, static SVG files we generate ourselves
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    formats: ["image/webp"],
  },
};

export default nextConfig;
