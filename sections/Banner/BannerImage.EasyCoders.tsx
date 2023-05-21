import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  description: string;
  image: {
    url: ImageType;
    textAlt: string;
  };
  button?: {
    title: string;
  };
}

export default function BannerImage(
  { title, description, button, image }: Props,
) {
  return (
    <div className="flex gap-6 mx-auto w-full h-full pt-2 pb-12">
      <section className="relative w-full">
        <div className="relative">
          <Image
            className="w-full object-contain aspect-auto"
            src={image.url}
            alt={image.textAlt}
            width={600}
            height={600}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            preload
          />
        </div>

        <div className="absolute container px-12 lg:pl-36 top-0 left-0 flex flex-col gap-3 items-start justify-start pt-[12%] lg:pt-[39%] z-20 max-w-sm lg:max-w-lg">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-wide leading-9">
            {title}
          </h1>
          <p className="text-md lg:text-lg leading-6 tracking-wide">
            {description}
          </p>
          {button && (
            <button className="py-2 px-4 block items-center justify-center bg-black hover:bg-yellow-500 rounded-md font-bold text-white">
              {button.title}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
