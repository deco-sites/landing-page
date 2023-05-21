export interface Props {
  title: string;
  products?: Array<{
    title: string;
    description: string;
    image?: string;
    hasButton?: boolean;
  }>
}

export default function Card({ products, title }: Props) {
  return (
    <div class="flex flex-col gap-12 items-start justify-start h-[75vh] lg:h-[85vh] mx-auto px-4 py-12">
      <h1 class="font-bold text-2xl tracking-wide leading-5">{title}</h1>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {products?.map((product) => (
          <section key={product.title} class="flex flex-col justify-start max-w-sm group relative">
            <img src={product.image} alt={`${product.image} photo`} loading="eager" decoding="async" class="object-cover rounded-lg" />

            <div class="flex flex-col gap-1 pb-1 px-1 bg-white rounded-t-xl group-hover:-translate-y-24 transition-all duration-700">
              <h1 class="text-2xl font-bold tracking-wide pt-3">{product.title}</h1>
              <span class="hidden group-hover:flex max-w-[85%] leading-5 text-sm tracking-widest pb-3">{product.description}</span>

              {product.hasButton && (
                <button class="w-full py-2 hidden group-hover:block items-center justify-center bg-black hover:bg-yellow-500 rounded-md font-bold text-white">
                  Ver mais
                </button>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
