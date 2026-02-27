import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/marketing/ContactForm";

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

interface Stat {
  val: string;
  label: string;
}

interface Props {
  label: string;
  title: string;
  subtitle: string;
  phone: string;
  phoneRaw: string;
  items: ServiceItem[];
  itemsSectionTitle: string;
  stats?: Stat[];
  seoTitle: string;
  seoText: React.ReactNode;
  contactTitle?: string;
}

function Arrow() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function ServicePageLayout({
  label,
  title,
  subtitle,
  phone,
  phoneRaw,
  items,
  itemsSectionTitle,
  stats,
  seoTitle,
  seoText,
  contactTitle,
}: Props) {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy texture-dark py-16 md:py-24 relative overflow-hidden">
        <div className="hero-diagonal-panel" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tous les services
            </Link>
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              {label}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight mb-5 max-w-3xl">
              {title}
            </h1>
            <p className="text-white/55 text-base md:text-lg max-w-xl mb-10">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-fill px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>Devis gratuit</span>
                <span><Arrow /></span>
              </Link>
              <a href={`tel:${phoneRaw}`} className="btn btn-outline-light px-8 py-4 text-xs uppercase tracking-[0.2em]">
                <span>{phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <section className="bg-stone-bg border-b border-border py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-orange pl-4">
                  <div className="text-2xl font-black text-orange">{s.val}</div>
                  <div className="text-text-muted text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Items grid */}
      <section className="py-16 md:py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Nos prestations
            </span>
            <h2 className="text-white font-black text-2xl md:text-4xl uppercase leading-tight tracking-tight mb-12">
              {itemsSectionTitle}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {items.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 80}>
                <div className="service-card-dark bg-white/[0.03] p-7 h-full">
                  <div className="text-3xl mb-4 grayscale">{item.icon}</div>
                  <h3 className="text-white font-black text-base uppercase tracking-wide mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="py-14 bg-stone-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
                  Notre expertise
                </span>
                <h2 className="text-navy font-black text-2xl md:text-3xl uppercase leading-tight tracking-tight">
                  {seoTitle}
                </h2>
              </div>
              <div className="space-y-4 text-text-light text-sm leading-relaxed">
                {seoText}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact split */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-navy texture-dark py-16 md:py-20 px-8 md:px-12 lg:px-16 relative overflow-hidden">
          <div className="hero-diagonal-panel" />
          <ScrollReveal direction="left">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.25em] block mb-4">
              Devis gratuit
            </span>
            <h2 className="text-white font-black text-2xl uppercase tracking-tight mb-6">
              {contactTitle ?? "Parlons de votre projet"}
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              Benoît se déplace gratuitement pour évaluer votre chantier et vous remettre un devis détaillé sous 24h.
            </p>
            <div className="space-y-4">
              {[
                "Devis gratuit & déplacement offert",
                "Réponse sous 24h",
                "Sans engagement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <div className="bg-stone-bg py-16 md:py-20 px-8 md:px-12 lg:px-16">
          <ScrollReveal direction="right">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
