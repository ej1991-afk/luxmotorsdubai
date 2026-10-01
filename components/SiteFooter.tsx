import Link from "next/link";
import { Icon } from "@/components/Icon";
import { brand } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-5 lg:grid-cols-4 lg:py-16">
        <div>
          <p className="flex items-center gap-3 font-display text-2xl tracking-[0.12em] sm:text-3xl">
            <Icon name="mark" alt="" className="h-8 w-8" />
            LUXMOTORS
          </p>
          <p className="mt-4 text-sm leading-6 text-mute">
            Vehicle sales, import, and export from the Al Quoz showroom. Yard stock priced FOB {brand.port}.
          </p>
        </div>
        <div>
          <p className="kicker">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/85">
            <li>
              <Link href="/inventory" className="hover:text-gold">
                Current stock
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold">
                Import and export
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-gold">
                How a car moves
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold">
                The house
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker">Showroom</p>
          <p className="mt-4 text-sm leading-6 text-ivory/85">
            {brand.address}
            <span className="mt-2 block text-mute">{brand.hours}</span>
          </p>
        </div>
        <div>
          <p className="kicker">Desk</p>
          <p className="mt-4 text-sm leading-6 text-ivory/85">
            <a href={brand.phoneHref} className="hover:text-gold">
              {brand.phone}
            </a>
            <br />
            <a href={`mailto:${brand.sales}`} className="hover:text-gold">
              {brand.sales}
            </a>
            <span className="mt-2 block text-mute">WhatsApp {brand.whatsapp}</span>
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex border border-gold px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-ink"
          >
            Request a car
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-mute sm:flex-row sm:justify-between">
          <p>Luxmotorsdubai · sales, import, and export</p>
          <p>Prices shown are FOB {brand.port} asking figures and are confirmed in writing.</p>
        </div>
      </div>
    </footer>
  );
}
