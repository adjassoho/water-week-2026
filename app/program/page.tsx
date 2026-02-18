'use client';

import Link from 'next/link';
import FooterSection from '@/components/FooterSection';
import ProgramTabs from '@/components/ProgramTabs';

const trainingDays = [
  {
    day: 'Vendredi 10 juillet',
    sessions: [
      { num: 1, title: 'Télédétection Intégrée et Techniques Statistiques Multivariées' },
      { num: 2, title: 'Apprentissage Automatique pour la Cartographie des Impacts Hydrologiques' },
      { num: 3, title: 'Intégration des Données LiDAR pour la Surveillance à Haute Résolution' },
      { num: 4, title: 'Prévision Hydrologique et GloFAS — Copernicus' },
    ],
  },
  {
    day: 'Samedi 11 juillet',
    sessions: [
      { num: 5, title: 'Traceurs Géochimiques en Hydrologie et Écohydrologie' },
      { num: 6, title: 'Imagerie Radar pour la Surveillance des Rivières Non Jaugées' },
      { num: 7, title: 'Apprentissage Profond pour la Prédiction des Séries Temporelles' },
      { num: 8, title: 'LiDAR et Photogrammétrie pour la Numérisation du Terrain' },
    ],
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* ===== Hero Section ===== */}
      <div
        className="relative py-20 bg-[#058332] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #058332 0%, #036025 100%)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            PROGRAMME
          </h1>
          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full mb-6" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Découvrez le planning détaillé des conférences, ateliers et événements de la Semaine de l'Eau 2026.
          </p>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#303a4d] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              SEA 2026 : Programme de la Conférence
            </h2>
            <p className="text-gray-500">
              6 — 9 juillet 2026 · Amphithéâtre Bel Mahi & Auditoriums
            </p>
          </div>

          <ProgramTabs />
        </div>
      </div>

      {/* ===== Training Section ===== */}
      <div className="py-16 bg-[#f9fafb] border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#303a4d] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              SEA 2026 : Programme de Formation
            </h2>
            <p className="text-gray-500">
              10 — 11 juillet 2026 · Sessions de Formation Spécialisées
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-8">
            {trainingDays.map((day, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-[#303a4d]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {day.day}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {day.sessions.map((session, j) => (
                    <div key={j} className="flex flex-col md:flex-row items-start md:items-center p-4 rounded-lg bg-[#f0f7ff] border-l-4 border-[#1d5a8c] hover:bg-[#e0efff] transition-colors">
                      <div className="min-w-[120px] font-bold text-[#1d5a8c] mb-2 md:mb-0">
                        Session {session.num}
                      </div>
                      <div className="hidden md:block w-px h-6 bg-[#1d5a8c]/20 mx-6"></div>
                      <div className="font-semibold text-[#303a4d]">
                        {session.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
