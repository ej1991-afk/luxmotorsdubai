import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { brand, principles } from "@/lib/site";

export const metadata: Metadata = {
  title: "House",
  description: "Luxmotorsdubai sells, imports, and exports vehicles from Al Quoz, Dubai.",
};

const makes = [
  "Audi",
  "Bentley",
  "BMW",
  "Cadillac",
  "Ferrari",
  "Lamborghini",
  "Mercedes-Benz",
  "Nissan",
  "Porsche",
  "Rolls-Royce",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="The house"
        title="A sales desk in Al Quoz."
        lede="Luxmotorsdubai buys and sells luxury, exotic, sports, and SUV cars from Warehouse 5, and moves them into the UAE or out through Jebel Ali."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-2">
        <div className="relative aspect-[4/5] border border-line">
          <Photo
            id="photo-1553440569-bcc63803a83d"
            alt="A dark luxury cabin"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="kicker">The desk</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-mute">
            <p>
              The showroom is {brand.address} Viewing is by appointment, every day from 9:00 AM to 9:00 PM. Sales sit on {brand.phone}, WhatsApp {brand.whatsapp}, and {brand.sales}.
            </p>
            <p>
              Stock in the yard is for sale in the UAE or for export. A car that is not here yet is sourced against a written brief: model, steering, budget, and the port it must be able to enter. The offer says whether we already hold it.
            </p>
            <p>
              The house works across Audi, Bentley, BMW, Cadillac, Dodge, Ferrari, Ford, Lamborghini, Mercedes-Benz, Nissan, Porsche, and Rolls-Royce, among others. The invoice names FOB, C&F, or CIF. Destination duty stays with the buyer.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-soft">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-2">
          {principles.map((principle) => (
            <article key={principle.title} className="border border-line bg-ink p-6">
              <h2 className="font-display text-3xl text-gold-bright">{principle.title}</h2>
              <p className="mt-3 text-sm leading-6 text-mute">{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
        <p className="kicker">On the stock list</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl">Makes this desk sells.</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {makes.map((make) => (
            <li key={make} className="border-t border-gold pt-4 font-display text-2xl">
              {make}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
