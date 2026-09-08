import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";
import s from "./Landing.module.css";

export default function FinalCTA() {
  return (
    <section id="kontak" className={s.ctaSection} aria-labelledby="cta-title">
      <div className={s.ctaBanner}>
        <Image className={s.ctaCharacter} src="/assets/characters/cta-left.webp" alt="" width={560} height={327} sizes="(max-width: 999px) 250px, 25vw" />
        <div className={s.ctaCopy}>
          <h2 id="cta-title">Siap Punya Website<br />yang Makin Nendang?</h2>
          <p>Diskusiin kebutuhan kamu sekarang juga, GRATIS!<br />Nggak ada komitmen, cuma solusi.</p>
        </div>
        <div className={s.ctaActions}>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={s.limeButton}>
            <MessageCircle size={19} aria-hidden="true" />Konsultasi Gratis<ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#portofolio" className={s.darkButton}>Lihat Portofolio</a>
        </div>
        <p className={s.ctaSign} aria-hidden="true">GOOD <br />PEOPLE <br />GREAT <br />WEBSITES</p>
      </div>
    </section>
  );
}
