import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavLinks from "./components/NavLinks";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "👋 Tirmidzi Ahmad — Frontend Web Developer",
    template: "%s | Tirmidzi Ahmad",
  },
  description:
    "Tirmidzi Ahmad is an Indonesian fullstack web developer specializing in React, Next.js, TypeScript, and Express. Explore projects, tech stack, and get in touch.",
  keywords: [
    "Tirmidzi Ahmad",
    "web developer",
    "fullstack developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "portfolio",
    "Indonesia",
    "frontend developer",
  ],
  authors: [{ name: "Tirmidzi Ahmad" }],
  creator: "Tirmidzi Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Tirmidzi Ahmad Portfolio",
    title: "Tirmidzi Ahmad — Web Developer Portfolio",
    description:
      "Indonesian fullstack web developer specializing in React, Next.js, TypeScript, and Express. Explore projects and get in touch.",
    images: [
      {
        url: "/me.png",
        width: 400,
        height: 400,
        alt: "Tirmidzi Ahmad — Frontend Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tirmidzi Ahmad — Web Developer Portfolio",
    description:
      "Indonesian fullstack web developer specializing in React, Next.js, TypeScript, and Express.",
    images: ["/me.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'dark' || !theme) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased flex flex-col justify-center items-center min-h-screen">
        {/* Navigation */}
        <NavLinks />

        {/* content */}
        <div className="flex-grow flex flex-col justify-center items-center z-30 px-5 md:px-10">
          {children}
        </div>

        {/* footer */}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
