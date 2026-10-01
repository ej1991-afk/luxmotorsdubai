"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

const links = [
  { href: "/inventory", label: "Stock" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "House" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const solid = scrolled || open || !onHome;

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors ${
          solid ? "border-b border-line bg-ink/95 backdrop-blur" : "bg-transparent"
        }`}
      >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Icon name="mark" alt="" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <span className="min-w-0">
            <span className="block font-display text-lg leading-none tracking-[0.08em] text-ivory sm:text-2xl sm:tracking-[0.14em]">
              LUXMOTORS
            </span>
            <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.28em] text-gold">
              Dubai
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.72rem] uppercase tracking-[0.22em] ${
                  active ? "text-gold" : "text-ivory/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-gold px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-gold-bright lg:inline-flex"
          >
            Request a car
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center border border-gold/50 text-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} alt="" className="h-4 w-4" />
          </button>
        </div>
      </div>
      </div>
    </header>

      {open ? (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink px-5 py-8 sm:top-20 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-4xl text-ivory"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit bg-gold px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink"
            >
              Request a car
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
