"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Icon from "./Icon";

export default function ConsentMap() {
  const [loaded, setLoaded] = useState(false);
  const query = encodeURIComponent(
    `${site.contact.street}, ${site.contact.zip} ${site.contact.city}`
  );

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] border border-paper-line bg-paper-alt">
      {loaded ? (
        <iframe
          title="Standort Mechanische Werkstatt Blickensdörfer"
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          onClick={() => setLoaded(true)}
          className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
            <Icon name="pin" className="h-7 w-7" />
          </span>
          <span className="font-display text-lg font-semibold">
            Karte von Google Maps laden
          </span>
          <span className="max-w-xs text-sm text-fg-soft">
            Aus Datenschutzgründen wird die Karte erst nach Ihrer Zustimmung
            geladen. Dabei werden Daten an Google übertragen.
          </span>
          <span className="btn btn-dark mt-2">Karte anzeigen</span>
        </button>
      )}
    </div>
  );
}
