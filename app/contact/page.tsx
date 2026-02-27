import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/marketing/ContactForm";
import { getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Contact & Devis Gratuit | OBC Maçonnerie Nord",
    description:
      "Contactez OBC Maçonnerie pour un devis gratuit. Benoît Colin intervient à Orchies, Douai, Valenciennes et dans un rayon de 30km autour de Mouchin (59).",
    alternates: { canonical: `${config.url}/contact` },
  };
}

export default async function ContactPage() {
  const config = await getSiteConfig();
  const { phone, phoneRaw, email, address, zones, zoneDescription } = config;

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Page hero */}
      <section className="bg-navy texture-dark py-16 md:py-20 relative overflow-hidden">
        <div className="hero-diagonal-panel" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Devis gratuit — Réponse sous 24h
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight">
              Parlons de<br />votre projet
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Split content */}
      <section className="grid lg:grid-cols-2">
        {/* Gauche — infos */}
        <div className="bg-navy-light py-16 md:py-20 px-8 md:px-12 lg:px-16">
          <ScrollReveal direction="left">
            <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-8">
              Nos coordonnées
            </h2>

            <div className="space-y-6 mb-10">
              {/* Téléphone */}
              <a href={`tel:${phoneRaw}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 border border-orange/40 flex items-center justify-center shrink-0 group-hover:border-orange group-hover:bg-orange/10 transition-all">
                  <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Téléphone</p>
                  <p className="text-white font-bold text-xl group-hover:text-orange transition-colors">{phone}</p>
                  <p className="text-white/30 text-xs mt-0.5">Lun–Sam 7h–19h</p>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 border border-white/15 flex items-center justify-center shrink-0 group-hover:border-orange group-hover:bg-orange/10 transition-all">
                  <svg className="w-5 h-5 text-white/40 group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-white/80 font-bold text-sm group-hover:text-orange transition-colors">{email}</p>
                  <p className="text-white/30 text-xs mt-0.5">Réponse sous 24h</p>
                </div>
              </a>

              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-white/15 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Siège</p>
                  <p className="text-white/70 text-sm">{address}</p>
                  <p className="text-white/30 text-xs mt-0.5">Rayon d&apos;intervention : {zoneDescription}</p>
                </div>
              </div>
            </div>

            {/* Zones */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Zone d&apos;intervention</p>
              <div className="flex flex-wrap gap-2">
                {zones.map((z) => (
                  <span
                    key={z}
                    className="inline-flex items-center gap-1.5 border border-white/15 text-white/60 text-xs font-bold px-3 py-1.5 uppercase tracking-wide"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange shrink-0" />
                    {z}
                  </span>
                ))}
              </div>
            </div>

            {/* Garanties */}
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-8">
              {[
                { val: "Gratuit", label: "Devis + déplacement" },
                { val: "24h", label: "Délai de réponse" },
                { val: "15+", label: "Ans d'expérience" },
                { val: "Sans engagement", label: "Aucune obligation" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-black text-orange">{s.val}</div>
                  <div className="text-white/35 text-xs uppercase tracking-wider mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Droite — formulaire */}
        <div className="bg-stone-bg py-16 md:py-20 px-8 md:px-12 lg:px-16">
          <ScrollReveal direction="right">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Demande de devis
            </span>
            <h2 className="text-navy font-black text-2xl uppercase tracking-tight mb-8">
              Votre projet
            </h2>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
