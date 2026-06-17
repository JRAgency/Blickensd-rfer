"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Seiten mit dunklem Hero hinter dem transparenten Header
  const hasDarkHero =
    pathname === "/" ||
    pathname.startsWith("/leistungen") ||
    pathname.startsWith("/maschinenpark") ||
    pathname.startsWith("/unternehmen") ||
    pathname.startsWith("/kontakt");
  // Solider Header: gescrollt ODER Seite ohne dunklen Hero (z. B. Impressum)
  const solid = scrolled || open || !hasDarkHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
        solid
          ? "border-b border-paper-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[76px] items-center justify-between">
        <Logo variant={solid ? "dark" : "light"} />

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[0.82rem] font-medium transition-colors duration-300 ${
                  solid
                    ? active
                      ? "text-fg"
                      : "text-fg-soft hover:text-fg"
                    : active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.contact.phoneHref}`}
            className={`hidden items-center gap-2 text-sm font-semibold transition-colors duration-300 md:inline-flex ${
              solid ? "text-fg" : "text-white"
            }`}
          >
            <Icon
              name="phone"
              className={`h-4 w-4 ${solid ? "text-accent-700" : "text-accent"}`}
            />
            {site.contact.phone}
          </a>
          <Link href="/kontakt" className="btn btn-accent hidden sm:inline-flex">
            Anfrage
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-paper-line bg-paper lg:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] w-5 bg-fg transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-fg transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-fg transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[76px] z-40 bg-paper transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 pt-6">
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between border-b border-paper-line py-4 font-display text-2xl font-medium"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
              <Icon name="arrow" className="h-5 w-5 text-accent-700" />
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/kontakt" className="btn btn-accent justify-center">
              Anfrage senden
            </Link>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="btn btn-dark justify-center"
            >
              {site.contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
