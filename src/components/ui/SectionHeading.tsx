import { ArrowRight } from "lucide-react";
import s from "@/components/sections/Landing.module.css";

export default function SectionHeading({eyebrow, title, description, id, className}: {
  eyebrow: string; title: React.ReactNode; description?: string; id?: string; className?: string;
}) {
  return (
    <div className={`${s.heading} ${className || ""}`.trim()}>
      <p className={s.eyebrow}>{eyebrow !== "FAQ" && <ArrowRight size={12} aria-hidden="true" />}{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className={s.description}>{description}</p>}
    </div>
  );
}
