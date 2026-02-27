"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { phone, phoneRaw, nav } = siteConfig;
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 bg-bg-white border-b border-border"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="OBC Maçonnerie — Accueil">
            <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
              <span className="text-white font-black text-xs tracking-wider">OBC</span>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-navy font-black text-sm tracking-[0.18em] uppercase">OBC</span>
              <span className="text-orange font-bold text-xs tracking-[0.18em] uppercase">Maçonnerie</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {nav.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-xs font-bold uppercase tracking-[0.14em] transition-colors pb-0.5 ${
                    active ? "text-orange active" : "text-text-light hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right — phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center gap-2 text-navy font-bold text-sm hover:text-orange transition-colors"
            >
              <svg className="w-4 h-4 text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>
            <Link
              href="/contact"
              className="btn btn-fill text-xs uppercase tracking-widest px-5 py-2.5"
            >
              <span>Devis gratuit</span>
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-navy transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <div className={`w-5 space-y-1.5 transition-all ${open ? "opacity-0 scale-75" : ""}`}>
              {!open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border pb-5">
            <div className="pt-2">
              {nav.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between text-xs font-bold uppercase tracking-widest py-3.5 px-1 border-b border-border-light transition-colors ${
                      active ? "text-orange" : "text-text-light hover:text-navy"
                    }`}
                  >
                    {link.label}
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-orange" />}
                  </Link>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${phoneRaw}`}
                className="flex items-center gap-2 text-navy font-bold text-sm"
              >
                <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-fill text-xs uppercase tracking-widest px-5 py-3.5 w-full justify-center"
              >
                <span>Demander un devis gratuit</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
