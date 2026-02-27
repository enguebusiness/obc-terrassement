import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Notre Réseau de Partenaires | OBC Maçonnerie Nord",
  description:
    "OBC Maçonnerie coordonne un réseau d'artisans partenaires de confiance pour livrer votre maison de A à Z : électricité, plomberie, charpente, isolation, menuiserie, carrelage, peinture.",
  alternates: { canonical: "https://obc-maconnerie.fr/partenaires" },
};

const partenaires = [
  {
    icon: "⚡",
    metier: "Électricité",
    desc: "Installation électrique aux normes NF C 15-100, tableau de distribution, prises, éclairage.",
  },
  {
    icon: "🔧",
    metier: "Plomberie",
    desc: "Plomberie sanitaire, chauffage central, installation de salles de bains et cuisines.",
  },
  {
    icon: "🪵",
    metier: "Charpente",
    desc: "Charpente traditionnelle ou industrielle, structure bois pour combles aménageables ou non.",
  },
  {
    icon: "🏚️",
    metier: "Couverture",
    desc: "Pose de toiture, tuiles, ardoises, zinc — étanchéité et finitions soignées.",
  },
  {
    icon: "🧱",
    metier: "Isolation",
    desc: "Isolation thermique et phonique par l'intérieur ou l'extérieur, combles, planchers.",
  },
  {
    icon: "🚪",
    metier: "Menuiserie",
    desc: "Fenêtres, portes, vérandas, volets — menuiserie bois, PVC ou aluminium.",
  },
  {
    icon: "🔳",
    metier: "Carrelage & Revêtements",
    desc: "Pose de carrelage, parquet, faïence — pour sols et murs, intérieur et extérieur.",
  },
  {
    icon: "🎨",
    metier: "Peinture",
    desc: "Peinture intérieure et extérieure, enduits décoratifs, ravalement de façade.",
  },
];

export default function PartenairesPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-sm font-semibold uppercase tracking-widest">Notre force collective</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
              Notre réseau de partenaires
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Seul on va vite, ensemble on va plus loin. Grâce à notre réseau d&apos;artisans de confiance, OBC Maçonnerie coordonne l&apos;ensemble des corps de métier pour que votre maison prenne forme de A à Z.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="bg-stone-bg border border-border rounded-2xl p-6 md:p-8 mb-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">
                Un seul interlocuteur pour tout votre projet
              </h2>
              <p className="text-text-light text-sm leading-relaxed max-w-xl mx-auto">
                Benoît Colin sélectionne et coordonne des artisans partenaires avec lesquels il travaille depuis des années. Vous n&apos;avez qu&apos;un seul contact — lui — pour piloter l&apos;intégralité de votre chantier.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partenaires.map((p, i) => (
              <ScrollReveal key={p.metier} direction="up" delay={i * 70}>
                <div className="bg-bg-white border border-border rounded-2xl p-5 text-center h-full hover:border-orange hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h3 className="text-navy font-bold text-base mb-2">{p.metier}</h3>
                  <p className="text-text-light text-xs leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Un projet de A à Z
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Que vous construisiez une maison neuve ou rénoviez l&apos;existant, OBC Maçonnerie orchestre chaque corps de métier dans le bon ordre, au bon moment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Parler de mon projet à Benoît
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
