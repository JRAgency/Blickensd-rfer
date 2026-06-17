import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Mechanischen Werkstatt Mark Blickensdörfer gemäß DSGVO.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <article className="container-x max-w-3xl pt-[140px] pb-24 md:pb-32">
      <h1 className="display text-[clamp(2rem,4vw,3rem)]">
        Datenschutzerklärung
      </h1>

      <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-fg-soft">
        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            1. Verantwortlicher
          </h2>
          <p className="mt-3">
            {site.legalName}, {site.contact.street}, {site.contact.zip}{" "}
            {site.contact.city}. Telefon: {site.contact.phone}, E-Mail:{" "}
            {site.contact.email}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p className="mt-3">
            Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
            nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
            sowie unserer Inhalte und Leistungen erforderlich ist. Rechtsgrundlage
            ist Art. 6 Abs. 1 DSGVO.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            3. Hosting &amp; Server-Logfiles
          </h2>
          <p className="mt-3">
            Beim Aufruf dieser Website werden durch den Hosting-Provider
            automatisch Informationen (IP-Adresse, Datum/Uhrzeit, abgerufene
            Seite, Browsertyp) in Server-Logfiles erfasst. Dies dient der
            technischen Sicherheit und Stabilität (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            4. Schriftarten (Fonts)
          </h2>
          <p className="mt-3">
            Schriftarten werden lokal vom Server dieser Website ausgeliefert
            (self-hosted). Es findet kein Verbindungsaufbau zu Servern Dritter
            (z. B. Google Fonts) statt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            5. Cookies
          </h2>
          <p className="mt-3">
            Diese Website verwendet ausschließlich technisch notwendige Cookies
            bzw. den lokalen Speicher des Browsers, um Ihre Cookie-Auswahl zu
            speichern. Es erfolgt kein Tracking.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            6. Kartendienst (Google Maps)
          </h2>
          <p className="mt-3">
            Die Karte auf unserer Kontaktseite wird erst nach Ihrer
            ausdrücklichen Zustimmung geladen. Dabei werden Daten (u. a. Ihre
            IP-Adresse) an Google Ireland Ltd. übertragen. Rechtsgrundlage ist
            Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            7. Kontaktformular &amp; E-Mail-Kontakt
          </h2>
          <p className="mt-3">
            Wenn Sie uns per Formular oder E-Mail kontaktieren, werden Ihre
            Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen
            gespeichert (Art. 6 Abs. 1 lit. b und f DSGVO). Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-fg">
            8. Ihre Rechte
          </h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
            sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
          </p>
        </section>

        <p className="text-sm text-fg-mute">
          Hinweis: Dieser Datenschutztext ist eine sorgfältig erstellte Vorlage
          für die Demo und sollte vor dem Live-Gang durch den Kunden bzw. einen
          Rechtsbeistand final geprüft werden.
        </p>
      </div>
    </article>
  );
}
