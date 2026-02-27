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

  const infos = [
    {
      icon: "📞",
      titre: "Téléphone",
      val: phone,
      href: `tel:${phoneRaw}`,
      desc: "Lun–Ven 7h–19h",
    },
    {
      icon: "📍",
      titre: "Adresse",
      val: address,
      href: undefined as string | undefined,
      desc: "Rayon d'intervention : 30km",
    },
    {
      icon: "📧",
      titre: "Email",
      val: email,
      href: `mailto:${email}`,
      desc: "Réponse sous 24h",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-sm font-semibold uppercase tracking-widest">Devis gratuit</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
              Contactez OBC Maçonnerie
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Benoît se déplace gratuitement pour évaluer votre projet et vous remettre un devis détaillé sous 24h.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Infos + zones */}
            <div>
              <ScrollReveal direction="left">
                <h2 className="text-xl font-bold text-navy mb-6">Nos coordonnées</h2>
                <div className="space-y-4 mb-8">
                  {infos.map((info) => (
                    <div key={info.titre} className="flex items-start gap-4 bg-bg-white border border-border rounded-xl p-4">
                      <span className="text-2xl shrink-0">{info.icon}</span>
                      <div>
                        <p className="text-navy font-semibold text-sm">{info.titre}</p>
                        {info.href ? (
                          <a href={info.href} className="text-orange font-bold hover:underline text-sm">
                            {info.val}
                          </a>
                        ) : (
                          <p className="text-text-light text-sm">{info.val}</p>
                        )}
                        <p className="text-text-muted text-xs mt-0.5">{info.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-bold text-navy mb-3">Zone d&apos;intervention</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {zones.map((z) => (
                    <span key={z} className="inline-flex items-center gap-1 bg-bg-white border border-border text-navy text-xs font-medium px-3 py-1.5 rounded-full">
                      <span className="text-orange">📍</span> {z}
                    </span>
                  ))}
                </div>
                <p className="text-text-muted text-xs italic">
                  Et toutes les communes dans un rayon de {zoneDescription}.
                </p>

                <div className="mt-8 bg-navy rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Devis gratuit &amp; sans engagement</h3>
                  <p className="text-white/60 text-sm">
                    Benoît se déplace sur votre chantier pour évaluer votre projet, vous conseiller et vous remettre un devis clair et détaillé. Gratuit et sans engagement.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Formulaire */}
            <div>
              <ScrollReveal direction="right">
                <h2 className="text-xl font-bold text-navy mb-6">Votre demande de devis</h2>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
