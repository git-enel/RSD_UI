"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

type NavbarProps = {
  children: ReactNode;
};

const mainMenu = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/aboutus" },
  { label: "Service", href: "/service" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function BaseNavbar({ children }: NavbarProps) {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative">
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative flex items-center justify-between px-5 py-4">
          {/* Logo */}
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

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-5 pb-4 bg-white shadow-inner flex flex-col gap-4">
            {mainMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium ${
                  pathname === item.href
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => setMenuOpen(false)} // close menu after click
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="pt-24 px-6">{children}</main>
    </div>
  );
}
