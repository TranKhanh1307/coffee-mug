import clsx from "clsx";
import { barsIcon, cartIcon } from "../lib/icons";
import { useState } from "react";
import { menuLinks } from "../lib/constants";

export default function Navbar() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <nav className="relative flex items-center justify-center gap-6 py-4">
      {/* Logo */}
      <a href="#" className="mr-6 text-2xl font-bold">
        CoffeeStyle.
      </a>

      {/* Links */}
      <ul
        className={clsx(
          "absolute top-full left-0 flex w-full flex-col items-center overflow-hidden bg-white shadow-md transition-all duration-500 ease-in-out md:static md:flex md:max-h-fit md:w-auto md:flex-row md:gap-6 md:shadow-none",
          isExpand ? "max-h-96" : "max-h-0",
        )}
      >
        {menuLinks.map((link) => (
          <li key={link.label} className="py-2">
            <NavItem href={link.href}>{link.label}</NavItem>
          </li>
        ))}
      </ul>

      {/* Cart */}
      <NavItem href="#" className="ml-3 flex items-center gap-2">
        <span className="size-5">{cartIcon}</span>
        <span>Cart</span>
        <span className="rounded-full bg-gray-500 px-2 text-white">0</span>
      </NavItem>

      {/* Mobile Menu Button */}
      <button
        className="size-5 md:hidden"
        onClick={() => setIsExpand(!isExpand)}
      >
        {barsIcon}
      </button>
    </nav>
  );
}

function NavItem({
  children,
  className,
  href,
}: {
  children?: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className={clsx(
        "relative text-sm text-gray-500 uppercase after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-orange-400 after:transition-all after:duration-300 after:ease-in-out hover:text-black hover:after:scale-x-100",
        className,
      )}
    >
      {children}
    </a>
  );
}
