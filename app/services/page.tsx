import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Nos Services | Construction, Rénovation, Assainissement",
  description:
    "Tous les services d'OBC Maçonnerie : construction de maison, rénovation, assainissement, création d'accès et démolition dans le Nord (59). Devis gratuit.",
  alternates: { canonical: "https://obc-maconnerie.fr/services" },
};

const services = [
  {
    icon: "🏠",
    title: "Construction de maison",
    desc: "De la conception au gros œuvre, Benoît Colin vous accompagne dans la construction de votre maison individuelle. Fondations, ossature bois, dalles, murs porteurs — tout est pris en charge avec rigueur et savoir-faire.",
    href: "/construction-maison",
    points: ["Maison individuelle", "Ossature bois", "Fondations", "Gros œuvre complet"],
  },
  {
    icon: "🔨",
    title: "Rénovation",
    desc: "Que ce soit une rénovation partielle ou complète, OBC Maçonnerie s'adapte à votre projet. Maison ancienne, appartement, restructuration intérieure — chaque chantier est unique et traité comme tel.",
    href: "/renovation",
    points: ["Rénovation complète", "Restructuration intérieure", "Maison de ville", "Extension"],
  },
  {
    icon: "💧",
    title: "Assainissement",
    desc: "Mise aux normes de votre système d'assainissement, création d'un nouveau dispositif ou réhabilitation de l'existant. OBC Maçonnerie réalise vos travaux d'assainissement dans les règles de l'art.",
    href: "/assainissement",
    points: ["Assainissement individuel", "Mise aux normes", "Fosse septique", "Épandage"],
  },
  {
    icon: "🚧",
    title: "Création d'accès",
    desc: "Voiries, entrées de propriété, chemins, allées — OBC Maçonnerie crée vos accès selon vos besoins et vos envies. Béton, béton imprimé, pavés ou grave compactée.",
    href: "/creation-acces",
    points: ["Voiries privées", "Entrées de propriété", "Chemins ruraux", "Béton imprimé"],
  },
  {
    icon: "🏗️",
    title: "Démolition",
    desc: "Démolition totale ou partielle de bâtiment, destruction de murs porteurs, dépose de chapes — OBC Maçonnerie intervient avec tout le matériel et les garanties de sécurité nécessaires.",
    href: "/demolition",
    points: ["Démolition totale", "Démolition partielle", "Murs porteurs", "Évacuation des gravats"],
  },
  {
    icon: "🤝",
    title: "Conseil & Accompagnement",
    desc: "Benoît vous guide à chaque étape de votre projet : choix des matériaux, adaptation de plans, coordination des artisans partenaires. Un seul interlocuteur pour un projet serein.",
    href: "/contact",
    points: ["Conseils matériaux", "Adaptation de plans", "Coordination artisans", "Suivi de chantier"],
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero */}
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

      {/* Services */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} direction="up" delay={i * 60}>
              <div className="bg-bg-white border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
                <div className="text-5xl shrink-0">{s.icon}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-navy mb-2">{s.title}</h2>
                  <p className="text-text-light text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.points.map((p) => (
                      <span key={p} className="bg-bg-muted text-text-light text-xs font-medium px-3 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={s.href}
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
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Vous avez un projet ? Parlons-en.
            </h2>
            <p className="text-text-light mb-6">
              Benoît se déplace gratuitement pour évaluer votre projet et vous remettre un devis détaillé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:0674453089"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                06 74 45 30 89
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
