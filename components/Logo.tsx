import Link from "next/link";
import Image from "next/image";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Mechanische Werkstatt Blickensdörfer — Startseite"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Mechanische Werkstatt Blickensdörfer"
        width={191}
        height={69}
        priority
        className={`h-12 w-auto md:h-14 ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
