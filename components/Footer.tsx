import Link from "next/link";
import { site } from "@/lib/site";
import Icon from "./Icon";

export default function Footer() {
  const year = 2025;

  return (
    <footer className="relative overflow-hidden bg-accent text-ink">
      {/* Watermark Wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-0 right-0 select-none text-center font-display text-[18vw] font-bold leading-none text-ink/[0.06]"
      >
        Blickensdörfer
      </div>

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 64 64"
                className="h-12 w-12"
                fill="none"
                stroke="#0f1410"
                strokeWidth={3.4}
                strokeLinecap="round"
              >
                <circle cx="32" cy="32" r="9.5" />
                <path d="M32 11v6M32 47v6M11 32h6M47 32h6M17.2 17.2l4.2 4.2M42.6 42.6l4.2 4.2M46.8 17.2l-4.2 4.2M21.4 42.6l-4.2 4.2" />
              </svg>
              <span className="font-display text-xl font-semibold leading-none">
                Blickensdörfer
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/75">
              Präzisionsdreh- und Frästeile aus Hanau. Mechanische Fertigung
              für Feinwerktechnik, Mess- und Labortechnik – seit {site.founded}.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
              Leistungen
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {site.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="transition-opacity hover:opacity-60"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
              Unternehmen
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li>
                <Link href="/maschinenpark" className="hover:opacity-60">
                  Maschinenpark
                </Link>
              </li>
              <li>
                <Link href="/unternehmen" className="hover:opacity-60">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:opacity-60">
                  Kontakt & Anfahrt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:opacity-60">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:opacity-60">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {site.legalName}
                  <br />
                  {site.contact.street}
                  <br />
                  {site.contact.zip} {site.contact.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="flex items-center gap-3 font-semibold hover:opacity-60"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 hover:opacity-60"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/15 pt-6 text-xs text-ink/70 sm:flex-row">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>
            Webdesign &amp; Umsetzung:{" "}
            <span className="font-semibold text-ink">JR Agency Services</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
