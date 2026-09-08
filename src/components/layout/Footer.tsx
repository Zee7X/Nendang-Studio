import { SITE_CONFIG } from "@/lib/site-config";
import Logo from "@/components/ui/Logo";
import s from "@/components/sections/Landing.module.css";

const menu = ["Layanan", "Portofolio", "Harga", "FAQ", "Kontak"];
function Instagram() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" /></svg>;
}
function Github() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.3-4.3-2.1-6-2.6M15 22v-4a3.5 3.5 0 0 0-1-2.5c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.2-.4-4.1 1.5a14.3 14.3 0 0 0-7.4 0C4.7-.2 3.5.2 3.5.2a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.4 6.9 6.7 7.3A3.5 3.5 0 0 0 7.7 18v4" transform="translate(1 1) scale(.9)" /></svg>;
}
function Linkedin() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="4" r="2" /><path d="M11 21V9h4v2c2-4 7-2 7 3v7h-4v-7c0-2-3-2-3 0v7Z" /></svg>;
}
const socials = [
  {label:"Instagram", href:SITE_CONFIG.instagram, Icon:Instagram},
  {label:"GitHub", href:SITE_CONFIG.github, Icon:Github},
  {label:"LinkedIn", href:SITE_CONFIG.linkedin, Icon:Linkedin},
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div><Logo /><p className={s.footerTagline}>Website yang bikin brand kamu makin nendang.</p></div>
        <nav aria-label="Navigasi footer" className={s.footerNav}>
          {menu.map(label => <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>)}
        </nav>
        <div>
          <div className={s.socials}>
            {socials.map(({label,href,Icon}) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>)}
          </div>
          <p className={s.copyright}>© {new Date().getFullYear()} Nendang Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
