export type BodyStyle = "SUV" | "Coupe" | "Sedan" | "Wagon";
export type LotStatus = "In the Dubai yard" | "Available to source";

export type Vehicle = {
  slug: string;
  make: string;
  model: string;
  trim: string;
  body: BodyStyle;
  status: LotStatus;
  fobUsd: number;
  featured: boolean;
  images: string[];
  notes: string[];
};

function photo(id: string) {
  return id;
}

export const vehicles: Vehicle[] = [
  {
    slug: "lamborghini-revuelto",
    make: "Lamborghini",
    model: "Revuelto",
    trim: "Coupe",
    body: "Coupe",
    status: "In the Dubai yard",
    fobUsd: 620000,
    featured: true,
    images: [
      photo("photo-1544636331-e26879cd4d9b"),
      photo("photo-1583121274602-3e2820c69888"),
      photo("photo-1503376780353-7e6692767b70"),
    ],
    notes: [
      "Held for viewing at the Al Quoz showroom.",
      "Export offer is FOB Jebel Ali. Colour and specification are confirmed on the written offer.",
      "Closed container if the car leaves the UAE.",
    ],
  },
  {
    slug: "ferrari-purosangue",
    make: "Ferrari",
    model: "Purosangue",
    trim: "SUV",
    body: "SUV",
    status: "In the Dubai yard",
    fobUsd: 480000,
    featured: true,
    images: [
      photo("photo-1592198084033-aade902d1aae"),
      photo("photo-1583121274602-3e2820c69888"),
      photo("photo-1511919884226-fd3cad34687c"),
    ],
    notes: [
      "Gulf-market SUV available from the Dubai yard.",
      "Asking figure is the car at Jebel Ali, not a landed price.",
    ],
  },
  {
    slug: "lamborghini-aventador-svj",
    make: "Lamborghini",
    model: "Aventador SVJ",
    trim: "Coupe",
    body: "Coupe",
    status: "Available to source",
    fobUsd: 540000,
    featured: true,
    images: [
      photo("photo-1583121274602-3e2820c69888"),
      photo("photo-1544636331-e26879cd4d9b"),
      photo("photo-1503376780353-7e6692767b70"),
    ],
    notes: [
      "Not sitting in the yard today. The desk will source it and label the offer as a search until the car is purchased.",
      "FOB figure is a planning price, confirmed before any invoice.",
    ],
  },
  {
    slug: "mercedes-amg-gt63-black-series",
    make: "Mercedes-AMG",
    model: "GT 63",
    trim: "Black Series",
    body: "Coupe",
    status: "Available to source",
    fobUsd: 410000,
    featured: false,
    images: [
      photo("photo-1617531653332-bd46c24f2068"),
      photo("photo-1618843479313-40f8afb4b4d8"),
      photo("photo-1605559424843-9e4c228bf1c2"),
    ],
    notes: [
      "Sourced for a named buyer, then exported or registered in the UAE.",
      "Homologation, if the destination needs it, is quoted apart from the car.",
    ],
  },
  {
    slug: "rolls-royce-phantom",
    make: "Rolls-Royce",
    model: "Phantom",
    trim: "Saloon",
    body: "Sedan",
    status: "In the Dubai yard",
    fobUsd: 390000,
    featured: true,
    images: [
      photo("photo-1631295868223-63265b40d9e4"),
      photo("photo-1563720360172-67b8f3dce741"),
      photo("photo-1617814076367-b759c7d7e738"),
    ],
    notes: [
      "Viewing by appointment at Warehouse 5.",
      "Enclosed transport from the yard to the quay when the car is exported.",
    ],
  },
  {
    slug: "ferrari-812-superfast",
    make: "Ferrari",
    model: "812 Superfast",
    trim: "Coupe",
    body: "Coupe",
    status: "In the Dubai yard",
    fobUsd: 340000,
    featured: false,
    images: [
      photo("photo-1503376780353-7e6692767b70"),
      photo("photo-1592198084033-aade902d1aae"),
      photo("photo-1511919884226-fd3cad34687c"),
    ],
    notes: ["Dubai yard car. Mileage and known faults are written down before the invoice."],
  },
  {
    slug: "ferrari-sf90",
    make: "Ferrari",
    model: "SF90",
    trim: "Coupe",
    body: "Coupe",
    status: "In the Dubai yard",
    fobUsd: 450000,
    featured: true,
    images: [
      photo("photo-1511919884226-fd3cad34687c"),
      photo("photo-1592198084033-aade902d1aae"),
      photo("photo-1583121274602-3e2820c69888"),
    ],
    notes: ["Available from Al Quoz for UAE purchase or export FOB Jebel Ali."],
  },
  {
    slug: "lamborghini-urus-performante",
    make: "Lamborghini",
    model: "Urus",
    trim: "Performante",
    body: "SUV",
    status: "In the Dubai yard",
    fobUsd: 290000,
    featured: true,
    images: [
      photo("photo-1606664515524-ed2f786a0bd6"),
      photo("photo-1519641471654-76ce0107ad1b"),
      photo("photo-1533473359331-0135ef1b58bf"),
    ],
    notes: [
      "Performante specification in the Dubai yard.",
      "A Mansory Urus can be searched if this one is not the build you want.",
    ],
  },
  {
    slug: "porsche-911-turbo-s",
    make: "Porsche",
    model: "911 Turbo S",
    trim: "Coupe",
    body: "Coupe",
    status: "In the Dubai yard",
    fobUsd: 230000,
    featured: true,
    images: [
      photo("photo-1580274455191-1c62238fa333"),
      photo("photo-1614244788272-f6dcdfd8df9f"),
      photo("photo-1578911504392-fb6cee1da196"),
    ],
    notes: ["Yard car. Container loading if it is exported."],
  },
  {
    slug: "audi-rs6",
    make: "Audi",
    model: "RS 6",
    trim: "Avant",
    body: "Wagon",
    status: "In the Dubai yard",
    fobUsd: 135000,
    featured: false,
    images: [
      photo("photo-1606152421802-db97b9c7a11b"),
      photo("photo-1606220838315-056192d5e927"),
      photo("photo-1616422285623-13ff0162193c"),
    ],
    notes: ["Performance wagon held in Dubai for sale or export."],
  },
  {
    slug: "cadillac-escalade",
    make: "Cadillac",
    model: "Escalade",
    trim: "SUV",
    body: "SUV",
    status: "In the Dubai yard",
    fobUsd: 115000,
    featured: false,
    images: [
      photo("photo-1519641471654-76ce0107ad1b"),
      photo("photo-1533473359331-0135ef1b58bf"),
      photo("photo-1549317661-bd32c8ce0db2"),
    ],
    notes: ["U.S.-origin SUV now in the Dubai yard. Left-hand drive confirmed on the offer."],
  },
  {
    slug: "bmw-m4",
    make: "BMW",
    model: "M4",
    trim: "Coupe",
    body: "Coupe",
    status: "In the Dubai yard",
    fobUsd: 82000,
    featured: false,
    images: [
      photo("photo-1555215695-3004980ad54e"),
      photo("photo-1553440569-bcc63803a83d"),
      photo("photo-1616422285623-13ff0162193c"),
    ],
    notes: ["Yard coupe. Suitable for UAE sale or a short export leg."],
  },
  {
    slug: "nissan-patrol",
    make: "Nissan",
    model: "Patrol",
    trim: "SUV",
    body: "SUV",
    status: "In the Dubai yard",
    fobUsd: 68000,
    featured: true,
    images: [
      photo("photo-1533473359331-0135ef1b58bf"),
      photo("photo-1519641471654-76ce0107ad1b"),
      photo("photo-1609521263047-f8f205293f24"),
    ],
    notes: [
      "The volume export SUV from this yard.",
      "A Super Safari can be requested if this specification is not the one you need.",
    ],
  },
  {
    slug: "ford-mustang",
    make: "Ford",
    model: "Mustang",
    trim: "Coupe",
    body: "Coupe",
    status: "In the Dubai yard",
    fobUsd: 48000,
    featured: false,
    images: [
      photo("photo-1549317661-bd32c8ce0db2"),
      photo("photo-1556189250-72ba954cfc2b"),
      photo("photo-1492144534655-ae79c964c9d7"),
    ],
    notes: ["U.S. coupe in Dubai, offered FOB Jebel Ali for export."],
  },
  {
    slug: "dodge-charger-srt",
    make: "Dodge",
    model: "Charger",
    trim: "SRT",
    body: "Sedan",
    status: "In the Dubai yard",
    fobUsd: 56000,
    featured: false,
    images: [
      photo("photo-1556189250-72ba954cfc2b"),
      photo("photo-1544636331-e26879cd4d9b"),
      photo("photo-1549317661-bd32c8ce0db2"),
    ],
    notes: ["SRT saloon in the yard. Left-hand drive, confirmed before invoice."],
  },
];

export const makes = [...new Set(vehicles.map((vehicle) => vehicle.make))].sort();
export const bodies: BodyStyle[] = ["SUV", "Coupe", "Sedan", "Wagon"];

export function getVehicle(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export type StockQuery = {
  make: string;
  body: string;
  band: string;
  q: string;
  sort: string;
};

export function filterVehicles(list: Vehicle[], query: StockQuery) {
  const keyword = query.q.trim().toLowerCase();

  const filtered = list.filter((vehicle) => {
    if (query.make && vehicle.make !== query.make) return false;
    if (query.body && vehicle.body !== query.body) return false;
    if (query.band === "under-100" && vehicle.fobUsd >= 100000) return false;
    if (query.band === "100-250" && (vehicle.fobUsd < 100000 || vehicle.fobUsd > 250000)) return false;
    if (query.band === "250-450" && (vehicle.fobUsd < 250000 || vehicle.fobUsd > 450000)) return false;
    if (query.band === "450-plus" && vehicle.fobUsd < 450000) return false;
    if (!keyword) return true;
    const haystack = [vehicle.make, vehicle.model, vehicle.trim, vehicle.body, vehicle.status].join(" ").toLowerCase();
    return haystack.includes(keyword);
  });

  const sorted = [...filtered];
  if (query.sort === "price-asc") sorted.sort((a, b) => a.fobUsd - b.fobUsd);
  else if (query.sort === "price-desc") sorted.sort((a, b) => b.fobUsd - a.fobUsd);
  else sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || b.fobUsd - a.fobUsd);

  return sorted;
}
