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
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">OBC</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base leading-none">OBC</span>
                <span className="text-orange-light font-bold text-base leading-none">Maçonnerie</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-xs">
              {dirigeant}, maçon expert en construction de maison, rénovation et gros
              œuvre dans le Nord. De la première pierre à la remise des clés.
            </p>
            <a
              href={`tel:${phoneRaw}`}
              className="inline-flex items-center gap-2 text-orange-light font-bold text-base hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>
            <p className="text-white/40 text-xs mt-2">{address}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2">
              {footerServicesNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + Légal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerMainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm mb-3 mt-5 uppercase tracking-wide">
              Légal
            </h4>
            <ul className="space-y-2">
              {footerLegalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {name} &mdash; {dirigeant} &middot; SIREN{" "}
            {siren.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
          </p>
          <p className="text-white/40 text-xs text-center md:text-right">
            Orchies &middot; Mouchin &middot; Douai &middot; Valenciennes &middot;
            Saint-Amand-les-Eaux &mdash;{" "}
            <span className="text-white/30">Site réalisé par HookLab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
