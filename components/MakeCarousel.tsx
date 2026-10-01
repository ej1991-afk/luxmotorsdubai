import Link from "next/link";

export function MakeCarousel({ makes }: { makes: string[] }) {
  const loop = [...makes, ...makes];

  return (
    <section
      aria-label="Makes we sell"
      className="overflow-hidden border-y border-line bg-ink-soft py-6"
    >
      <div className="marquee-track flex w-max items-center gap-14 px-8">
        {loop.map((make, index) => {
          const duplicate = index >= makes.length;
          return (
            <Link
              key={`${make}-${index}`}
              href={`/inventory?make=${encodeURIComponent(make)}`}
              aria-hidden={duplicate || undefined}
              tabIndex={duplicate ? -1 : undefined}
              className="shrink-0 font-display text-[1.65rem] uppercase tracking-[0.28em] text-gold/80 transition hover:text-gold"
            >
              {make}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
