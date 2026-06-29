'use client';

import { useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

const benefits = [
  'Unlimited sessions',
  'Coffee breaks',
  '3 lunches',
  'Gala dinner',
  'IAHS membership',
];

const feeRows = [
  { category: 'Students (all countries)', early: '50€', standard: '65€' },
  { category: 'Moroccan Researchers', early: '120€', standard: '140€' },
  { category: 'Researchers from Developing Countries*', early: '200€', standard: '250€' },
  { category: 'Researchers from Developed Countries', early: '350€', standard: '450€' },
];

const developingCountries =
  'Afghanistan, Albania, Algeria, Angola, Armenia, Azerbaijan, Bangladesh, Belarus, Belize, Benin, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Burkina Faso, Burundi, Cabo Verde, Cambodia, Cameroon, Central African Republic, Chad, Colombia, Comoros, Congo, Côte d\'Ivoire, Democratic Republic of the Congo, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Ethiopia, Fiji, Gabon, Gambia, Georgia, Ghana, Guatemala, Guinea, Guinea-Bissau, Haiti, Honduras, India, Indonesia, North Macedonia, Iran, Iraq, Jamaica, Jordan, Kenya, Lesotho, Liberia, Libya, Madagascar, Malawi, Mali, Marshall Islands, Mauritania, Micronesia, Moldova, Mongolia, Morocco, Mozambique, Myanmar, Namibia, Nepal, Nicaragua, Niger, Nigeria, Pakistan, Papua New Guinea, Paraguay, Peru, Philippines, Rwanda, Saint Vincent and the Grenadines, Samoa, Sao Tome and Principe, Senegal, Serbia, Sierra Leone, Solomon Islands, Somalia, South Africa, South Sudan, Sri Lanka, Palestine, Sudan, Suriname, Syria, Tajikistan, Tanzania, Thailand, Timor-Leste, Togo, Tonga, Tunisia, Turkmenistan, Tuvalu, Uganda, Vanuatu, Venezuela, Viet Nam, Yemen, Zambia, Zimbabwe';

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
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Your registration opens doors to a complete conference experience
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
            Training sessions are optional and subject to modest additional fees.
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
                <h2 className="font-bold text-white text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Conference Registration Fees
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4 italic">
                  Participation will only be confirmed once registration fees are paid.
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
                    <strong className="text-gray-600">* Developing countries list:</strong>{' '}
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
                  <h2 className="font-bold text-white text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Training Session Fees
                  </h2>
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-gray-700 text-sm">
                    <strong>1 day of training:</strong>{' '}
                    <span className="text-[#02345e] font-bold">50€</span>
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>2 days of training:</strong>{' '}
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
                  <h2 className="font-bold text-white text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Calculate Your Registration Fees
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Conference:</label>
                    <select
                      value={conferenceType}
                      onChange={e => setConferenceType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332]/30 bg-white"
                    >
                      <option value="0">No participation (0€)</option>
                      <option value="50">Student — Early Bird (50€)</option>
                      <option value="65">Student — Standard (65€)</option>
                      <option value="120">Moroccan Researcher — Early Bird (120€)</option>
                      <option value="140">Moroccan Researcher — Standard (140€)</option>
                      <option value="200">Researcher from Dev. Country — Early Bird (200€)</option>
                      <option value="250">Researcher from Dev. Country — Standard (250€)</option>
                      <option value="350">Researcher from Developed Country — Early Bird (350€)</option>
                      <option value="450">Researcher from Developed Country — Standard (450€)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Training:</label>
                    <select
                      value={trainingDays}
                      onChange={e => setTrainingDays(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#058332]/30 bg-white"
                    >
                      <option value="0">No training (0€)</option>
                      <option value="50">1 day (50€)</option>
                      <option value="100">2 days (100€)</option>
                    </select>
                  </div>

                  {/* Total */}
                  <div className="rounded-xl bg-[#f4f7f9] border border-gray-200 px-6 py-5 text-center">
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Estimated Total</p>
                    <p
                      className="text-4xl font-extrabold text-[#02345e]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {total}<span className="text-[#058332]">€</span>
                    </p>
                    <p className="text-gray-400 text-xs mt-1">early-bird rate shown — standard rate may be higher</p>
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
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Payment Terms
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              By bank transfer to the following account, specifying <strong className="text-[#02345e]">SEA2026</strong> as well as your <strong className="text-[#02345e]">full name</strong> (First &amp; Last Name) in the payment reference.
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
              Note: Payment for both conference and training fees can be made in a single transfer.
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
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Ready to Register?
          </h2>
          <p className="text-white/60 text-base mb-8">
            Secure your spot for Water Week 2026 today.
          </p>
          <Link
            href="/registration-form"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#02345e] font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
          >
            Register Now
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
