import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = site.services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — Leistungen`,
    description: s.teaser,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = site.services.filter((s) => s.slug !== slug);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.teaser,
    provider: { "@type": "Organization", name: site.legalName },
    areaServed: "DE",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />

      <section className="relative isolate overflow-hidden bg-ink pt-[76px] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.img}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        </div>
        <div className="container-x py-20 md:py-28">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Link href="/" className="hover:text-accent">
              Start
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/leistungen" className="hover:text-accent">
              Leistungen
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>
          <span className="eyebrow eyebrow--light">Leistung</span>
          <h1 className="display mt-5 max-w-3xl text-[clamp(2.3rem,5.5vw,4rem)] text-white">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {service.teaser}
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <div className="space-y-5 text-lg leading-relaxed text-fg-soft">
              {service.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="zoom-wrap group mt-10 overflow-hidden rounded-[1.5rem]">
              <Image
                src={service.img}
                alt={service.title}
                width={1000}
                height={620}
                className="zoom-img aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          {/* Specs / Highlights */}
          <aside className="reveal lg:sticky lg:top-28 lg:self-start" data-delay="100">
            <div className="rounded-[1.5rem] border border-paper-line bg-paper-alt p-7">
              <h2 className="font-display text-xl font-semibold">
                Auf einen Blick
              </h2>
              <ul className="mt-5 space-y-4">
                {service.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span className="leading-relaxed text-fg-soft">{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="btn btn-accent mt-7 w-full justify-center"
              >
                Anfrage senden
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-fg"
              >
                <Icon name="phone" className="h-4 w-4 text-accent-700" />
                {site.contact.phone}
              </a>
            </div>
          </aside>
        </div>

        {/* Weitere Leistungen */}
        <div className="mt-20 border-t border-paper-line pt-12">
          <h2 className="reveal font-display text-2xl font-semibold">
            Weitere Leistungen
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((o, i) => (
              <Link
                key={o.slug}
                href={`/leistungen/${o.slug}`}
                className="group reveal card card-hover p-6"
                data-delay={`${i * 70}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-700">
                  <Icon name={o.icon as never} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {o.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-fg-soft group-hover:text-accent-700">
                  Ansehen
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
