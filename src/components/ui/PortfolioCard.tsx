import Image from "next/image";
import type { Project } from "@/data/projects";
import s from "@/components/sections/Landing.module.css";

export default function PortfolioCard({project}: {project: Project}) {
  return (
    <a className={s.portfolioCard} href={project.url} target="_blank" rel="noopener noreferrer"
      aria-label={`Lihat proyek ${project.title} — ${project.category}`}>
      <div className={s.thumbnail}>
        <Image src={project.thumbnail} alt={`Tangkapan layar proyek ${project.title}`} fill
          sizes="(max-width: 479px) 90vw, (max-width: 1239px) 45vw, (min-width: 1680px) 480px, 28vw" />
      </div>
      <h3>{project.title}</h3>
      <p>{project.category}</p>
    </a>
  );
}
