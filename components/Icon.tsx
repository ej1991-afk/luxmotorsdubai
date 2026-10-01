import { svgUrl } from "@/lib/cdn";

export function Icon({
  name,
  className,
  alt = "",
}: {
  name: "mark" | "menu" | "close" | "prev" | "next" | "whatsapp";
  className?: string;
  alt?: string;
}) {
  return (
    // SVG stays vector. next/image would rasterize it.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={svgUrl(name)} alt={alt} className={className} />
  );
}
