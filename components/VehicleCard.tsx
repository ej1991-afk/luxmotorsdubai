import Link from "next/link";
import { Photo } from "@/components/Photo";
import { formatUsd, type Vehicle } from "@/lib/vehicles";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={`/inventory/${vehicle.slug}`}
      className="group flex h-full flex-col border border-line bg-panel transition hover:border-gold/70"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Photo
          id={vehicle.images[0]}
          alt={`${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute left-3 top-3 border border-gold/70 bg-ink/80 px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-gold">
          {vehicle.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-mute sm:tracking-[0.2em]">{vehicle.body}</p>
        <h3 className="mt-2 font-display text-3xl leading-tight text-ivory">
          {vehicle.make} {vehicle.model}
        </h3>
        <p className="mt-2 text-sm text-mute">{vehicle.trim}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <p>
            <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-gold">FOB Jebel Ali</span>
            <span className="font-display text-2xl text-gold-bright sm:text-3xl">{formatUsd(vehicle.fobUsd)}</span>
          </p>
          <span className="text-[0.68rem] uppercase tracking-[0.16em] text-ivory/70 group-hover:text-gold">
            View car
          </span>
        </div>
      </div>
    </Link>
  );
}
