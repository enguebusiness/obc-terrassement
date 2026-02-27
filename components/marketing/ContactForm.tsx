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
    budget: "",
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
        setForm({ nom: "", telephone: "", email: "", typeProjet: "", description: "", budget: "", zone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-bg-white border border-success rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-navy font-bold text-xl mb-2">Demande envoyée !</h3>
        <p className="text-text-light text-sm">
          Benoît vous rappellera dans les 24h. En cas d&apos;urgence, appelez directement le{" "}
          <a href="tel:0674453089" className="text-orange font-bold">
            06 74 45 30 89
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-bg-white border border-border rounded-2xl p-6 md:p-8 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-navy mb-1">
            Nom <span className="text-orange">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={form.nom}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors bg-bg"
            required
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-semibold text-navy mb-1">
            Téléphone <span className="text-orange">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
            placeholder="06 XX XX XX XX"
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors bg-bg"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="votre@email.fr"
          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors bg-bg"
        />
      </div>

      <div>
        <label htmlFor="typeProjet" className="block text-sm font-semibold text-navy mb-1">
          Type de projet <span className="text-orange">*</span>
        </label>
        <select
          id="typeProjet"
          name="typeProjet"
          value={form.typeProjet}
          onChange={handleChange}
          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors bg-bg"
          required
        >
          <option value="">Choisissez un type de projet</option>
          {typesProjets.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-navy mb-1">
          Description du projet
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          placeholder="Décrivez votre projet : surface, localisation, contraintes particulières..."
          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors bg-bg resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-navy mb-1">
            Budget approximatif
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={form.budget}
            onChange={handleChange}
            placeholder="ex : 80 000 €"
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors bg-bg"
          />
        </div>
        <div>
          <label htmlFor="zone" className="block text-sm font-semibold text-navy mb-1">
            Commune / Zone
          </label>
          <input
            id="zone"
            name="zone"
            type="text"
            value={form.zone}
            onChange={handleChange}
            placeholder="ex : Orchies, Douai..."
            className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-orange transition-colors bg-bg"
          />
        </div>
      </div>

      {error && (
        <p className="text-error text-sm bg-stone-bg border border-error/30 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-orange hover:bg-orange-hover text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
      </button>

      {status === "error" && (
        <p className="text-error text-sm text-center">
          Une erreur est survenue. Appelez directement le{" "}
          <a href="tel:0674453089" className="font-bold underline">
            06 74 45 30 89
          </a>
          .
        </p>
      )}

      <p className="text-text-muted text-xs text-center">
        Devis gratuit &amp; sans engagement — Réponse sous 24h
      </p>
    </form>
  );
}
