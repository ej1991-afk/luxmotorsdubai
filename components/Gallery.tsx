"use client";

import { useState } from "react";
import { Photo } from "@/components/Photo";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden border border-line bg-panel">
        <Photo
          id={images[active]}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`relative aspect-[4/3] overflow-hidden border ${
              index === active ? "border-gold" : "border-line"
            }`}
            aria-label={`Show photo ${index + 1}`}
          >
            <Photo id={src} alt="" fill className="object-cover" sizes="200px" />
          </button>
        ))}
      </div>
    </div>
  );
}
