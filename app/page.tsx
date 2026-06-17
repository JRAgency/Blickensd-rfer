import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";
import Counter from "@/components/Counter";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/hero-real.webp"
            alt="CNC-Fräsbearbeitung eines Präzisionsbauteils in der Werkstatt Blickensdörfer"
            fill
            priority
            sizes="100vw"
            className="kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>

        {/* Social rail */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex">
          <span className="h-16 w-px bg-white/20" />
          {["LinkedIn", "Xing", "E-Mail"].map((s) => (
            <span
              key={s}
              className="rotate-180 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/55 [writing-mode:vertical-rl]"
            >
              {s}
            </span>
          ))}
          <span className="h-16 w-px bg-white/20" />
        </div>

        <div className="container-x relative w-full pb-20 pt-32 md:pb-28">
          <div
            className="reveal max-w-3xl"
            style={{ ["--tw" as string]: 0 }}
          >
            <span className="eyebrow eyebrow--light">{site.hero.eyebrow}</span>
            <h1 className="display mt-6 text-[clamp(2.6rem,6.4vw,5.2rem)] text-white">
              {site.hero.titleLead}
              <br />
              <span className="text-accent">{site.hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              {site.hero.sub}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/kontakt" className="btn btn-accent justify-center">
                Anfrage starten
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="/leistungen"
                className="btn btn-ghost justify-center text-white"
              >
                Leistungen ansehen
              </Link>
            </div>

            {/* Mini-Trust */}
            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/15 pt-7 text-sm text-white/60">
              <span>
                <span className="font-display text-2xl font-semibold text-white">
                  Seit 1986
                </span>
                <br />
                in Hanau
              </span>
              <span>
                <span className="font-display text-2xl font-semibold text-white">
                  Ø 0,5–200 mm
                </span>
                <br />
                Drehteile
              </span>
              <span>
                <span className="font-display text-2xl font-semibold text-white">
                  1–5.000
                </span>
                <br />
                Stück Losgröße
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <div className="overflow-hidden border-y border-paper-line bg-paper py-5">
        <div className="ticker-track">
          {[...site.ticker, ...site.ticker].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-fg-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-700" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ============ PRODUKTE / LEISTUNGEN TEASER ============ */}
      <section className="container-x py-24 md:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="reveal">
            <span className="eyebrow">Unser Können</span>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">
              Präzisionsteile, die <span className="text-accent-700">exakt</span>{" "}
              sitzen.
            </h2>
          </div>
          <p className="reveal text-base leading-relaxed text-fg-soft lg:pb-3">
            Von der Einzelteil-Vorrichtung bis zur Mittelserie: Wir fertigen
            Dreh- und Frästeile aus Metall und technischen Kunststoffen –
            wiederholgenau, maßhaltig und mit der Sorgfalt einer kleinen
            Werkstatt.
            <Link
              href="/leistungen"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-fg hover:text-accent-700"
            >
              Alle Leistungen
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Card 1 */}
          <Link
            href="/leistungen/drehen"
            className="group reveal card card-hover zoom-wrap relative flex aspect-[4/5] flex-col justify-end overflow-hidden"
          >
            <Image
              src="/img/drehen.jpg"
              alt="CNC-Drehen – Präzisionsdrehteile"
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="zoom-img object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="relative p-6 text-white">
              <h3 className="font-display text-2xl font-semibold">CNC-Drehen</h3>
              <p className="mt-1 text-sm text-white/70">
                Drehteile Ø 0,5–200 mm
              </p>
            </div>
            <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Icon name="arrow" className="h-4 w-4 -rotate-45" />
            </span>
          </Link>

          {/* Card 2 */}
          <Link
            href="/leistungen/fraesen"
            className="group reveal card card-hover zoom-wrap relative flex aspect-[4/5] flex-col justify-end overflow-hidden"
            data-delay="80"
          >
            <Image
              src="/img/fraesen.jpg"
              alt="CNC-Fräsen – 3- bis 5-Achs-Bearbeitung"
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="zoom-img object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="relative p-6 text-white">
              <h3 className="font-display text-2xl font-semibold">CNC-Fräsen</h3>
              <p className="mt-1 text-sm text-white/70">
                3-, 4- &amp; 5-Achs-Bearbeitung
              </p>
            </div>
            <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Icon name="arrow" className="h-4 w-4 -rotate-45" />
            </span>
          </Link>

          {/* Card 3 — Lime CTA */}
          <Link
            href="/leistungen"
            className="group reveal flex aspect-[4/5] flex-col justify-between rounded-[1.5rem] bg-accent p-7 text-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-2"
            data-delay="160"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-accent">
              <Icon name="gear" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">
                Mehr Leistungen entdecken
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Kunststoffzerspanung, Vorrichtungs- &amp; Prototypenbau,
                Baugruppenmontage und mehr.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em]">
                Alle ansehen
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="bg-paper-alt py-24 md:py-32">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <span className="eyebrow">Spezialgebiete</span>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">
              Mehr als nur zerspanen.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fg-soft">
              Vom ersten Entwurf bis zur einbaufertigen Baugruppe begleiten wir
              Ihr Bauteil – mit eigenem Werkzeugbau, Endkontrolle und einem
              Netzwerk zuverlässiger Partner für die Oberfläche.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
            {site.capabilities.map((c, i) => (
              <div
                key={c.title}
                className="reveal group bg-paper p-8 transition-colors duration-500 hover:bg-ink"
                data-delay={`${(i % 3) * 70}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-700 transition-colors duration-500 group-hover:bg-accent group-hover:text-ink">
                  <Icon name={c.icon as never} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold transition-colors duration-500 group-hover:text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-soft transition-colors duration-500 group-hover:text-white/60">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ÜBER UNS + STATS ============ */}
      <section className="container-x py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="zoom-wrap group overflow-hidden rounded-[2rem]">
              <Image
                src="/img/werkstatt-cnc.webp"
                alt="Facharbeiter an der CNC-Drehmaschine in der Werkstatt Blickensdörfer"
                width={900}
                height={680}
                className="zoom-img aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-7 -right-3 hidden rounded-2xl bg-accent px-7 py-6 text-ink shadow-xl sm:block">
              <div className="font-display text-4xl font-bold leading-none">
                <Counter to={4} />
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em]">
                Fachkräfte
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">Über uns</span>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.2rem)]">
              {site.about.lead}
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-4 text-base leading-relaxed text-fg-soft">
              <p>{site.about.story[0]}</p>
              <p>{site.about.story[1]}</p>
            </div>
            <p className="mt-5 font-display text-lg font-semibold">
              — {site.about.storyAuthor}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-paper-line pt-8">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-fg md:text-4xl">
                    <Counter
                      to={s.value}
                      prefix={s.prefix ?? ""}
                      suffix={s.suffix ?? ""}
                    />
                  </div>
                  <div className="mt-1 text-sm text-fg-mute">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/unternehmen"
              className="mt-9 inline-flex items-center gap-2 font-semibold text-fg hover:text-accent-700"
            >
              Unsere Geschichte
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ DARK SPECIAL BAND ============ */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/workshop.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <span className="eyebrow eyebrow--light">Maschinenpark</span>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.4rem)] text-white">
              Schaublin, Kitamura, Willemin &amp; Co.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Ein durchdachter Park aus CNC-Dreh- und Fräszentren – inklusive
              5-Achs-Simultanbearbeitung und einer Präzisionsspindel bis 40.000
              U/min. So fertigen wir komplexe Geometrien in einer Aufspannung.
            </p>
            <Link
              href="/maschinenpark"
              className="btn btn-accent mt-9 justify-center"
            >
              Maschinenpark ansehen
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="reveal grid grid-cols-2 gap-4" data-delay="120">
            {[
              { k: "Drehen", v: "bis Ø 200 mm" },
              { k: "Fräsen", v: "3-/4-/5-Achs" },
              { k: "Spindel", v: "40.000 U/min" },
              { k: "Messen", v: "1/100 mm" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="font-display text-xl font-semibold text-accent">
                  {m.k}
                </div>
                <div className="mt-1 text-sm text-white/60">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BRANCHEN / PARTNER ============ */}
      <section className="container-x py-20 md:py-24">
        <p className="reveal text-center text-xs font-semibold uppercase tracking-[0.2em] text-fg-mute">
          Vertrauen aus Industrie &amp; Technik
        </p>
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {site.partners.map((p) => (
            <span
              key={p}
              className="font-display text-lg font-medium text-fg/45 transition-colors hover:text-fg"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaBand />
    </>
  );
}
