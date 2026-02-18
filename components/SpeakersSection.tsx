'use client';

import Link from 'next/link';
import CollapsibleSection from './CollapsibleSection';

export default function SpeakersSection() {
  const speakers = [
    {
      name: 'Prof. Daouda MAMA',
      title: 'Directeur INE/UAC',
      affiliation: 'Institut National de l\'Eau',
      image: 'https://i.ibb.co/LXZ9sXvP/prof.jpg',
    },
    {
      name: 'Prof. Éric Alamou',
      title: 'Enseignant-Chercheur',
      affiliation: 'Université d\'Abomey-Calavi',
      image: 'https://i.ibb.co/rGQVTwSP/eric.jpg',
    },
    {
      name: 'Prof. Abel Afouda',
      title: 'Professeur Titulaire',
      affiliation: 'Université d\'Abomey-Calavi',
      image: 'https://i.ibb.co/cS7tCXdt/Abel.png',
    },
    {
      name: 'Prof. Bossa Y. Aymar',
      title: 'Professeur',
      affiliation: 'Institut National de l\'Eau (INE)',
      image: 'https://i.ibb.co/1YcqxHSb/bossa.jpg',
    },
  ];

  return (
    <CollapsibleSection
      id="speakers"
      title="Intervenants Principaux"
      defaultOpen={true}
    >
      <div className="py-16 px-0" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Speaker Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(to right bottom, #003366, #058332)',
                borderRadius: '12px',
                padding: '27px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                color: '#F9F9F9',
              }}
            >
              {/* Circular Photo */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-white/30 mb-5">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold mb-1" style={{ color: '#FFFFFF' }}>
                {speaker.name}
              </h3>

              {/* Title */}
              <p className="text-sm font-semibold mb-1" style={{ color: '#a7f3d0' }}>
                {speaker.title}
              </p>

              {/* Affiliation */}
              <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {speaker.affiliation}
              </p>

              {/* More Details Button */}
              <Link
                href="/speakers"
                className="mt-auto px-5 py-2 text-xs font-bold uppercase tracking-wider no-underline transition-all hover:opacity-90"
                style={{
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: '4px',
                  color: '#FFFFFF',
                }}
              >
                Plus de détails
              </Link>
            </div>
          ))}
        </div>
      </div>
    </CollapsibleSection>
  );
}
