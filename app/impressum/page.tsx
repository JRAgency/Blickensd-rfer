import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Mechanischen Werkstatt Mark Blickensdörfer, Hanau.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <article className="container-x max-w-3xl pt-[140px] pb-24 md:pb-32">
      <h1 className="display text-[clamp(2rem,4vw,3rem)]">Impressum</h1>

      <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-fg-soft">
        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-3">
            {site.legalName}
            <br />
            {site.contact.street}
            <br />
            {site.contact.zip} {site.contact.city}
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            Vertreten durch
          </h2>
          <p className="mt-3">Inhaber: {site.owner}</p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">Kontakt</h2>
          <p className="mt-3">
            Telefon: {site.contact.phone}
            <br />
            Telefax: {site.contact.fax}
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-fg underline"
            >
              {site.contact.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            Umsatzsteuer-ID
          </h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:
            <br />
            {site.contact.ustId}
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">
            {site.owner}
            <br />
            {site.contact.street}, {site.contact.zip} {site.contact.city}
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            EU-Streitschlichtung
          </h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="text-fg underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            Bildnachweis
          </h2>
          <p className="mt-3">
            Verwendete Fotografien: Unsplash (lizenzfrei). Im finalen
            Kundenauftritt werden diese durch eigene Werk- und Produktaufnahmen
            ersetzt.
          </p>
        </section>
      </div>
    </article>
  );
}
