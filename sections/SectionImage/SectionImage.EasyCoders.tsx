import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  subscription: string;
  description: string;
  image: {
    url: ImageType;
    textAlt: string;
  };
}

export default function SectionImage(
  { title, subscription, description, image }: Props,
) {
  return (
    <div class="flex flex-col lg:flex-row items-center justify-center gap-6 container px-4 lg:px-0 mx-auto">
      <div>
        <Image
          className="w-full"
          src={image.url}
          alt={image.textAlt}
          width={700}
          height={700}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          preload
        />
      </div>

      <div class="flex flex-col gap-3">
        <h1 class="font-bold text-2xl lg:text-6xl">{title}</h1>
        <span class="font-bold text-xl lg:text-4xl">{subscription}</span>
        <span class="leading-5 tracking-wide text-md lg:text-lg text-justify">
          {description}
        </span>
      </div>
    </div>
  );
}
