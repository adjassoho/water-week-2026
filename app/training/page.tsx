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

export default function TrainingPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { ref: day1Ref, isVisible: day1Visible } = useScrollReveal(0.05);
  const { ref: day2Ref, isVisible: day2Visible } = useScrollReveal(0.05);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  const trainers = [
    {
      name: 'Pr. Mounia Tahiri',
      affiliation: 'Université Mohammed V, Rabat, Maroc',
      day: 1, session: 1,
      title: 'Télédétection Intégrée et Techniques Statistiques Multivariées',
      description: 'Analyse en Composantes Principales (ACP), analyse de corrélation, modélisation par régression et techniques statistiques multivariées pour la surveillance des processus hydrologiques à l\'aide de données de télédétection intégrées.',
      icon: '🛰️', color: 'from-[#088395] to-[#05BFDB]',
      topics: ['PCA', 'Régression', 'Télédétection'],
    },
    {
      name: 'Pr. Tarik Bouramtane',
      affiliation: 'Université Mohammed V, Rabat, Maroc',
      day: 1, session: 2,
      title: 'Machine Learning pour la Cartographie des Impacts Hydrologiques',
      description: 'Algorithmes Random Forest, prétraitement géospatial, génération de cartes d\'impact haute résolution et techniques de validation pour l\'évaluation des impacts hydrologiques.',
      icon: '🤖', color: 'from-[#0A4D68] to-[#088395]',
      topics: ['Random Forest', 'Géospatial', 'Validation'],
    },
    {
      name: 'Pr. Essam Heggy',
      affiliation: 'À confirmer',
      day: 1, session: 3,
      title: 'SAR — Radar à Synthèse d\'Ouverture',
      description: 'Contenu de cette session à venir prochainement. Restez connectés pour les détails.',
      icon: '📡', color: 'from-[#05BFDB] to-[#00FFCA]',
      topics: ['SAR', 'Radar', 'Coming soon'],
      comingSoon: true,
    },
    {
      name: 'Pr. Christel Prudhomme & M. Mohamed Azhar',
      affiliation: 'ECMWF, Reading, UK',
      day: 1, session: 4,
      title: 'Prévision Hydrologique et GloFAS — Copernicus',
      description: 'Exercices pratiques avec Jupyter notebooks, système GloFAS, cartographie de stations de jaugeage, techniques de prévision des crues et applications de gestion des urgences.',
      icon: '🌊', color: 'from-[#D4A843] to-[#F0D78C]',
      topics: ['GloFAS', 'Jupyter', 'Prévision crues'],
    },
    {
      name: 'Pr. Bertil Nlend',
      affiliation: 'Université de Douala, Cameroun',
      day: 2, session: 5,
      title: 'Traceurs Isotopiques en Hydrologie',
      description: 'Isotopes stables et radioactifs comme traceurs naturels du cycle de l\'eau, interactions surface/eaux souterraines, analyse des temps de résidence et transport de contaminants.',
      icon: '🧪', color: 'from-[#088395] to-[#05BFDB]',
      topics: ['Isotopes', 'Cycle de l\'eau', 'Traceurs'],
    },
    {
      name: 'Pr. Sakaros Bogning',
      affiliation: 'Université de Douala, Cameroun',
      day: 2, session: 6,
      title: 'Altimétrie Radar Satellite pour Rivières Non Jaugées',
      description: 'Altimétrie radar, stations virtuelles, séries temporelles de niveaux d\'eau et techniques d\'estimation des débits pour les systèmes fluviaux non jaugés.',
      icon: '📡', color: 'from-[#0A4D68] to-[#088395]',
      topics: ['Altimétrie', 'Stations virtuelles', 'Débits'],
    },
    {
      name: 'Dr. Nour El Houda Karmouda',
      affiliation: 'Université Mohammed V, Rabat, Maroc',
      day: 2, session: 7,
      title: 'Deep Learning pour Séries Temporelles Hydrologiques',
      description: 'Réseaux LSTM, prétraitement des données, construction de modèles, indicateurs de performance (R², RMSE, NSE) et sessions pratiques avec Google Colab.',
      icon: '🧠', color: 'from-[#05BFDB] to-[#00FFCA]',
      topics: ['LSTM', 'Google Colab', 'RMSE / NSE'],
    },
    {
      name: 'Dr. Laurent Froideval',
      affiliation: 'CNRS, France',
      day: 2, session: 8,
      title: 'LiDAR et Photogrammétrie pour la Numérisation du Terrain',
      description: 'Photogrammétrie SfM, procédures QA/QC, génération DTM/DSM, détection de changements, fusion multi-capteurs, démonstrations par drones et applications côtières/hydrologiques.',
      icon: '🗺️', color: 'from-[#D4A843] to-[#F0D78C]',
      topics: ['LiDAR', 'SfM', 'DTM / DSM'],
    },
  ];

  const day1Sessions = trainers.filter(t => t.day === 1);
  const day2Sessions = trainers.filter(t => t.day === 2);

  const renderSessionCard = (trainer: typeof trainers[0], index: number, isVisible: boolean, delay: number) => {
    const isExpanded = expandedSession === trainer.session;
    const isGold = trainer.color.includes('D4A843');

    return (
      <div
        key={index}
        className={`group relative rounded-3xl overflow-hidden border transition-all duration-700 cursor-pointer ${isExpanded
          ? 'border-[#05BFDB]/30 shadow-2xl shadow-[#088395]/10 bg-white'
          : 'border-[#E0F7FA]/80 bg-white hover:border-[#05BFDB]/20 hover:shadow-xl hover:shadow-[#088395]/8'
          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{ transitionDelay: `${delay}ms` }}
        onClick={() => setExpandedSession(isExpanded ? null : trainer.session)}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Left accent */}
          <div className={`sm:w-1.5 h-1.5 sm:h-auto flex-shrink-0 bg-gradient-to-r sm:bg-gradient-to-b ${trainer.color}`} />

          <div className="flex-1 p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start gap-4">
              {/* Session Number Badge */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${trainer.color} flex items-center justify-center shadow-lg`}>
                <span className="text-2xl">{trainer.icon}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold uppercase tracking-widest ${isGold ? 'text-[#D4A843]' : 'text-[#088395]'}`}>
                    Session {trainer.session}
                  </span>
                  {trainer.comingSoon && (
                    <span className="px-2 py-0.5 rounded-full bg-[#D4A843]/10 text-[#D4A843] text-[10px] font-bold uppercase tracking-wider">
                      Coming soon
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2E4D] mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {trainer.title}
                </h3>
                <p className="text-[#088395] text-sm font-semibold">{trainer.name}</p>
                <p className="text-[#0A2E4D]/40 text-xs mt-0.5">{trainer.affiliation}</p>

                {/* Topic pills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {trainer.topics.map((t, ti) => (
                    <span key={ti} className="px-2.5 py-1 rounded-full bg-[#F0F9FF] text-[#088395] text-[11px] font-semibold border border-[#E0F7FA]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-5 border-t border-[#E0F7FA] mt-4">
                    <p className="text-[#0A2E4D]/70 text-sm leading-[1.8]">{trainer.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-[#D4A843] text-xs font-semibold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Jour {trainer.day} · Durée : 1 journée complète · Frais : 50€
                    </div>
                  </div>
                </div>

                {/* Toggle indicator */}
                <button className="inline-flex items-center gap-1.5 mt-3 text-[#088395] text-xs font-semibold hover:text-[#05BFDB] transition-colors">
                  {isExpanded ? 'Masquer' : 'En savoir plus'}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-20" style={{
          background: `radial-gradient(ellipse 50% 60% at 60% 40%, rgba(5,191,219,0.3) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(212,168,67,0.15) 0%, transparent 60%)`
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
              <span className="text-[#00FFCA]">Formations</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Post-Conférence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Sessions de{' '}<span className="gradient-text-gold">Formation</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
              6 — 7 juin 2026 · 8 sessions spécialisées encadrées par des experts internationaux
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4">
              {[
                { val: '8', label: 'Sessions' },
                { val: '2', label: 'Jours' },
                { val: '50€', label: 'Par session' },
                { val: '8', label: 'Experts' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.06] backdrop-blur-sm">
                  <span className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{s.val}</span>
                  <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{s.label}</span>
                </div>
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

      {/* ===== Info Bar ===== */}
      <div className="bg-white relative overflow-hidden">
        <div ref={infoRef} className="max-w-4xl mx-auto px-4 py-14 sm:py-16 relative z-10">
          <div className={`rounded-3xl bg-gradient-to-r from-[#F0F9FF] to-[#E0F7FA]/50 border border-[#E0F7FA] p-8 sm:p-10 transition-all duration-700 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <div className="text-2xl mb-2">📚</div>
                <p className="text-[#0A2E4D]/70 text-sm leading-relaxed">
                  Formation spécialisée de deux jours après la conférence, animée par des experts internationaux.
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🎓</div>
                <p className="text-[#0A2E4D]/70 text-sm leading-relaxed">
                  Chaque session dure une journée. Un participant peut suivre une ou deux sessions.
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">💰</div>
                <p className="text-[#0A2E4D]/70 text-sm leading-relaxed">
                  Les frais de participation sont de <strong className="text-[#0A2E4D]">50€</strong> par session. L&apos;inscription n&apos;est validée qu&apos;après paiement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Day 1 — Vendredi 6 juin ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />

        <div ref={day1Ref} className="max-w-4xl mx-auto px-4 pb-20 relative z-10">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${day1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#088395] to-[#05BFDB] flex items-center justify-center text-white text-xl font-extrabold shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
              1
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
                Vendredi <span className="gradient-text">6 juin</span>
              </h2>
              <p className="text-[#0A2E4D]/40 text-sm">4 sessions · Jour 1</p>
            </div>
          </div>

          <div className="space-y-4">
            {day1Sessions.map((t, i) => renderSessionCard(t, i, day1Visible, i * 120))}
          </div>
        </div>
      </div>

      {/* ===== Day 2 — Samedi 7 juin ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />

        <div ref={day2Ref} className="max-w-4xl mx-auto px-4 py-20 relative z-10">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${day2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A843] to-[#F0D78C] flex items-center justify-center text-[#0A2E4D] text-xl font-extrabold shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
              2
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
                Samedi <span className="gradient-text">7 juin</span>
              </h2>
              <p className="text-[#0A2E4D]/40 text-sm">4 sessions · Jour 2</p>
            </div>
          </div>

          <div className="space-y-4">
            {day2Sessions.map((t, i) => renderSessionCard(t, i, day2Visible, i * 120))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div ref={ctaRef} className="max-w-3xl mx-auto px-4 py-20 sm:py-24 text-center relative z-10">
          <div className={`transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Prêt à <span className="gradient-text-gold">participer</span> ?
            </h2>
            <p className="text-white/50 text-base mb-8 max-w-lg mx-auto">
              Remplissez le formulaire pour demander l&apos;accès à une ou plusieurs sessions de formation
            </p>
            <a href="/training-request" className="btn-gold inline-flex text-base px-10 py-4 rounded-xl shadow-2xl shadow-[#D4A843]/20 group">
              Demander l&apos;accès
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
