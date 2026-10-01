import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FreightEstimate } from "@/components/FreightEstimate";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { VehicleCard } from "@/components/VehicleCard";
import { pageSeo, siteUrl } from "@/lib/seo";
import { brand } from "@/lib/site";
import { formatUsd, getVehicle, vehicles } from "@/lib/vehicles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return { title: "Car not found", robots: { index: false, follow: true } };
  const name = `${vehicle.make} ${vehicle.model}`;
  return pageSeo({
    title: `${name} for sale`,
    description: `${name} ${vehicle.trim} from Al Quoz. Asking ${formatUsd(vehicle.fobUsd)} FOB ${brand.port}. ${vehicle.status}. Freight is quoted separately.`,
    path: `/inventory/${vehicle.slug}`,
    image: `/photos/${vehicle.images[0]}.webp`,
  });
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  const related = vehicles.filter((item) => item.slug !== vehicle.slug && item.body === vehicle.body).slice(0, 3);
  const name = `${vehicle.make} ${vehicle.model}`;

  const specs = [
    ["Status", vehicle.status],
    ["Showroom", "Al Quoz, Dubai"],
    ["Departure", brand.port],
    ["Body", vehicle.body],
    ["Specification", vehicle.trim],
    ["Price basis", "FOB, freight separate"],
    ["Steering", "Confirmed on the offer"],
    ["Colour", "Confirmed on the offer"],
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-5 sm:pb-20 sm:pt-28">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Stock", item: `${siteUrl}/inventory` },
            { "@type": "ListItem", position: 3, name, item: `${siteUrl}/inventory/${vehicle.slug}` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Vehicle",
          name,
          brand: { "@type": "Brand", name: vehicle.make },
          model: vehicle.model,
          vehicleConfiguration: vehicle.body,
          image: vehicle.images.map((id) => `${siteUrl}/photos/${id}.webp`),
          url: `${siteUrl}/inventory/${vehicle.slug}`,
          description: vehicle.notes[0],
          offers: {
            "@type": "Offer",
            price: vehicle.fobUsd,
            priceCurrency: "USD",
            availability: vehicle.status === "In the Dubai yard" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
            url: `${siteUrl}/inventory/${vehicle.slug}`,
            seller: { "@type": "AutoDealer", name: brand.name, url: siteUrl },
            description: `Asking price FOB ${brand.port}. Freight, insurance, and destination duty are separate.`,
          },
        }}
      />
      <p className="text-[0.72rem] uppercase tracking-[0.2em] text-mute">
        <Link href="/inventory" className="hover:text-gold">
          Stock
        </Link>
        <span className="px-2 text-gold">/</span>
        {name}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <Gallery images={vehicle.images} alt={name} />

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">{vehicle.status}</p>
          <h1 className="display mt-3 text-4xl leading-tight sm:text-5xl">{name}</h1>
          <p className="mt-2 text-mute">{vehicle.trim}</p>
          <p className="mt-6">
            <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-gold">FOB {brand.port}</span>
            <span className="font-display text-4xl text-gold-bright sm:text-5xl">{formatUsd(vehicle.fobUsd)}</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-mute">
            This figure is the car at the departure port. It is not a landed price. Destination duty, tax, and registration stay with the buyer.
          </p>
          <FreightEstimate />
          <Link
            href={`/contact?vehicle=${vehicle.slug}`}
            className="mt-6 inline-flex bg-gold px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-bright"
          >
            Ask for this car
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <h2 className="display text-4xl">Offer</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {specs.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-3 text-sm sm:grid-cols-2 sm:gap-4">
                <dt className="text-mute">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h2 className="display text-4xl">Sale notes</h2>
          <ul className="mt-6 space-y-4">
            {vehicle.notes.map((note) => (
              <li key={note} className="border-l border-gold pl-4 text-sm leading-6 text-ivory/85">
                {note}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-mute">
            Listed for sale from Dubai. If the status says available to source, we do not own the car yet.
          </p>
        </section>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="display text-4xl">Same body, other stock</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <VehicleCard key={item.slug} vehicle={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
