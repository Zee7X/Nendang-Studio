"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import { faqs } from "@/data/faq";
import s from "./Landing.module.css";

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="faq" className={s.section}>
      <div className={s.faq}>
        <div>
          <SectionHeading eyebrow="FAQ" title={<>Pertanyaan<br />yang Sering Diajukan</>}
            description="Masih ada pertanyaan? Tenang, kami punya jawabannya. Kalau belum ketemu, langsung aja hubungi kami." />
          <button className={s.textLink} type="button" aria-expanded={showAll} aria-controls="faq-list" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua FAQ"}<ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <div id="faq-list" className={s.faqList}>
          {(showAll ? faqs : faqs.slice(0,4)).map(faq => <FAQItem key={faq.question} faq={faq} />)}
        </div>
        <div className={s.faqArt} aria-hidden="true">
          <p>PERTANYAAN<br />LAIN?<br />KITA GAS<br />AJA!</p>
          <Image src="/assets/characters/faq-right.webp" alt="" width={559} height={519} sizes="20vw" />
        </div>
      </div>
    </section>
  );
}
