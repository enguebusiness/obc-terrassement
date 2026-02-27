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
  alternates: { canonical: "https://obc-maconnerie.fr/services" },
};

function Arrow() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default async function ServicesPage() {
  const [services, config] = await Promise.all([getServices(), getSiteConfig()]);
  const { phone, phoneRaw } = config;

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy texture-dark py-16 md:py-20 relative overflow-hidden">
        <div className="hero-diagonal-panel" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              OBC Maçonnerie — Nord (59)
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight">
              Nos services<br />de maçonnerie
            </h1>
            <p className="text-white/50 text-base mt-5 max-w-xl">
              Construction, rénovation, assainissement et gros œuvre — Benoît Colin vous accompagne de A à Z.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services list — dark editorial */}
      <section className="bg-navy-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-px">
            {services.map((s, i) => {
              const href = s.slug === "conseil" ? "/contact" : `/${s.slug}`;
              return (
                <ScrollReveal key={s.slug} direction="up" delay={i * 60}>
                  <div className="group bg-white/[0.02] border-t border-white/8 hover:bg-white/[0.05] transition-all duration-300">
                    <div className="max-w-7xl mx-auto px-0 py-8 grid md:grid-cols-12 gap-6 items-start">

                      {/* Numéro + icône */}
                      <div className="md:col-span-2 flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                        <span className="text-white/15 font-black text-3xl md:text-4xl leading-none">
                          0{i + 1}
                        </span>
                        <span className="text-2xl">{s.icon}</span>
                      </div>

                      {/* Titre + description */}
                      <div className="md:col-span-7">
                        <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mb-3 group-hover:text-orange transition-colors">
                          {s.title}
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                          {s.longDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {s.keywords.map((k) => (
                            <span
                              key={k}
                              className="border border-white/10 text-white/35 text-xs font-bold px-3 py-1 uppercase tracking-wide"
                            >
                              {k}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="md:col-span-3 flex md:justify-end md:pt-1">
                        <Link
                          href={href}
                          className="btn-arrow text-orange text-xs uppercase tracking-widest"
                        >
                          En savoir plus
                          <span className="arrow-icon"><Arrow /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-orange py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-white font-black text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-8">
              Vous avez un projet ?<br />
              Parlons-en.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-fill-white px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>Devis gratuit</span>
                <span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <a href={`tel:${phoneRaw}`} className="btn btn-outline-light px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>{phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
