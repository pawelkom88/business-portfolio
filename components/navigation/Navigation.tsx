import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";

export const links = [
  { id: 1, href: "/", name: "Projects" },
  { id: 2, href: "/", name: "About" },
  { id: 3, href: "/", name: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between py-6 px-4">
      <Link href="/">
        <Image width={110} src={logo} alt="code flow logo" />
        <span className="sr-only">Home</span>
      </Link>

      <ul className="flex items-center gap-2 text-sm font-medium ">
        {links.map(link => {
          return (
            <li key={link.href} className="hidden lg:block">
              <Link className="rounded-lg px-3 py-2" href="/">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
