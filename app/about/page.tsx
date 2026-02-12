'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: contextRef, isVisible: contextVisible } = useScrollReveal();
  const { ref: themesRef, isVisible: themesVisible } = useScrollReveal();
  const { ref: emergingRef, isVisible: emergingVisible } = useScrollReveal();
  const { ref: techRef, isVisible: techVisible } = useScrollReveal();
  const { ref: orgsRef, isVisible: orgsVisible } = useScrollReveal();

  const organizations = [
    { abbr: 'C2EA', full: 'Centre d\'Excellence Africain pour l\'Eau et l\'Assainissement', logo: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png', color: 'from-[#088395] to-[#05BFDB]' },
    { abbr: 'INE/UAC', full: 'Institut National de l\'Eau — Université d\'Abomey-Calavi', logo: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png', color: 'from-[#0A4D68] to-[#088395]' },
    { abbr: 'IAHS', full: 'International Association of Hydrological Sciences', logo: 'https://i.ibb.co/XZW7BHKz/jhhv.png', color: 'from-[#05BFDB] to-[#00FFCA]' },
    { abbr: 'FRIEND AOC', full: 'Flow Regimes From International Experimental and Network Data', logo: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg', color: 'from-[#D4A843] to-[#F0D78C]' },
    { abbr: 'UNESCO', full: 'Intergovernmental Hydrological Programme', logo: null, color: 'from-[#088395] to-[#0A4D68]' },
    { abbr: 'IRD', full: 'Institut de Recherche pour le Développement, France', logo: null, color: 'from-[#0A2E4D] to-[#088395]' },
    { abbr: 'Min. de l\'Eau', full: 'Ministère de l\'Eau et de l\'Assainissement, Bénin', logo: null, color: 'from-[#05BFDB] to-[#088395]' },
    { abbr: 'UAC', full: 'Université d\'Abomey-Calavi, Bénin', logo: null, color: 'from-[#D4A843] to-[#B8860B]' },
  ];

  const thematicAreas = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      title: 'Hydrologie des bassins',
      desc: 'De l\'étude des grands bassins fluviaux transfrontaliers aux petits bassins versants, incluant des approches multi-échelles adaptées à la modélisation physique.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      title: 'Processus hydrologiques',
      desc: 'Analyse des dynamiques locales à fine échelle, essentielles pour le développement de modèles à haute résolution.',
    },
  ];

  const emergingThemes = [
    { title: 'Qualité de l\'eau et santé', desc: 'Évaluation des risques microbiologiques et méthodes de traitement innovantes.', icon: '🧪' },
    { title: 'Écohydrologie', desc: 'Intégration des processus écologiques dans la gestion intégrée des ressources en eau.', icon: '🌿' },
    { title: 'Eaux souterraines', desc: 'Quantification des ressources, problèmes de qualité liés à l\'agriculture, et rôle dans l\'approvisionnement.', icon: '💧' },
    { title: 'Sédiments et érosion', desc: 'Impacts sur les réservoirs, le cycle du carbone et la vulnérabilité des zones côtières.', icon: '🏔️' },
  ];

  const techInnovations = [
    { title: 'Télédétection et IA', desc: 'Observation, modélisation et prévision hydrologiques par intelligence artificielle.', icon: '🛰️' },
    { title: 'Capteurs low-cost', desc: 'Développement de réseaux de surveillance décentralisés et science citoyenne.', icon: '📡' },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== Hero Banner ===== */}
      <div ref={heroRef} className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-30" style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 80%, rgba(5,191,219,0.3) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 80% 20%, rgba(212,168,67,0.15) 0%, transparent 60%)
          `
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-[#00FFCA]">À propos</span>
            </div>

            <div className="grid md:grid-cols-5 gap-10 items-end">
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">2ème Édition</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  À propos de la{' '}
                  <span className="gradient-text-gold">Conférence</span>
                </h1>
                <p className="text-white/50 text-lg sm:text-xl max-w-xl leading-relaxed">
                  De la Recherche à l&apos;Innovation et au Transfert de Technologies
                </p>
              </div>
              {/* Key Facts */}
              <div className="md:col-span-2 flex flex-col gap-3">
                {[
                  { label: 'Date', value: '3 — 5 juin 2026', icon: '📅' },
                  { label: 'Lieu', value: 'Palais des Congrès, Cotonou', icon: '📍' },
                  { label: 'Participants', value: '1500+ attendus', icon: '👥' },
                ].map((fact, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/[0.05] border border-white/[0.06] backdrop-blur-sm">
                    <span className="text-xl">{fact.icon}</span>
                    <div>
                      <div className="text-white/40 text-xs font-bold uppercase tracking-wider">{fact.label}</div>
                      <div className="text-white text-sm font-semibold">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="text-white">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
            <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ===== Context Section ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[120px]" />

        <div ref={contextRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
          <div className={`grid md:grid-cols-12 gap-12 lg:gap-20 transition-all duration-1000 ${contextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Sidebar label */}
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <div className="section-label w-fit mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Contexte
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Contexte{' '}
                  <span className="gradient-text">scientifique</span>
                </h2>
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#088395] to-[#05BFDB]" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-8 space-y-6">
              <p className="text-[#0A2E4D]/80 text-base sm:text-lg leading-relaxed">
                En Afrique, les ressources en eau sont soumises à une pression croissante en raison du <strong className="text-[#088395]">changement climatique</strong>, de la croissance démographique rapide et du développement économique accéléré. Une compréhension détaillée des climats, des régimes hydrologiques et de leur variabilité spatiale et temporelle est un prérequis essentiel pour toute stratégie de gestion durable.
              </p>

              <p className="text-[#0A2E4D]/65 text-base leading-relaxed">
                Les éditions précédentes des conférences internationales tenues à <strong>Hammamet (2015)</strong>, <strong>Dakar (2016)</strong>, <strong>Alger (2018)</strong> et <strong>Cotonou (2021)</strong> ont contribué à la structuration d&apos;un réseau de recherche hydrologique africain axé sur les rivières et cours d&apos;eau du continent.
              </p>

              <p className="text-[#0A2E4D]/65 text-base leading-relaxed">
                Ce réseau, soutenu par le programme <span className="text-[#088395] font-semibold">FRIEND-Water de l&apos;UNESCO</span> et l&apos;<span className="text-[#088395] font-semibold">Association Internationale des Sciences Hydrologiques (IAHS)</span>, a permis le partage de méthodes, d&apos;outils et de données, et a favorisé une meilleure compréhension des régimes hydrologiques tropicaux et semi-arides.
              </p>

              {/* Callout */}
              <div className="rounded-2xl bg-gradient-to-r from-[#0A2E4D] to-[#0A4D68] p-6 sm:p-8 mt-8">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#00FFCA] font-bold">💡</span>{' '}
                  Cette deuxième édition se déroule dans un environnement scientifique international en évolution, marqué par le renforcement de la coopération régionale et internationale, améliorant la <strong className="text-[#00FFCA]">visibilité de la recherche hydrologique africaine</strong> au sein de la communauté scientifique mondiale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Thematic Areas ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />

        <div ref={themesRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
          <div className={`mb-14 transition-all duration-1000 ${themesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label w-fit mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z" />
              </svg>
              Domaines de recherche
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Focus{' '}
              <span className="gradient-text">scientifique</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {thematicAreas.map((area, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl overflow-hidden border border-[#E0F7FA] bg-white hover:border-[#05BFDB]/30 hover:shadow-xl hover:shadow-[#088395]/8 hover:-translate-y-2 transition-all duration-700 ${themesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                <div className="p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#088395] to-[#05BFDB] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#088395]/30 transition-all duration-500">
                    {area.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2E4D] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {area.title}
                  </h3>
                  <p className="text-[#0A2E4D]/60 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Emerging Themes ===== */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }} />

        <div ref={emergingRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
          <div className={`mb-14 transition-all duration-1000 ${emergingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label-light w-fit mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              Thèmes émergents
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Thèmes{' '}
              <span className="gradient-text-gold">prioritaires</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {emergingThemes.map((theme, i) => (
              <div
                key={i}
                className={`group glass-card p-7 hover:bg-white/[0.1] transition-all duration-700 hover:-translate-y-2 ${emergingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500">{theme.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {theme.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Tech Innovations ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#05BFDB]/[0.03] rounded-full blur-[100px]" />

        <div ref={techRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Left Text */}
            <div className="flex flex-col justify-center">
              <div className="section-label w-fit mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Innovation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Innovations{' '}
                <span className="gradient-text">technologiques</span>
              </h2>
              <p className="text-[#0A2E4D]/60 text-base leading-relaxed">
                Développement d&apos;approches innovantes pour l&apos;observation, la modélisation et la prévision hydrologiques en Afrique.
              </p>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-5">
              {techInnovations.map((item, i) => (
                <div
                  key={i}
                  className={`group relative rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-white p-7 border border-[#E0F7FA] hover:border-[#05BFDB]/30 hover:shadow-lg hover:shadow-[#088395]/8 transition-all duration-500 ${techVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                  style={{ transitionDelay: `${300 + i * 200}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A2E4D] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </h3>
                      <p className="text-[#0A2E4D]/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Organizations ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div ref={orgsRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
          <div className={`text-center mb-14 transition-all duration-1000 ${orgsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mx-auto w-fit mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              Partenaires
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Organisé par les{' '}
              <span className="gradient-text">meilleurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {organizations.map((org, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl bg-white border border-[#E0F7FA] p-6 text-center hover:border-transparent hover:shadow-xl hover:shadow-[#088395]/10 hover:-translate-y-2 transition-all duration-700 overflow-hidden ${orgsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${org.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

                <div className="relative z-10">
                  {org.logo ? (
                    <img src={org.logo} alt={org.abbr} className="w-12 h-12 object-contain mx-auto mb-4 rounded-lg group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${org.color} flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-500`}>
                      {org.abbr.slice(0, 2)}
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-[#0A2E4D] mb-1 group-hover:text-white transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                    {org.abbr}
                  </h3>
                  <p className="text-[#0A2E4D]/45 text-xs leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {org.full}
                  </p>
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
