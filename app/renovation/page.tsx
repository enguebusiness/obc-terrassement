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

  title: "Rénovation Maison & Appartement Nord 59 | OBC Maçonnerie",
  description:
    "Rénovation complète ou partielle de maison et appartement dans le Nord. Benoît Colin vous conseille et adapte chaque projet. Devis gratuit.",
  keywords: [
    "rénovation maison Nord 59",
    "rénovation appartement Nord",
    "maçon rénovation Douai",
    "maçon rénovation Valenciennes",
    "rénovation maison Orchies",
    "travaux rénovation Nord",
  ],
  alternates: { canonical: `${config.url}/renovation` },
  };
}

const typesTravaux = [
  { icon: "🏚️", title: "Rénovation complète", desc: "Restructuration totale d'une maison ancienne, de la démolition des cloisons existantes à la pose des revêtements." },
  { icon: "🧱", title: "Maçonnerie intérieure", desc: "Création ou suppression de cloisons, doublages, cages d'escalier, adaptation de plans d'architecte." },
  { icon: "🏗️", title: "Extension", desc: "Agrandissement de votre maison par extension latérale ou surélévation, en parfaite continuité avec l'existant." },
  { icon: "🪟", title: "Ouvertures", desc: "Création de baies vitrées, portes, fenêtres — avec reprise de linteaux et traitement des murs porteurs." },
  { icon: "🏢", title: "Rénovation de façade", desc: "Ravalement, rejointoiement, isolation par l'extérieur (ITE) pour améliorer le confort et l'esthétique." },
  { icon: "🏠", title: "Rénovation appartement", desc: "Transformation d'appartements : redistribution des pièces, mise aux normes, travaux de second œuvre." },
];

export default async function RenovationPage() {
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
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Rénovation</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                Rénovation maison & appartement dans le Nord
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Chaque rénovation est unique. Benoît Colin s&apos;adapte à votre projet, votre budget et vos envies pour transformer votre logement.
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
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
              Nos spécialités en rénovation
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typesTravaux.map((t, i) => (
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
            <h2 className="text-2xl font-bold text-navy mb-4">
              Maçon rénovation dans le Nord (59)
            </h2>
            <div className="space-y-4 text-text-light text-sm leading-relaxed">
              <p>
                OBC Maçonnerie intervient pour tous vos travaux de <strong className="text-text">rénovation dans le Nord</strong>. Que vous soyez à Orchies, Douai, Valenciennes ou dans les communes environnantes, Benoît Colin se déplace pour évaluer votre projet et vous proposer les meilleures solutions.
              </p>
              <p>
                Sa passion : adapter les espaces. Modifier une cage d&apos;escalier pour créer un hall plus lumineux, abattre une cloison pour ouvrir un salon, adapter un plan pour coller à votre mode de vie — Benoît réfléchit avec vous et vous éclaire dans vos décisions.
              </p>
              <p>
                Grâce à son réseau de partenaires, il coordonne aussi les corps de métier complémentaires (électricité, plomberie, carrelage, peinture) pour une rénovation complète avec un seul interlocuteur.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Votre projet de rénovation</h2>
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
