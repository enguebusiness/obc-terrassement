import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { getRealisations, getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Nos Réalisations | Chantiers OBC Maçonnerie Nord",
    description:
      "Découvrez les réalisations d'OBC Maçonnerie : constructions de maisons, rénovations, assainissement et créations d'accès dans le Nord (59). Galerie photos.",
    alternates: { canonical: `${config.url}/realisations` },
  };
}

const cats = ["Tous", "Construction neuve", "Rénovation", "Assainissement", "Création d'accès", "Démolition"];

export default async function RealisationsPage() {
  const [realisations, config] = await Promise.all([getRealisations(), getSiteConfig()]);
  const { phone, phoneRaw } = config;

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Nos réalisations</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Chaque chantier est unique. Découvrez quelques-unes de nos réalisations dans le Nord.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filtres catégories */}
      <section className="py-8 bg-bg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {cats.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-default ${
                  cat === "Tous"
                    ? "bg-navy text-white"
                    : "bg-bg-white border border-border text-text-light"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((r, i) => (
              <ScrollReveal key={r.title} direction="up" delay={i * 80}>
                <div className="bg-bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all group card-hover">
                  <div className={`${r.color} h-48 flex items-center justify-center relative`}>
                    <span className="text-white/10 text-8xl font-black">{i + 1}</span>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {r.categorie}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-navy font-bold text-base mb-2 group-hover:text-orange transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed mb-3">{r.description}</p>
                    <div className="flex items-center gap-1 text-text-muted text-xs">
                      <span>📍</span>
                      <span>{r.ville}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-14 bg-stone-bg border border-border rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-navy mb-2">
                Vous avez un projet similaire ?
              </h2>
              <p className="text-text-light text-sm mb-6">
                Benoît se déplace gratuitement pour évaluer votre chantier et vous remettre un devis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href={`tel:${phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
