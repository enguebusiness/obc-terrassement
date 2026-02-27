import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { getBlogPosts, getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Blog Maçonnerie & Construction | Conseils OBC Maçonnerie",
    description:
      "Conseils, guides et actualités sur la construction de maison, la rénovation et le gros œuvre dans le Nord (59). Blog OBC Maçonnerie par Benoît Colin.",
    alternates: { canonical: `${config.url}/blog` },
  };
}

const cats = ["Tous", "Construction", "Rénovation", "Assainissement"];

export default async function BlogPage() {
  const articles = await getBlogPosts();

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
