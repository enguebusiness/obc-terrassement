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

  title: "Assainissement Maison Nord 59 | OBC Maçonnerie",
  description:
    "Création et mise aux normes de systèmes d'assainissement dans le Nord (59). OBC Maçonnerie intervient à Orchies, Douai, Valenciennes et alentours. Devis gratuit.",
  keywords: [
    "assainissement maison Nord",
    "assainissement individuel Nord 59",
    "fosse septique Nord",
    "mise aux normes assainissement",
    "assainissement Orchies",
    "assainissement Douai",
  ],
  alternates: { canonical: `${config.url}/assainissement` },
  };
}

const prestations = [
  { icon: "🔍", title: "Diagnostic", desc: "Analyse de votre installation existante et vérification de sa conformité aux normes en vigueur." },
  { icon: "🏗️", title: "Création de fosse", desc: "Installation d'une fosse toutes eaux ou d'une micro-station d'épuration adaptée à votre terrain." },
  { icon: "🌱", title: "Épandage", desc: "Création ou réhabilitation du dispositif d'épandage pour un traitement optimal des eaux usées." },
  { icon: "🔧", title: "Réhabilitation", desc: "Remise en état d'une installation vieillissante ou non conforme pour éviter les sanctions." },
  { icon: "📋", title: "Mise aux normes", desc: "Mise en conformité suite à un contrôle SPANC ou en cas de vente immobilière." },
  { icon: "💧", title: "Raccordement réseau", desc: "Connexion au réseau d'assainissement collectif lorsque celui-ci est disponible." },
];

export default async function AssainissementPage() {
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
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Assainissement</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                Assainissement dans le Nord
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Mise aux normes, création ou réhabilitation de votre système d&apos;assainissement — OBC Maçonnerie intervient dans les règles de l&apos;art.
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
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">Nos prestations assainissement</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((p, i) => (
              <ScrollReveal key={p.title} direction="up" delay={i * 80}>
                <div className="bg-bg-white border border-border rounded-2xl p-6 h-full">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="text-navy font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-stone-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-4">Assainissement dans le Nord (59)</h2>
            <div className="space-y-4 text-text-light text-sm leading-relaxed">
              <p>
                OBC Maçonnerie réalise vos travaux d&apos;<strong className="text-text">assainissement non collectif dans le Nord</strong> — fosse toutes eaux, micro-station, épandage, réhabilitation. Benoît Colin vous accompagne de l&apos;étude de votre terrain jusqu&apos;à la réception des travaux.
              </p>
              <p>
                Que vous ayez besoin d&apos;une <strong className="text-text">mise aux normes suite à un contrôle SPANC</strong>, d&apos;une nouvelle installation pour une construction neuve ou d&apos;une réhabilitation de l&apos;existant, OBC Maçonnerie intervient à Orchies, Douai, Valenciennes, Mouchin et dans toutes les communes avoisinantes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">Votre projet assainissement</h2>
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
