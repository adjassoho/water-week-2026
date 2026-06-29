'use client';

import Link from 'next/link';

export default function TrainingSessionsSection() {
  const trainers = [
    {
      name: 'Débat Croisé IA vs. Méthodes Classiques',
      title: 'Session Spéciale 1',
      affiliation: 'Hydrology, Agriculture & Environmental Science',
      session: 'Comparaison des approches IA et méthodes classiques pour la prévision des crues, sécheresses et rendements agricoles',
      image: null,
    },
    {
      name: 'UNESCO-IHE / WDPP',
      title: 'Session Spéciale 2',
      affiliation: 'IHE Delft Institute for Water Education',
      session: 'Water and Development Partnership Programme — Projets, financement et synergies Afrique-Europe',
      image: null,
    },
    {
      name: 'Compétition d\'Innovation PriMI',
      title: 'Événement phare',
      affiliation: '10 innovations sélectionnées — Jury de haut niveau',
      session: 'Pitch public (10 min + Q&R) le 22 octobre 2026. 3 prix décernés à la cérémonie de clôture.',
      image: null,
    },
    {
      name: 'Stands d\'Innovation',
      title: 'Exposition',
      affiliation: 'Espace dédié aux innovations numériques',
      session: '20+ stands présentant des solutions technologiques pour l\'eau, l\'assainissement et l\'agriculture',
      image: null,
    },
  ];

  return (
    <section id="training" className="py-24 font-sans" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title Banner */}
        <div
          className="text-center py-4 mb-12 rounded-lg"
          style={{
            background: 'linear-gradient(to right, #009966, #003366)',
          }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider">
            Sessions Spéciales & Innovation
          </h2>
          <p className="text-white/80 text-sm mt-1">3ème Édition — 20-22 Octobre 2026, Cotonou</p>
        </div>

        {/* Trainers List Card */}
        <div
          className="rounded-xl p-8"
          style={{ backgroundColor: '#f0f4f8', border: '1px solid #e2e8f0' }}
        >
          <h3 className="text-2xl font-extrabold text-center mb-8" style={{ color: '#003366' }}>
            Formateurs
          </h3>

          <div className="space-y-0">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="flex items-start gap-5 py-6"
                style={{ borderBottom: index < trainers.length - 1 ? '1px solid #e2e8f0' : 'none' }}
              >
                {/* Photo */}
                <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden bg-[#02345e]/10 flex items-center justify-center">
                  {trainer.image ? (
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl">👤</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4 className="font-bold text-lg" style={{ color: '#003366' }}>
                    {trainer.name}
                  </h4>
                  <p className="text-sm" style={{ color: '#334155' }}>{trainer.title}</p>
                  <p className="text-sm" style={{ color: '#64748b' }}>{trainer.affiliation}</p>
                  <p className="text-sm font-bold mt-1" style={{ color: '#1e293b' }}>
                    {trainer.session}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="text-center mt-8">
            <Link
              href="/program"
              className="inline-block px-8 py-3 font-bold text-sm no-underline transition-all hover:opacity-90"
              style={{
                backgroundColor: '#009966',
                color: '#FFFFFF',
                borderRadius: '8px',
              }}
            >
              Voir le programme complet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
