import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import s from "./Landing.module.css";

const values = [
  { number: "01", title: "Custom Design", description: "No boring templates.", width: 450, height: 274 },
  { number: "02", title: "Fast & Responsive", description: "Built for real users.", width: 450, height: 260 },
  { number: "03", title: "Direct Communication", description: "Ngobrol langsung sama yang ngerjain.", width: 450, height: 250 },
  { number: "04", title: "After-Launch Support", description: "Nggak ditinggal setelah live.", width: 450, height: 264 },
];

export default function WhyNendang() {
  return (
    <section id="kenapa-nendang" className={s.why} aria-labelledby="why-title">
      <Reveal>
        <div className={s.whyInner}>
          <div className={s.whyIntro}>
            <p className={s.eyebrow}><span aria-hidden="true">→</span> Why Nendang?</p>
            <Image className={s.whyTitle} src="/assets/why/title.png" alt="Why Nendang?" width={640} height={472}
              sizes="(max-width: 999px) 70vw, 26vw" />
            <p className={s.whyDescription}>
              Bukan cuma desain keren — website kamu juga harus enak dipakai, cepat, dan jelas prosesnya.
            </p>
            <Image className={s.whyCharacter} src="/assets/why/character.png" alt="" width={560} height={540}
              sizes="(max-width: 999px) 55vw, 28vw" />
          </div>
          <ul className={s.whyGrid}>
            {values.map(({ number, title, description, width, height }) => (
              <li key={number} className={s.whyItem}>
                <Image src={`/assets/why/number-${number}.png`} alt="" width={width} height={height} aria-hidden="true"
                  className={s.whyNumber} sizes="(max-width: 699px) 55vw, (max-width: 1239px) 40vw, 20vw" />
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
