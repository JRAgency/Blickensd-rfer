import Link from "next/link";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const markStroke = variant === "light" ? "#c6f23e" : "#0f1410";
  const word = variant === "light" ? "text-white" : "text-fg";
  const sub = variant === "light" ? "text-white/55" : "text-fg-mute";

  return (
    <Link
      href="/"
      aria-label="Mechanische Werkstatt Blickensdörfer — Startseite"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-11 w-11 shrink-0 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-90"
        fill="none"
        stroke={markStroke}
        strokeWidth={3.4}
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="9.5" />
        <path d="M32 11v6M32 47v6M11 32h6M47 32h6M17.2 17.2l4.2 4.2M42.6 42.6l4.2 4.2M46.8 17.2l-4.2 4.2M21.4 42.6l-4.2 4.2" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.06rem] font-semibold tracking-tight ${word}`}
        >
          Blickensdörfer
        </span>
        <span
          className={`mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] ${sub}`}
        >
          Mechanische Werkstatt
        </span>
      </span>
    </Link>
  );
}
