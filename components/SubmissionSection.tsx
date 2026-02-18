'use client';

import Link from 'next/link';
import CollapsibleSection from './CollapsibleSection';

export default function SubmissionSection() {
  return (
    <CollapsibleSection
      id="submission"
      title="Soumission"
      defaultOpen={false}
    >
      <div className="py-16 px-4 sm:px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Submission Guidelines */}
            <div>
              <h3 className="text-3xl font-extrabold mb-4" style={{ color: '#003366' }}>
                Consignes de Soumission
              </h3>
              <span
                className="inline-block px-4 py-1.5 mb-6 font-bold text-sm rounded"
                style={{ backgroundColor: '#009966', color: '#FFFFFF' }}
              >
                Français & Anglais
              </span>
              <p className="mb-8 leading-relaxed" style={{ color: '#334155', fontSize: '15px' }}>
                Nous accueillons les contributions de recherche originales sur tous les aspects
                de l&apos;eau et de l&apos;assainissement en Afrique.
              </p>

              {/* Oral Presentations */}
              <div
                className="p-6 mb-6 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #003366, #058332)', color: '#FFFFFF' }}
              >
                <h4 className="text-xl font-bold mb-3" style={{ color: '#a7f3d0' }}>
                  Communications Orales
                </h4>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Présentations de 15 minutes suivies de 5 minutes de discussion
                </p>
                <div
                  className="p-4 rounded"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Conditions :<br />
                    Résumé : 300–500 mots
                  </p>
                </div>
              </div>

              {/* Poster Presentations */}
              <div
                className="p-6 mb-6 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #003366, #058332)', color: '#FFFFFF' }}
              >
                <h4 className="text-xl font-bold mb-3" style={{ color: '#a7f3d0' }}>
                  Présentations Poster
                </h4>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Présentations visuelles lors de sessions poster dédiées
                </p>
                <div
                  className="p-4 rounded"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Conditions :<br />
                    Résumé : 300–500 mots, Poster : format A0 (841 × 1189 mm)
                  </p>
                </div>
              </div>

              <Link
                href="/submission"
                className="inline-block px-6 py-3 font-bold text-sm no-underline transition-all hover:opacity-90"
                style={{
                  border: '2px solid #003366',
                  borderRadius: '20px',
                  color: '#003366',
                }}
              >
                Plus de détails
              </Link>
            </div>

            {/* Right: Publication Opportunities + Important Dates */}
            <div>
              {/* Publication */}
              <div
                className="p-8 rounded-lg mb-8 flex items-start gap-6"
                style={{ border: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}
              >
                <div
                  className="shrink-0 w-24 h-28 rounded-lg flex flex-col items-center justify-center text-center"
                  style={{ background: 'linear-gradient(135deg, #003366, #058332)', color: '#FFFFFF' }}
                >
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Publication dans
                  </span>
                  <span className="text-sm font-extrabold mt-1">REVUES SCOPUS</span>
                </div>
                <div>
                  <h4 className="text-xl font-extrabold mb-3" style={{ color: '#003366' }}>
                    Opportunités de Publication
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>
                    Les auteurs sélectionnés seront invités à soumettre un article complet pour
                    publication dans des numéros spéciaux de revues indexées SCOPUS, telles que
                    <em> Hydrological Sciences Journal</em>, <em>Proceedings of IAHS</em>…
                  </p>
                </div>
              </div>

              {/* Important Dates */}
              <div className="p-8 rounded-lg" style={{ backgroundColor: '#f0f4f8' }}>
                <h4 className="text-2xl font-extrabold mb-2 text-center" style={{ color: '#003366' }}>
                  📅 Dates Importantes
                </h4>
                <p className="text-sm text-center mb-6" style={{ color: '#64748b' }}>
                  Notez ces dates clés pour la soumission et l&apos;inscription
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { date: '30 Mars 2026', label: 'Date limite de soumission des résumés' },
                    { date: '15 Avril 2026', label: 'Notification d\'acceptation (Oral/Poster)' },
                    { date: '30 Avril 2026', label: 'Date limite d\'inscription anticipée' },
                    { date: '20 Juin 2026', label: 'Date limite d\'inscription standard' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg text-center"
                      style={{
                        backgroundColor: '#ffffff',
                        borderLeft: '4px solid #009966',
                      }}
                    >
                      <div className="font-extrabold mb-1" style={{ color: '#009966', fontSize: '16px' }}>
                        {item.date}
                      </div>
                      <div className="text-xs" style={{ color: '#334155' }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}
