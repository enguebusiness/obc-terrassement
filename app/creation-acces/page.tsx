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

  title: "Création d'Accès, Voiries & Entrées | OBC Maçonnerie Nord",
  description:
    "Création d'accès, voiries privées, entrées de propriété et chemins dans le Nord (59). OBC Maçonnerie à Orchies. Devis gratuit.",
  keywords: [
    "création accès maison Nord",
    "voirie privée Nord 59",
    "entrée propriété Nord",
    "chemin béton Nord",
    "béton imprimé Nord",
    "création accès Orchies",
  ],
  alternates: { canonical: `${config.url}/creation-acces` },
  };
}

const types = [
  { icon: "🚗", title: "Entrées de propriété", desc: "Création d'une entrée soignée en béton, béton imprimé, pavés ou gravier stabilisé — adaptée à votre maison." },
  { icon: "🛤️", title: "Voiries privées", desc: "Aménagement de voiries sur propriété privée, chemin d'accès à un bâtiment agricole ou industriel." },
  { icon: "🌾", title: "Chemins ruraux", desc: "Création ou réfection de chemins en gravier compacté, grave non traitée ou béton désactivé." },
  { icon: "🏗️", title: "Travaux de terrassement", desc: "Terrassement, nivellement et compactage du terrain avant réalisation de votre accès." },
  { icon: "🔳", title: "Béton imprimé", desc: "Effet pavés, dalles ou pierre naturelle — le béton imprimé apporte une touche décorative durable." },
  { icon: "💧", title: "Drainage & évacuation", desc: "Mise en place de caniveaux, avaloirs et systèmes de drainage pour éviter les accumulations d'eau." },
];

export default async function CreationAccesPage() {
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
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Voiries & accès</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                Création d&apos;accès dans le Nord
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Voiries, entrées de propriété, chemins — OBC Maçonnerie crée vos accès sur mesure avec les matériaux adaptés à vos besoins.
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
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">Nos réalisations d&apos;accès</h2>
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

      <section className="py-16 bg-stone-bg">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Votre projet d&apos;accès</h2>
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
