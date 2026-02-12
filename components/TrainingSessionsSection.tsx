'use client';

import { useEffect, useRef, useState } from 'react';

export default function TrainingSessionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sessions = [
    {
      title: 'Modélisation Hydrologique avec HEC-HMS',
      trainer: 'Prof. Éric Alamou',
      affiliation: 'INE — Université d\'Abomey-Calavi',
      description: 'Formation pratique sur la modélisation pluie-débit avec HEC-HMS, incluant la construction de modèles, le calage des paramètres et l\'analyse de sensibilité.',
      duration: '2 jours — 1-2 juin 2026',
      spots: '30 places',
    },
    {
      title: 'Télédétection et SIG pour les Ressources en Eau',
      trainer: 'Dr. Firmin Adandedji',
      affiliation: 'Université d\'Abomey-Calavi',
      description: 'Utilisation des outils de télédétection et des systèmes d\'information géographique pour l\'analyse et la gestion des ressources hydriques.',
      duration: '2 jours — 1-2 juin 2026',
      spots: '25 places',
    },
    {
      title: 'Modélisation Hydraulique avec HEC-RAS',
      trainer: 'Dr. Ing. Collaborateur International',
      affiliation: 'Partenaire FRIEND AOC',
      description: 'Simulation d\'écoulement en rivière, modélisation des inondations et analyse des zones à risque avec le logiciel HEC-RAS.',
      duration: '2 jours — 1-2 juin 2026',
      spots: '30 places',
    },
    {
      title: 'Analyse Statistique des Données Hydrologiques',
      trainer: 'Prof. Abel Afouda',
      affiliation: 'Université d\'Abomey-Calavi',
      description: 'Méthodes statistiques pour l\'analyse fréquentielle des événements hydrologiques extrêmes et la caractérisation des séries chronologiques.',
      duration: '2 jours — 1-2 juin 2026',
      spots: '25 places',
    },
  ];

  return (
    <section id="training" className="relative py-24 sm:py-32 px-4 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F9FF] to-white" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4A843]/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mx-auto w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
            Formations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2E4D] mt-4 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Sessions de{' '}
            <span className="gradient-text">Formation</span>
          </h2>
          <p className="text-[#0A2E4D]/60 text-lg max-w-2xl mx-auto">
            Formations pratiques certifiantes, 1-2 juin 2026
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {sessions.map((session, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-700 ${isOpen
                    ? 'bg-white shadow-xl shadow-[#088395]/10 border border-[#05BFDB]/20'
                    : 'bg-white/80 border border-[#E0F7FA] hover:border-[#05BFDB]/20 hover:shadow-md hover:shadow-[#088395]/5'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-extrabold transition-all duration-500 ${isOpen
                      ? 'bg-gradient-to-br from-[#088395] to-[#05BFDB] text-white shadow-lg shadow-[#088395]/30'
                      : 'bg-[#F0F9FF] text-[#088395] group-hover:bg-[#088395]/10'
                    }`} style={{ fontFamily: 'var(--font-heading)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {session.title}
                    </h3>
                    {!isOpen && (
                      <p className="text-[#088395] text-sm mt-0.5">{session.trainer}</p>
                    )}
                  </div>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#088395]/10 rotate-180' : 'bg-[#F0F9FF] group-hover:bg-[#088395]/10'
                    }`}>
                    <svg className="w-5 h-5 text-[#088395]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                {/* Content */}
                <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 sm:px-6 pb-6 pt-0">
                    <div className="border-t border-[#E0F7FA] pt-5">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#088395]/8 text-[#088395] text-xs font-semibold">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          {session.trainer}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4A843]/8 text-[#D4A843] text-xs font-semibold">
                          ⏱ {session.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00FFCA]/8 text-[#088395] text-xs font-semibold">
                          👥 {session.spots}
                        </span>
                      </div>
                      <p className="text-[#0A2E4D]/60 text-sm leading-relaxed mb-1">
                        {session.affiliation}
                      </p>
                      <p className="text-[#0A2E4D]/75 text-sm leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="/training" className="btn-primary-water inline-flex group">
            S&apos;inscrire aux formations
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
