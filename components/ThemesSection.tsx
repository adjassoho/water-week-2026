'use client';

import { useEffect, useRef, useState } from 'react';

export default function ThemesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const themes = [
    {
      number: '01',
      title: 'Hydrologie de surface et souterraine',
      description: 'Comprendre les dynamiques des ressources en eau de surface et souterraine en Afrique, les impacts du changement climatique et les stratégies d\'adaptation.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      gradient: 'from-[#088395] to-[#05BFDB]',
      light: 'bg-[#088395]/10',
    },
    {
      number: '02',
      title: 'Eau et Assainissement (WASH)',
      description: 'Innovations dans l\'assainissement, l\'accès à l\'eau potable, la gestion des eaux usées et les approches communautaires durables.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      gradient: 'from-[#0A4D68] to-[#088395]',
      light: 'bg-[#0A4D68]/10',
    },
    {
      number: '03',
      title: 'Énergie et Environnement',
      description: 'Nexus eau-énergie, hydroélectricité durable, impact environnemental et biodiversité des écosystèmes aquatiques.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      gradient: 'from-[#D4A843] to-[#F0D78C]',
      light: 'bg-[#D4A843]/10',
    },
    {
      number: '04',
      title: 'Gouvernance et Gestion de l\'eau',
      description: 'Politiques et cadres juridiques, gestion intégrée des ressources en eau (GIRE) et coopération transfrontalière.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      gradient: 'from-[#05BFDB] to-[#00FFCA]',
      light: 'bg-[#05BFDB]/10',
    },
  ];

  return (
    <section id="themes" className="relative py-24 sm:py-32 px-4 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#05BFDB]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[#D4A843]/8 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label-light mx-auto w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            Axes de recherche
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Thématiques{' '}
            <span className="gradient-text-gold">Principales</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Explorez nos quatre axes de recherche au cœur des enjeux de l&apos;eau en Afrique
          </p>
        </div>

        {/* Theme Cards 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08]" />
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700`} />

              <div className="relative z-10 p-7 sm:p-9">
                <div className="flex items-start gap-5">
                  {/* Number + Icon */}
                  <div className="flex-shrink-0">
                    <div className="text-white/8 text-6xl font-black absolute top-3 right-5" style={{ fontFamily: 'var(--font-heading)' }}>
                      {theme.number}
                    </div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      {theme.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className={`inline-flex px-3 py-1 rounded-full mb-3 text-xs font-bold uppercase tracking-widest`}>
                      <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                        Axe {theme.number}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                      {theme.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
