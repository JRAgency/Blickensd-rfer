"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "bws-consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  const choose = (value: "all" | "essential") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-paper-line bg-paper/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
      <p className="text-sm leading-relaxed text-fg-soft">
        Wir verwenden ausschließlich technisch notwendige Cookies. Externe
        Inhalte wie die Karte werden erst nach Ihrer Zustimmung geladen.
        Details in unserer{" "}
        <Link href="/datenschutz" className="font-semibold text-fg underline">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={() => choose("all")}
          className="btn btn-accent justify-center"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={() => choose("essential")}
          className="btn btn-dark justify-center"
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
