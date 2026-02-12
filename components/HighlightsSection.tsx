'use client';

import { useEffect, useRef, useState } from 'react';

export default function HighlightsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 sm:py-36 px-4 overflow-hidden" ref={sectionRef}>
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        background: `
          radial-gradient(ellipse 60% 50% at 10% 20%, rgba(5,191,219,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 90% 80%, rgba(212,168,67,0.15) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 50% 50%, rgba(0,255,202,0.1) 0%, transparent 60%)
        `
      }} />
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
            <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Pourquoi nous rejoindre</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Une expérience{' '}
            <span className="relative">
              <span className="gradient-text-gold">scientifique</span>
            </span>
            <br className="hidden sm:block" />
            <span className="text-white/90">unique en Afrique</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Trois jours d&apos;échanges, d&apos;innovation et de découvertes au cœur des enjeux de l&apos;eau
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 auto-rows-[180px] sm:auto-rows-[200px]">

          {/* Card 1 — Large accent card: Conférenciers */}
          <div
            className={`md:col-span-7 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#088395] to-[#05BFDB]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#05BFDB] to-[#00FFCA]" />
            {/* Big decorative number */}
            <div className="absolute -bottom-8 -right-4 text-[200px] font-black text-white/[0.06] leading-none select-none" style={{ fontFamily: 'var(--font-heading)' }}>
              50+
            </div>
            {/* Floating shapes */}
            <div className="absolute top-6 right-8 w-20 h-20 rounded-full border-2 border-white/10 group-hover:scale-125 group-hover:border-white/20 transition-all duration-700" />
            <div className="absolute bottom-16 right-20 w-10 h-10 rounded-xl bg-white/[0.06] group-hover:rotate-45 transition-all duration-700" />

            <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Conférenciers <br />Experts
                </h3>
              </div>
              <p className="text-white/70 text-base max-w-sm leading-relaxed">
                Plus de <strong className="text-white">50 chercheurs et praticiens</strong> renommés du monde entier partagent leurs découvertes.
              </p>
            </div>
          </div>

          {/* Card 2 — Publications */}
          <div
            className={`md:col-span-5 relative rounded-3xl overflow-hidden group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A843]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10 h-full flex items-center gap-5 p-7 sm:p-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A843] to-[#F0D78C] flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#D4A843]/30 transition-all duration-500">
                <svg className="w-8 h-8 text-[#0A2E4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  Publications Indexées
                </h3>
                <p className="text-white/45 text-sm">
                  Articles dans des revues <span className="text-[#F0D78C] font-semibold">SCOPUS</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Programme 3 jours */}
          <div
            className={`md:col-span-5 relative rounded-3xl overflow-hidden group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#05BFDB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10 h-full flex items-center gap-5 p-7 sm:p-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#05BFDB] to-[#00FFCA] flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#05BFDB]/30 transition-all duration-500">
                <svg className="w-8 h-8 text-[#0A2E4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  Programme de 3 jours
                </h3>
                <p className="text-white/45 text-sm">
                  Plénières, communications et <span className="text-[#00FFCA] font-semibold">networking</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 — Formations */}
          <div
            className={`md:col-span-4 relative rounded-3xl overflow-hidden group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A843]/80 to-[#B8860B] rounded-3xl" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#F0D78C] to-[#D4A843] rounded-3xl" />
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-white/10 group-hover:scale-110 transition-all duration-700" />

            <div className="relative z-10 h-full flex flex-col justify-center p-7 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E4D] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                Formations Certifiantes
              </h3>
              <p className="text-[#0A2E4D]/60 text-sm">
                2 jours de formation spécialisée avec certificat
              </p>
            </div>
          </div>

          {/* Card 5 — Cotonou */}
          <div
            className={`md:col-span-4 relative rounded-3xl overflow-hidden group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#088395]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10 h-full flex flex-col justify-center p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#088395] to-[#05BFDB] flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Cotonou, Bénin
                </h3>
              </div>
              <p className="text-white/40 text-sm">
                Palais des Congrès — lieu emblématique
              </p>
            </div>
          </div>

          {/* Card 6 — Stats highlight */}
          <div
            className={`md:col-span-4 relative rounded-3xl overflow-hidden group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFCA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-7 sm:p-8">
              <div className="text-5xl sm:text-6xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="gradient-text">1500</span>
                <span className="text-[#00FFCA]">+</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-wider">
                Participants attendus
              </p>
            </div>
          </div>
        </div>

        {/* Bottom stat pills */}
        <div className={`flex flex-wrap justify-center gap-4 mt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: '🌍', label: '25+ Pays' },
            { icon: '📊', label: '4 Thématiques' },
            { icon: '🎓', label: '8 Sessions de formation' },
            { icon: '📄', label: 'Publications SCOPUS' },
          ].map((pill, i) => (
            <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500 group cursor-default">
              <span className="text-lg group-hover:scale-125 transition-transform duration-500">{pill.icon}</span>
              <span className="text-white/60 text-sm font-medium group-hover:text-white/80 transition-colors">{pill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
