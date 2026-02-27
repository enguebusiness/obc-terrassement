import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/marketing/ContactForm";
import {
  getSiteConfig,
  getServices,
  getTestimonials,
  getFAQ,
  getValues,
  getPartners,
  getRealisations,
} from "@/lib/content";
import type { Service, Testimonial, FAQItem } from "@/types/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: config.seo.title,
    description: config.seo.description,
    alternates: { canonical: config.url },
  };
}

function ServiceCard({ service }: { service: Service }) {
  const href = service.slug === "conseil" ? "/contact" : `/${service.slug}`;
  return (
    <Link
      href={href}
      className="group block bg-bg-white border border-border rounded-2xl p-6 hover:border-orange hover:shadow-lg transition-all duration-300 card-hover"
    >
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-orange transition-colors">
        {service.title}
      </h3>
      <p className="text-text-light text-sm leading-relaxed">{service.shortDescription}</p>
      <div className="mt-4 flex items-center gap-1 text-orange text-sm font-semibold">
        En savoir plus
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < note ? "text-orange" : "text-border"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const serviceLabel: Record<string, string> = {
    "construction-maison": "Construction de maison",
    renovation: "Rénovation",
    assainissement: "Assainissement",
    "creation-acces": "Création d'accès",
    demolition: "Démolition",
  };
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
      <StarRating note={t.rating} />
      <p className="text-white/80 text-sm leading-relaxed mt-4 flex-1 italic">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-5 pt-4 border-t border-white/10">
        <p className="text-white font-semibold text-sm">{t.name}</p>
        <p className="text-white/40 text-xs">{t.ville} — {serviceLabel[t.service] ?? t.service}</p>
      </div>
    </div>
  );
}

function FAQAccordion({ item }: { item: FAQItem }) {
  return (
    <details className="group bg-bg-white border border-border rounded-2xl overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-navy hover:text-orange transition-colors list-none">
        {item.question}
        <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-5 text-text-light text-sm leading-relaxed border-t border-border-light pt-4">
        {item.answer}
      </div>
    </details>
  );
}

export default async function HomePage() {
  const [config, services, testimonials, faqItems, values, partners, realisations] =
    await Promise.all([
      getSiteConfig(),
      getServices(),
      getTestimonials(),
      getFAQ(),
      getValues(),
      getPartners(),
      getRealisations(),
    ]);

  const { hero, zones, zoneDescription, partnersTitle, partnersMessage, phone, phoneRaw } = config;

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* ── SECTION 1 — HERO ── */}
      <section className="relative bg-navy overflow-hidden texture-dark pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Accent diagonal brique */}
        <div className="hero-accent" />
        <div className="hero-accent-line" style={{ right: "30%" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-orange rounded-full" />
            <span className="text-white/70 text-xs font-medium tracking-wide uppercase">{hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6">
            Maçon &amp;<br />
            <span className="text-orange">Constructeur</span><br />
            <span className="text-white/60 text-3xl md:text-4xl font-bold tracking-normal">dans le Nord (59)</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">{hero.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-8 py-4 rounded-xl text-base transition-colors pulse-glow">
              {hero.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/realisations" className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/8 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors border border-white/25">
              {hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto border-t border-white/10 pt-10">
            {hero.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-orange animate-stat-glow">{s.val}</div>
                <div className="text-white/40 text-xs mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — NOS SERVICES ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Ce que nous faisons</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Nos services de maçonnerie</h2>
              <p className="text-text-light mt-3 max-w-xl mx-auto">
                De la construction neuve à la rénovation, Benoît Colin et son équipe prennent en charge tous vos travaux de gros œuvre dans le Nord.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} direction="up" delay={i * 80}>
                <ServiceCard service={s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — POURQUOI CHOISIR OBC ── */}
      <section className="py-20 md:py-24 bg-stone-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Notre différence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Pourquoi choisir OBC Maçonnerie ?</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} direction="up" delay={i * 100}>
                <div className="bg-bg-white rounded-2xl p-6 border border-border text-center h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-navy font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — RÉSEAU PARTENAIRES ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Un réseau solide</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">{partnersTitle}</h2>
              <p className="text-text-light mt-4 max-w-xl mx-auto">{partnersMessage}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <ScrollReveal key={p.label} direction="up" delay={i * 60}>
                <div className="bg-bg-white border border-border rounded-xl p-4 text-center hover:border-orange hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <span className="text-navy font-semibold text-sm">{p.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-10 bg-navy rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white text-base md:text-lg font-medium">
                Un seul interlocuteur pour coordonner l&apos;ensemble de votre projet — de la démolition à la remise des clés.
              </p>
              <Link href="/partenaires" className="inline-flex items-center gap-2 mt-4 text-orange-light hover:text-white font-semibold transition-colors">
                Découvrir notre réseau
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 5 — ZONE D'INTERVENTION ── */}
      <section className="py-20 md:py-24 bg-stone-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-sm font-semibold uppercase tracking-widest">Secteur d&apos;activité</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Nous intervenons dans toute la région</h2>
            <p className="text-text-light max-w-xl mx-auto mb-10">
              OBC Maçonnerie intervient dans un rayon de {zoneDescription}.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {zones.map((v, i) => (
              <ScrollReveal key={v} direction="up" delay={i * 50}>
                <span className="inline-flex items-center gap-1.5 bg-bg-white border border-border text-navy font-medium text-sm px-4 py-2 rounded-full hover:border-orange hover:shadow-sm transition-all">
                  <span className="text-orange">📍</span>{v}
                </span>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-text-light text-sm italic">
              Et dans toutes les communes à {zoneDescription} — contactez-nous pour vérifier votre zone.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Demander un devis dans ma commune
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 6 — RÉALISATIONS ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Nos chantiers</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Aperçu de nos réalisations</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realisations.map((r, i) => {
              const colors = ["bg-navy", "bg-stone", "bg-orange"];
              return (
                <ScrollReveal key={r.title} direction="up" delay={i * 100}>
                  <div className="bg-bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all group card-hover">
                    <div className={`${colors[i % colors.length]} h-44 flex items-center justify-center`}>
                      <span className="text-white/20 text-8xl font-bold">{i + 1}</span>
                    </div>
                    <div className="p-5">
                      <span className="inline-block bg-bg-muted text-text-light text-xs font-semibold px-2 py-1 rounded-full mb-2">{r.ville}</span>
                      <h3 className="text-navy font-bold text-base mb-1 group-hover:text-orange transition-colors">{r.title}</h3>
                      <p className="text-text-light text-sm">{r.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal direction="up" delay={150}>
            <div className="text-center mt-8">
              <Link href="/realisations" className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                Voir toutes nos réalisations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7 — TÉMOIGNAGES ── */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Ce qu&apos;ils en disent</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Témoignages clients</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} direction="up" delay={i * 100}>
                <TestimonialCard t={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — FAQ ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Questions fréquentes</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">FAQ</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqItems.map((f, i) => (
              <ScrollReveal key={f.question} direction="up" delay={i * 60}>
                <FAQAccordion item={f} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — FORMULAIRE DE CONTACT ── */}
      <section className="py-20 md:py-24 bg-stone-bg" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Devis gratuit</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Parlez-nous de votre projet</h2>
              <p className="text-text-light mt-3">
                Réponse sous 24h — ou appelez directement Benoît au{" "}
                <a href={`tel:${phoneRaw}`} className="text-orange font-bold hover:underline">{phone}</a>
              </p>
            </div>
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
