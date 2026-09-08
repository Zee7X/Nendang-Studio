import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import s from "./Landing.module.css";

const values = [
  { number: "01", title: "Custom Design", description: "No boring templates.", icon: "/assets/doodles/splash-pink.svg", alt: "" },
  { number: "02", title: "Fast & Responsive", description: "Built for real users.", icon: "/assets/doodles/star-01.svg", alt: "" },
  { number: "03", title: "Direct Communication", description: "Ngobrol langsung sama yang ngerjain.", icon: "/assets/doodles/arrow-cyan.svg", alt: "" },
  { number: "04", title: "After-Launch Support", description: "Nggak ditinggal setelah live.", icon: "/assets/doodles/crown-pink.svg", alt: "" },
];

export default function WhyNendang() {
  return (
    <section id="kenapa-nendang" className={s.why} aria-labelledby="why-title">
      <Reveal>
        <div className={s.whyInner}>
          <div className={s.whyIntro}>
            <p className={s.eyebrow}><span aria-hidden="true">→</span> Why Nendang?</p>
            <h2 id="why-title" className={s.whyHeading}>
              KENAPA<br />
              <span className={s.whyAccent}>NENDANG</span>
              <span className={s.whyMark}>?</span>
            </h2>
            <p className={s.whyDescription}>
              Bukan cuma desain keren — website kamu juga harus enak dipakai, cepat, dan jelas prosesnya.
            </p>
            <Image className={s.whyCharacter} src="/assets/why/character.png" alt="" width={560} height={540}
              sizes="(max-width: 999px) 55vw, 28vw" />
          </div>
          <ul className={s.whyGrid}>
            {values.map(({ number, title, description, icon }) => (
              <li key={number} className={s.whyItem}>
                <div className={s.whyNumberRow}>
                  <span className={s.whyNumber} aria-hidden="true">{number}</span>
                  <Image className={s.whyIcon} src={icon} alt="" width={72} height={72} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
