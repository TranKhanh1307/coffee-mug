import { twMerge } from "tailwind-merge";
import { followLinks, menuLinks } from "../lib/constants";
import type { Link } from "../lib/definition";

export default function Footer() {
  return (
    <footer className="mx-auto my-32 flex flex-col justify-center gap-10 text-center md:flex-row md:text-left">
      {/* Brand Info */}
      <NavSection>
        <h2 className="mb-4 text-2xl font-bold">CoffeeStyle.</h2>
        <p className="text-gray-500">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <p className="mt-24 text-gray-500 hover:text-amber-700">
          CoffeeStyle Inc. © 1996
        </p>
      </NavSection>

      {/* Menu */}
      <NavSection title="Menu">
        <NavLinks links={menuLinks} />
      </NavSection>

      {/* Social */}
      <NavSection title="Follow us">
        <NavLinks links={followLinks} />
      </NavSection>

      {/* Contact */}
      <NavSection title="Contact us">
        <p className="text-gray-500">We’re Always Happy to Help</p>
        <a
          href="mailto:us@coffeestyle.io"
          className="block text-3xl hover:text-amber-700"
        >
          us@coffeestyle.io
        </a>
        <a
          href="https://github.com/TranKhanh1307/coffee-mug"
          className="mt-24 inline-block text-sm text-gray-500 hover:text-amber-700"
        >
          Powered by TranKhanhDev
        </a>
      </NavSection>
    </footer>
  );
}

function NavLinks({ links, className }: { links: Link[]; className?: string }) {
  return (
    <ul className={twMerge("space-y-2", className)}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            className="text-gray-500 transition-colors hover:text-amber-700"
            href={link.href}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
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
      {title && <h3 className="mb-4 uppercase">{title}</h3>}
      {children}
    </div>
  );
}
