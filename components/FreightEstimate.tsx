"use client";

import { useState } from "react";
import { lanes } from "@/lib/site";

export function FreightEstimate() {
  const [laneId, setLaneId] = useState(lanes[0].id);
  const lane = lanes.find((item) => item.id === laneId) ?? lanes[0];

  return (
    <div className="mt-6 border border-line p-4">
      <p className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">Freight from Jebel Ali</p>
      <label className="mt-3 block">
        <span className="sr-only">Discharge port</span>
        <select
          className="h-12 w-full border border-line bg-ink px-3 text-base"
          value={laneId}
          onChange={(event) => setLaneId(event.target.value)}
        >
          {lanes.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-[0.62rem] uppercase tracking-[0.16em] text-mute">Method</dt>
          <dd className="mt-1 text-ivory">{lane.method}</dd>
        </div>
        <div>
          <dt className="text-[0.62rem] uppercase tracking-[0.16em] text-mute">Band</dt>
          <dd className="mt-1 text-gold-bright">{lane.band}</dd>
        </div>
        <div>
          <dt className="text-[0.62rem] uppercase tracking-[0.16em] text-mute">Transit</dt>
          <dd className="mt-1 text-ivory">{lane.days}</dd>
        </div>
      </dl>
      <p className="mt-3 text-xs leading-5 text-mute">
        Planning band only, on top of the FOB car price. A written C&F or CIF figure follows once loading is confirmed. Duty is not included.
      </p>
    </div>
  );
}
