'use client';

import { useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

const day1Sessions = [
    { value: 's1', label: 'Session 1 : Télédétection Intégrée & Techniques Statistiques Multivariées' },
    { value: 's2', label: 'Session 2 : Machine Learning pour la Cartographie des Impacts Hydrologiques' },
    { value: 's3', label: 'Session 3 : SAR — Radar à Synthèse d\'Ouverture (à venir)' },
    { value: 's4', label: 'Session 4 : Prévision Hydrologique & Système GloFAS — Copernicus' },
];

const day2Sessions = [
    { value: 's5', label: 'Session 5 : Traceurs Géochimiques en Hydrologie et Écohydrologie' },
    { value: 's6', label: 'Session 6 : Altimétrie Radar Satellite pour Rivières Non Jaugées' },
    { value: 's7', label: 'Session 7 : Deep Learning pour la Prédiction des Séries Temporelles Hydrologiques' },
    { value: 's8', label: 'Session 8 : LiDAR et Photogrammétrie pour la Numérisation du Terrain' },
];

export default function TrainingRequestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        // Simule l'envoi — à connecter à un backend si nécessaire
        await new Promise(r => setTimeout(r, 1000));
        setLoading(false);
        setSubmitted(true);
    }

    return (
        <div className="min-h-screen font-sans bg-white">

            {/* Hero */}
            <div
                className="py-14"
                style={{ background: 'linear-gradient(to right, #02345e 0%, #058332 100%)' }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1
                        className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Demande d&apos;accès aux Formations
                    </h1>
                    <p className="text-white/70 mt-3 text-lg">
                        Remplissez le formulaire ci-dessous pour vous inscrire à une session de formation.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="py-16 px-4 bg-[#f4f7f9]">
                <div className="max-w-2xl mx-auto">

                    {submitted ? (
                        /* Success state */
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                style={{ background: 'linear-gradient(135deg, #02345e, #058332)' }}>
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-[#02345e] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                                Demande envoyée !
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Votre demande d&apos;accès a bien été reçue. Vous serez contacté(e) par email une fois votre inscription confirmée.
                            </p>
                            <Link
                                href="/training"
                                className="inline-block px-8 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
                                style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}
                            >
                                Retour aux formations
                            </Link>
                        </div>
                    ) : (
                        /* Form */
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            {/* Header strip */}
                            <div className="px-8 py-5" style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}>
                                <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Prêt(e) à participer ?
                                </h2>
                                <p className="text-white/70 text-sm mt-1">
                                    Les frais de participation sont de <strong className="text-white">50€ par session</strong>.
                                    L&apos;inscription sera confirmée uniquement après réception du paiement.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 space-y-6">

                                {/* Row: Prénom / Nom */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                                            Prénom <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Ex. Jean"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                                            Nom de famille <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Ex. Dupont"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332] focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Adresse email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="vous@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332] focus:border-transparent"
                                    />
                                </div>

                                {/* Pays */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Pays <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ex. Bénin"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332] focus:border-transparent"
                                    />
                                </div>

                                {/* Affiliation */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Institution / Affiliation <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ex. Université d'Abomey-Calavi"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332] focus:border-transparent"
                                    />
                                </div>

                                {/* Day 1 session */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Sessions Jour 1 — Vendredi 10 juillet{' '}
                                        <span className="font-normal text-gray-500">(optionnel, 50€)</span>
                                    </label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332] focus:border-transparent bg-white">
                                        <option value="">— Choisir une session —</option>
                                        {day1Sessions.map(s => (
                                            <option key={s.value} value={s.value}>{s.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Day 2 session */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Sessions Jour 2 — Samedi 11 juillet{' '}
                                        <span className="font-normal text-gray-500">(optionnel, 50€)</span>
                                    </label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332] focus:border-transparent bg-white">
                                        <option value="">— Choisir une session —</option>
                                        {day2Sessions.map(s => (
                                            <option key={s.value} value={s.value}>{s.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-opacity hover:opacity-90 disabled:opacity-60"
                                    style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}
                                >
                                    {loading ? 'Envoi en cours…' : 'Soumettre ma demande'}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            <FooterSection />
        </div>
    );
}
