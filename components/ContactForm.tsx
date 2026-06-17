"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo: kein Backend angebunden. In Produktion an Formspree/eigene API hängen.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-[1.5rem] border border-paper-line bg-paper-alt p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold">
          Vielen Dank!
        </h3>
        <p className="mt-3 text-fg-soft">
          Ihre Anfrage ist eingegangen. Wir melden uns in der Regel innerhalb
          eines Werktags bei Ihnen.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-paper-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent-700";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-fg-mute">
            Name *
          </label>
          <input required name="name" className={field} placeholder="Ihr Name" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-fg-mute">
            Firma
          </label>
          <input name="company" className={field} placeholder="Firma" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-fg-mute">
            E-Mail *
          </label>
          <input
            required
            type="email"
            name="email"
            className={field}
            placeholder="name@firma.de"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-fg-mute">
            Telefon
          </label>
          <input name="phone" className={field} placeholder="Optional" />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-fg-mute">
          Ihre Anfrage *
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className={field}
          placeholder="Beschreiben Sie Ihr Teil – Werkstoff, Stückzahl, Toleranzen. Gerne Zeichnung per E-Mail nachreichen."
        />
      </div>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-fg-soft">
        <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-[#9bc91f]" />
        <span>
          Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung
          meiner Angaben zur Bearbeitung der Anfrage zu.
        </span>
      </label>
      <button type="submit" className="btn btn-accent w-full justify-center">
        Anfrage absenden
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
