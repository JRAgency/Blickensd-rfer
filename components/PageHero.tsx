import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function PageHero({
  eyebrow,
  title,
  accent,
  sub,
  image,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
  image: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-[76px] text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      </div>

      <div className="container-x py-20 md:py-28">
        {breadcrumb && (
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs text-white/55">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30">/</span>}
                <Link href={b.href} className="hover:text-accent">
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1 className="display mt-5 max-w-4xl text-[clamp(2.3rem,5.5vw,4.2rem)] text-white">
          {title}{" "}
          {accent && <span className="text-accent">{accent}</span>}
        </h1>
        {sub && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
