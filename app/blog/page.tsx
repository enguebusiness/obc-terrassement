import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog Maçonnerie & Construction | Conseils OBC Maçonnerie",
  description:
    "Conseils, guides et actualités sur la construction de maison, la rénovation et le gros œuvre dans le Nord (59). Blog OBC Maçonnerie par Benoît Colin.",
  alternates: { canonical: "https://obc-maconnerie.fr/blog" },
};

const articles = [
  {
    slug: "combien-coute-construction-maison-nord",
    titre: "Combien coûte la construction d'une maison dans le Nord en 2025 ?",
    extrait:
      "Budget, matériaux, terrain, main-d'œuvre — tout ce qu'il faut savoir pour estimer le coût de votre construction neuve dans le Nord.",
    cat: "Construction",
    date: "15 février 2025",
    readTime: "6 min",
  },
  {
    slug: "etapes-renovation-maison-ancienne",
    titre: "Les étapes clés d'une rénovation de maison ancienne",
    extrait:
      "Vous avez acheté une maison ancienne dans le Nord et vous voulez la rénover ? Voici les étapes indispensables pour réussir votre projet.",
    cat: "Rénovation",
    date: "8 janvier 2025",
    readTime: "5 min",
  },
  {
    slug: "assainissement-non-collectif-obligations",
    titre: "Assainissement non collectif : vos obligations légales",
    extrait:
      "Contrôle SPANC, mise aux normes, vente immobilière — tout ce que vous devez savoir sur l'assainissement non collectif.",
    cat: "Assainissement",
    date: "20 décembre 2024",
    readTime: "4 min",
  },
  {
    slug: "ossature-bois-avantages",
    titre: "Ossature bois : pourquoi choisir ce mode constructif ?",
    extrait:
      "Légèreté, performance thermique, rapidité de construction — l'ossature bois a de nombreux avantages. OBC Maçonnerie vous explique.",
    cat: "Construction",
    date: "5 novembre 2024",
    readTime: "5 min",
  },
  {
    slug: "travaux-renovation-sans-permis-construction",
    titre: "Quels travaux de rénovation ne nécessitent pas de permis ?",
    extrait:
      "Permis de construire, déclaration préalable, simple déclaration — on vous explique les règles selon la nature de vos travaux.",
    cat: "Rénovation",
    date: "18 octobre 2024",
    readTime: "4 min",
  },
  {
    slug: "fondations-maison-quels-types",
    titre: "Les différents types de fondations pour une maison",
    extrait:
      "Semelles filantes, radier, pieux — quelles fondations choisir selon votre terrain et votre projet de construction ?",
    cat: "Construction",
    date: "2 septembre 2024",
    readTime: "5 min",
  },
];

const cats = ["Tous", "Construction", "Rénovation", "Assainissement"];

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-sm font-semibold uppercase tracking-widest">Conseils & guides</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Blog OBC Maçonnerie</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Construction, rénovation, assainissement — Benoît partage son expertise pour vous aider dans vos projets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-6 bg-bg border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
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

      {/* Articles */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.slug} direction="up" delay={i * 70}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group block bg-bg-white border border-border rounded-2xl overflow-hidden hover:border-orange hover:shadow-lg transition-all card-hover"
                >
                  <div className="bg-navy h-32 flex items-center justify-center">
                    <span className="text-orange font-bold text-4xl">0{i + 1}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-orange/10 text-orange text-xs font-semibold px-2.5 py-1 rounded-full">
                        {a.cat}
                      </span>
                      <span className="text-text-muted text-xs">{a.readTime} de lecture</span>
                    </div>
                    <h2 className="text-navy font-bold text-base mb-2 leading-snug group-hover:text-orange transition-colors">
                      {a.titre}
                    </h2>
                    <p className="text-text-light text-sm leading-relaxed line-clamp-2">{a.extrait}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-text-muted text-xs">{a.date}</span>
                      <span className="text-orange text-xs font-semibold">Lire →</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-stone-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-navy mb-3">Un projet en tête ?</h2>
            <p className="text-text-light text-sm mb-6">
              Benoît vous conseille gratuitement et vous remet un devis sous 24h.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
