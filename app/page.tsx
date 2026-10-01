import Link from "next/link";
import { MakeCarousel } from "@/components/MakeCarousel";
import { Photo } from "@/components/Photo";
import { VehicleCard } from "@/components/VehicleCard";
import { brand, corridors, steps } from "@/lib/site";
import { bodies, makes, vehicles } from "@/lib/vehicles";

const selectClass =
  "h-12 w-full border border-white/10 bg-black/50 px-3 text-sm text-ivory outline-none focus:border-gold";

export default function HomePage() {
  const featured = vehicles.filter((vehicle) => vehicle.featured).slice(0, 6);

  return (
    <>
      <section className="relative min-h-[100svh]">
        <Photo
          id="photo-1492144534655-ae79c964c9d7"
          alt="A dark performance car at night"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/55" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-8 pt-24 sm:px-5 sm:pb-10 sm:pt-32">
          <p className="kicker">Vehicle sales · import & export</p>
          <h1 className="display mt-4 max-w-4xl text-[2.6rem] leading-[0.95] text-ivory sm:text-6xl lg:text-8xl">
            Bought in Dubai. Shipped in order.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ivory/80 md:text-lg">
            Luxmotorsdubai sells luxury, exotic, sports, and SUV cars from Al Quoz. Import a car into the UAE, or export one FOB {brand.port}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inventory"
              className="inline-flex bg-gold px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-bright"
            >
              Browse stock
            </Link>
            <Link
              href="/process"
              className="inline-flex border border-gold/70 px-5 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-ink"
            >
              How a car moves
            </Link>
          </div>

          <form action="/inventory" className="mt-10 border border-gold/40 bg-black/70 p-4 backdrop-blur md:p-5">
            <div className="grid gap-3 md:grid-cols-4">
              <label>
                <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Make</span>
                <select name="make" className={selectClass} defaultValue="">
                  <option value="">Any make</option>
                  {makes.map((make) => (
                    <option key={make}>{make}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Body</span>
                <select name="body" className={selectClass} defaultValue="">
                  <option value="">Any body</option>
                  {bodies.map((body) => (
                    <option key={body}>{body}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">FOB band</span>
                <select name="band" className={selectClass} defaultValue="">
                  <option value="">Any price</option>
                  <option value="under-100">Under $100,000</option>
                  <option value="100-250">$100,000–$250,000</option>
                  <option value="250-450">$250,000–$450,000</option>
                  <option value="450-plus">$450,000 and over</option>
                </select>
              </label>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="h-12 w-full bg-gold text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-bright"
                >
                  Search stock
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <MakeCarousel makes={makes} />

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line px-4 py-px sm:px-5 lg:grid-cols-4">
        {[
          ["FOB", "Named at Jebel Ali"],
          ["2", "Ways in: buy or source"],
          ["3", "Price bases: FOB, C&F, CIF"],
          ["Al Quoz", "Showroom and yard"],
        ].map(([value, label]) => (
          <div key={label} className="bg-ink px-2 py-8 sm:px-6">
            <p className="font-display text-4xl text-gold sm:text-5xl">{value}</p>
            <p className="mt-2 text-sm text-mute">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="kicker">Selected stock</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl md:text-6xl">Cars ready to discuss.</h2>
          </div>
          <Link href="/inventory" className="text-[0.72rem] uppercase tracking-[0.2em] text-gold">
            All stock
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <article className="border-b border-line px-5 py-16 md:border-b-0 md:border-r md:px-10">
            <p className="kicker">Import</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Bring a specific car into the UAE.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-mute">
              Name the model, the year, and the steering. We source it, photograph the faults, and land it only if this border can accept it.
            </p>
            <Link href="/services" className="mt-6 inline-flex text-[0.72rem] uppercase tracking-[0.18em] text-gold">
              Import services
            </Link>
          </article>
          <article className="px-5 py-16 md:px-10">
            <p className="kicker">Export</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Move a Dubai car to your port.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-mute">
              Buy from the Al Quoz yard and ship FOB, C&F, or CIF. Freight stays a separate line. Duty at your end stays with you.
            </p>
            <Link href="/services" className="mt-6 inline-flex text-[0.72rem] uppercase tracking-[0.18em] text-gold">
              Export services
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
        <p className="kicker">The path</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl md:text-6xl">Five steps, one Dubai desk.</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-gold/50 pt-4">
              <p className="font-display text-3xl text-gold">{step.n}</p>
              <h3 className="mt-3 text-lg text-ivory">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink-soft py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <p className="kicker">Corridors</p>
          <h2 className="display mt-3 max-w-3xl text-4xl sm:text-5xl">Where the cars actually go.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {corridors.map((corridor) => (
              <article key={corridor.region} className="border border-line bg-ink p-6">
                <h3 className="font-display text-3xl">{corridor.region}</h3>
                <p className="mt-3 text-sm text-gold">{corridor.ports}</p>
                <p className="mt-3 text-sm leading-6 text-mute">{corridor.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-5 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="kicker">Before money moves</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Three words the invoice must use.</h2>
          <dl className="mt-8 space-y-5">
            {[
              ["FOB", "The car at Jebel Ali. Freight is still ahead of you."],
              ["C&F", "Car plus ocean freight to a named port. Insurance is extra."],
              ["CIF", "Car, freight, and marine insurance. Local duty is still yours."],
            ].map(([term, text]) => (
              <div key={term} className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-line pt-4">
                <dt className="font-display text-2xl text-gold">{term}</dt>
                <dd className="text-sm leading-6 text-mute">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <blockquote className="border border-gold/40 bg-panel px-6 py-8 sm:px-8 sm:py-10">
          <p className="display text-3xl leading-tight text-ivory sm:text-4xl">
            “Tell us the port first. The right car is the one that can land there.”
          </p>
          <footer className="mt-6 text-[0.72rem] uppercase tracking-[0.2em] text-gold">
            Luxmotorsdubai desk rule
          </footer>
        </blockquote>
      </section>

      <section className="border-t border-line bg-[radial-gradient(600px_200px_at_20%_0%,rgba(198,161,91,0.18),transparent_55%)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-5 sm:py-16 md:flex-row md:items-center">
          <div>
            <p className="kicker">Not in the yard</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Send the car you actually want.</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex bg-gold px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-bright"
          >
            Request a car
          </Link>
        </div>
      </section>
    </>
  );
}
