import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const {
    name,
    dirigeant,
    phone,
    phoneRaw,
    address,
    siren,
    footerServicesNav,
    footerMainNav,
    footerLegalNav,
  } = siteConfig;

  return (
    <footer className="bg-navy-dark text-white">
      {/* Top band */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-orange flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-xs tracking-wider">OBC</span>
                </div>
                <div className="flex flex-col leading-none gap-0.5">
                  <span className="text-white font-black text-sm tracking-[0.18em] uppercase">OBC</span>
                  <span className="text-orange-light font-bold text-xs tracking-[0.18em] uppercase">Maçonnerie</span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                {dirigeant}, maçon expert en construction de maison, rénovation et gros œuvre dans le Nord&nbsp;(59).
              </p>
              <a
                href={`tel:${phoneRaw}`}
                className="inline-flex items-center gap-2 text-orange font-bold text-base hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>
              <p className="text-white/30 text-xs mt-2">{address}</p>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-4 h-px bg-orange" />
                Services
              </h4>
              <ul className="space-y-2.5">
                {footerServicesNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/45 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="md:col-span-2">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-4 h-px bg-orange" />
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {footerMainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/45 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Légal + CTA */}
            <div className="md:col-span-3">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-4 h-px bg-orange" />
                Légal
              </h4>
              <ul className="space-y-2.5 mb-8">
                {footerLegalNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/45 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn btn-fill text-xs uppercase tracking-widest px-5 py-3 w-full justify-center"
              >
                <span>Devis gratuit</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/25 text-xs">
          <p>
            &copy; {new Date().getFullYear()} {name} &mdash; {dirigeant}{" "}
            &middot; SIREN {siren.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
          </p>
          <p className="text-center">
            Orchies &middot; Mouchin &middot; Douai &middot; Valenciennes &middot; Saint-Amand-les-Eaux
          </p>
        </div>
      </div>
    </footer>
  );
}
