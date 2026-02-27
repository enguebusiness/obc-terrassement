"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { name, phone, phoneRaw, nav } = siteConfig;

  return (
    <nav
      className="sticky top-0 z-50 bg-bg-white/95 backdrop-blur-md border-b border-border"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${name} - Accueil`}>
            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs">OBC</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-navy font-bold text-sm leading-none">OBC</span>
              <span className="text-orange font-bold text-sm leading-none">Maçonnerie</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-light hover:text-navy text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <a
              href={`tel:${phoneRaw}`}
              className="inline-flex items-center gap-2 bg-orange text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-hover transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-light hover:text-navy transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border py-4 space-y-1">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-text-light hover:text-navy text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href={`tel:${phoneRaw}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-orange text-white font-bold text-sm px-5 py-3 rounded-xl mt-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
