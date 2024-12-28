"use client";

import React from "react";
import Link from "next/link";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

const AdSenseBanner = () => {
  useEffect(() => {
    try {
      // Reinitialize Ads by Google if needed
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error: ", e);
    }
  }, []);
}

export function Navbar() {
  return (
    <div>
    <header className="h-fit w-full">
      <nav
        className={cn(
          "z-50",
          "flex h-[3.5rem] px-4",
          "w-full items-center border-b bg-accent/20"
        )}
      >
        
        
        <MobileNav className="md:hidden" />
        <div className="gs-sitename select-none text-xl md:block">
          iGram Saver
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
      
    </header>

    <ins className="text-center adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-2008420195999107"
     data-ad-slot="8779273451"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
     </div>
  );
}

export function Footer() {
  return (
    <footer className="h-8 w-full bg-background/50 text-center text-secondary-foreground">
      <div className="flex items-center justify-between border-t border-input px-4 py-2">
        <div aria-label="Disclaimer">
          <p>© 2024 <Link href="/">iGram Saver</Link></p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <span aria-hidden="true" className="mx-2 select-none">
            |
          </span>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}