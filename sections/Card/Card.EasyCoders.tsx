import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  products?: Array<{
    title: string;
    description: string;
    image: {
      url: ImageType;
      textAlt: string;
    };
    price: number;
    hasButton?: boolean;
  }>;
}

export default function Card({ products, title }: Props) {
  return (
    <div class="flex flex-col lg:flex-row">
      <div className="flex flex-col gap-12 container justify-center h-screen mx-auto px-4 lg:py-12">
        <h1 className="font-bold text-2xl tracking-wide leading-5">{title}</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {products?.map((product) => (
            <section
              key={product.title}
              className="relative flex flex-col justify-start max-w-sm"
            >
              <div className="group">
                <div className="relative">
                  <Image
                    className="w-full object-cover"
                    src={product.image.url}
                    alt={product.image.textAlt}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                    preload
                  />

                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>

                <div className="flex flex-col gap-1 pb-1 px-1 bg-white rounded-t-xl group-hover:-translate-y-1 transition-transform duration-300">
                  <h1 className="text-2xl font-bold tracking-wide pt-3">
                    {product.title}
                  </h1>

                  <span className="hidden group-hover:flex max-w-[85%] leading-5 text-sm tracking-widest pb-3">
                    {product.description}
                  </span>

                  <span className="hidden group-hover:flex max-w-[85%] leading-5 text-2xl font-bold tracking-widest pb-3">
                    R$ {product.price}
                  </span>

                  {product.hasButton && (
                    <button className="w-full py-2 hidden group-hover:block items-center justify-center bg-black hover:bg-yellow-500 rounded-md font-bold text-white">
                      Ver mais
                    </button>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
