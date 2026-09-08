import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import s from "./Landing.module.css";

export default function Services() {
  return (
    <section id="layanan" className={s.section}>
      <div className={s.services}>
        <div className={s.serviceArtLeft} aria-hidden="true">
          <Image src="/assets/doodles/crown-lime.svg" alt="" width={72} height={60} />
          <p className={s.graffiti}>SMALL<br />BUSINESS<br />BIG<br />POSSIBILITIES</p>
        </div>
        <SectionHeading eyebrow="Layanan Kami" title={<>Solusi Website<br />untuk Setiap<br />Kebutuhan</>}
          description="Dari bisnis kecil sampai perusahaan besar, kami siap bantu wujudkan website impian kamu dengan hasil terbaik." />
        <div className={s.serviceGrid}>
          {services.map(service => <ServiceCard key={service.title} service={service} />)}
        </div>
        <div className={s.serviceArtRight} aria-hidden="true">
          <p className={s.graffiti}>WEBSITES<br />PEOPLE<br />LOVE <span>♥</span></p>
          <Image src="/assets/characters/service-side.webp" alt="" width={504} height={513} sizes="16vw" />
        </div>
      </div>
    </section>
  );
}
