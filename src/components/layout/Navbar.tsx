"use client";

import { useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { waLink } from "@/lib/site-config";
import Logo from "@/components/ui/Logo";
import styles from "@/components/sections/Hero.module.css";

const menu = [
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.header} onKeyDown={(event) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <a href="#hero-title" className="absolute top-3 left-3 z-50 -translate-y-20 rounded-full bg-cyan px-4 py-2 text-sm font-bold text-night focus:translate-y-0">
        Lewati ke konten
      </a>
      <nav className={styles.nav} aria-label="Navigasi utama">
        <Logo className={styles.navLogo} />
        <ul className={styles.navLinks}>
          {menu.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
        </ul>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className={styles.navCta}>
          Konsultasi Gratis <ArrowRight size={16} aria-hidden="true" />
        </a>
        <button ref={toggle} type="button" className={styles.menuButton} aria-expanded={open}
          aria-controls="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>
      <nav id="mobile-menu" hidden={!open} className={styles.mobileMenu} aria-label="Navigasi seluler">
        {menu.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Konsultasi Gratis</a>
      </nav>
    </header>
  );
}
