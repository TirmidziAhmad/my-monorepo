import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavLinks from "./components/NavLinks";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tirmidzi Ahmad 👋",
  description: "Miji's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen">
        {/* Navigation */}
        <NavLinks />

        {/* content */}
        <div className="flex-grow flex flex-col justify-center items-center z-30 px-5 md:px-10">
          {children}
        </div>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
