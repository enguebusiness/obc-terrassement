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

      {/* Hero */}
      <section className="bg-navy texture-dark py-16 md:py-20 relative overflow-hidden">
        <div className="hero-diagonal-panel" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Portfolio — Chantiers Nord (59)
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight">
              Nos<br />réalisations
            </h1>
            <p className="text-white/50 text-base mt-5 max-w-xl">
              Chaque chantier est unique. Découvrez quelques-unes de nos réalisations dans le Nord.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filtres */}
      <section className="bg-bg border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {cats.map((cat) => (
              <span
                key={cat}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 cursor-default transition-colors ${
                  cat === "Tous"
                    ? "bg-navy text-white"
                    : "bg-bg-white border border-border text-text-light hover:border-orange hover:text-orange"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realisations.map((r, i) => {
              const bgColors = ["bg-navy", "bg-stone", "bg-navy-light", "bg-stone", "bg-navy", "bg-navy-light"];
              return (
                <ScrollReveal key={r.title} direction="up" delay={i * 80}>
                  <div className="realisation-card relative overflow-hidden aspect-[4/3] group cursor-pointer">
                    {/* Fond */}
                    <div className={`${bgColors[i % bgColors.length]} w-full h-full flex items-center justify-center`}>
                      <span className="text-white/8 font-black text-9xl select-none">0{i + 1}</span>
                    </div>

                    {/* Badge catégorie */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                        {r.categorie}
                      </span>
                    </div>

                    {/* Infos au repos */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                      <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">{r.ville}</span>
                      <h3 className="text-white font-black text-sm uppercase tracking-wide">{r.title}</h3>
                    </div>

                    {/* Overlay hover */}
                    <div className="realisation-overlay absolute inset-0 bg-orange flex flex-col justify-end p-6">
                      <span className="text-white/60 text-xs uppercase tracking-[0.2em] mb-2">{r.ville}</span>
                      <h3 className="text-white font-black text-lg uppercase tracking-tight mb-2">{r.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA bottom */}
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-16 bg-navy py-12 px-8 md:px-12 text-center">
              <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-3">
                Un projet similaire ?
              </span>
              <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight mb-6">
                Benoît se déplace gratuitement<br />pour évaluer votre chantier
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-fill px-8 py-4 text-xs uppercase tracking-[0.2em]">
                  <span>Demander un devis gratuit</span>
                </Link>
                <a href={`tel:${phoneRaw}`} className="btn btn-outline-light px-8 py-4 text-xs uppercase tracking-[0.2em]">
                  <span>{phone}</span>
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
