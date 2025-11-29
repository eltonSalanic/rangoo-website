"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shows", label: "Shows" },
    { href: "/music", label: "Music" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-western-darkBrown/95 backdrop-blur-sm border-b-4 border-western-amber shadow-lg overflow-hidden">
      {/* scattered tattoo images container */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/assets/Butterfly.webp"
          alt=""
          width={60}
          height={60}
          className="absolute top left-10 w-12 h-12 hover:rotate-45 transition-transform"
        />
        <Image
          src="/assets/Horse.webp"
          alt=""
          width={50}
          height={50}
          className="absolute top-12 left-1/3 w-10 h-10 rotate-45 hover:rotate-1 transition-transform"
        />
        <Image
          src="/assets/8Ball.webp"
          alt=""
          width={50}
          height={50}
          className="absolute top-3 right-1/4 w-10 h-10 hover:rotate-1 transition-transform"
        />
        <Image
          src="/assets/Hibiscus.webp"
          alt=""
          width={60}
          height={60}
          className="absolute top-8 right-16 w-12 h-12 hover:rotate-[180deg] transition-transform"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform">
            <span className="ml-3 text-2xl font-display text-western-amber">
              RANGOO
            </span>
          </Link>

          {/* desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-western-beige hover:text-western-amber transition-colors duration-200 font-semibold text-lg relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-western-amber group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* mobile nav */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-western-beige hover:text-western-amber transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile nav menun */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-western-beige hover:text-western-amber transition-colors duration-200 font-semibold text-lg px-4 py-2 hover:bg-western-brown/20 rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
