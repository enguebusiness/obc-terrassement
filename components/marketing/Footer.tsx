import Link from "next/link";

export default function Footer() {
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
              Benoît Colin, maçon expert en construction de maison, rénovation et gros œuvre dans le Nord. De la première pierre à la remise des clés.
            </p>
            <a
              href="tel:0674453089"
              className="inline-flex items-center gap-2 text-orange-light font-bold text-base hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 74 45 30 89
            </a>
            <p className="text-white/40 text-xs mt-2">
              221 Route de Saint-Amand, 59310 Mouchin
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              {[
                { href: "/construction-maison", label: "Construction de maison" },
                { href: "/renovation", label: "Rénovation" },
                { href: "/assainissement", label: "Assainissement" },
                { href: "/creation-acces", label: "Création d'accès" },
                { href: "/demolition", label: "Démolition" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/realisations", label: "Réalisations" },
                { href: "/partenaires", label: "Partenaires" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm mb-3 mt-5 uppercase tracking-wide">Légal</h4>
            <ul className="space-y-2">
              {[
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/confidentialite", label: "Confidentialité" },
                { href: "/cgv", label: "CGV" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
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
            &copy; {new Date().getFullYear()} OBC Maçonnerie &mdash; Benoît Colin &middot; SIREN 531 827 871
          </p>
          <p className="text-white/40 text-xs text-center md:text-right">
            Orchies &middot; Mouchin &middot; Douai &middot; Valenciennes &middot; Saint-Amand-les-Eaux &mdash;{" "}
            <span className="text-white/30">Site réalisé par HookLab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
