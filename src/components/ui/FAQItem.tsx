import { Plus } from "lucide-react";
import type { Faq } from "@/data/faq";
import s from "@/components/sections/Landing.module.css";

export default function FAQItem({faq}: {faq: Faq}) {
  return (
    <details className={s.faqItem}>
      <summary>{faq.question}<Plus size={18} aria-hidden="true" /></summary>
      <p>{faq.answer}</p>
    </details>
  );
}
