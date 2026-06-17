import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Leistungen — CNC-Drehen, Fräsen & Lohnfertigung",
  description:
    "Lohnfertigung von Präzisionsdreh- und Frästeilen: CNC-Drehen, 5-Achs-Fräsen, Kunststoffzerspanung, Vorrichtungs- und Prototypenbau in Hanau.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Lohnfertigung mit"
        accent="Anspruch."
        sub="Wir fertigen Ihre Präzisionsteile nach Skizze, Muster oder Zeichnung – aus allen zerspanbaren Werkstoffen, in Losgrößen von 1 bis 5.000 Stück."
        image="/img/fraesen.jpg"
        breadcrumb={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
        ]}
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {site.services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="group reveal card card-hover overflow-hidden"
              data-delay={`${(i % 2) * 80}`}
            >
              <div className="zoom-wrap relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="zoom-img object-cover"
                />
                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-fg backdrop-blur">
                  <Icon name={s.icon as never} className="h-5 w-5" />
                </span>
              </div>
              <div className="p-7">
                <h2 className="font-display text-2xl font-semibold">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fg-soft">
                  {s.teaser}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors group-hover:text-accent-700">
                  Details ansehen
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Werkstoffe */}
        <div className="reveal mt-10 rounded-[1.5rem] border border-paper-line bg-paper-alt p-8 md:p-12">
          <span className="eyebrow">Werkstoffe</span>
          <h2 className="display mt-4 text-[clamp(1.6rem,3vw,2.4rem)]">
            Alle zerspanbaren Materialien.
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Edelstahl",
              "Stahl & Vergütungsstahl",
              "Aluminium",
              "Messing & Kupfer",
              "Titan",
              "PEEK",
              "PTFE / Teflon",
              "POM",
              "PA / Nylon",
              "Gehärtete Werkstoffe",
            ].map((m) => (
              <span
                key={m}
                className="rounded-full border border-paper-line bg-paper px-4 py-2 text-sm font-medium text-fg-soft"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
