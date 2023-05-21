export interface Props {
  title: string;
  subtitle: string;
  hasButtons?: boolean;
}

export default function Hero({ title, subtitle, hasButtons }: Props) {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {subtitle}
            </p>
            {hasButtons && (
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-950 hover:bg-slate-900 md:py-4 md:text-lg md:px-10"
                  >
                    Iniciar
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Demonstração
                  </a>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
