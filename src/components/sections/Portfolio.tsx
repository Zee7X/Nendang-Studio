import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { projects } from "@/data/projects";
import s from "./Landing.module.css";

export default function Portfolio() {
  return (
    <section id="portofolio" className={s.section}>
      <div className={s.portfolio}>
        <div className={s.portfolioArt} aria-hidden="true">
          <Image src="/assets/characters/portfolio-left.webp" alt="" width={560} height={531} sizes="18vw" />
          <p className={s.portfolioSign}>WEBSITE<br />MASA DEPAN</p>
        </div>
        <div>
          <SectionHeading eyebrow="Portofolio" title={<>Hasil Nyata,<br />Bukan Sekadar Kata</>}
            description="Dari bisnis kecil sampai perusahaan besar, kami siap bantu berbagai jenis bisnis." />
          <a href="#portfolio-grid" className={s.textLink}>Lihat Semua Portofolio <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <div id="portfolio-grid" className={s.portfolioGrid}>
          {projects.slice(0, 4).map(project => <PortfolioCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}
