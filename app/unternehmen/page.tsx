import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Unternehmen — Mechanische Werkstatt seit 1986",
  description:
    "Seit 1986 in Hanau: Vom 1-Mann-Betrieb zum spezialisierten Team für Dreh- und Frästeile in der Feinwerktechnik. Die Geschichte der Werkstatt Blickensdörfer.",
};

export default function UnternehmenPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Liebe zur"
        accent="Präzision."
        sub="Eine kleine Werkstatt in Hanau – mit über 35 Jahren Erfahrung in der mechanischen Fertigung und einem Team, das jedes Teil ernst nimmt."
        image="/img/about.jpg"
        breadcrumb={[
          { label: "Start", href: "/" },
          { label: "Unternehmen", href: "/unternehmen" },
        ]}
      />

      {/* Story */}
      <section className="container-x py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal zoom-wrap group overflow-hidden rounded-[2rem]">
            <Image
              src="/img/precision.jpg"
              alt="Messung eines Präzisionsbauteils"
              width={900}
              height={680}
              className="zoom-img aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">Unsere Haltung</span>
            <h2 className="display mt-5 text-[clamp(1.8rem,3.6vw,2.8rem)]">
              „Stahlgebäck“ – und die Faszination der exakten Form.
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-4 text-base leading-relaxed text-fg-soft">
              {site.about.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-5 font-display text-lg font-semibold">
              — {site.about.storyAuthor}, Inhaber
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper-alt py-20 md:py-28">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Unsere Geschichte</span>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)]">
              Vom 1-Mann-Betrieb zum Spezialisten.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.about.history.map((h, i) => (
              <div
                key={h.year}
                className="reveal relative rounded-2xl border border-paper-line bg-paper p-7"
                data-delay={`${i * 80}`}
              >
                <div className="font-display text-4xl font-bold text-accent-700">
                  {h.year}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-fg-soft">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branchen */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal">
            <span className="eyebrow">Branchen</span>
            <h2 className="display mt-5 text-[clamp(1.8rem,3.6vw,2.6rem)]">
              Wo unsere Teile arbeiten.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fg-soft">
              Unsere größten Kunden kommen aus der Labor- und Messtechnik. Über
              die Jahre haben wir uns zunehmend auf Dreh-Frästeile für
              Feinwerktechnik und Mikromechanik spezialisiert.
            </p>
          </div>
          <div className="reveal grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2">
            {site.industries.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-3 bg-paper p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent-700">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="font-medium">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
