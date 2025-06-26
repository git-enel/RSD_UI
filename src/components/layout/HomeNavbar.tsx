"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


const mainMenu = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/aboutus" },
  { label: "Service", href: "/service" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

const rightMenu = [
  { label: "Contact", href: "/contact" },
  { label: "Get In Touch", href: "/getintouch" },
];

export default function ContentNavbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="absolute top-6 right-10 z-20 flex gap-6">
        {rightMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-base font-medium hover:text-gray-900 ${
              pathname === item.href
                ? "text-gray-900 font-semibold"
                : "text-gray-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <header className="flex w-full items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-3">
          <Image
            src="/asset/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-gray-800">RSD</span>
        </div>

        <nav className="flex items-center gap-8 mx-auto">
          {mainMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium hover:text-gray-900 ${
                pathname === item.href
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="w-[96px]" />
      </header>
    </>
  );
}
