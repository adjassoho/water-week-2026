'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

function useScrollReveal(threshold = 0.1) {
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

export default function ProgramPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: scheduleRef, isVisible: scheduleVisible } = useScrollReveal(0.05);
  const { ref: trainingRef, isVisible: trainingVisible } = useScrollReveal(0.05);
  const [activeDay, setActiveDay] = useState(0);

  const conferenceDays = [
    {
      day: 'Jour 1',
      date: 'Mardi 3 juin',
      label: 'Ouverture',
      color: 'from-[#088395] to-[#05BFDB]',
      events: [
        { time: '09:00', title: 'Ouverture des inscriptions', type: 'admin', icon: '📋' },
        { time: '14:30 — 16:30', title: 'Cérémonie d\'ouverture', type: 'ceremony', icon: '🎤', description: 'Discours d\'ouverture et mots de bienvenue des organisateurs et partenaires officiels.' },
        { time: '16:30 — 18:00', title: 'Cocktail de bienvenue', type: 'social', icon: '🥂', description: 'Moment de networking et d\'échanges informels entre participants.' },
      ],
    },
    {
      day: 'Jour 2',
      date: 'Mercredi 4 juin',
      label: 'Conférences',
      color: 'from-[#0A4D68] to-[#088395]',
      events: [
        { time: '09:00 — 10:30', title: 'Keynote Plénière', type: 'keynote', icon: '🎯', description: 'Conférence plénière par les intervenants principaux sur l\'état de la recherche hydrologique.' },
        { time: '10:30 — 11:00', title: 'Pause café & Networking', type: 'social', icon: '☕' },
        { time: '11:00 — 12:30', title: 'Sessions parallèles — Bloc A', type: 'session', icon: '📊', description: 'Communications orales sur l\'Hydrologie des bassins et les Processus hydrologiques.' },
        { time: '12:30 — 14:00', title: 'Déjeuner', type: 'social', icon: '🍽️' },
        { time: '14:00 — 15:30', title: 'Sessions parallèles — Bloc B', type: 'session', icon: '📊', description: 'Communications sur la Qualité de l\'eau, l\'Écohydrologie et les Eaux souterraines.' },
        { time: '15:30 — 17:00', title: 'Session Posters', type: 'poster', icon: '📌', description: 'Présentation et discussion des posters scientifiques.' },
      ],
    },
    {
      day: 'Jour 3',
      date: 'Jeudi 5 juin',
      label: 'Clôture',
      color: 'from-[#D4A843] to-[#F0D78C]',
      events: [
        { time: '09:00 — 10:30', title: 'Keynote Plénière', type: 'keynote', icon: '🎯', description: 'Innovations technologiques et perspectives pour la recherche hydrologique en Afrique.' },
        { time: '10:30 — 11:00', title: 'Pause café', type: 'social', icon: '☕' },
        { time: '11:00 — 12:30', title: 'Sessions parallèles — Bloc C', type: 'session', icon: '📊', description: 'Télédétection, IA et capteurs low-cost pour le monitoring hydrologique.' },
        { time: '12:30 — 14:00', title: 'Déjeuner', type: 'social', icon: '🍽️' },
        { time: '14:00 — 15:30', title: 'Table ronde & Synthèse', type: 'keynote', icon: '💬', description: 'Discussion ouverte et synthèse des travaux de la conférence.' },
        { time: '15:30 — 17:00', title: 'Cérémonie de clôture', type: 'ceremony', icon: '🏆', description: 'Remise des prix, discours de clôture et perspectives.' },
      ],
    },
  ];

  const trainingDays = [
    {
      day: 'Vendredi 6 juin',
      sessions: [
        { num: 1, title: 'Télédétection Intégrée et Techniques Statistiques Multivariées', icon: '🛰️' },
        { num: 2, title: 'Apprentissage Automatique pour la Cartographie des Impacts Hydrologiques', icon: '🤖' },
        { num: 3, title: 'Intégration des Données LiDAR pour la Surveillance à Haute Résolution', icon: '📡' },
        { num: 4, title: 'Prévision Hydrologique et GloFAS — Copernicus', icon: '🌊' },
      ],
    },
    {
      day: 'Samedi 7 juin',
      sessions: [
        { num: 5, title: 'Traceurs Géochimiques en Hydrologie et Écohydrologie', icon: '🧪' },
        { num: 6, title: 'Imagerie Radar pour la Surveillance des Rivières Non Jaugées', icon: '📡' },
        { num: 7, title: 'Apprentissage Profond pour la Prédiction des Séries Temporelles', icon: '🧠' },
        { num: 8, title: 'LiDAR et Photogrammétrie pour la Numérisation du Terrain', icon: '🗺️' },
      ],
    },
  ];

  const current = conferenceDays[activeDay];

  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-20" style={{
          background: `radial-gradient(ellipse 50% 60% at 80% 30%, rgba(5,191,219,0.3) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 10% 70%, rgba(212,168,67,0.15) 0%, transparent 60%)`
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-[#00FFCA]">Programme</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Provisoire</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Programme de la{' '}<span className="gradient-text-gold">Conférence</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">3 — 5 juin 2026 · Palais des Congrès de Cotonou</p>

            {/* Day pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {conferenceDays.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-500 ${activeDay === i
                    ? 'bg-white text-[#0A2E4D] shadow-xl shadow-white/10 scale-105'
                    : 'bg-white/[0.06] text-white/60 border border-white/[0.08] hover:bg-white/[0.12] hover:text-white/90'
                    }`}
                >
                  <span className="block text-xs opacity-60 mb-0.5">{d.date}</span>
                  {d.day} — {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
            <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ===== Conference Schedule ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />

        <div ref={scheduleRef} className="max-w-4xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          {/* Day Header */}
          <div className={`mb-12 transition-all duration-700 ${scheduleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white text-xl font-extrabold shadow-lg`} style={{ fontFamily: 'var(--font-heading)' }}>
                {activeDay + 1}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {current.day} — <span className="gradient-text">{current.label}</span>
                </h2>
                <p className="text-[#0A2E4D]/50 text-sm">{current.date} 2026</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#05BFDB]/30 via-[#088395]/20 to-transparent" />

            <div className="space-y-4">
              {current.events.map((event, i) => {
                const typeColors: Record<string, string> = {
                  admin: 'bg-[#F0F9FF] border-[#E0F7FA]',
                  ceremony: 'bg-gradient-to-r from-[#0A2E4D] to-[#0A4D68]',
                  social: 'bg-[#F8FDFF] border-[#E0F7FA]',
                  keynote: 'bg-gradient-to-r from-[#088395] to-[#05BFDB]',
                  session: 'bg-white border-[#E0F7FA]',
                  poster: 'bg-white border-[#E0F7FA]',
                };
                const isDark = event.type === 'ceremony' || event.type === 'keynote';

                return (
                  <div
                    key={i}
                    className={`flex gap-5 transition-all duration-700 ${scheduleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'
                      }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-[55px] flex flex-col items-center pt-5">
                      <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#00FFCA]' : 'bg-[#05BFDB]'} ring-4 ring-white shadow-md z-10`} />
                    </div>

                    {/* Card */}
                    <div className={`flex-1 rounded-2xl ${typeColors[event.type]} ${isDark ? '' : 'border'} p-5 sm:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group`}>
                      <div className="flex items-start gap-4">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-500">{event.icon}</span>
                        <div className="flex-1">
                          <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-white/50' : 'text-[#088395]'}`}>
                            {event.time}
                          </div>
                          <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-[#0A2E4D]'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                            {event.title}
                          </h3>
                          {event.description && (
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-[#0A2E4D]/50'}`}>
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Training Sessions Preview ===== */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div ref={trainingRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
          <div className={`text-center mb-14 transition-all duration-1000 ${trainingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label-light mx-auto w-fit mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
              Post-Conférence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Sessions de{' '}<span className="gradient-text-gold">Formation</span>
            </h2>
            <p className="text-white/40 text-base mt-3">6 — 7 juin 2026 · 8 sessions spécialisées</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingDays.map((td, di) => (
              <div key={di}>
                <h3 className={`text-lg font-bold text-white/80 mb-4 transition-all duration-700 ${trainingVisible ? 'opacity-100' : 'opacity-0'}`}>
                  📅 {td.day}
                </h3>
                <div className="space-y-3">
                  {td.sessions.map((s, si) => (
                    <div
                      key={si}
                      className={`glass-card p-5 hover:bg-white/[0.1] transition-all duration-500 hover:-translate-y-1 group ${trainingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                      style={{ transitionDelay: `${(di * 4 + si) * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl group-hover:scale-125 transition-transform duration-500">{s.icon}</span>
                        <div>
                          <div className="text-[#00FFCA] text-xs font-bold uppercase tracking-widest mb-1">Session {s.num}</div>
                          <h4 className="text-white text-sm font-semibold leading-snug">{s.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${trainingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="/training" className="btn-gold inline-flex text-sm px-8 py-4 rounded-xl shadow-2xl shadow-[#D4A843]/20 group">
              Voir le programme complet des formations
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
