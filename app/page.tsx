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

/* ── Arrow SVG ── */
function Arrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ── Service card — light bg, numbered ── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const href = service.slug === "conseil" ? "/contact" : `/${service.slug}`;
  return (
    <Link
      href={href}
      className="group block bg-white border border-border p-8 hover:border-orange hover:shadow-xl transition-all duration-300"
    >
      <div className="text-5xl font-black text-border group-hover:text-orange/25 transition-colors mb-6 leading-none tracking-tighter">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-navy font-black text-base uppercase tracking-wider mb-3 group-hover:text-orange transition-colors">
        {service.title}
      </h3>
      <p className="text-text-light text-sm leading-relaxed mb-7">{service.shortDescription}</p>
      <span className="btn-arrow text-orange text-xs uppercase tracking-widest">
        Découvrir
        <span className="arrow-icon">
          <Arrow className="w-3.5 h-3.5" />
        </span>
      </span>
    </Link>
  );
}

/* ── Testimonial card — light bg ── */
function TestimonialCard({ t }: { t: Testimonial }) {
  const serviceLabel: Record<string, string> = {
    "construction-maison": "Construction",
    renovation: "Rénovation",
    assainissement: "Assainissement",
    "creation-acces": "Création d'accès",
    demolition: "Démolition",
  };
  return (
    <div className="bg-white border border-border p-7 flex flex-col h-full">
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${i < t.rating ? "text-orange" : "text-border"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-text-light text-sm leading-relaxed flex-1 italic mb-6">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="border-t border-border pt-5">
        <p className="text-navy font-bold text-sm">{t.name}</p>
        <p className="text-text-muted text-xs uppercase tracking-wider mt-0.5">
          {t.ville} — {serviceLabel[t.service] ?? t.service}
        </p>
      </div>
    </div>
  );
}

/* ── FAQ item ── */
function FAQItem({ item }: { item: FAQItem }) {
  return (
    <details className="group border-b border-border last:border-0">
      <summary className="flex items-center justify-between py-5 cursor-pointer list-none select-none">
        <span className="text-navy font-bold text-sm pr-6 group-open:text-orange transition-colors">
          {item.question}
        </span>
        <span className="faq-icon shrink-0 w-5 h-5 flex items-center justify-center text-orange">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>
      <div className="pb-5 text-text-light text-sm leading-relaxed -mt-1">
        {item.answer}
      </div>
    </details>
  );
}

/* Photos Unsplash construction / maçonnerie */
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";
const CTA_PHOTO =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80";

/* ══════════════════════════════════════════════════
   PAGE PRINCIPALE
══════════════════════════════════════════════════ */
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

  const { hero, zones, zoneDescription, phone, phoneRaw } = config;

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* ══ 1 — HERO PHOTO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Photo de fond */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url('${HERO_PHOTO}')` }}
          />
          {/* Gradient gauche → droite pour lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          {/* Gradient bas → haut pour les stats */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Contenu gauche */}
            <div className="lg:col-span-7">
              <div className="animate-hero-text-1 flex items-center gap-3 mb-7">
                <div className="w-8 h-px bg-orange" />
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em]">
                  Maçon &amp; Constructeur · Nord 59
                </span>
              </div>

              <h1 className="animate-hero-text-2 text-[clamp(2.8rem,7vw,5.5rem)] font-black text-white leading-[0.9] tracking-tight uppercase mb-8">
                Maçon<br />
                <span className="text-orange">&amp;</span>{" "}
                Construc<span className="text-white/30">teur</span>
              </h1>

              <p className="animate-hero-text-3 text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-10">
                {hero.subtitle}
              </p>

              <div className="animate-hero-text-3 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn btn-fill px-8 py-4 text-xs uppercase tracking-[0.2em]"
                >
                  <span>{hero.cta}</span>
                  <span className="relative z-10"><Arrow className="w-4 h-4" /></span>
                </Link>
                <a
                  href={`tel:${phoneRaw}`}
                  className="btn btn-outline-light px-8 py-4 text-xs uppercase tracking-[0.2em]"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{phone}</span>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 pt-10 border-t border-white/15 flex gap-10 flex-wrap">
                {hero.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl md:text-4xl font-black text-white">{s.val}</div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte glassmorphisme droite */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                <p className="text-white/55 text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                  <span className="w-5 h-px bg-orange" />
                  Pourquoi OBC Maçonnerie ?
                </p>
                <div className="space-y-6">
                  {values.slice(0, 3).map((v) => (
                    <div key={v.title} className="flex items-start gap-4">
                      <div className="w-8 h-8 border border-orange/50 bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-orange" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm uppercase tracking-wider">{v.title}</p>
                        <p className="text-white/55 text-xs mt-1 leading-relaxed">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2 — NOS SERVICES (fond blanc) ══ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <div>
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-3">
                  Nos savoir-faire
                </span>
                <h2 className="text-navy font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
                  Nos<br />services
                </h2>
              </div>
              <Link
                href="/services"
                className="btn-arrow text-text-muted hover:text-navy text-xs uppercase tracking-widest"
              >
                Tous les services
                <span className="arrow-icon"><Arrow className="w-3.5 h-3.5" /></span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} direction="up" delay={i * 60}>
                <ServiceCard service={s} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3 — BANDE CTA (photo + overlay rouge brique) ══ */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${CTA_PHOTO}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-orange/90" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <p className="text-white/70 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Devis gratuit — Réponse sous 24h
            </p>
            <h2 className="text-white font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight mb-8">
              Votre projet mérite<br />
              un artisan de confiance
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-fill-white px-8 py-4 text-xs uppercase tracking-[0.2em]"
              >
                <span>Obtenir mon devis gratuit</span>
                <span><Arrow className="w-4 h-4" /></span>
              </Link>
              <a
                href={`tel:${phoneRaw}`}
                className="btn btn-outline-light px-8 py-4 text-xs uppercase tracking-[0.2em]"
              >
                <span>Appeler Benoît — {phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 4 — RÉALISATIONS ══ */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-3">
                  Nos chantiers
                </span>
                <h2 className="text-navy font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
                  Réalisations
                </h2>
              </div>
              <Link
                href="/realisations"
                className="btn-arrow text-text-muted hover:text-navy text-xs uppercase tracking-widest"
              >
                Voir tout
                <span className="arrow-icon"><Arrow className="w-3.5 h-3.5" /></span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realisations.map((r, i) => {
              const bgColors = [
                "bg-stone-500", "bg-zinc-600", "bg-stone-600",
                "bg-zinc-500", "bg-stone-700", "bg-zinc-700",
              ];
              return (
                <ScrollReveal key={r.title} direction="up" delay={i * 80}>
                  <div className="realisation-card relative overflow-hidden aspect-[4/3] cursor-pointer group">
                    <div className={`${bgColors[i % bgColors.length]} w-full h-full flex items-center justify-center`}>
                      <span className="text-white/10 font-black text-9xl select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Barre orange repos */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange/50 transition-all duration-500 group-hover:h-full group-hover:bg-orange/0" />
                    {/* Infos au repos */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/75 to-transparent translate-y-0 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">{r.ville}</span>
                      <h3 className="text-white font-black text-sm uppercase tracking-wide">{r.title}</h3>
                    </div>
                    {/* Overlay hover */}
                    <div className="realisation-overlay absolute inset-0 bg-orange flex flex-col justify-end p-6">
                      <span className="text-white/60 text-xs uppercase tracking-[0.2em] mb-2">{r.ville}</span>
                      <h3 className="text-white font-black text-lg uppercase tracking-tight mb-2">{r.title}</h3>
                      <p className="text-white/75 text-xs leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 5 — TÉMOIGNAGES (fond pierre clair) ══ */}
      <section className="py-20 md:py-24 bg-stone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-3">
                Ce qu&apos;ils en disent
              </span>
              <h2 className="text-navy font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
                Clients<br />satisfaits
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} direction="up" delay={i * 100}>
                <TestimonialCard t={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6 — ZONE D'INTERVENTION ══ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
                Secteur d&apos;activité
              </span>
              <h2 className="text-navy font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                On intervient<br />dans tout le Nord
              </h2>
              <p className="text-text-light text-sm leading-relaxed mb-8 max-w-md">
                OBC Maçonnerie rayonne sur {zoneDescription} autour de Mouchin — de Douai à Valenciennes, Orchies et Saint-Amand-les-Eaux.
              </p>
              <Link
                href="/contact"
                className="btn btn-outline-dark px-7 py-3.5 text-xs uppercase tracking-widest"
              >
                <span>Vérifier ma commune</span>
                <span><Arrow className="w-4 h-4" /></span>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-wrap gap-2">
                {zones.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-1.5 bg-bg border border-border text-navy font-bold text-xs px-4 py-2.5 uppercase tracking-wider hover:border-orange hover:text-orange transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-orange shrink-0" />
                    {v}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 bg-orange/8 border border-orange/25 text-orange font-bold text-xs px-4 py-2.5 uppercase tracking-wider">
                  + communes voisines
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 7 — PARTENAIRES ══ */}
      <section className="py-16 bg-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
              <div>
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Un réseau solide
                </span>
                <h2 className="text-navy font-black text-xl md:text-2xl uppercase tracking-tight">
                  Nos partenaires
                </h2>
              </div>
              <Link
                href="/partenaires"
                className="btn-arrow text-text-muted hover:text-navy text-xs uppercase tracking-widest"
              >
                Découvrir le réseau
                <span className="arrow-icon"><Arrow className="w-3.5 h-3.5" /></span>
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {partners.map((p, i) => (
              <ScrollReveal key={p.label} direction="up" delay={i * 40}>
                <div className="group bg-white border border-border p-4 text-center hover:border-orange transition-all duration-200 cursor-default">
                  <span className="text-navy font-bold text-xs uppercase tracking-wide group-hover:text-orange transition-colors leading-tight block">
                    {p.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8 — FAQ ══ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
                Questions fréquentes
              </span>
              <h2 className="text-navy font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight mb-6">
                On répond<br />à vos questions
              </h2>
              <p className="text-text-light text-sm leading-relaxed mb-8 max-w-sm">
                Pas de réponse à votre question ? Appelez directement Benoît au{" "}
                <a href={`tel:${phoneRaw}`} className="text-orange font-bold hover:underline">{phone}</a>.
              </p>
              <Link
                href="/contact"
                className="btn btn-fill px-7 py-3.5 text-xs uppercase tracking-widest"
              >
                <span>Poser ma question</span>
                <span><Arrow className="w-4 h-4" /></span>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                {faqItems.map((f) => (
                  <FAQItem key={f.question} item={f} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 9 — CONTACT SPLIT ══ */}
      <section id="contact" className="grid lg:grid-cols-2">
        {/* Gauche — sombre avec photo en arrière-plan */}
        <div className="relative bg-navy py-16 md:py-20 px-8 md:px-12 lg:px-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url('${HERO_PHOTO}')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
            }}
          />
          <div className="absolute inset-0 bg-navy/80" />
          <div className="relative z-10">
            <ScrollReveal direction="left">
              <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
                Contactez-nous
              </span>
              <h2 className="text-white font-black text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-8">
                Parlons de<br />votre projet
              </h2>

              <div className="space-y-6 mb-10">
                <a href={`tel:${phoneRaw}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 border border-orange/40 flex items-center justify-center shrink-0 group-hover:border-orange group-hover:bg-orange/10 transition-all">
                    <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Téléphone</p>
                    <p className="text-white font-bold text-lg group-hover:text-orange transition-colors">{phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 border border-white/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Siège</p>
                    <p className="text-white/70 text-sm">{config.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 border border-white/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Délai de réponse</p>
                    <p className="text-white/70 text-sm">Sous 24h — Du lundi au samedi</p>
                  </div>
                </div>
              </div>

              {/* Garanties */}
              <div className="border-t border-white/10 pt-8 grid grid-cols-2 gap-4">
                {[
                  { val: "Gratuit", label: "Devis" },
                  { val: "24h", label: "Réponse" },
                  { val: "15+", label: "Ans d'expérience" },
                  { val: "100%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-orange">{s.val}</div>
                    <div className="text-white/35 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Droite — formulaire */}
        <div className="bg-stone-bg py-16 md:py-20 px-8 md:px-12 lg:px-16">
          <ScrollReveal direction="right">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Devis gratuit
            </span>
            <h3 className="text-navy font-black text-2xl uppercase tracking-tight mb-8">
              Votre demande
            </h3>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
