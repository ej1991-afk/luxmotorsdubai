import Image, { type ImageProps } from "next/image";
import { cloudinaryLoader, hasCloudinary } from "@/lib/cdn";

type PhotoProps = Omit<ImageProps, "src"> & {
  id: string;
};

export function Photo({ id, alt, ...props }: PhotoProps) {
  if (hasCloudinary()) {
    return <Image {...props} alt={alt} src={id} loader={cloudinaryLoader} />;
  }

  return <Image {...props} alt={alt} src={`/photos/${id}.webp`} />;
}
