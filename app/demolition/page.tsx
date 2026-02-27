import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/marketing/ContactForm";
import { getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {

  title: "Démolition Maison Nord 59 | OBC Maçonnerie",
  description:
    "Démolition totale ou partielle de maison, murs porteurs, bâtiments dans le Nord (59). OBC Maçonnerie à Orchies. Toutes garanties de sécurité. Devis gratuit.",
  keywords: [
    "démolition maison Nord 59",
    "démolition bâtiment Nord",
    "démolition mur porteur Nord",
    "démolition partielle Nord",
    "démolition Orchies",
    "démolition Douai",
  ],
  alternates: { canonical: `${config.url}/demolition` },
  };
}

const types = [
  { icon: "🏚️", title: "Démolition totale", desc: "Destruction complète d'un bâtiment résidentiel ou annexe, avec évacuation des gravats et remise en état du terrain." },
  { icon: "🧱", title: "Démolition partielle", desc: "Démolition ciblée d'une partie du bâtiment pour permettre une extension ou une restructuration." },
  { icon: "🏗️", title: "Suppression murs porteurs", desc: "Ouverture de murs porteurs avec pose de poutres et reprises en sous-œuvre pour sécuriser la structure." },
  { icon: "⛏️", title: "Dépose de dalles", desc: "Retrait de chapes béton, dalles existantes, fondations obsolètes pour préparer un nouveau sol." },
  { icon: "🚛", title: "Évacuation des gravats", desc: "Transport et évacuation de tous les déchets de démolition vers les filières de recyclage agréées." },
  { icon: "🏠", title: "Curage intérieur", desc: "Enlèvement complet des éléments intérieurs (cloisons, planchers, revêtements) avant une rénovation lourde." },
];

export default async function DemolitionPage() {
  const config = await getSiteConfig();
  const { phone, phoneRaw } = config;
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              <Link href="/services" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tous les services
              </Link>
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Démolition</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                Démolition dans le Nord
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Démolition totale ou partielle, avec tout le matériel et les garanties de sécurité. OBC Maçonnerie gère votre chantier du début à la fin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors pulse-glow">
                  Demander un devis gratuit
                </Link>
                <a href={`tel:${phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors border border-white/20">{phone}</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">Nos prestations de démolition</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t, i) => (
              <ScrollReveal key={t.title} direction="up" delay={i * 80}>
                <div className="bg-bg-white border border-border rounded-2xl p-6 h-full">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="text-navy font-bold text-base mb-2">{t.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-stone-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="bg-bg-white border border-border rounded-2xl p-6 flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h3 className="text-navy font-bold mb-1">Démolition en toute sécurité</h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Avant toute démolition, OBC Maçonnerie vérifie la présence éventuelle d&apos;amiante, de plomb ou d&apos;autres matériaux dangereux, et fait appel aux spécialistes agréés si nécessaire. La sécurité du chantier et de ses riverains est une priorité absolue.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Votre projet de démolition</h2>
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
