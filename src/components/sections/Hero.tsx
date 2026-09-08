import Image from "next/image";
import { ArrowRight, ChevronsRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ValueBar from "./ValueBar";
import { waLink } from "@/lib/site-config";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <Navbar />
        <div className={styles.artwork} aria-hidden="true">
          <div className={styles.characterGroup}>
            <p className={styles.leftSign}>GOOD<br />WEBSITES<br />BETTER BRANDS</p>
            <Image src="/assets/characters/hero-left.webp" alt="" width={640} height={864}
              preload sizes="(min-width: 900px) 28vw, 46vw" />
          </div>
          <div className={styles.characterGroup}>
            <p className={styles.ideaSign}>PUNYA IDE?<br />KITA BIKIN<br />NENDANG!</p>
            <p className={styles.rightSign}>BUILD<br />CREATE<br />GROW<br />TOGETHER :)</p>
            <Image src="/assets/characters/hero-right.webp" alt="" width={640} height={898}
              preload sizes="(min-width: 900px) 28vw, 46vw" />
          </div>
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><ChevronsRight size={16} aria-hidden="true" /> Nendang Studio</p>
          <h1 id="hero-title" tabIndex={-1} className={styles.title}>
            Website yang<br />Bikin Brand Kamu<br />
            <span>Makin Nendang</span>
          </h1>
          <p className={styles.description}>
            Kami bantu kamu bikin website yang cepat, responsif,{" "}
            <br className={styles.descBr} />
            SEO-friendly, dan desainnya keren — supaya brand kamu{" "}
            <br className={styles.descBr} />
            lebih dikenal dan makin berkembang.
          </p>
          <div className={styles.actions}>
            <a href="#portofolio" className={styles.primaryButton}>
              Lihat Portofolio <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={styles.outlineButton}>
              <MessageCircle size={19} aria-hidden="true" /> Konsultasi Gratis
            </a>
          </div>
        </div>
        <ValueBar />
      </div>
    </section>
  );
}
