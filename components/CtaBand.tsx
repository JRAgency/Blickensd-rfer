import Link from "next/link";
import { site } from "@/lib/site";
import Icon from "./Icon";

export default function CtaBand({
  title = "Ihr Teil. Unsere Präzision.",
  text = "Senden Sie uns Ihre Zeichnung, Skizze oder Ihr Muster – Sie erhalten zeitnah ein qualifiziertes Angebot.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-accent px-7 py-14 text-ink md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-ink/10 blur-2xl"
        />
        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="eyebrow">Anfrage starten</span>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3.25rem)]">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75">
              {text}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <Link
              href="/kontakt"
              className="btn btn-dark justify-center whitespace-nowrap"
            >
              Anfrage senden
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="btn justify-center whitespace-nowrap border border-ink/25 text-ink hover:border-ink"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
