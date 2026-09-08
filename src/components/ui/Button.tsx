import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "lime" | "dark";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  external?: boolean;
  children: React.ReactNode;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-pink text-night font-bold hover:bg-[#ff6bb1] shadow-[0_10px_30px_rgba(255,79,163,0.35)]",
  outline:
    "border border-ink/25 bg-ink/5 text-ink hover:border-ink/50 hover:bg-ink/10",
  lime: "bg-lime text-night font-bold hover:bg-[#d6ff6e] shadow-[0_10px_30px_rgba(200,255,66,0.25)]",
  dark: "border border-ink/20 bg-night/60 text-ink hover:border-ink/40",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  external = false,
  children,
}: ButtonProps) {
  const classes = `group/btn inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
