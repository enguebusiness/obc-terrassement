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

// Services dérivés de siteConfig (sans "conseil" qui redirige vers /contact)
const services = siteConfig.footerServicesNav.map((s) => {
  const found = siteConfig.services.find(
    (sc) => sc.title === s.label || `/${sc.slug}` === s.href
  );
  return { icon: found?.icon ?? "🔧", label: s.label, href: s.href };
});

export default function LocalSEOPage({
  ville,
  departement = "Nord (59)",
  servicesPrincipaux,
  description,
  texteIntro,
  texteLocal,
  distanceMouchin,
}: LocalSEOPageProps) {
  const { phone, phoneRaw, address } = siteConfig;

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-orange">📍</span>
                <span className="text-white/60 text-sm">{ville} — {departement}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Maçon {ville} — Construction & Rénovation
              </h1>
              <p className="text-white/70 text-lg mb-8">{texteIntro}</p>
              {distanceMouchin && (
                <p className="text-white/40 text-sm mb-6 italic">
                  {distanceMouchin} de Mouchin (siège OBC Maçonnerie)
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors pulse-glow">
                  Demander un devis gratuit
                </Link>
                <a href={`tel:${phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors border border-white/20">
                  {phone}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">
              Nos services à {ville}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 60}>
                <Link
                  href={s.href}
                  className={`group block bg-bg-white border rounded-xl p-4 text-center transition-all hover:shadow-md ${
                    servicesPrincipaux.includes(s.label)
                      ? "border-orange"
                      : "border-border hover:border-orange"
                  }`}
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-navy font-semibold text-xs group-hover:text-orange transition-colors leading-snug">
                    {s.label}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Texte SEO local */}
      <section className="py-14 bg-stone-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-5">
              OBC Maçonnerie intervient à {ville}
            </h2>
            <div className="text-text-light text-sm leading-relaxed space-y-4">
              {texteLocal.split("\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 bg-bg-white border border-border rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">OBC</span>
                </div>
                <div>
                  <p className="text-navy font-bold text-sm">Benoît Colin — OBC Maçonnerie</p>
                  <p className="text-text-muted text-xs">{address}</p>
                  <a href={`tel:${phoneRaw}`} className="text-orange font-bold text-sm hover:underline">
                    {phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-14 bg-bg">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">
              Votre projet à {ville}
            </h2>
            <p className="text-text-light text-sm text-center mb-8">Devis gratuit — Réponse sous 24h</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
