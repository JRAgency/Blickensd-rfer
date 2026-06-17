import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <span className="eyebrow">Fehler 404</span>
      <h1 className="display mt-5 text-[clamp(2.5rem,6vw,5rem)]">
        Seite nicht <span className="text-accent-700">gefunden.</span>
      </h1>
      <p className="mt-5 max-w-md text-fg-soft">
        Diese Seite existiert nicht (mehr). Vielleicht finden Sie über die
        Startseite oder unsere Leistungen, was Sie suchen.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-accent justify-center">
          Zur Startseite
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <Link href="/leistungen" className="btn btn-dark justify-center">
          Leistungen
        </Link>
      </div>
    </section>
  );
}
