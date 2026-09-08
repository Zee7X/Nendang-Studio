import { Check, Crown, Star } from "lucide-react";
import type { PricingPlan } from "@/data/pricing";
import { waLink } from "@/lib/site-config";
import s from "@/components/sections/Landing.module.css";

export default function PricingCard({plan}: {plan: PricingPlan}) {
  const Icon = plan.name === "Custom" ? Star : Crown;
  return (
    <article className={`${s.priceCard} ${plan.featured ? s.featured : ""}`}>
      {plan.featured && <span className={s.badge}>Paling Populer</span>}
      <h3><Icon className={s.planIcon} fill="currentColor" aria-hidden="true" />{plan.name}</h3>
      <div className={s.price}>
        {plan.pricePrefix && <span className={s.pricePrefix}>{plan.pricePrefix}</span>}
        <p>{plan.price}</p>
      </div>
      <ul className={s.planFeatures}>
        {plan.features.map(feature => <li key={feature}><Check size={13} strokeWidth={3} aria-hidden="true" /><span>{feature}</span></li>)}
      </ul>
      <a href={waLink(`Halo Nendang Studio, saya tertarik dengan paket ${plan.name} (${plan.price}). Boleh info lebih lanjut?`)}
        target="_blank" rel="noopener noreferrer" className={s.planButton}>{plan.cta}</a>
    </article>
  );
}
