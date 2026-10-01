import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Import into the UAE and export from Dubai. Yard stock, private search, documents, and shipping.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        kicker="Desks"
        title="One house for the car and the crossing."
        lede="Luxmotorsdubai sells from the Al Quoz yard and moves cars both ways: into the UAE for a local buyer, and out of Jebel Ali for a buyer abroad."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-2">
        <article className="border border-line bg-panel p-8">
          <p className="kicker">For buyers in the UAE</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Import</h2>
          <p className="mt-4 text-sm leading-7 text-mute">
            You want a car that is not already in Dubai. We confirm it can be registered or held here, source it, and hand you documents that match the price on the invoice.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ivory/85">
            <li>Private clients and dealers</li>
            <li>A named model, not a surprise substitute</li>
            <li>Steering and age checked before purchase</li>
          </ul>
        </article>
        <article className="border border-gold/40 bg-ink p-8">
          <p className="kicker">For buyers abroad</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Export</h2>
          <p className="mt-4 text-sm leading-7 text-mute">
            You want a car from this yard, or one we find, loaded at Jebel Ali. The invoice says FOB, C&F, or CIF in plain words. Freight is not hidden inside the metal.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ivory/85">
            <li>Yard cars ready to reserve</li>
            <li>Single high-value movements</li>
            <li>RoRo for volume, containers for finish</li>
          </ul>
        </article>
      </section>

      <section className="border-t border-line bg-ink-soft">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
          <p className="kicker">What the desk actually does</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="border border-line bg-ink p-6">
                <p className="font-display text-2xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{service.text}</p>
              </article>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex bg-gold px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink"
          >
            Request a car
          </Link>
        </div>
      </section>
    </>
  );
}
