import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { pageSeo } from "@/lib/seo";
import { faqs, steps } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "How a car is sold and shipped",
  description:
    "How Luxmotorsdubai sources, prices, documents, and ships a car from Al Quoz through Jebel Ali. FOB, C&F, and CIF explained.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <PageIntro
        kicker="How it moves"
        title="From the brief to the bill of lading."
        lede="Whether the car is for the UAE or for export, the path is the same five steps. The words on the invoice stay stable the whole way."
      />

      <ol className="mx-auto max-w-3xl space-y-0 px-4 py-12 sm:px-5 sm:py-16">
        {steps.map((step) => (
          <li key={step.n} className="grid grid-cols-[2.5rem_1fr] gap-4 border-l border-gold/50 py-6 pl-4 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:pl-6">
            <p className="font-display text-3xl text-gold">{step.n}</p>
            <div>
              <h2 className="text-2xl">{step.title}</h2>
              <p className="mt-2 text-sm leading-7 text-mute">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="border-t border-line bg-ink-soft">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5 sm:py-16">
          <p className="kicker">Questions buyers ask first</p>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg text-ivory marker:content-none">
                  <span className="mr-3 text-gold group-open:hidden">+</span>
                  <span className="mr-3 hidden text-gold group-open:inline">–</span>
                  {faq.q}
                </summary>
                <p className="mt-3 pl-6 text-sm leading-7 text-mute">{faq.a}</p>
              </details>
            ))}
          </div>
          <Link
            href="/inventory"
            className="mt-10 inline-flex border border-gold px-5 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-ink"
          >
            Look at stock
          </Link>
        </div>
      </section>
    </>
  );
}
