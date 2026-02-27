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
    alternates: { canonical: `${config.url}/construction-maison` },
  };
}

const etapes = [
  { num: "01", title: "Étude & conseil", desc: "Benoît analyse votre terrain, votre plan et vos envies. Il adapte si besoin les plans d'architecte et vous conseille sur les matériaux." },
  { num: "02", title: "Fondations", desc: "Terrassement, fouilles, semelles filantes ou radier — la fondation, c'est la base de tout. Réalisée avec rigueur pour durer des décennies." },
  { num: "03", title: "Gros œuvre", desc: "Élévation des murs porteurs, dalles, planchers, chaînages — tout le squelette de votre maison prend forme." },
  { num: "04", title: "Ossature bois (option)", desc: "Construction en ossature bois légère et performante thermiquement, parfaitement maîtrisée par OBC Maçonnerie." },
  { num: "05", title: "Coordination des artisans", desc: "Grâce au réseau de partenaires, Benoît coordonne électriciens, plombiers, couvreurs et autres corps de métier." },
  { num: "06", title: "Remise des clés", desc: "Livraison de votre maison dans les délais convenus, avec un chantier propre et soigné." },
];

export default async function ConstructionMaisonPage() {
  const config = await getSiteConfig();
  const { phone, phoneRaw } = config;

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
              Tous les services
            </Link>
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Gros œuvre
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight mb-5 max-w-3xl">
              Construction de maison dans le Nord
            </h1>
            <p className="text-white/55 text-base md:text-lg max-w-xl mb-10">
              Benoît Colin, maçon expert à Mouchin, vous accompagne dans la construction de votre maison individuelle — de la première fondation à la remise des clés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-fill px-8 py-4 text-xs uppercase tracking-[0.2em]">
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

      {/* Stats */}
      <section className="bg-stone-bg border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "15+", label: "ans d'expérience" },
              { val: "100+", label: "maisons construites" },
              { val: "30km", label: "rayon d'action" },
              { val: "A→Z", label: "accompagnement complet" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-orange pl-4">
                <div className="text-2xl font-black text-orange">{s.val}</div>
                <div className="text-text-muted text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16 md:py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Notre méthode
            </span>
            <h2 className="text-white font-black text-2xl md:text-4xl uppercase leading-tight tracking-tight mb-12">
              Comment se déroule<br />votre construction ?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {etapes.map((e, i) => (
              <ScrollReveal key={e.num} direction="up" delay={i * 80}>
                <div className="service-card-dark bg-white/[0.03] p-7 h-full">
                  <span className="text-orange font-black text-4xl leading-none block mb-4">{e.num}</span>
                  <h3 className="text-white font-black text-base uppercase tracking-wide mb-3">{e.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="py-14 bg-stone-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
                  Notre expertise
                </span>
                <h2 className="text-navy font-black text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-6">
                  Votre maçon constructeur<br />dans le Nord (59)
                </h2>
              </div>
              <div className="space-y-4 text-text-light text-sm leading-relaxed">
                <p>
                  OBC Maçonnerie, dirigé par Benoît Colin, est une entreprise de maçonnerie spécialisée dans la <strong className="text-text">construction de maison individuelle dans le Nord</strong>. Basés à Mouchin (59310), nous intervenons sur Orchies, Douai, Valenciennes, Flines-lès-Raches, Saint-Amand-les-Eaux et toutes les communes dans un rayon de 30 km.
                </p>
                <p>
                  Que vous souhaitiez construire une maison en <strong className="text-text">parpaing</strong>, en <strong className="text-text">béton banché</strong> ou en <strong className="text-text">ossature bois</strong>, Benoît vous conseille et adapte chaque solution à votre terrain, votre budget et vos envies.
                </p>
                <p>
                  Grâce à son réseau de partenaires (électricien, plombier, charpentier, couvreur, menuisier, carreleur, peintre), OBC Maçonnerie coordonne l&apos;ensemble des corps de métier pour vous livrer une maison complète, dans les délais.
                </p>
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
              Votre projet de construction
            </span>
            <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-6">
              Parlons de votre<br />future maison
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              Benoît se déplace gratuitement pour évaluer votre terrain et vous remettre un devis détaillé sous 24h.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                <span className="text-white/60 text-sm">Devis gratuit &amp; déplacement offert</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                <span className="text-white/60 text-sm">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                <span className="text-white/60 text-sm">Sans engagement</span>
              </div>
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
