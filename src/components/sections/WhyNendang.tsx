import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import s from "./Landing.module.css";

const values = [
  { img: "/assets/why/value-01.png", width: 590, height: 350, title: "Custom Design", description: "No boring templates." },
  { img: "/assets/why/value-02.png", width: 610, height: 280, title: "Fast & Responsive", description: "Built for real users." },
  { img: "/assets/why/value-03.png", width: 544, height: 296, title: "Direct Communication", description: "Ngobrol langsung sama yang ngerjain." },
  { img: "/assets/why/value-04.png", width: 576, height: 310, title: "After-Launch Support", description: "Nggak ditinggal setelah live." },
];

export default function WhyNendang() {
  return (
    <section id="kenapa-nendang" className={s.why} aria-labelledby="why-title">
      <Reveal>
        <div className={s.whyInner}>
          <div className={s.whyIntro}>
            <p className={s.eyebrow}><span aria-hidden="true">→</span> Why Nendang?</p>
            <h2 id="why-title" className={s.whyHeading}>
              Why
              <Image className={s.whyCrown} src="/assets/doodles/crown-pink.svg" alt="" width={120} height={100} aria-hidden="true" />
              <br />
              <span className={s.whyUnderlineWrap}>
                <span className={s.whyAccent}>Nendang?</span>
                <Image className={s.whyUnderline} src="/assets/doodles/underline-pink.svg" alt="" width={600} height={90} aria-hidden="true" />
              </span>
            </h2>
            <p className={s.whyDescription}>
              Bukan cuma desain keren — website kamu juga harus enak dipakai, cepat, dan jelas prosesnya.
            </p>
            <Image className={s.whyCharacter} src="/assets/why/character.png" alt="" width={560} height={540}
              sizes="(max-width: 999px) 55vw, 28vw" />
          </div>
          <ul className={s.whyGrid}>
            {values.map(({ img, width, height, title, description }) => (
              <li key={title} className={s.whyItem}>
                <Image src={img} alt="" width={width} height={height} aria-hidden="true"
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
