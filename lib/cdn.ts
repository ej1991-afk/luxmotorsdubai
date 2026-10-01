const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function hasCloudinary() {
  return Boolean(cloudName);
}

/** Logos and icons. SVG on Cloudinary when configured, otherwise the local .svg file. */
export function svgUrl(name: "mark" | "menu" | "close" | "prev" | "next" | "whatsapp") {
  if (cloudName) {
    return `https://res.cloudinary.com/${cloudName}/image/upload/aurelian/brand/${name}.svg`;
  }
  return `/brand/${name}.svg`;
}

/**
 * Photos. The loader asks Cloudinary for a .webp derivative.
 * `src` is the photo id, for example photo-1492144534655-ae79c964c9d7.
 */
export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const q = quality ?? 75;
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_webp,q_${q},c_limit,w_${width}/aurelian/photos/${src}.webp`;
}
