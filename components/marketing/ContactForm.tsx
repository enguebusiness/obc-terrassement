"use client";

import { useState } from "react";

const typesProjets = [
  "Construction de maison",
  "Rénovation",
  "Assainissement",
  "Création d'accès",
  "Démolition",
  "Autre",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    typeProjet: "",
    description: "",
    zone: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.telephone || !form.typeProjet) {
      setError("Merci de renseigner au minimum votre nom, téléphone et type de projet.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nom: "", telephone: "", email: "", typeProjet: "", description: "", zone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border-t-4 border-success bg-bg-white p-8 text-center">
        <div className="w-12 h-12 bg-success/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy font-black text-lg uppercase tracking-wide mb-2">Demande envoyée !</h3>
        <p className="text-text-light text-sm">
          Benoît vous rappelle sous 24h. En cas d&apos;urgence :{" "}
          <a href="tel:0674453089" className="text-orange font-bold hover:underline">
            06 74 45 30 89
          </a>
        </p>
      </div>
    );
  }

  const ic = "w-full border border-border bg-bg-white px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors";
  const lc = "block text-xs font-bold uppercase tracking-widest text-navy mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className={lc}>Nom <span className="text-orange">*</span></label>
          <input id="nom" name="nom" type="text" value={form.nom} onChange={handleChange}
            placeholder="Votre nom" className={ic} required />
        </div>
        <div>
          <label htmlFor="telephone" className={lc}>Téléphone <span className="text-orange">*</span></label>
          <input id="telephone" name="telephone" type="tel" value={form.telephone} onChange={handleChange}
            placeholder="06 XX XX XX XX" className={ic} required />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={lc}>Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="votre@email.fr" className={ic} />
      </div>

      <div>
        <label htmlFor="typeProjet" className={lc}>Type de projet <span className="text-orange">*</span></label>
        <select id="typeProjet" name="typeProjet" value={form.typeProjet} onChange={handleChange}
          className={ic} required>
          <option value="">Choisissez un type de projet</option>
          {typesProjets.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="description" className={lc}>Description du projet</label>
        <textarea id="description" name="description" value={form.description} onChange={handleChange}
          rows={4} placeholder="Surface, localisation, contraintes particulières..."
          className={`${ic} resize-none`} />
      </div>

      <div>
        <label htmlFor="zone" className={lc}>Commune / Zone</label>
        <input id="zone" name="zone" type="text" value={form.zone} onChange={handleChange}
          placeholder="ex : Orchies, Douai..." className={ic} />
      </div>

      {error && (
        <p className="text-error text-xs bg-stone-bg border border-error/30 px-4 py-3 uppercase tracking-wide">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="btn btn-fill w-full py-4 text-xs uppercase tracking-[0.2em] disabled:opacity-60 disabled:cursor-not-allowed">
        <span>{status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}</span>
      </button>

      {status === "error" && (
        <p className="text-error text-xs text-center">
          Erreur. Appelez le{" "}
          <a href="tel:0674453089" className="font-bold underline">06 74 45 30 89</a>.
        </p>
      )}

      <p className="text-text-muted text-xs text-center uppercase tracking-widest">
        Devis gratuit &amp; sans engagement — Réponse sous 24h
      </p>
    </form>
  );
}
