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
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group hover:scale-110 transition-transform duration-300 overflow-visible"
        >
          {/* Glow Effect Filter */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left Vertical Bar - Segmented */}
          <path
            d="M7 8H12V26H7V8Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="currentColor"
            className="group-hover:fill-white/90 transition-colors animate-draw-fill"
            style={{ animationDelay: "0ms" }}
          />
          <path
            d="M7 28H12V32H7V28Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="currentColor"
            className="group-hover:translate-y-0.5 transition-transform animate-draw-fill"
            style={{ animationDelay: "100ms" }}
          />

          {/* Right Vertical Bar - Segmented */}
          <path
            d="M28 8H33V26H28V8Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="currentColor"
            className="group-hover:fill-white/90 transition-colors animate-draw-fill"
            style={{ animationDelay: "200ms" }}
          />
          <path
            d="M28 28H33V32H28V28Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="currentColor"
            className="group-hover:translate-y-0.5 transition-transform animate-draw-fill"
            style={{ animationDelay: "300ms" }}
          />

          {/* Center V Shape - Animated */}
          <path
            d="M12 8 L20 20 L28 8"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="square"
            fill="none"
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] animate-draw-fill"
            style={{ animationDelay: "400ms", fill: "none" }} // Keep fill none for this path
          />

          {/* Center Activity Dot - Pulsing */}
          <circle
            cx="20"
            cy="28"
            r="2.5"
            fill="currentColor"
            className="animate-pulse animate-draw-fill"
            style={{ filter: "url(#glow)", animationDelay: "600ms" }}
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
                  ? "px-5 py-2 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg border border-foreground/10"
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
                  ? "w-[80%] text-center px-6 py-3 rounded-2xl bg-foreground text-background font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all border border-foreground/10 shadow-lg"
                  : "text-lg font-medium hover:opacity-70 transition-colors"
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
