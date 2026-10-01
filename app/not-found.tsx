import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pt-24">
      <p className="kicker">Missing car</p>
      <h1 className="display mt-4 text-5xl sm:text-6xl">That car is not on the stock list.</h1>
      <p className="mt-4 text-mute">It may have sold, or the link is wrong. Search the yard, or send a brief.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/inventory" className="bg-gold px-5 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-ink">
          Back to stock
        </Link>
        <Link href="/contact" className="border border-gold px-5 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-gold">
          Request a car
        </Link>
      </div>
    </div>
  );
}
