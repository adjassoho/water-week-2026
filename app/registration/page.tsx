'use client';

import { useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

const benefits = [
  'Sessions illimitées',
  'Pauses café',
  '3 déjeuners',
  'Dîner de gala',
  'Adhésion IAHS',
];

const feeRows = [
  { category: 'Étudiants (tous pays)', early: '50€', standard: '65€' },
  { category: 'Chercheurs du Maroc', early: '120€', standard: '140€' },
  { category: 'Chercheurs pays en développement*', early: '200€', standard: '250€' },
  { category: 'Chercheurs pays non en développement', early: '350€', standard: '450€' },
];

const developingCountries =
  'Afghanistan, Albanie, Algérie, Angola, Arménie, Azerbaïdjan, Bangladesh, Bélarus, Belize, Bénin, Bhoutan, Bolivie, Bosnie-Herzégovine, Botswana, Brésil, Burkina Faso, Burundi, Cabo Verde, Cambodge, Cameroun, République centrafricaine, Tchad, Colombie, Comores, Congo, Côte d\'Ivoire, République démocratique du Congo, Djibouti, Dominique, République dominicaine, Équateur, Égypte, El Salvador, Guinée équatoriale, Érythrée, Éthiopie, Fidji, Gabon, Gambie, Géorgie, Ghana, Guatemala, Guinée, Guinée-Bissau, Haïti, Honduras, Inde, Indonésie, Macédoine du Nord, Iran, Irak, Jamaïque, Jordanie, Kenya, Lesotho, Libéria, Libye, Madagascar, Malawi, Mali, Iles Marshall, Mauritanie, Micronésie, Moldavie, Mongolie, Maroc, Mozambique, Myanmar, Namibie, Népal, Nicaragua, Niger, Nigéria, Pakistan, Papouasie-Nou.-Guinée, Paraguay, Pérou, Philippines, Moldavie, Macédoine du Nord, Rwanda, Saint-Vincent-et-les-Grenadines, Samoa, Sao Tomé-et-Principe, Sénégal, Serbie, Sierra Leone, Iles Salomon, Somalie, Afrique du Sud, Soudan du Sud, Sri Lanka, Palestine, Soudan, Suriname, Syrie, Tadjikistan, Tanzanie, Thaïlande, Timor-Leste, Togo, Tonga, Tunisie, Turkménistan, Tuvalu, Ouganda, Vanuatu, Venezuela, Viet Nam, Yémen, Zambie, Zimbabwe';

export default function RegistrationPage() {
  const [conferenceType, setConferenceType] = useState('0');
  const [trainingDays, setTrainingDays] = useState('0');
  const total = parseInt(conferenceType) + parseInt(trainingDays);

  return (
    <div className="min-h-screen font-sans bg-white">

      {/* ===== Hero ===== */}
      <div
        className="py-16 pb-20"
        style={{ background: 'linear-gradient(to right, #02345e 0%, #058332 100%)' }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 text-[#02345e] text-sm font-semibold mb-6 shadow">
            <svg className="w-4 h-4 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            All-Inclusive Experience
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Votre inscription ouvre les portes à une expérience de conférence complète
          </h1>

          {/* Benefit badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {benefits.map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-[#02345e] text-sm font-semibold shadow-sm"
              >
                <svg className="w-3.5 h-3.5 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {b}
              </span>
            ))}
          </div>

          {/* Training note */}
          <p className="text-white/70 text-sm italic border border-white/20 rounded-lg px-6 py-3 inline-block bg-white/5">
            Les sessions de formation sont optionnelles et soumises à des frais supplémentaires modiques.
          </p>
        </div>
      </div>

      {/* ===== Fees + Calculator ===== */}
      <div className="py-14 bg-[#f4f7f9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* LEFT — Conference fees table */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <div
                className="px-6 py-4"
                style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}
              >
                <h2 className="font-bold text-white text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                  Frais de participation à la conférence
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4 italic">
                  La participation ne sera confirmée qu&apos;une fois les frais réglés.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[380px]">
                    <thead>
                      <tr className="bg-[#058332] text-white">
                        <th className="px-3 py-2.5 text-left font-semibold rounded-tl-lg">Participants</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Early (€)</th>
                        <th className="px-3 py-2.5 text-center font-semibold rounded-tr-lg">Standard (€)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {feeRows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 py-3 text-gray-700">{row.category}</td>
                          <td className="px-3 py-3 text-center font-bold text-[#02345e]">{row.early}</td>
                          <td className="px-3 py-3 text-center text-gray-500">{row.standard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Developing countries list */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-gray-600">* Liste des pays en développement :</strong>{' '}
                    {developingCountries}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Training fees + Calculator */}
            <div className="space-y-6">

              {/* Training fees */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div
                  className="px-6 py-4"
                  style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}
                >
                  <h2 className="font-bold text-white text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                    Frais de session de formation
                  </h2>
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-gray-700 text-sm">
                    <strong>1 jour de formation :</strong>{' '}
                    <span className="text-[#02345e] font-bold">50€</span>
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>2 jours de formation :</strong>{' '}
                    <span className="text-[#02345e] font-bold">100€</span>
                  </p>
                </div>
              </div>

              {/* Fee Calculator */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div
                  className="px-6 py-4"
                  style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}
                >
                  <h2 className="font-bold text-white text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                    Calculer vos frais d&apos;inscription
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Conférence :</label>
                    <select
                      value={conferenceType}
                      onChange={e => setConferenceType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332]/30 bg-white"
                    >
                      <option value="0">Pas de participation (0€)</option>
                      <option value="50">Étudiant — Early Bird (50€)</option>
                      <option value="65">Étudiant — Standard (65€)</option>
                      <option value="120">Chercheur Maroc — Early Bird (120€)</option>
                      <option value="140">Chercheur Maroc — Standard (140€)</option>
                      <option value="200">Chercheur pays en dév. — Early Bird (200€)</option>
                      <option value="250">Chercheur pays en dév. — Standard (250€)</option>
                      <option value="350">Chercheur pays non en dév. — Early Bird (350€)</option>
                      <option value="450">Chercheur pays non en dév. — Standard (450€)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Formation :</label>
                    <select
                      value={trainingDays}
                      onChange={e => setTrainingDays(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332]/30 bg-white"
                    >
                      <option value="0">Pas de formation (0€)</option>
                      <option value="50">1 jour (50€)</option>
                      <option value="100">2 jours (100€)</option>
                    </select>
                  </div>

                  {/* Total */}
                  <div className="rounded-xl bg-[#f4f7f9] border border-gray-200 px-6 py-5 text-center">
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Total estimé</p>
                    <p
                      className="text-4xl font-extrabold text-[#02345e]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {total}<span className="text-[#058332]">€</span>
                    </p>
                    <p className="text-gray-400 text-xs mt-1">tarif early-bird indiqué — le tarif standard peut être supérieur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Payment Terms ===== */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border-l-4 border-[#058332] pl-8">
            <h2
              className="text-2xl font-bold text-[#02345e] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Modalités de paiement
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Par virement bancaire au compte suivant, en précisant dans l&apos;objet du virement{' '}
              <strong className="text-[#02345e]">SEA2026</strong> ainsi que vos{' '}
              <strong className="text-[#02345e]">nom et prénom</strong>.
            </p>

            {/* Bank details */}
            <div className="rounded-xl border border-gray-200 bg-[#f4f7f9] px-6 py-5 mb-4 space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-gray-900">IBAN = </span>
                <span className="text-[#058332] font-mono font-semibold">MA 64 350 810 0000000001812046 12</span>
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-gray-900">BIC/SWIFT = </span>
                <span className="text-[#058332] font-mono font-semibold">ABBMMAMC</span>
              </p>
            </div>

            {/* Note */}
            <div className="rounded-lg border border-dashed border-gray-300 bg-white px-5 py-3 text-sm text-gray-500 italic">
              Note : Le paiement des frais de conférence et de formation peut être effectué en un seul virement.
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div
        className="py-14 text-center"
        style={{ background: 'linear-gradient(to right, #02345e 0%, #058332 100%)' }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Prêt à s&apos;inscrire ?
          </h2>
          <p className="text-white/60 text-base mb-8">
            Réservez votre place pour la Semaine de l&apos;Eau 2026 dès maintenant.
          </p>
          <Link
            href="/registration-form"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#02345e] font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
          >
            S&apos;inscrire maintenant
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
