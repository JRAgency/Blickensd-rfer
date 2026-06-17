import type { Metadata } from "next";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ConsentMap from "@/components/ConsentMap";

export const metadata: Metadata = {
  title: "Kontakt & Anfrage",
  description:
    "Mechanische Werkstatt Blickensdörfer in Hanau kontaktieren: Telefon, E-Mail, Anfahrt und Anfrageformular für Ihre Präzisionsteile.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Reden wir über Ihr"
        accent="Teil."
        sub="Ob Einzelstück, Prototyp oder Serie – senden Sie uns Ihre Anfrage. Wir prüfen die Machbarkeit und melden uns mit einem Angebot."
        image="/img/precision.jpg"
        breadcrumb={[
          { label: "Start", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* Kontaktinfos */}
          <div className="reveal">
            <span className="eyebrow">Direkt erreichbar</span>
            <h2 className="display mt-5 text-[clamp(1.8rem,3.6vw,2.6rem)]">
              So erreichen Sie uns.
            </h2>

            <div className="mt-9 space-y-4">
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="group flex items-center gap-4 rounded-2xl border border-paper-line bg-paper p-5 transition-colors hover:border-accent-700"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-700">
                  <Icon name="phone" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-fg-mute">
                    Telefon
                  </span>
                  <span className="font-display text-lg font-semibold">
                    {site.contact.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-paper-line bg-paper p-5 transition-colors hover:border-accent-700"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-700">
                  <Icon name="mail" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-fg-mute">
                    E-Mail
                  </span>
                  <span className="font-display text-lg font-semibold">
                    {site.contact.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-paper-line bg-paper p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-700">
                  <Icon name="pin" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-fg-mute">
                    Adresse
                  </span>
                  <span className="font-display text-lg font-semibold leading-snug">
                    {site.contact.street}
                    <br />
                    {site.contact.zip} {site.contact.city}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-paper-alt p-5 text-sm leading-relaxed text-fg-soft">
              <span className="flex items-center gap-2 font-semibold text-fg">
                <Icon name="pin" className="h-4 w-4 text-accent-700" />
                Anfahrt
              </span>
              <p className="mt-2">{site.directions}</p>
            </div>
          </div>

          {/* Formular */}
          <div className="reveal" data-delay="100">
            <div className="rounded-[1.5rem] border border-paper-line bg-paper p-7 shadow-sm md:p-9">
              <h2 className="font-display text-2xl font-semibold">
                Anfrage senden
              </h2>
              <p className="mt-2 text-sm text-fg-soft">
                Pflichtfelder sind mit * markiert.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-14">
          <ConsentMap />
        </div>
      </section>
    </>
  );
}
