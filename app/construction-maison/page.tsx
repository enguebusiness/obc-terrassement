import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Construction de Maison dans le Nord | OBC Maçonnerie Orchies",
  description:
    "Construction neuve, fondations, ossature bois dans le Nord (59). OBC Maçonnerie vous accompagne de A à Z. Devis gratuit.",
  keywords: [
    "construction maison Nord",
    "maçon construction maison Orchies",
    "fondation ossature bois Nord",
    "gros œuvre Nord",
    "construction maison Douai",
    "construction maison Valenciennes",
  ],
  alternates: { canonical: "https://obc-maconnerie.fr/construction-maison" },
};

const etapes = [
  { num: "01", title: "Étude & conseil", desc: "Benoît analyse votre terrain, votre plan et vos envies. Il adapte si besoin les plans d'architecte et vous conseille sur les matériaux." },
  { num: "02", title: "Fondations", desc: "Terrassement, fouilles, semelles filantes ou radier — la fondation, c'est la base de tout. Réalisée avec rigueur pour durer des décennies." },
  { num: "03", title: "Gros œuvre", desc: "Élévation des murs porteurs, dalles, planchers, chaînages — tout le squelette de votre maison prend forme." },
  { num: "04", title: "Ossature bois (option)", desc: "Construction en ossature bois légère et performante thermiquement, parfaitement maîtrisée par OBC Maçonnerie." },
  { num: "05", title: "Coordination des artisans", desc: "Grâce au réseau de partenaires, Benoît coordonne électriciens, plombiers, couvreurs et autres corps de métier." },
  { num: "06", title: "Remise des clés", desc: "Livraison de votre maison dans les délais convenus, avec un chantier propre et soigné." },
];

export default function ConstructionMaisonPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero */}
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
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Gros œuvre</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
                Construction de maison dans le Nord
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Benoît Colin, maçon expert à Mouchin, vous accompagne dans la construction de votre maison individuelle — de la première fondation à la remise des clés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors pulse-glow">
                  Demander un devis gratuit
                </Link>
                <a href="tel:0674453089" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors border border-white/20">
                  06 74 45 30 89
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Points clés */}
      <section className="py-14 bg-stone-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "15+", label: "ans d'expérience" },
              { val: "100+", label: "maisons construites" },
              { val: "30km", label: "rayon d'action" },
              { val: "A→Z", label: "accompagnement complet" },
            ].map((s) => (
              <div key={s.label} className="bg-bg-white border border-border rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-orange">{s.val}</div>
                <div className="text-text-light text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
              Comment se déroule votre construction ?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etapes.map((e, i) => (
              <ScrollReveal key={e.num} direction="up" delay={i * 80}>
                <div className="bg-bg-white border border-border rounded-2xl p-6">
                  <span className="text-orange font-black text-2xl">{e.num}</span>
                  <h3 className="text-navy font-bold text-base mt-2 mb-2">{e.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="py-14 bg-stone-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Votre maçon constructeur dans le Nord (59)
            </h2>
            <div className="space-y-4 text-text-light text-sm leading-relaxed">
              <p>
                OBC Maçonnerie, dirigé par Benoît Colin, est une entreprise de maçonnerie spécialisée dans la <strong className="text-text">construction de maison individuelle dans le Nord</strong>. Basés à Mouchin (59310), nous intervenons sur Orchies, Douai, Valenciennes, Flines-lès-Raches, Saint-Amand-les-Eaux et toutes les communes dans un rayon de 30 km.
              </p>
              <p>
                Que vous souhaitiez construire une maison en <strong className="text-text">parpaing</strong>, en <strong className="text-text">béton banché</strong> ou en <strong className="text-text">ossature bois</strong>, Benoît vous conseille et adapte chaque solution à votre terrain, votre budget et vos envies. Il ne fait jamais deux fois la même maison.
              </p>
              <p>
                Grâce à son réseau de partenaires (électricien, plombier, charpentier, couvreur, menuisier, carreleur, peintre), OBC Maçonnerie coordonne l&apos;ensemble des corps de métier pour vous livrer une maison complète, dans les délais.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Votre projet de construction</h2>
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
