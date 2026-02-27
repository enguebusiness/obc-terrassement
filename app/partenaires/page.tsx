import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { getPartners, getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Notre Réseau de Partenaires | OBC Maçonnerie Nord",
    description:
      "OBC Maçonnerie coordonne un réseau d'artisans partenaires de confiance pour livrer votre maison de A à Z : électricité, plomberie, charpente, isolation, menuiserie, carrelage, peinture.",
    alternates: { canonical: `${config.url}/partenaires` },
  };
}

export default async function PartenairesPage() {
  const partenaires = await getPartners();

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy texture-dark py-16 md:py-20 relative overflow-hidden">
        <div className="hero-diagonal-panel" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Un réseau de confiance
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight">
              Nos<br />partenaires
            </h1>
            <p className="text-white/50 text-base mt-5 max-w-2xl">
              Seul on va vite, ensemble on va plus loin. Benoît coordonne un réseau d&apos;artisans sélectionnés pour que votre maison prenne forme de A à Z.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Message interlocuteur unique */}
      <section className="bg-stone-bg border-b border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
                  Notre approche
                </span>
                <h2 className="text-navy font-black text-2xl md:text-3xl uppercase leading-tight tracking-tight mb-4">
                  Un seul interlocuteur<br />pour tout votre projet
                </h2>
                <p className="text-text-light text-sm leading-relaxed">
                  Benoît Colin sélectionne et coordonne des artisans avec lesquels il travaille depuis des années. Vous n&apos;avez qu&apos;un seul contact pour piloter l&apos;intégralité de votre chantier — dans les délais et le budget convenus.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "10+", label: "Corps de métier" },
                  { val: "15+", label: "Ans de partenariat" },
                  { val: "100%", label: "Artisans qualifiés" },
                  { val: "1 seul", label: "Interlocuteur" },
                ].map((s) => (
                  <div key={s.label} className="border-l-2 border-orange pl-4">
                    <div className="text-2xl font-black text-orange">{s.val}</div>
                    <div className="text-text-muted text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grille partenaires */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-3">
              Corps de métier
            </span>
            <h2 className="text-navy font-black text-2xl md:text-3xl uppercase tracking-tight mb-10">
              Nos domaines d&apos;expertise
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partenaires.map((p, i) => (
              <ScrollReveal key={p.label} direction="up" delay={i * 60}>
                <div className="group bg-bg-white border border-border hover:border-orange p-6 h-full transition-all duration-200 cursor-default">
                  <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{p.icon}</div>
                  <h3 className="text-navy font-black text-base uppercase tracking-wide mb-2 group-hover:text-orange transition-colors">
                    {p.label}
                  </h3>
                  <p className="text-text-light text-xs leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="bg-navy texture-dark py-16 md:py-20 relative overflow-hidden">
        <div className="hero-diagonal-panel" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Projet de A à Z
            </span>
            <h2 className="text-white font-black text-3xl md:text-4xl uppercase leading-tight tracking-tight mb-8">
              Que vous construisiez ou rénowiez,<br />
              OBC orchestre chaque corps de métier
            </h2>
            <Link href="/contact" className="btn btn-fill px-8 py-4 text-xs uppercase tracking-[0.2em]">
              <span>Parler de mon projet à Benoît</span>
              <span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
