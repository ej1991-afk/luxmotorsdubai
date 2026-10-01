import type { Metadata } from "next";
import { brand } from "@/lib/site";

const fallbackOrigin = "https://luxmotorsdubai.com";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackOrigin).replace(/\/$/, "");

export const defaultTitle = "Luxmotorsdubai — Vehicle sales, import & export";

export const defaultDescription =
  "Luxmotorsdubai sells, imports, and exports luxury, exotic, sports, and SUV cars from Al Quoz, Dubai. Yard stock is priced FOB Jebel Ali.";

const shareImage = "/photos/hero-port.webp";

export function pageSeo({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const shareTitle = title ? `${title} · Luxmotorsdubai` : defaultTitle;
  const picture = image ?? shareImage;

  return {
    ...(title ? { title } : { title: { absolute: defaultTitle } }),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      images: [{ url: picture, alt: shareTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [picture],
    },
  };
}

export function dealerJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: brand.name,
    legalName: brand.legal,
    url: siteUrl,
    image: `${siteUrl}${shareImage}`,
    telephone: "+971509924247",
    email: brand.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Warehouse 5, Al Quoz, Industrial Area 4",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    priceRange: "$$$",
    description: defaultDescription,
  };
}
