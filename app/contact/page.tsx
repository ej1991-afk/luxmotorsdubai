import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageIntro } from "@/components/PageIntro";
import { pageSeo } from "@/lib/seo";
import { brand } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Request a car",
  description:
    "Ask Luxmotorsdubai for a car. Sales, import, and export from Warehouse 5, Al Quoz. Send the brief on WhatsApp.",
  path: "/contact",
});

function one(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;

  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Tell us the port, then the car."
        lede="A useful brief names the destination, the steering, and whether you are buying yard stock or asking us to find a car. Send it on WhatsApp and the desk confirms the offer in writing."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-5 lg:grid-cols-[1fr_0.8fr] lg:py-16">
        <InquiryForm vehicleSlug={one(params.vehicle)} />
        <aside className="border border-line bg-panel p-6">
          <p className="kicker">Showroom</p>
          <p className="mt-4 font-display text-3xl leading-tight">{brand.address}</p>
          <p className="mt-3 text-sm text-gold">{brand.hours}</p>
          <p className="mt-2 text-sm text-mute">Export loading at {brand.port}</p>
          <ul className="mt-8 space-y-4 text-sm text-ivory/85">
            <li>
              <a href={brand.phoneHref} className="hover:text-gold">
                {brand.phone}
              </a>
              <span className="block text-mute">Phone</span>
            </li>
            <li>
              <a href={brand.whatsappHref} className="hover:text-gold">
                {brand.whatsapp}
              </a>
              <span className="block text-mute">WhatsApp</span>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-gold">
                {brand.email}
              </a>
              <span className="block text-mute">Email</span>
            </li>
            <li>
              <a href={`mailto:${brand.sales}`} className="hover:text-gold">
                {brand.sales}
              </a>
              <span className="block text-mute">Sales</span>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}
