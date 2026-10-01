import type { Metadata } from "next";
import { InventoryBrowser } from "@/components/InventoryBrowser";
import { PageIntro } from "@/components/PageIntro";
import { vehicles, type StockQuery } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Stock",
  description: "Search Luxmotorsdubai yard stock by make, body, and FOB Jebel Ali band.",
};

function one(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const initial: StockQuery = {
    make: one(params.make),
    body: one(params.body),
    band: one(params.band),
    q: one(params.q),
    sort: one(params.sort) || "featured",
  };

  return (
    <>
      <PageIntro
        kicker="Yard"
        title="Stock with a named price basis."
        lede="Filter the Al Quoz yard the way an export buyer searches: make, body, and an FOB band at Jebel Ali. Cars we still have to find are labelled as a source, not as stock we already hold."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
        <InventoryBrowser vehicles={vehicles} initial={initial} />
      </div>
    </>
  );
}
