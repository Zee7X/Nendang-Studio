import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import s from "@/components/sections/Landing.module.css";

export default function ServiceCard({service}: {service: Service}) {
  const Icon = service.icon;
  return (
    <article className={s.serviceCard}>
      <Icon className={s.serviceIcon} strokeWidth={1.6} aria-hidden="true" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a href={service.href} className={s.textLink}>{service.cta}<ArrowRight size={16} aria-hidden="true" /></a>
    </article>
  );
}
