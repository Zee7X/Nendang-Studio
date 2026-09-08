import { ArrowRight } from "lucide-react";
import s from "@/components/sections/Landing.module.css";

export default function SectionHeading({eyebrow, title, description}: {
  eyebrow: string; title: React.ReactNode; description?: string;
}) {
  return (
    <div className={s.heading}>
      <p className={s.eyebrow}>{eyebrow !== "FAQ" && <ArrowRight size={12} aria-hidden="true" />}{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className={s.description}>{description}</p>}
    </div>
  );
}
