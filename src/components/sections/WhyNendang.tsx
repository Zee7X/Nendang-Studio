import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import s from "./Landing.module.css";

const values = [
  {
    img: "/assets/why/value-01.png",
    width: 590,
    height: 350,
    title: "Custom Design",
    description: "No boring templates. Desain dibuat khusus sesuai karakter dan brand kamu.",
  },
  {
    img: "/assets/why/value-02.png",
    width: 610,
    height: 280,
    title: "Fast & Responsive",
    description: "Built for real users. Ringan, cepat diakses, dan nyaman di semua perangkat.",
  },
  {
    img: "/assets/why/value-03.png",
    width: 544,
    height: 296,
    title: "Direct Communication",
    description: "Ngobrol langsung sama yang ngerjain, tanpa perantara. Diskusi cepat dan to the point.",
  },
  {
    img: "/assets/why/value-04.png",
    width: 576,
    height: 310,
    title: "After-Launch Support",
    description: "Nggak ditinggal setelah live. Kami tetap standby untuk bantuan teknis dan update.",
  },
];

export default function WhyNendang() {
  return (
    <section id="kenapa-nendang" className={s.whySection} aria-labelledby="why-title">
      <Reveal>
        <div className={s.whyInner}>
          <div className={s.whyIntro}>
            <SectionHeading
              id="why-title"
              eyebrow="Why Nendang"
              title={
                <>
                  Kenapa Harus
                  <br />
                  Nendang Studio?
                </>
              }
              description="Bukan cuma desain keren — website kamu juga harus enak dipakai, cepat, dan jelas prosesnya dari awal sampai live."
            />
            <div className={s.whyCharacterWrap} aria-hidden="true">
              <Image
                src="/assets/why/character.png"
                alt=""
                width={560}
                height={540}
                sizes="(max-width: 699px) 65vw, (max-width: 1239px) 45vw, 360px"
                className={s.whyCharacter}
              />
            </div>
          </div>
          <ul className={s.whyGrid}>
            {values.map(({ img, width, height, title, description }) => (
              <li key={title} className={s.whyItem}>
                <Image
                  src={img}
                  alt=""
                  width={width}
                  height={height}
                  aria-hidden="true"
                  className={s.whyNumber}
                  sizes="(max-width: 699px) 50vw, (max-width: 1239px) 35vw, 220px"
                />
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
