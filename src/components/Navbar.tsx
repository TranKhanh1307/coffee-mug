import clsx from "clsx";
import { cartIcon } from "../lib/icons";
import { useState } from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "Our Products", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
  { name: "StyleGuide", href: "#" },
];

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex items-center justify-center gap-16 py-4">
      <a className="mr-16 text-2xl font-semibold" href="#">
        CoffeeStyle.
      </a>
      <nav className="flex gap-6">
        {links.map((link) => (
          <NavItem
            key={link.name}
            href={link.href}
            active={link.name === "Home"}
          >
            {link.name}
          </NavItem>
        ))}
      </nav>
      <NavItem href={"#"} className="flex items-center gap-2">
        <span className="size-5">{cartIcon}</span>
        <span>Cart</span>
        <span className="rounded-full bg-gray-500 px-2 text-white">0</span>
      </NavItem>
    </div>
  );
}

function NavItem({
  href,
  className,
  children,
  active,
}: {
  href: string;
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={clsx(
        "relative text-sm text-gray-500 uppercase hover:text-black",
        "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-orange-300 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100",
        { "text-black after:scale-x-100": active },
        className,
      )}
    >
      {children}
    </a>
  );
}
