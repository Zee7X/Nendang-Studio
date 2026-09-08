import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-heading text-[15px] font-bold tracking-tight text-ink ${className}`}
      aria-label={`${SITE_CONFIG.name} — beranda`}
    >
      <Image
        src="/assets/doodles/crown-lime.svg"
        alt=""
        width={34}
        height={29}
        className="h-7 w-8 brightness-0 invert"
        aria-hidden="true"
      />
      <span>
        <span className="uppercase">Nendang</span>{" "}
        <span className="font-medium">Studio</span>
      </span>
    </Link>
  );
}
