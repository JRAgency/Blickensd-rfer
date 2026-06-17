import type { Metadata } from "next";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Maschinenpark — CNC-Dreh- & Fräszentren",
  description:
    "Unser Maschinenpark: Schaublin-CNC-Drehmaschinen, Kitamura, Willemin Macodell 5-Achs, Brother TC215 und mehr – inklusive Messtechnik und Werkzeugbau.",
};

const groups = [
  { key: "drehen", title: "Drehen", icon: "lathe", items: site.machines.drehen },
  { key: "fraesen", title: "Fräsen", icon: "mill", items: site.machines.fraesen },
  {
    key: "weiteres",
    title: "Werkzeugbau & Schleifen",
    icon: "tool",
    items: site.machines.weiteres,
  },
  {
    key: "messen",
    title: "Messen & Endkontrolle",
    icon: "measure",
    items: site.machines.messen,
  },
] as const;

export default function MaschinenparkPage() {
  return (
    <>
      <PageHero
        eyebrow="Maschinenpark"
        title="Werkzeuge der"
        accent="Präzision."
        sub="Ein durchdachter Park aus CNC-Dreh- und Fräszentren, Werkzeugbau und Messtechnik – die Grundlage für maßhaltige Teile in jeder Losgröße."
        image="/img/detail.jpg"
        breadcrumb={[
          { label: "Start", href: "/" },
          { label: "Maschinenpark", href: "/maschinenpark" },
        ]}
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <div
              key={g.key}
              className="reveal card p-8"
              data-delay={`${(i % 2) * 80}`}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-accent">
                  <Icon name={g.icon as never} className="h-6 w-6" />
                </span>
                <h2 className="font-display text-2xl font-semibold">
                  {g.title}
                </h2>
              </div>
              <ul className="mt-6 space-y-4">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-paper-line pb-4 text-sm leading-relaxed text-fg-soft last:border-0 last:pb-0"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 max-w-3xl text-base leading-relaxed text-fg-mute">
          Zum Messen und zur Endkontrolle verwenden wir die üblichen
          Feinmessmittel, Messstifte in 1/100-mm-Stufung sowie ein
          Messmikroskop – damit jedes Teil Ihre Vorgaben sicher erfüllt.
        </p>
      </section>

      <CtaBand
        title="Welches Teil sollen wir für Sie fertigen?"
        text="Schicken Sie uns Ihre Zeichnung – wir prüfen die Machbarkeit und melden uns mit einem Angebot."
      />
    </>
  );
}
