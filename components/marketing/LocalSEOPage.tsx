import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/marketing/ContactForm";
import { siteConfig } from "@/lib/site-config";

interface LocalSEOPageProps {
  ville: string;
  departement?: string;
  servicesPrincipaux: string[];
  description: string;
  texteIntro: string;
  texteLocal: string;
  distanceMouchin?: string;
}

// Liens services statiques (évite toute inférence TypeScript complexe au niveau module)
const SERVICE_LINKS: { label: string; href: string }[] = [
  { label: "Construction de maison", href: "/construction-maison" },
  { label: "Rénovation", href: "/renovation" },
  { label: "Assainissement", href: "/assainissement" },
  { label: "Création d'accès", href: "/creation-acces" },
  { label: "Démolition", href: "/demolition" },
];

function Arrow() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function LocalSEOPage({
  ville,
  departement = "Nord (59)",
  servicesPrincipaux,
  description,
  texteIntro,
  texteLocal,
  distanceMouchin,
}: LocalSEOPageProps) {
  const { phone, phoneRaw, zones } = siteConfig;

  // Paragraphes du texte local (séparés par double saut de ligne)
  const paragraphes = texteLocal.split(/\n\n+/).filter(Boolean);

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy texture-dark py-16 md:py-24 relative overflow-hidden">
        <div className="hero-diagonal-panel" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Nos services
            </Link>
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              {departement}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight mb-5 max-w-3xl">
              Maçon &amp;<br />
              <span className="text-orange">{ville}</span>
            </h1>
            <p className="text-white/55 text-base md:text-lg max-w-xl mb-10">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-fill px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>Devis gratuit</span>
                <span><Arrow /></span>
              </Link>
              <a href={`tel:${phoneRaw}`} className="btn btn-outline-light px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>{phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-bg border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "Gratuit", label: "Devis + déplacement" },
              { val: "24h", label: "Délai de réponse" },
              { val: distanceMouchin ?? "< 30km", label: "de notre siège" },
              { val: "15+", label: "Ans d'expérience" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-orange pl-4">
                <div className="text-xl font-black text-orange">{s.val}</div>
                <div className="text-text-muted text-xs uppercase tracking-wider mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services à cette ville */}
      <section className="bg-navy-light py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Nos prestations à {ville}
            </span>
            <h2 className="text-white font-black text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-8">
              Services disponibles
            </h2>
            <div className="flex flex-wrap gap-3">
              {SERVICE_LINKS.map((s) => {
                const isPrimary = servicesPrincipaux.includes(s.label);
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={`group flex items-center gap-3 px-5 py-3 transition-all duration-200 border ${
                      isPrimary
                        ? "border-orange bg-orange/10"
                        : "border-white/15 hover:border-orange"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                    <span className="text-white/70 group-hover:text-white text-sm font-bold uppercase tracking-wide transition-colors">
                      {s.label}
                    </span>
                    <span className="text-orange group-hover:translate-x-1 transition-transform">
                      <Arrow />
                    </span>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Texte intro + local */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal direction="left">
              <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
                Maçonnerie à {ville}
              </span>
              <h2 className="text-navy font-black text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-6">
                Votre maçon local<br />dans le Nord
              </h2>
              <p className="text-text-light text-sm leading-relaxed mb-8">{texteIntro}</p>
              {distanceMouchin && (
                <p className="text-text-muted text-xs uppercase tracking-widest mb-6">
                  {distanceMouchin} de notre siège (Mouchin, 59310)
                </p>
              )}
              <Link href="/contact" className="btn btn-outline-dark px-7 py-3.5 text-xs uppercase tracking-widest">
                <span>Prendre contact</span>
                <span><Arrow /></span>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-5">
                {paragraphes.map((p, i) => (
                  <p key={i} className="text-text-light text-sm leading-relaxed border-l-2 border-border pl-5">
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Zone communes voisines */}
      <section className="py-12 bg-stone-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Zone d&apos;intervention
                </span>
                <h3 className="text-navy font-black text-xl uppercase tracking-tight">
                  On intervient aussi dans les communes voisines
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {zones
                  .filter((z) => z !== ville)
                  .slice(0, 6)
                  .map((z) => (
                    <span
                      key={z}
                      className="inline-flex items-center gap-1.5 border border-border text-navy text-xs font-bold px-3 py-1.5 uppercase tracking-wide hover:border-orange hover:text-orange transition-all cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange shrink-0" />
                      {z}
                    </span>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact split */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-navy texture-dark py-16 md:py-20 px-8 md:px-12 lg:px-16 relative overflow-hidden">
          <div className="hero-diagonal-panel" />
          <ScrollReveal direction="left">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Devis gratuit à {ville}
            </span>
            <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-6">
              Votre projet<br />mérite le meilleur
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              Benoît Colin se déplace gratuitement à {ville} pour évaluer votre chantier et vous remettre un devis sous 24h.
            </p>
            <a href={`tel:${phoneRaw}`} className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 border border-orange/40 flex items-center justify-center shrink-0 group-hover:border-orange group-hover:bg-orange/10 transition-all">
                <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg group-hover:text-orange transition-colors">{phone}</span>
            </a>
            <div className="space-y-3">
              {["Devis gratuit & sans engagement", "Déplacement offert", "Réponse sous 24h"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <div className="bg-stone-bg py-16 md:py-20 px-8 md:px-12 lg:px-16">
          <ScrollReveal direction="right">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
