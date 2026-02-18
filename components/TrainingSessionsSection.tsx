'use client';

import Link from 'next/link';

export default function TrainingSessionsSection() {
  const trainers = [
    {
      name: 'Pr. Mounia Tahiri',
      title: 'Professeur, Faculté des Sciences',
      affiliation: 'Université Mohammed V, Rabat, Maroc',
      session: 'SESSION 1 : Télédétection Intégrée & Techniques Statistiques Multivariées',
      image: 'https://i.ibb.co/LXZ9sXvP/prof.jpg',
    },
    {
      name: 'Pr. Tarik Bouramtane',
      title: 'Professeur, Faculté des Sciences',
      affiliation: 'Université Mohammed V, Rabat, Maroc',
      session: 'SESSION 2 : Machine Learning pour la Cartographie des Impacts Hydrologiques',
      image: 'https://i.ibb.co/rGQVTwSP/eric.jpg',
    },
    {
      name: 'Pr. Christel Prudhomme',
      title: 'Experte en hydrologie globale',
      affiliation: 'Centre Européen de Prévision Météorologique, UK',
      session: 'SESSION 3 : Prévision Hydrologique & Système GloFAS',
      image: 'https://i.ibb.co/cS7tCXdt/Abel.png',
    },
    {
      name: 'Pr. Bertil Nlend',
      title: 'Maître de Conférences, Université de Douala',
      affiliation: 'Vice-Président AISH Afrique, Cameroun',
      session: 'SESSION 4 : Traceurs Isotopiques en Hydrologie',
      image: 'https://i.ibb.co/1YcqxHSb/bossa.jpg',
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
            Sessions de Formation
          </h2>
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
                <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
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
              href="/formations"
              className="inline-block px-8 py-3 font-bold text-sm no-underline transition-all hover:opacity-90"
              style={{
                backgroundColor: '#009966',
                color: '#FFFFFF',
                borderRadius: '8px',
              }}
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
