import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li className="group flex items-center">
      <a href={href} className="px-4 py-3">
        <span className="group-hover:underline">
          {label}
        </span>
      </a>

      {children && children.length > 0 && (
        <div
          className="fixed hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
          style={{ top: "0px", left: "0px", marginTop: headerHeight }}
        >
          {image?.src && (
            <Image
              className="p-6"
              src={image.src}
              alt={image.alt}
              width={300}
              height={332}
              loading="lazy"
            />
          )}
          <ul className="flex items-start justify-center gap-6">
            {children.map((node) => (
              <li className="p-6" key={node.href}>
                <a className="hover:underline" href={node.href}>
                  <span>{node.label}</span>
                </a>

                {node.children && node.children.length > 0 && (
                  <ul className="flex flex-col gap-1 mt-4">
                    {node.children.map((leaf) => (
                      <li key={leaf.href}>
                        <a className="hover:underline" href={leaf.href}>
                          <span className="text-xs">{leaf.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavItem;
