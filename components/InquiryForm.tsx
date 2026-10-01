"use client";

import { useState } from "react";
import { brand } from "@/lib/site";
import { vehicles } from "@/lib/vehicles";

const fieldClass =
  "w-full border border-line bg-ink px-3 py-3 text-base text-ivory outline-none focus:border-gold";

function whatsappRequestUrl(data: FormData) {
  const slug = String(data.get("vehicle") || "");
  const vehicle = vehicles.find((item) => item.slug === slug);
  const car = vehicle ? `${vehicle.make} ${vehicle.model}` : "Not tied to a car";
  const message = [
    "Luxmotorsdubai request",
    "",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email")}`,
    `Interest: ${data.get("interest")}`,
    `Destination: ${data.get("country")}`,
    `Car: ${car}`,
    "",
    String(data.get("brief") || ""),
  ].join("\n");

  return `${brand.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function InquiryForm({ vehicleSlug = "" }: { vehicleSlug?: string }) {
  const [sent, setSent] = useState(false);
  const preset = vehicles.find((vehicle) => vehicle.slug === vehicleSlug);

  if (sent) {
    return (
      <div className="border border-gold/60 bg-panel px-6 py-10">
        <p className="kicker">WhatsApp</p>
        <h2 className="display mt-3 text-4xl">The request is open in WhatsApp.</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-mute">
          Send that message to the desk. The offer is confirmed in writing, with the price basis on the invoice.
        </p>
        <button
          type="button"
          className="mt-6 text-[0.68rem] uppercase tracking-[0.18em] text-gold"
          onClick={() => setSent(false)}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const url = whatsappRequestUrl(new FormData(event.currentTarget));
        window.open(url, "_blank", "noopener,noreferrer");
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Name</span>
          <input required name="name" className={fieldClass} autoComplete="name" />
        </label>
        <label>
          <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Phone</span>
          <input required name="phone" className={fieldClass} autoComplete="tel" placeholder="+971" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Email</span>
          <input required type="email" name="email" className={fieldClass} autoComplete="email" />
        </label>
        <label>
          <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Interest</span>
          <select name="interest" className={fieldClass} defaultValue={preset ? "This car" : "Export from Dubai"}>
            <option>Export from Dubai</option>
            <option>Import into the UAE</option>
            <option>This car</option>
            <option>Find a car</option>
          </select>
        </label>
      </div>
      <label>
        <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Destination</span>
        <input required name="country" className={fieldClass} placeholder="UAE, or the country the car must reach" />
      </label>
      <label>
        <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Car</span>
        <select name="vehicle" className={fieldClass} defaultValue={vehicleSlug}>
          <option value="">Not tied to a car</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.slug} value={vehicle.slug}>
              {vehicle.make} {vehicle.model}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="mb-1 block text-[0.62rem] uppercase tracking-[0.18em] text-gold">Brief</span>
        <textarea
          required
          name="brief"
          rows={5}
          className={fieldClass}
          placeholder="Model, steering, budget, and the port."
          defaultValue={
            preset
              ? `Please quote the ${preset.make} ${preset.model} FOB Jebel Ali, or landed to my discharge port.`
              : ""
          }
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-fit bg-gold px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-bright"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
