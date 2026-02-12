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

/* deterministic gradient from name */
const gradients = [
  'from-[#088395] to-[#05BFDB]',
  'from-[#0A4D68] to-[#088395]',
  'from-[#05BFDB] to-[#00FFCA]',
  'from-[#D4A843] to-[#F0D78C]',
  'from-[#0A2E4D] to-[#088395]',
  'from-[#088395] to-[#00FFCA]',
];
function gradientFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return gradients[Math.abs(h) % gradients.length];
}
function initialsOf(name: string) {
  return name.replace(/^(Pr\.|Dr\.|M\.) /, '').split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

export default function CommitteePage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: orgChairsRef, isVisible: orgChairsVisible } = useScrollReveal();
  const { ref: orgMembersRef, isVisible: orgMembersVisible } = useScrollReveal(0.05);
  const { ref: sciChairsRef, isVisible: sciChairsVisible } = useScrollReveal();
  const { ref: sciMembersRef, isVisible: sciMembersVisible } = useScrollReveal(0.05);

  const [showAllOrg, setShowAllOrg] = useState(false);
  const [showAllSci, setShowAllSci] = useState(false);

  const organizingCommittee = {
    chairs: [
      { role: 'Président', name: 'Pr. Jean-Baptiste TANO', affiliation: "Professeur Universitaire, Chercheur Senior, Institut National de l'Eau, Université d'Abomey-Calavi" },
      { role: 'Co-Président', name: 'Pr. Ernest AMOUSSOU', affiliation: "Directeur de Recherche, Université de Parakou, Bénin" },
    ],
    members: [
      { name: 'Pr. Moussa BOUKARI', affiliation: "Professeur chercheur, Université d'Abomey-Calavi" },
      { name: 'Pr. Abel AFOUDA', affiliation: "Professeur chercheur, Institut National de l'Eau, UAC" },
      { name: 'Dr. Expédit VISSIN', affiliation: "Maître de Conférences, Université d'Abomey-Calavi" },
      { name: 'Dr. Daouda MAMA', affiliation: "Maître de Conférences, Institut National de l'Eau, UAC" },
      { name: 'Dr. Josué ZANDAGBA', affiliation: "Enseignant-Chercheur, Institut National de l'Eau, UAC" },
      { name: 'Dr. Nicaise YALO', affiliation: "Chercheur, Université d'Abomey-Calavi" },
      { name: 'Dr. Hector ODOULAMI', affiliation: "Chercheur, Institut National de l'Eau, UAC" },
      { name: 'Pr. Gil MAHÉ', affiliation: 'Directeur de Recherche, IRD, France' },
      { name: 'Pr. Yves TRAMBLAY', affiliation: 'Chercheur Senior, IRD, France' },
      { name: 'Dr. Andrew OGILVIE', affiliation: "Chercheur, Institut de Recherche pour le Développement" },
      { name: 'Pr. Eric SERVAT', affiliation: "Directeur, Centre International UNESCO pour l'Eau, Montpellier" },
      { name: 'Dr. Clémence DECROOCQ', affiliation: "Chargée de Projet, Centre International UNESCO, Montpellier" },
    ],
  };

  const scientificCommittee = {
    chairs: [
      { role: 'Président', name: 'Pr. Abel AFOUDA', affiliation: "Professeur Titulaire, Institut National de l'Eau, Université d'Abomey-Calavi" },
      { role: 'Co-Président', name: 'Pr. Gil MAHÉ', affiliation: "Directeur de Recherche Senior, Institut de Recherche pour le Développement (IRD), Montpellier" },
    ],
    members: [
      { name: 'Pr. Ernest AMOUSSOU', affiliation: "Université de Parakou, Bénin" },
      { name: 'Pr. Moussa BOUKARI', affiliation: "Université d'Abomey-Calavi, Bénin" },
      { name: 'Pr. Expédit VISSIN', affiliation: "Université d'Abomey-Calavi, Bénin" },
      { name: 'Pr. Lahcen BENAABIDATE', affiliation: "Université Sidi Mohammed Ben Abdellah, Fès, Maroc" },
      { name: 'Pr. Ilias KACIMI', affiliation: "Université Mohammed V, Rabat, Maroc" },
      { name: 'Pr. Tarik BOURAMTANE', affiliation: "Université Mohammed V, Rabat, Maroc" },
      { name: 'Pr. Oula AMROUNI', affiliation: "INSTM, Université de Carthage, Tunisie" },
      { name: 'Pr. Hamouda BOUTAGHANE', affiliation: "Université d'Annaba, Algérie" },
      { name: 'Pr. Mohamed MEDDI', affiliation: "École Nationale Supérieure d'Hydraulique, Blida, Algérie" },
      { name: 'Pr. Ansoumana BODIAN', affiliation: "Université Gaston Berger, Saint-Louis, Sénégal" },
      { name: 'Pr. Abdoulaye FATY', affiliation: "Université Cheikh Anta Diop, Dakar, Sénégal" },
      { name: 'Pr. Kouakou Lazare KOUASSI', affiliation: "Université Jean Lorougnon Guédé, Daloa, Côte d'Ivoire" },
      { name: 'Pr. Valentin Brice EBODE', affiliation: "Université de Yaoundé, Cameroun" },
      { name: 'Pr. Raphaël TSHIMANGA', affiliation: "Université de Kinshasa, RD Congo" },
      { name: 'Pr. Hodson MAKURIRA', affiliation: "Président IAHS Africa Committee, Université du Zimbabwe" },
      { name: 'Pr. Natasha RIBEIRO', affiliation: "Université Eduardo Mondlane, Maputo, Mozambique" },
      { name: 'Pr. Cletah SHOKO', affiliation: "Université du Witswatersrand, Johannesburg, Afrique du Sud" },
      { name: 'Pr. Jane TANNER', affiliation: "Université Rhodes, Grahamstown, Afrique du Sud" },
      { name: 'Dr. Victor KONGO', affiliation: "Consultant Banque Mondiale, Tanzanie" },
      { name: 'Pr. Wakjira Takala DIBABA', affiliation: "Université de Jimma, Éthiopie" },
      { name: 'Pr. Yves TRAMBLAY', affiliation: "IRD, France" },
      { name: 'Pr. Christel PRUDHOMME', affiliation: "ECMWF, Reading, Royaume-Uni" },
      { name: 'Pr. Damien RACLOT', affiliation: "IRD, France" },
      { name: 'Pr. Roger MOUSSA', affiliation: "INRAE, France" },
      { name: 'Pr. Manuela GRIPPA', affiliation: "Laboratoire GET, Toulouse, France" },
      { name: 'Pr. Stéphanie DUVAIL', affiliation: "IRD, UMR PALOC, Paris, France" },
      { name: 'Pr. Didier ORANGE', affiliation: "IRD, France" },
      { name: 'Pr. Eric SERVAT', affiliation: "UNESCO ICIREWARD, Université de Montpellier, France" },
      { name: 'Pr. Freddy VINET', affiliation: "Université Paul Valéry, Montpellier, France" },
      { name: 'Pr. Maria Carmen LLASAT', affiliation: "Université de Barcelone, Espagne" },
      { name: 'Pr. Sergio VICENTE-SERRANO', affiliation: "Instituto Pirenaico de Ecología, Saragosse, Espagne" },
      { name: 'Pr. Giulio CASTELLI', affiliation: "Univ. degli Studi di Firenze, Italie" },
      { name: 'Pr. Berit ARHEIMER', affiliation: "SMHI, Norrköping, Suède" },
      { name: 'Pr. Helmut HABERSACK', affiliation: "Président UNESCO IHP, Vienne, Autriche" },
      { name: 'Pr. Declan CONWAY', affiliation: "Grantham Research Institute, Londres, Royaume-Uni" },
      { name: 'Pr. Simon MISCHEL', affiliation: "Global Runoff Data Center, Coblence, Allemagne" },
      { name: 'Pr. Stephan DIETRICH', affiliation: "Centre International UNESCO, Coblence, Allemagne" },
      { name: 'Pr. Rahim BARZEGAR', affiliation: "RIME/GRG, UQAT, Canada" },
      { name: 'Pr. Pedro CHAFFE', affiliation: "Universidade Federal de Santa Catarina, Brésil" },
      { name: 'Pr. Assefa MELESSE', affiliation: "Florida International University, États-Unis" },
      { name: 'Dr. Thi Phuong Quynh LE', affiliation: "Vietnam Academy of Science and Technology, Hanoï" },
      { name: 'Pr. Abou AMANI', affiliation: "Directeur, Division des Sciences de l'Eau, UNESCO Paris" },
      { name: 'Pr. Dominique BEROD', affiliation: "OMM, Suisse" },
    ],
  };

  const renderChairCard = (chair: { role: string; name: string; affiliation: string }, i: number, isVisible: boolean) => {
    const g = gradientFor(chair.name);
    const ini = initialsOf(chair.name);
    return (
      <div
        key={i}
        className={`group relative rounded-3xl overflow-hidden border border-[#E0F7FA]/80 bg-white hover:border-[#05BFDB]/20 hover:shadow-2xl hover:shadow-[#088395]/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{ transitionDelay: `${i * 150}ms` }}
      >
        <div className={`h-1.5 bg-gradient-to-r ${g}`} />
        <div className="p-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A843]/10 text-[#D4A843] text-[10px] font-bold uppercase tracking-wider mb-5">
            {chair.role}
          </div>
          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${g} flex items-center justify-center text-2xl font-bold text-white mx-auto mb-5 shadow-lg`} style={{ fontFamily: 'var(--font-heading)' }}>
            {ini}
          </div>
          <h3 className="text-xl font-bold text-[#0A2E4D] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            {chair.name}
          </h3>
          <p className="text-[#0A2E4D]/40 text-sm leading-relaxed">{chair.affiliation}</p>
        </div>
      </div>
    );
  };

  const renderMemberRow = (member: { name: string; affiliation: string }, i: number, isVisible: boolean, delay: number) => {
    const g = gradientFor(member.name);
    const ini = initialsOf(member.name);
    return (
      <div
        key={i}
        className={`flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-[#F0F9FF] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-xs">{ini}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-[#0A2E4D] truncate">{member.name}</h4>
          <p className="text-[#0A2E4D]/35 text-xs truncate">{member.affiliation}</p>
        </div>
      </div>
    );
  };

  const ORG_PREVIEW = 6;
  const SCI_PREVIEW = 9;
  const orgToShow = showAllOrg ? organizingCommittee.members : organizingCommittee.members.slice(0, ORG_PREVIEW);
  const sciToShow = showAllSci ? scientificCommittee.members : scientificCommittee.members.slice(0, SCI_PREVIEW);

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
              <span className="text-[#00FFCA]">Comité</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Gouvernance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Le <span className="gradient-text-gold">Comité</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
              Les experts qui pilotent l&apos;organisation et la sélection scientifique de la conférence
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { val: `${organizingCommittee.chairs.length + organizingCommittee.members.length}`, label: "Comité d'organisation" },
                { val: `${scientificCommittee.chairs.length + scientificCommittee.members.length}`, label: 'Comité scientifique' },
                { val: '25+', label: 'Pays représentés' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.06] backdrop-blur-sm">
                  <span className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{s.val}</span>
                  <span className="text-white/40 text-xs font-medium">{s.label}</span>
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

      {/* ===== Organizing Committee ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />

        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div ref={orgChairsRef} className={`text-center mb-12 transition-all duration-700 ${orgChairsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              Comité d&apos;organisation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Comité d&apos;<span className="gradient-text">organisation</span>
            </h2>
          </div>

          {/* Chairs */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {organizingCommittee.chairs.map((c, i) => renderChairCard(c, i, orgChairsVisible))}
          </div>

          {/* Members */}
          <div ref={orgMembersRef} className="rounded-3xl border border-[#E0F7FA] bg-[#F8FDFF] p-6 sm:p-8">
            <p className="text-[#088395] text-xs font-bold uppercase tracking-wider mb-4">Membres ({organizingCommittee.members.length})</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {orgToShow.map((m, i) => renderMemberRow(m, i, orgMembersVisible, i * 50))}
            </div>
            {organizingCommittee.members.length > ORG_PREVIEW && (
              <button
                onClick={() => setShowAllOrg(!showAllOrg)}
                className="mt-4 inline-flex items-center gap-1.5 text-[#088395] text-xs font-semibold hover:text-[#05BFDB] transition-colors"
              >
                {showAllOrg ? 'Voir moins' : `Voir les ${organizingCommittee.members.length - ORG_PREVIEW} autres membres`}
                <svg className={`w-3.5 h-3.5 transition-transform ${showAllOrg ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ===== Scientific Committee ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />

        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div ref={sciChairsRef} className={`text-center mb-12 transition-all duration-700 ${sciChairsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              Comité scientifique
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Comité <span className="gradient-text-gold">scientifique</span>
            </h2>
            <p className="text-[#0A2E4D]/30 text-sm mt-2 italic">en cours d&apos;élaboration</p>
          </div>

          {/* Chairs */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {scientificCommittee.chairs.map((c, i) => renderChairCard(c, i, sciChairsVisible))}
          </div>

          {/* Members */}
          <div ref={sciMembersRef} className="rounded-3xl border border-[#E0F7FA] bg-white p-6 sm:p-8">
            <p className="text-[#088395] text-xs font-bold uppercase tracking-wider mb-4">Membres ({scientificCommittee.members.length})</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {sciToShow.map((m, i) => renderMemberRow(m, i, sciMembersVisible, i * 30))}
            </div>
            {scientificCommittee.members.length > SCI_PREVIEW && (
              <button
                onClick={() => setShowAllSci(!showAllSci)}
                className="mt-4 inline-flex items-center gap-1.5 text-[#088395] text-xs font-semibold hover:text-[#05BFDB] transition-colors"
              >
                {showAllSci ? 'Voir moins' : `Voir les ${scientificCommittee.members.length - SCI_PREVIEW} autres membres`}
                <svg className={`w-3.5 h-3.5 transition-transform ${showAllSci ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
