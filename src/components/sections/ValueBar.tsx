import { Zap, ChartNoAxesColumnIncreasing, Smartphone, Trophy } from "lucide-react";
import styles from "./Hero.module.css";

const values = [
  { icon: Zap, title: "Performa Cepat", description: "Loading ngebut, pengalaman mulus." },
  { icon: ChartNoAxesColumnIncreasing, title: "SEO Friendly", description: "Mudah ditemukan di Google." },
  { icon: Smartphone, title: "Responsive", description: "Tampil sempurna di semua perangkat." },
  { icon: Trophy, title: "High Conversion", description: "Desain strategis, hasil nyata." },
];

export default function ValueBar() {
  return (
    <ul className={styles.features} aria-label="Keunggulan website Nendang Studio">
      {values.map(({ icon: Icon, title, description }) => (
        <li key={title} className={styles.feature}>
          <Icon className={styles.featureIcon} strokeWidth={2.5} aria-hidden="true" />
          <div><h2>{title}</h2><p>{description}</p></div>
        </li>
      ))}
    </ul>
  );
}
