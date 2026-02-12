'use client';

import { useEffect, useRef, useState } from 'react';

export default function SpeakersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const speakers = [
    {
      name: 'Prof. Daouda MAMA',
      title: 'Directeur INE/UAC',
      affiliation: 'Institut National de l\'Eau — Université d\'Abomey-Calavi',
      session: 'Hydrologie & Ressources en Eau',
      bio: 'Expert reconnu en hydrologie et gestion des ressources en eau en Afrique de l\'Ouest. Directeur de l\'Institut National de l\'Eau.',
      image: 'https://i.ibb.co/LXZ9sXvP/prof.jpg',
      color: 'from-[#088395] to-[#05BFDB]',
    },
    {
      name: 'Prof. Éric Alamou',
      title: 'Enseignant-Chercheur',
      affiliation: 'INE — Université d\'Abomey-Calavi',
      session: 'Modélisation Hydrologique',
      bio: 'Spécialiste en modélisation pluie-débit et gestion intégrée des ressources en eau, avec une expertise en HEC-HMS.',
      image: 'https://i.ibb.co/rGQVTwSP/eric.jpg',
      color: 'from-[#0A4D68] to-[#088395]',
    },
    {
      name: 'Prof. Abel Afouda',
      title: 'Professeur Titulaire',
      affiliation: 'Université d\'Abomey-Calavi',
      session: 'Sciences de l\'Eau',
      bio: 'Professeur titulaire spécialisé dans les sciences de l\'eau et l\'impact du changement climatique sur les ressources hydriques.',
      image: 'https://i.ibb.co/cS7tCXdt/Abel.png',
      color: 'from-[#D4A843] to-[#F0D78C]',
    },
    {
      name: 'Prof. Bossa Y. Aymar',
      title: 'Professeur',
      affiliation: 'Institut National de l\'Eau (INE) — Université d\'Abomey-Calavi',
      session: 'Gestion Intégrée des Ressources en Eau',
      bio: 'Expert en gestion intégrée des ressources en eau et modélisation environnementale, avec une spécialisation dans l\'hydrologie opérationnelle et la gestion de l\'eau agricole.',
      image: 'https://i.ibb.co/1YcqxHSb/bossa.jpg',
      color: 'from-[#05BFDB] to-[#00FFCA]',
    },
  ];

  const activeSpeaker = speakers[activeIndex];

  return (
    <section id="speakers" className="relative py-28 sm:py-36 px-4 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FDFF] to-[#F0F9FF]" />
      {/* Floating blobs */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #088395 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mx-auto w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Intervenants
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0A2E4D] mt-4 mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
            Nos Intervenants{' '}
            <span className="gradient-text">Clés</span>
          </h2>
          <p className="text-[#0A2E4D]/50 text-lg max-w-2xl mx-auto">
            Des experts reconnus dans le domaine de la recherche sur l&apos;eau en Afrique
          </p>
        </div>

        {/* Featured Speaker + Selector */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Featured Card — Large */}
          <div className="lg:col-span-3 relative group">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A2E4D] to-[#0A4D68] min-h-[480px] sm:min-h-[520px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={activeSpeaker.image}
                  alt={activeSpeaker.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E4D] via-[#0A2E4D]/60 to-[#0A2E4D]/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4D]/50 to-transparent" />
              </div>

              {/* Mesh decorative effect */}
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
                {/* Session badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${activeSpeaker.color} text-white text-xs font-bold uppercase tracking-widest shadow-lg`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {activeSpeaker.session}
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {activeSpeaker.name}
                </h3>
                <p className="text-[#00FFCA] text-lg font-semibold mb-3">{activeSpeaker.title}</p>
                <p className="text-white/50 text-sm mb-4 max-w-md">{activeSpeaker.affiliation}</p>
                <p className="text-white/60 text-sm leading-relaxed max-w-lg">{activeSpeaker.bio}</p>

                {/* Line accent */}
                <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${activeSpeaker.color} mt-6`} />
              </div>
            </div>
          </div>

          {/* Speaker List — Right sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {speakers.map((speaker, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-2xl overflow-hidden text-left transition-all duration-500 group/card ${isActive
                    ? 'ring-2 ring-[#05BFDB]/40 shadow-xl shadow-[#088395]/10'
                    : 'hover:shadow-lg hover:shadow-[#088395]/8 hover:-translate-y-1'
                    }`}
                >
                  {/* Card background */}
                  <div className={`absolute inset-0 transition-all duration-500 ${isActive
                    ? 'bg-gradient-to-r from-[#0A2E4D] to-[#0A4D68]'
                    : 'bg-white border border-[#E0F7FA]/80'
                    }`} />

                  {/* Active indicator bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-gradient-to-b ${speaker.color} transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'
                    }`} />

                  <div className="relative z-10 flex items-center gap-4 p-4 sm:p-5">
                    {/* Avatar */}
                    <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden ring-2 transition-all duration-500 ${isActive ? 'ring-[#05BFDB]/50' : 'ring-[#E0F7FA]'
                      }`}>
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                            target.parentElement.style.background = `linear-gradient(135deg, #088395, #05BFDB)`;
                            target.parentElement.innerHTML = `<span style="color:white;font-weight:bold;font-size:18px">${speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>`;
                          }
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-bold truncate transition-colors duration-500 ${isActive ? 'text-white' : 'text-[#0A2E4D]'
                        }`} style={{ fontFamily: 'var(--font-heading)' }}>
                        {speaker.name}
                      </h4>
                      <p className={`text-xs truncate transition-colors duration-500 ${isActive ? 'text-[#00FFCA]' : 'text-[#088395]'
                        }`}>
                        {speaker.title}
                      </p>
                      <p className={`text-xs truncate mt-0.5 transition-colors duration-500 ${isActive ? 'text-white/40' : 'text-[#0A2E4D]/40'
                        }`}>
                        {speaker.session}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-white/10 text-white' : 'bg-[#F0F9FF] text-[#088395] group-hover/card:bg-[#088395]/10'
                      }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* See All CTA */}
            <a
              href="/speakers"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#088395] to-[#05BFDB] text-white font-bold text-sm hover:shadow-xl hover:shadow-[#088395]/20 hover:-translate-y-1 transition-all duration-500 group"
            >
              Voir tous les intervenants
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
