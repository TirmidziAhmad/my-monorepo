"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "/about" },
  { name: "My Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

function NavLinks() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out flex justify-between items-center border ${
        isScrolled
          ? "top-5 w-[90%] md:w-[80%] rounded-full px-8 justify-between backdrop-blur-xl bg-background/70 shadow-lg border-foreground/10 text-foreground"
          : "top-0 w-full rounded-none px-5 md:px-10 py-4 bg-transparent border-transparent text-foreground"
      }`}
    >
      {/* logo */}
      <Link className="flex items-center justify-center p-1" href="/">
        <svg
          width="36"
          height="38"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group hover:scale-110 transition-transform duration-300 overflow-visible"
        >
          <defs>
            {/* Gradient for accent glow */}
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
            </linearGradient>
            <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* T horizontal bar — extends through A's peak */}
          <line
            x1="4"
            y1="6"
            x2="32"
            y2="6"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-draw-fill group-hover:drop-shadow-[0_0_6px_currentColor] transition-all duration-300"
            style={{ animationDelay: "0ms" }}
          />

          {/* A legs — descend from the T stem center */}
          <path
            d="M7 30L18 6L29 30"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="animate-draw-fill group-hover:drop-shadow-[0_0_6px_currentColor] transition-all duration-300"
            style={{ animationDelay: "400ms" }}
          />

          {/* A crossbar */}
          <line
            x1="11"
            y1="21"
            x2="25"
            y2="21"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="animate-draw-fill group-hover:drop-shadow-[0_0_6px_currentColor] transition-all duration-300"
            style={{ animationDelay: "800ms" }}
          />

          {/* Accent underline */}
          <line
            x1="7"
            y1="34"
            x2="29"
            y2="34"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-draw-fill opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            style={{ filter: "url(#logoGlow)", animationDelay: "1200ms" }}
          />
        </svg>
      </Link>

      <div className="flex items-center gap-4">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={
                item.name === "Contact"
                  ? "px-5  rounded-full bg-foreground text-background font-bold border border-foreground/10 hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                  : "flex hover:opacity-70 transition-colors"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md z-40 shadow-md flex flex-col items-center gap-6 py-8 text-foreground animate-in slide-in-from-top-5 duration-200">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={
                item.name === "Contact"
                  ? "w-[85%] text-center px-6 py-4 rounded-2xl bg-foreground text-background font-extrabold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all border-2 border-foreground/20 shadow-xl"
                  : "text-lg font-semibold hover:opacity-70 transition-colors"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavLinks;
