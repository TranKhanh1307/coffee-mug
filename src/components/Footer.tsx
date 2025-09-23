import { twMerge } from "tailwind-merge";
import { followLinks, menuLinks } from "../lib/constants";
import type { Link } from "../lib/definition";

export default function Footer() {
  return (
    <footer className="mx-auto mt-32 grid max-w-[940px] gap-10 text-center md:grid-cols-2">
      <NavSection className="md:order-1">
        <h2 className="mb-4 text-2xl font-bold">CoffeeStyle.</h2>

        <p className="text-gray-500">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>

        <p className="text-gray-300 hover:text-amber-700">
          CoffeeStyle Inc. © 1996
        </p>
      </NavSection>

      <NavSection title="Menu" className="md:order-2">
        <NavLinks links={menuLinks} />
      </NavSection>

      <NavSection title="Follow us" className="md:order-4">
        <NavLinks links={followLinks} />
      </NavSection>

      <NavSection title="Contact us" className="md:order-3">
        <p className="text-gray-500">We’re Always Happy to Help</p>
        <a
          href="mailto:us@coffeestyle.io"
          className="block text-3xl hover:text-amber-700"
        >
          us@coffeestyle.io
        </a>
        <a href="" className="text-sm text-gray-500 hover:text-amber-700">
          Powered by Webflow
        </a>
      </NavSection>
    </footer>
  );
}

function NavLinks({ links }: { links: Link[] }) {
  return links.map((link) => (
    <ul key={link.label}>
      <li className="text-gray-500">
        <a className="hover:text-amber-700" href={link.href}>
          {link.label}
        </a>
      </li>
    </ul>
  ));
}

function NavSection({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("", className)}>
      {title && <h3 className="mb-4 text-gray-500 uppercase">{title}</h3>}
      {children}
    </div>
  );
}
