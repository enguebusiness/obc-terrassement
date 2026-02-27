import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { getServices, getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos Services | Construction, Rénovation, Assainissement",
  description:
    "Tous les services d'OBC Maçonnerie : construction de maison, rénovation, assainissement, création d'accès et démolition dans le Nord (59). Devis gratuit.",
  alternates: { canonical: "https://obc-terrassement.fr/services" },
};

export default async function ServicesPage() {
  const [services, config] = await Promise.all([getServices(), getSiteConfig()]);
  const { phone, phoneRaw } = config;

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-sm font-semibold uppercase tracking-widest">OBC Maçonnerie</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Nos services de maçonnerie</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Construction, rénovation, assainissement et gros œuvre dans le Nord — Benoît Colin vous accompagne de A à Z.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          {services.map((s, i) => {
            const href = s.slug === "conseil" ? "/contact" : `/${s.slug}`;
            return (
              <ScrollReveal key={s.slug} direction="up" delay={i * 60}>
                <div className="bg-bg-white border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  <div className="text-5xl shrink-0">{s.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-navy mb-2">{s.title}</h2>
                    <p className="text-text-light text-sm leading-relaxed mb-4">{s.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {s.keywords.map((k) => (
                        <span key={k} className="bg-bg-muted text-text-light text-xs font-medium px-3 py-1 rounded-full">
                          {k}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-orange font-semibold text-sm hover:underline"
                    >
                      En savoir plus
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-stone-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Vous avez un projet ? Parlons-en.</h2>
            <p className="text-text-light mb-6">
              Benoît se déplace gratuitement pour évaluer votre projet et vous remettre un devis détaillé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                Demander un devis gratuit
              </Link>
              <a href={`tel:${phoneRaw}`} className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
                {phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
