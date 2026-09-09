export type Project = {
  title: string;
  category: "Landing Page" | "Company Profile" | "Katalog Online" | "Web App" | "Mobile App";
  thumbnail: string;
  url: string;
};

// Real projects — live demos or public source code.
// Link demo sicute & BHP memakai query string sehingga form login terisi
// otomatis dengan kredensial akun demo (fitur auto-fill di masing-masing app).
export const projects: Project[] = [
  { title: "Sicute", category: "Web App", thumbnail: "/assets/portfolio/sicute-app.webp", url: "https://sicute.onrender.com/login?nip=200302094&password=test" },
  { title: "BHP Lab", category: "Web App", thumbnail: "/assets/portfolio/bhp-lab-app.webp", url: "https://bhp-lab.onrender.com/login?email=admin%40bhp.com&password=12345" },
  { title: "Pocket Flow", category: "Mobile App", thumbnail: "/assets/portfolio/pocket-flow-app.webp", url: "https://github.com/Zee7X/Pocket-Flow" },
  { title: "iTO PNC", category: "Mobile App", thumbnail: "/assets/portfolio/ito-pnc-app.webp", url: "https://play.google.com/store/apps/details?id=com.pnc.itoapp" },
];
