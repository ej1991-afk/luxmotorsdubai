"use client";

import { useMemo, useState } from "react";
import { VehicleCard } from "@/components/VehicleCard";
import { bodies, filterVehicles, makes, type StockQuery, type Vehicle } from "@/lib/vehicles";

const bands = [
  { value: "under-100", label: "Under $100,000" },
  { value: "100-250", label: "$100,000–$250,000" },
  { value: "250-450", label: "$250,000–$450,000" },
  { value: "450-plus", label: "$450,000 and over" },
];

const emptyQuery: StockQuery = { make: "", body: "", band: "", q: "", sort: "featured" };

function bandLabel(value: string) {
  return bands.find((band) => band.value === value)?.label ?? "Any price";
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Choice({
  label,
  count,
  selected,
  onClick,
}: {
  label: string;
  count: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
        selected
          ? "border-gold/60 bg-gold/10 text-ivory"
          : "border-line text-ivory/85 hover:border-gold/40"
      }`}
    >
      <span>{label}</span>
      <span className="text-xs text-mute">{count}</span>
    </button>
  );
}

export function InventoryBrowser({
  vehicles,
  initial,
}: {
  vehicles: Vehicle[];
  initial: StockQuery;
}) {
  const [query, setQuery] = useState<StockQuery>(initial);
  const [filtersOpen, setFiltersOpen] = useState(Boolean(initial.make || initial.body || initial.band));
  const [sections, setSections] = useState({
    body: true,
    make: Boolean(initial.make),
    band: Boolean(initial.band),
  });

  const results = useMemo(() => filterVehicles(vehicles, query), [vehicles, query]);
  const refined = Boolean(query.q || query.make || query.body || query.band);

  function update(partial: Partial<StockQuery>) {
    setQuery((current) => ({ ...current, ...partial }));
  }

  function countFor(partial: Partial<StockQuery>) {
    return filterVehicles(vehicles, { ...query, ...partial }).length;
  }

  function toggleSection(key: keyof typeof sections) {
    setSections((current) => ({ ...current, [key]: !current[key] }));
  }

  const panel = (
    <div className="rounded-2xl border border-gold/20 bg-panel p-5 shadow-[inset_0_1px_0_rgba(237,217,163,0.08)] lg:sticky lg:top-28">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-xl text-ivory">Refine</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mute">
            {results.length} {results.length === 1 ? "match" : "matches"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setQuery((current) => ({ ...emptyQuery, sort: current.sort }))}
          disabled={!refined}
          className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
        >
          Reset
        </button>
      </div>
      <div className="gold-line mt-4" />

      <div className="mt-5 space-y-4">
        <div className="border-b border-line/70 pb-3">
          <button type="button" aria-expanded={sections.body} onClick={() => toggleSection("body")} className="flex w-full items-center gap-3 py-2 text-left">
            <span className="min-w-0 flex-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Body</span>
            <Chevron open={sections.body} />
          </button>
          {sections.body ? (
            <div className="mt-2 grid gap-2">
              <Choice label="All cars" count={countFor({ body: "" })} selected={!query.body} onClick={() => update({ body: "" })} />
              {bodies.map((body) => (
                <Choice
                  key={body}
                  label={body}
                  count={countFor({ body })}
                  selected={query.body === body}
                  onClick={() => update({ body })}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="border-b border-line/70 pb-3">
          <button type="button" aria-expanded={sections.make} onClick={() => toggleSection("make")} className="flex w-full items-center gap-3 py-2 text-left">
            <span className="min-w-0 flex-1">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Make</span>
              {sections.make ? null : <span className="mt-1 block truncate text-xs text-mute">{query.make || "All makes"}</span>}
            </span>
            <Chevron open={sections.make} />
          </button>
          {sections.make ? (
            <div className="mt-2 grid gap-2">
              <Choice label="All makes" count={countFor({ make: "" })} selected={!query.make} onClick={() => update({ make: "" })} />
              {makes.map((make) => (
                <Choice
                  key={make}
                  label={make}
                  count={countFor({ make })}
                  selected={query.make === make}
                  onClick={() => update({ make })}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <button type="button" aria-expanded={sections.band} onClick={() => toggleSection("band")} className="flex w-full items-center gap-3 py-2 text-left">
            <span className="min-w-0 flex-1">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">FOB band</span>
              {sections.band ? null : <span className="mt-1 block truncate text-xs text-mute">{bandLabel(query.band)}</span>}
            </span>
            <Chevron open={sections.band} />
          </button>
          {sections.band ? (
            <div className="mt-2 grid gap-2">
              <Choice label="Any price" count={countFor({ band: "" })} selected={!query.band} onClick={() => update({ band: "" })} />
              {bands.map((band) => (
                <Choice
                  key={band.value}
                  label={band.label}
                  count={countFor({ band: band.value })}
                  selected={query.band === band.value}
                  onClick={() => update({ band: band.value })}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="rounded-2xl border border-gold/20 bg-panel p-4 shadow-[inset_0_1px_0_rgba(237,217,163,0.08)] sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <label className="block min-w-0 flex-1">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Search stock</span>
            <input
              value={query.q}
              placeholder="Ferrari, Urus, wagon…"
              onChange={(event) => update({ q: event.target.value })}
              className="mt-2 w-full border-b border-line bg-transparent! pb-2 text-base text-ivory outline-none transition-colors placeholder:text-mute/70 focus:border-gold"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex min-w-[13rem] flex-1 flex-col sm:flex-none">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Sort</span>
              <select
                value={query.sort}
                onChange={(event) => update({ sort: event.target.value })}
                className="mt-2 rounded-xl border border-line bg-ink px-3 py-2.5 text-sm text-ivory outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">FOB · Low to high</option>
                <option value="price-desc">FOB · High to low</option>
              </select>
            </label>
            <button
              type="button"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
              className="inline-flex min-h-11 items-center gap-2 self-end rounded-full border border-line px-4 text-sm font-semibold text-ivory lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 text-gold">
                <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:grid lg:grid-cols-[18.5rem_minmax(0,1fr)] lg:items-start lg:gap-8">
        <aside className={filtersOpen ? "mb-8 block lg:mb-0" : "mb-0 hidden lg:block"}>{panel}</aside>
        <div>
          <p className="text-sm text-mute">
            Showing {results.length} {results.length === 1 ? "car" : "cars"}
          </p>
          {results.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-line px-6 py-16 text-center">
              <p className="font-display text-4xl">Nothing in the yard matches.</p>
              <p className="mx-auto mt-3 max-w-md text-sm text-mute">
                Send the specification anyway. A search stays labelled as a search until the car is ours.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex bg-gold px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink"
              >
                Request this car
              </a>
            </div>
          ) : (
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {results.map((vehicle) => (
                <VehicleCard key={vehicle.slug} vehicle={vehicle} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
