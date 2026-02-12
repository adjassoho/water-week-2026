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

export default function SpeakersPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.05);
  const [expandedBio, setExpandedBio] = useState<number | null>(null);

  const speakers = [
    {
      name: 'Pr. Lahcen BENAABIDATE',
      title: 'Professeur & Directeur de Laboratoire',
      affiliation: 'Université Sidi Mohammed Ben Abdellah, Fès, Maroc',
      expertise: 'Hydrogéologie',
      country: '🇲🇦 Maroc',
      color: 'from-[#088395] to-[#05BFDB]',
      bio: `Pr. Lahcen Benaabidate est professeur et directeur du Laboratoire Géo-Ressources et Environnement à la Faculté des Sciences et Techniques, Université Sidi Mohammed Ben Abdellah de Fès. Il est titulaire d'un Doctorat d'État en Hydrogéologie de la même université (2000) et d'un PhD de Troisième Cycle en Hydrogéothermie de l'Université de Sfax, Tunisie (1994). Il est également Vice-Président du Comité Marocain de l'Association Internationale des Hydrogéologues. Ses recherches portent principalement sur l'hydrologie, l'hydrogéologie et l'étude des eaux thermales. Il a participé à plusieurs projets de recherche européens, des programmes PHC Maghreb, des Actions Conjointes Maroc-Tunisie et des projets Erasmus+. Il a encadré une dizaine de thèses de doctorat et a reçu plusieurs bourses de mobilité internationale, notamment Fulbright, DAAD, Erasmus+ et TWAS.`,
    },
    {
      name: 'Dr. Oula AMROUNI',
      title: 'Maître de Conférences',
      affiliation: 'INSTM — Université de Carthage, Tunisie',
      expertise: 'Géologie côtière',
      country: '🇹🇳 Tunisie',
      color: 'from-[#0A4D68] to-[#088395]',
      bio: `Dr. Oula Amrouni est Maître de Conférences à l'Institut National des Sciences et Technologies de la Mer (INSTM) - Université de Carthage, et experte en géologie et en étude de la dynamique des sédiments dans les systèmes côtiers. Dr. Amrouni se spécialise dans l'évolution du littoral nord-africain dans le contexte des changements climatiques et urbains. Depuis 2003, elle a dirigé ou participé à une vingtaine de projets nationaux et internationaux. Depuis 2016, elle est Coordinatrice Régionale du programme UNESCO MEDFRIEND-WATER et dirige le thème "Écohydrologie Côtière". Elle est également le point focal de l'Observatoire Côtier OMELI, reconnu comme site de démonstration UNESCO depuis 2022.`,
    },
    {
      name: 'Pr. Ernest AMOUSSOU',
      title: 'Professeur Titulaire',
      affiliation: 'Université de Parakou, Bénin',
      expertise: 'Hydrologie & Climatologie',
      country: '🇧🇯 Bénin',
      color: 'from-[#D4A843] to-[#F0D78C]',
      bio: `Pr. Ernest Amoussou est Professeur Titulaire de Géographie Physique Appliquée (Hydrologie & Climatologie) au Département de Géographie et Aménagement du Territoire, Université de Parakou (Bénin). Son enseignement et ses recherches portent sur l'hydrologie, les statistiques, la modélisation hydroclimatique et la gestion intégrée des ressources en eau. Il est Coordinateur Régional de FRIEND AOC / UNESCO-PHI et Vice-Président de la Commission Internationale sur les Eaux de Surface (ICSW) au sein de l'IAHS. Ses intérêts de recherche incluent la variabilité et le changement climatiques, les risques climatiques, les extrêmes hydrologiques et la dynamique des écosystèmes côtiers.`,
    },
    {
      name: 'Pr. Yves TRAMBLAY',
      title: 'Directeur de Recherche',
      affiliation: 'IRD Espace-DEV, France',
      expertise: 'Risques hydrologiques',
      country: '🇫🇷 France',
      color: 'from-[#05BFDB] to-[#00FFCA]',
      bio: `Pr. Yves Tramblay est chercheur senior (directeur de recherche) à l'Institut de Recherche pour le Développement (IRD). Il travaille principalement sur l'impact du changement climatique sur les risques hydrologiques : précipitations intenses, inondations et sécheresses. L'objectif est de comprendre comment les processus associés à ces phénomènes évoluent dans le contexte du changement climatique dans différentes régions telles que la Méditerranée et l'Afrique de l'Ouest. Il a contribué à divers rapports scientifiques, notamment le rapport MAR1 de l'initiative MedECC et le chapitre du GIEC sur la Méditerranée dans AR6 WGII.`,
    },
    {
      name: 'Pr. Christel PRUDHOMME',
      title: 'Experte en Hydrologie Globale',
      affiliation: 'ECMWF, Europe',
      expertise: 'Prévision hydrologique',
      country: '🇪🇺 Europe',
      color: 'from-[#088395] to-[#0A4D68]',
      bio: `Pr. Christel Prudhomme a plus de 30 ans d'expérience en recherche et opérations, spécialisée dans la compréhension et la modélisation des extrêmes hydrologiques et leur réponse à la variabilité météorologique et climatique. Elle dirige l'équipe de Surveillance et Prévision Hydrologique au Centre Européen pour les Prévisions Météorologiques à Moyen Terme (ECMWF), en charge des activités de prévision hydrologique avec pour objectif d'améliorer la compétence globale des prévisions à des horizons entre 1 semaine et plusieurs mois. Elle gère également le Centre de calcul de Prévision Hydrologique du Service de Gestion des Urgences Copernicus.`,
    },
    {
      name: 'Dr. Victor KONGO',
      title: 'Ingénieur en Ressources en Eau',
      affiliation: 'IAHS Afrique, Tanzanie',
      expertise: 'Gestion des ressources',
      country: '🇹🇿 Tanzanie',
      color: 'from-[#0A2E4D] to-[#088395]',
      bio: `Dr. Kongo est un Ingénieur en Ressources en Eau accompli et consultant international vérifié sous le Roster d'Experts du PNUD sur le Changement Climatique et la Résilience. Il est actuellement le représentant régional de l'Association Internationale des Sciences Hydrologiques (IAHS) et membre du Conseil IAHS Afrique. Il a servi comme Directeur Exécutif du Partenariat Mondial de l'Eau Tanzanie et Consultant Senior pour la Banque Mondiale sur l'Eau et la Résilience Climatique. Il a également été Conseiller à la Fondation Bill et Melinda Gates (BMGF). Dr. Kongo faisait partie de l'équipe technique qui a développé le Programme Continental d'Investissement dans l'Eau de l'Union Africaine (AU-AIP).`,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== Hero Banner ===== */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-20" style={{
          background: `
            radial-gradient(ellipse 50% 60% at 70% 30%, rgba(5,191,219,0.3) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 70%, rgba(212,168,67,0.15) 0%, transparent 60%)
          `
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-[#00FFCA]">Intervenants</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
                <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Keynote Speakers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Nos{' '}
                <span className="gradient-text-gold">Intervenants</span>
              </h1>
              <p className="text-white/50 text-lg sm:text-xl max-w-xl leading-relaxed">
                Découvrez les experts internationaux qui animeront la Semaine de l&apos;Eau 2026
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                { value: '6', label: 'Keynote Speakers' },
                { value: '6', label: 'Pays représentés' },
                { value: '30+', label: 'Années d\'expérience (moy.)' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.06] backdrop-blur-sm">
                  <span className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</span>
                  <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="text-white">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
            <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ===== Speakers Grid ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />

        <div ref={gridRef} className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
          <div className="space-y-6">
            {speakers.map((speaker, index) => {
              const isExpanded = expandedBio === index;

              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl overflow-hidden border transition-all duration-700 ${isExpanded
                    ? 'border-[#05BFDB]/30 shadow-2xl shadow-[#088395]/10 bg-white'
                    : 'border-[#E0F7FA]/80 bg-white hover:border-[#05BFDB]/20 hover:shadow-xl hover:shadow-[#088395]/8'
                    } ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left Accent Bar */}
                    <div className={`hidden md:block w-1.5 flex-shrink-0 bg-gradient-to-b ${speaker.color}`} />

                    {/* Content */}
                    <div className="flex-1 p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                        {/* Avatar / Initials */}
                        <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${speaker.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-2xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>
                            {speaker.name.split(' ').slice(-1)[0].slice(0, 2).toUpperCase()}
                          </span>
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
                              {speaker.name}
                            </h3>
                            <span className="text-sm">{speaker.country}</span>
                          </div>

                          <p className="text-[#088395] text-sm font-semibold mb-1">{speaker.title}</p>
                          <p className="text-[#0A2E4D]/45 text-sm mb-4">{speaker.affiliation}</p>

                          {/* Expertise badge */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${speaker.color} text-white`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                              {speaker.expertise}
                            </span>
                          </div>

                          {/* Bio */}
                          <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="pt-4 border-t border-[#E0F7FA]">
                              <p className="text-[#0A2E4D]/70 text-sm leading-[1.8] text-justify">
                                {speaker.bio}
                              </p>
                            </div>
                          </div>

                          {/* Toggle Button */}
                          <button
                            onClick={() => setExpandedBio(isExpanded ? null : index)}
                            className="inline-flex items-center gap-2 mt-3 text-[#088395] text-sm font-semibold hover:text-[#05BFDB] transition-colors group/btn"
                          >
                            {isExpanded ? 'Masquer la biographie' : 'Lire la biographie'}
                            <svg
                              className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-3xl bg-gradient-to-r from-[#0A2E4D] to-[#088395] p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '28px 28px'
              }} />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Vous souhaitez intervenir ?
                </h3>
                <p className="text-white/50 text-base mb-8 max-w-lg mx-auto">
                  Soumettez votre résumé et rejoignez nos experts internationaux lors de la Semaine de l&apos;Eau 2026
                </p>
                <a href="/submission" className="btn-gold inline-flex text-base px-10 py-4 rounded-xl shadow-2xl shadow-[#D4A843]/20 group">
                  Soumettre un résumé
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
