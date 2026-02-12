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

export default function SubmissionPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal(0.05);
  const { ref: requirementsRef, isVisible: requirementsVisible } = useScrollReveal();
  const { ref: datesRef, isVisible: datesVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const submissionSteps = [
    { num: 1, title: 'Préparer', desc: 'Rédigez votre résumé (300–500 mots) en anglais avec objectifs, méthodologie et résultats.', icon: '✍️', color: 'from-[#088395] to-[#05BFDB]' },
    { num: 2, title: 'Formater', desc: 'Utilisez le template fourni : Garamond 11pt, interligne 1.15, marges 1.5 cm. Export PDF.', icon: '📐', color: 'from-[#0A4D68] to-[#088395]' },
    { num: 3, title: 'Soumettre', desc: 'Envoyez votre résumé via le formulaire en ligne avant la date limite.', icon: '📤', color: 'from-[#D4A843] to-[#F0D78C]' },
    { num: 4, title: 'Notification', desc: 'Recevez la décision du comité scientifique (oral ou poster) sous 2 semaines.', icon: '📬', color: 'from-[#05BFDB] to-[#00FFCA]' },
  ];

  const abstractReqs = [
    { label: '300–500 mots maximum', icon: '📝' },
    { label: 'Titre, auteurs et affiliations', icon: '👤' },
    { label: 'Objectifs et méthodologie clairs', icon: '🎯' },
    { label: 'Résultats et conclusions clés', icon: '📊' },
    { label: '3 à 5 mots-clés', icon: '🔑' },
  ];

  const formattingReqs = [
    { label: 'Police : Garamond, 11 pt', icon: '🔤' },
    { label: 'Interligne : 1.15', icon: '📏' },
    { label: 'Marges : 1.5 cm (tous côtés)', icon: '📐' },
    { label: 'Format : Document PDF', icon: '📄' },
    { label: 'Utiliser le template fourni', icon: '📋' },
  ];

  const importantDates = [
    { date: '30 mars 2026', label: 'Date limite de soumission des résumés', status: 'upcoming', icon: '📝' },
    { date: '15 avril 2026', label: 'Notification d\'acceptation (Oral/Poster)', status: 'upcoming', icon: '✉️' },
    { date: '30 avril 2026', label: 'Inscription Early-Bird', status: 'upcoming', icon: '🎟️' },
    { date: '20 juin 2026', label: 'Clôture des inscriptions', status: 'upcoming', icon: '⏰' },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-20" style={{
          background: `radial-gradient(ellipse 50% 60% at 30% 70%, rgba(212,168,67,0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(5,191,219,0.25) 0%, transparent 60%)`
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
              <span className="text-[#00FFCA]">Soumission</span>
            </div>

            <div className="grid md:grid-cols-5 gap-10 items-end">
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#D4A843] animate-pulse" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">English Only</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Soumettre un{' '}<span className="gradient-text-gold">résumé</span>
                </h1>
                <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                  Partagez vos recherches avec la communauté internationale lors de la Semaine de l&apos;Eau 2026
                </p>
              </div>

              {/* Quick info */}
              <div className="md:col-span-2">
                <div className="glass-card p-6">
                  <div className="text-[#00FFCA] text-xs font-bold uppercase tracking-widest mb-3">⏰ Date limite</div>
                  <div className="text-white text-3xl font-extrabold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>30 mars 2026</div>
                  <div className="text-white/40 text-sm">Soumission des résumés</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
            <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ===== Process Steps ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#05BFDB]/[0.03] rounded-full blur-[100px]" />

        <div ref={stepsRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          <div className={`text-center mb-14 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mx-auto w-fit mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
              Processus
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Comment{' '}<span className="gradient-text">soumettre ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {submissionSteps.map((step, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl overflow-hidden border border-[#E0F7FA] bg-white hover:border-transparent hover:shadow-2xl hover:shadow-[#088395]/10 hover:-translate-y-3 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />

                {/* Step number watermark */}
                <div className="absolute -bottom-4 -right-2 text-[100px] font-black text-[#0A2E4D]/[0.03] group-hover:text-white/[0.08] leading-none select-none transition-colors duration-700" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.num}
                </div>

                <div className="relative z-10 p-7">
                  <span className="text-3xl mb-4 block group-hover:scale-125 transition-transform duration-500">{step.icon}</span>
                  <h3 className="text-lg font-bold text-[#0A2E4D] group-hover:text-white mb-2 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#0A2E4D]/50 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Requirements ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div ref={requirementsRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${requirementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Abstract Requirements */}
            <div className="rounded-3xl bg-white border border-[#E0F7FA] p-8 sm:p-10 hover:shadow-lg hover:shadow-[#088395]/8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#088395] to-[#05BFDB] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Contenu du résumé
                </h3>
              </div>
              <div className="space-y-4">
                {abstractReqs.map((req, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">{req.icon}</span>
                    <span className="text-[#0A2E4D]/70 text-sm">{req.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formatting */}
            <div className="rounded-3xl bg-white border border-[#E0F7FA] p-8 sm:p-10 hover:shadow-lg hover:shadow-[#088395]/8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A843] to-[#F0D78C] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0A2E4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Mise en forme
                </h3>
              </div>
              <div className="space-y-4">
                {formattingReqs.map((req, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">{req.icon}</span>
                    <span className="text-[#0A2E4D]/70 text-sm">{req.label}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-[#088395] text-sm font-semibold hover:text-[#05BFDB] transition-colors group">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Télécharger le template
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Important Dates ===== */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div ref={datesRef} className="max-w-4xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${datesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Dates{' '}<span className="gradient-text-gold">importantes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {importantDates.map((d, i) => (
              <div
                key={i}
                className={`glass-card p-6 hover:bg-white/[0.1] transition-all duration-500 hover:-translate-y-1 group ${datesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-500">{d.icon}</span>
                  <div>
                    <div className="text-[#00FFCA] text-lg font-extrabold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{d.date}</div>
                    <div className="text-white/60 text-sm">{d.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-white relative overflow-hidden">
        <div ref={ctaRef} className="max-w-4xl mx-auto px-4 py-20 sm:py-24 relative z-10">
          <div className={`grid sm:grid-cols-2 gap-5 transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <a href="#" className="group rounded-3xl bg-gradient-to-br from-[#088395] to-[#05BFDB] p-8 sm:p-10 text-center hover:shadow-2xl hover:shadow-[#088395]/20 hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">📤</div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Soumettre maintenant
              </h3>
              <p className="text-white/60 text-sm mb-6">Envoyez votre résumé via le formulaire en ligne</p>
              <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                Commencer
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>

            <a href="/registration" className="group rounded-3xl bg-gradient-to-br from-[#D4A843] to-[#F0D78C] p-8 sm:p-10 text-center hover:shadow-2xl hover:shadow-[#D4A843]/20 hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">🎟️</div>
              <h3 className="text-xl font-bold text-[#0A2E4D] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                S&apos;inscrire
              </h3>
              <p className="text-[#0A2E4D]/50 text-sm mb-6">Procédez à votre inscription pour la conférence</p>
              <span className="inline-flex items-center gap-2 text-[#0A2E4D] font-bold text-sm group-hover:gap-3 transition-all">
                S&apos;inscrire
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
