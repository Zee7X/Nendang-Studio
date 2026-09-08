import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans } from "@/data/pricing";
import s from "./Landing.module.css";

export default function Pricing() {
  return (
    <section id="harga" className={s.section}>
      <div className={s.pricing}>
        <p className={s.pricingArtLeft} aria-hidden="true">SAME<br />IDEA<br />BIGGER<br />IMPACT</p>
        <SectionHeading eyebrow="Harga" title={<>Paket Fleksibel<br />Sesuai Kebutuhan</>}
          description="Pilih paket yang paling cocok untuk bisnismu. Semua paket sudah termasuk desain modern, responsive, dan dukungan penuh dari tim kami." />
        <div className={s.pricingGrid}>
          {pricingPlans.map(plan => <PricingCard key={plan.name} plan={plan} />)}
        </div>
        <div className={s.pricingArtRight} aria-hidden="true">
          <p>INVEST<br />IN A<br />BIGGER<br />TOMORROW</p>
          <Image src="/assets/doodles/crown-lime.svg" alt="" width={80} height={66} />
        </div>
      </div>
    </section>
  );
}
