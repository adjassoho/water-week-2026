'use client';

import { useState } from 'react';
import FooterSection from '@/components/FooterSection';

function initialsOf(name: string) {
  return name
    .replace(/^(Pr\.|Dr\.|M\.) /, '')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
}

const organizingCommittee = {
  chairs: [
    { role: 'Président', name: 'Pr. Jean-Baptiste TANO', affiliation: "Professeur Universitaire, Chercheur Senior, Institut National de l'Eau, Université d'Abomey-Calavi" },
    { role: 'Co-Président', name: 'Pr. Ernest AMOUSSOU', affiliation: 'Directeur de Recherche, Université de Parakou, Bénin' },
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
    { name: 'Dr. Clémence DECROOCQ', affiliation: 'Chargée de Projet, Centre International UNESCO, Montpellier' },
  ],
};

const scientificCommittee = {
  chairs: [
    { role: 'Président', name: 'Pr. Abel AFOUDA', affiliation: "Professeur Titulaire, Institut National de l'Eau, Université d'Abomey-Calavi" },
    { role: 'Co-Président', name: 'Pr. Gil MAHÉ', affiliation: "Directeur de Recherche Senior, Institut de Recherche pour le Développement (IRD), Montpellier" },
  ],
  members: [
    { name: 'Pr. Ernest AMOUSSOU', affiliation: 'Université de Parakou, Bénin' },
    { name: 'Pr. Moussa BOUKARI', affiliation: "Université d'Abomey-Calavi, Bénin" },
    { name: 'Pr. Expédit VISSIN', affiliation: "Université d'Abomey-Calavi, Bénin" },
    { name: 'Pr. Lahcen BENAABIDATE', affiliation: 'Université Sidi Mohammed Ben Abdellah, Fès, Maroc' },
    { name: 'Pr. Ilias KACIMI', affiliation: 'Université Mohammed V, Rabat, Maroc' },
    { name: 'Pr. Tarik BOURAMTANE', affiliation: 'Université Mohammed V, Rabat, Maroc' },
    { name: 'Pr. Oula AMROUNI', affiliation: 'INSTM, Université de Carthage, Tunisie' },
    { name: 'Pr. Hamouda BOUTAGHANE', affiliation: "Université d'Annaba, Algérie" },
    { name: 'Pr. Mohamed MEDDI', affiliation: "École Nationale Supérieure d'Hydraulique, Blida, Algérie" },
    { name: 'Pr. Ansoumana BODIAN', affiliation: 'Université Gaston Berger, Saint-Louis, Sénégal' },
    { name: 'Pr. Abdoulaye FATY', affiliation: 'Université Cheikh Anta Diop, Dakar, Sénégal' },
    { name: 'Pr. Kouakou Lazare KOUASSI', affiliation: "Université Jean Lorougnon Guédé, Daloa, Côte d'Ivoire" },
    { name: 'Pr. Valentin Brice EBODE', affiliation: 'Université de Yaoundé, Cameroun' },
    { name: 'Pr. Raphaël TSHIMANGA', affiliation: 'Université de Kinshasa, RD Congo' },
    { name: 'Pr. Hodson MAKURIRA', affiliation: 'Président IAHS Africa Committee, Université du Zimbabwe' },
    { name: 'Pr. Natasha RIBEIRO', affiliation: 'Université Eduardo Mondlane, Maputo, Mozambique' },
    { name: 'Pr. Cletah SHOKO', affiliation: 'Université du Witswatersrand, Johannesburg, Afrique du Sud' },
    { name: 'Pr. Jane TANNER', affiliation: 'Université Rhodes, Grahamstown, Afrique du Sud' },
    { name: 'Dr. Victor KONGO', affiliation: 'Consultant Banque Mondiale, Tanzanie' },
    { name: 'Pr. Wakjira Takala DIBABA', affiliation: 'Université de Jimma, Éthiopie' },
    { name: 'Pr. Yves TRAMBLAY', affiliation: 'IRD, France' },
    { name: 'Pr. Christel PRUDHOMME', affiliation: 'ECMWF, Reading, Royaume-Uni' },
    { name: 'Pr. Damien RACLOT', affiliation: 'IRD, France' },
    { name: 'Pr. Roger MOUSSA', affiliation: 'INRAE, France' },
    { name: 'Pr. Manuela GRIPPA', affiliation: 'Laboratoire GET, Toulouse, France' },
    { name: 'Pr. Stéphanie DUVAIL', affiliation: 'IRD, UMR PALOC, Paris, France' },
    { name: 'Pr. Didier ORANGE', affiliation: 'IRD, France' },
    { name: 'Pr. Eric SERVAT', affiliation: 'UNESCO ICIREWARD, Université de Montpellier, France' },
    { name: 'Pr. Freddy VINET', affiliation: 'Université Paul Valéry, Montpellier, France' },
    { name: 'Pr. Maria Carmen LLASAT', affiliation: 'Université de Barcelone, Espagne' },
    { name: 'Pr. Sergio VICENTE-SERRANO', affiliation: 'Instituto Pirenaico de Ecología, Saragosse, Espagne' },
    { name: 'Pr. Giulio CASTELLI', affiliation: 'Univ. degli Studi di Firenze, Italie' },
    { name: 'Pr. Berit ARHEIMER', affiliation: 'SMHI, Norrköping, Suède' },
    { name: 'Pr. Helmut HABERSACK', affiliation: 'Président UNESCO IHP, Vienne, Autriche' },
    { name: 'Pr. Declan CONWAY', affiliation: 'Grantham Research Institute, Londres, Royaume-Uni' },
    { name: 'Pr. Simon MISCHEL', affiliation: 'Global Runoff Data Center, Coblence, Allemagne' },
    { name: 'Pr. Stephan DIETRICH', affiliation: 'Centre International UNESCO, Coblence, Allemagne' },
    { name: 'Pr. Rahim BARZEGAR', affiliation: 'RIME/GRG, UQAT, Canada' },
    { name: 'Pr. Pedro CHAFFE', affiliation: 'Universidade Federal de Santa Catarina, Brésil' },
    { name: 'Pr. Assefa MELESSE', affiliation: 'Florida International University, États-Unis' },
    { name: 'Dr. Thi Phuong Quynh LE', affiliation: "Vietnam Academy of Science and Technology, Hanoï" },
    { name: 'Pr. Abou AMANI', affiliation: "Directeur, Division des Sciences de l'Eau, UNESCO Paris" },
    { name: 'Pr. Dominique BEROD', affiliation: 'OMM, Suisse' },
  ],
};

const avatarColors = [
  '#02345e', '#058332', '#0a6632', '#1a4a7a', '#2d6a4f', '#1b4332',
  '#0d3b53', '#145a32', '#1a3a5c', '#0b5345',
];
function colorFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return avatarColors[Math.abs(h) % avatarColors.length];
}

function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' | 'lg' }) {
  const ini = initialsOf(name);
  const color = colorFor(name);
  const cls = size === 'lg' ? 'w-16 h-16 text-xl' : size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm';
  return (
    <div
      className={`${cls} rounded-full flex items-center justify-center font-bold text-white flex-shrink-0`}
      style={{ backgroundColor: color }}
    >
      {ini}
    </div>
  );
}

export default function CommitteePage() {
  const [showAllOrg, setShowAllOrg] = useState(false);
  const [showAllSci, setShowAllSci] = useState(false);

  const ORG_PREVIEW = 6;
  const SCI_PREVIEW = 9;
  const orgToShow = showAllOrg ? organizingCommittee.members : organizingCommittee.members.slice(0, ORG_PREVIEW);
  const sciToShow = showAllSci ? scientificCommittee.members : scientificCommittee.members.slice(0, SCI_PREVIEW);

  return (
    <div className="min-h-screen font-sans bg-white">

      {/* ===== Hero ===== */}
      <div
        className="py-16"
        style={{ background: 'linear-gradient(to right, #02345e 0%, #058332 100%)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            COMITÉS
          </h1>
        </div>
      </div>

      {/* ===== Organizing Committee ===== */}
      <div className="bg-[#f4f7f9] py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-1 h-10 rounded-full"
              style={{ background: 'linear-gradient(to bottom, #02345e, #058332)' }}
            />
            <div>
              <h2 className="text-2xl font-extrabold text-[#02345e]" style={{ fontFamily: 'var(--font-heading)' }}>
                Comité d&apos;organisation
              </h2>
              <p className="text-gray-400 text-sm">
                {organizingCommittee.chairs.length + organizingCommittee.members.length} membres
              </p>
            </div>
          </div>

          {/* Chair cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {organizingCommittee.chairs.map((chair, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start gap-5">
                <Avatar name={chair.name} size="lg" />
                <div>
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
                    style={{ background: 'rgba(5,131,50,0.1)', color: '#058332' }}
                  >
                    {chair.role}
                  </span>
                  <h3 className="font-bold text-[#02345e] text-base leading-tight mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {chair.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{chair.affiliation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Member list */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#058332] mb-4">
              Membres ({organizingCommittee.members.length})
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {orgToShow.map((member, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-[#f4f7f9] transition-colors">
                  <Avatar name={member.name} size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#02345e] truncate">{member.name}</p>
                    <p className="text-xs text-gray-400 truncate">{member.affiliation}</p>
                  </div>
                </div>
              ))}
            </div>
            {organizingCommittee.members.length > ORG_PREVIEW && (
              <button
                onClick={() => setShowAllOrg(!showAllOrg)}
                className="mt-4 text-[#058332] text-xs font-semibold hover:underline flex items-center gap-1"
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
      <div className="bg-white py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-1 h-10 rounded-full"
              style={{ background: 'linear-gradient(to bottom, #02345e, #058332)' }}
            />
            <div>
              <h2 className="text-2xl font-extrabold text-[#02345e]" style={{ fontFamily: 'var(--font-heading)' }}>
                Comité scientifique
              </h2>
              <p className="text-gray-400 text-sm italic">
                {scientificCommittee.chairs.length + scientificCommittee.members.length} membres · en cours d&apos;élaboration
              </p>
            </div>
          </div>

          {/* Chair cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {scientificCommittee.chairs.map((chair, i) => (
              <div key={i} className="bg-[#f4f7f9] rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start gap-5">
                <Avatar name={chair.name} size="lg" />
                <div>
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
                    style={{ background: 'rgba(2,52,94,0.1)', color: '#02345e' }}
                  >
                    {chair.role}
                  </span>
                  <h3 className="font-bold text-[#02345e] text-base leading-tight mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {chair.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{chair.affiliation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Member list */}
          <div className="bg-[#f4f7f9] rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#02345e] mb-4">
              Membres ({scientificCommittee.members.length})
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {sciToShow.map((member, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white transition-colors">
                  <Avatar name={member.name} size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#02345e] truncate">{member.name}</p>
                    <p className="text-xs text-gray-400 truncate">{member.affiliation}</p>
                  </div>
                </div>
              ))}
            </div>
            {scientificCommittee.members.length > SCI_PREVIEW && (
              <button
                onClick={() => setShowAllSci(!showAllSci)}
                className="mt-4 text-[#02345e] text-xs font-semibold hover:underline flex items-center gap-1"
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
