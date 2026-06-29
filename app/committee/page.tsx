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
    { role: 'Chair', name: 'Pr. Jean-Baptiste TANO', affiliation: "University Professor, Senior Researcher, National Institute of Water, University of Abomey-Calavi" },
    { role: 'Co-Chair', name: 'Pr. Ernest AMOUSSOU', affiliation: 'Director of Research, University of Parakou, Benin' },
  ],
  members: [
    { name: 'Pr. Moussa BOUKARI', affiliation: "Professor & Researcher, University of Abomey-Calavi" },
    { name: 'Pr. Abel AFOUDA', affiliation: "Professor & Researcher, National Institute of Water, UAC" },
    { name: 'Dr. Expédit VISSIN', affiliation: "Associate Professor, University of Abomey-Calavi" },
    { name: 'Dr. Daouda MAMA', affiliation: "Associate Professor, National Institute of Water, UAC" },
    { name: 'Dr. Josué ZANDAGBA', affiliation: "Lecturer-Researcher, National Institute of Water, UAC" },
    { name: 'Dr. Nicaise YALO', affiliation: "Researcher, University of Abomey-Calavi" },
    { name: 'Dr. Hector ODOULAMI', affiliation: "Researcher, National Institute of Water, UAC" },
    { name: 'Pr. Gil MAHÉ', affiliation: 'Director of Research, IRD, France' },
    { name: 'Pr. Yves TRAMBLAY', affiliation: 'Senior Researcher, IRD, France' },
    { name: 'Dr. Andrew OGILVIE', affiliation: "Researcher, French National Research Institute for Sustainable Development (IRD)" },
    { name: 'Pr. Eric SERVAT', affiliation: "Director, UNESCO International Centre for Water, Montpellier" },
    { name: 'Dr. Clémence DECROOCQ', affiliation: 'Project Officer, UNESCO International Centre, Montpellier' },
  ],
};

const scientificCommittee = {
  chairs: [
    { role: 'Chair', name: 'Pr. Abel AFOUDA', affiliation: "Full Professor, National Institute of Water, University of Abomey-Calavi" },
    { role: 'Co-Chair', name: 'Pr. Gil MAHÉ', affiliation: "Senior Director of Research, French National Research Institute for Sustainable Development (IRD), Montpellier" },
  ],
  members: [
    { name: 'Pr. Ernest AMOUSSOU', affiliation: 'University of Parakou, Benin' },
    { name: 'Pr. Moussa BOUKARI', affiliation: "University of Abomey-Calavi, Benin" },
    { name: 'Pr. Expédit VISSIN', affiliation: "University of Abomey-Calavi, Benin" },
    { name: 'Pr. Lahcen BENAABIDATE', affiliation: 'Sidi Mohamed Ben Abdellah University, Fez, Morocco' },
    { name: 'Pr. Ilias KACIMI', affiliation: 'Mohammed V University, Rabat, Morocco' },
    { name: 'Pr. Tarik BOURAMTANE', affiliation: 'Mohammed V University, Rabat, Morocco' },
    { name: 'Pr. Oula AMROUNI', affiliation: 'INSTM, University of Carthage, Tunisia' },
    { name: 'Pr. Hamouda BOUTAGHANE', affiliation: "University of Annaba, Algeria" },
    { name: 'Pr. Mohamed MEDDI', affiliation: "National Higher School of Hydraulics, Blida, Algeria" },
    { name: 'Pr. Ansoumana BODIAN', affiliation: 'Gaston Berger University, Saint-Louis, Senegal' },
    { name: 'Pr. Abdoulaye FATY', affiliation: 'Cheikh Anta Diop University, Dakar, Senegal' },
    { name: 'Pr. Kouakou Lazare KOUASSI', affiliation: "Jean Lorougnon Guédé University, Daloa, Côte d'Ivoire" },
    { name: 'Pr. Valentin Brice EBODE', affiliation: 'University of Yaoundé, Cameroon' },
    { name: 'Pr. Raphaël TSHIMANGA', affiliation: 'University of Kinshasa, DR Congo' },
    { name: 'Pr. Hodson MAKURIRA', affiliation: 'President of IAHS Africa Committee, University of Zimbabwe' },
    { name: 'Pr. Natasha RIBEIRO', affiliation: 'Eduardo Mondlane University, Maputo, Mozambique' },
    { name: 'Pr. Cletah SHOKO', affiliation: 'University of the Witwatersrand, Johannesburg, South Africa' },
    { name: 'Pr. Jane TANNER', affiliation: 'Rhodes University, Grahamstown, South Africa' },
    { name: 'Dr. Victor KONGO', affiliation: 'World Bank Consultant, Tanzania' },
    { name: 'Pr. Wakjira Takala DIBABA', affiliation: 'Jimma University, Ethiopia' },
    { name: 'Pr. Yves TRAMBLAY', affiliation: 'IRD, France' },
    { name: 'Pr. Christel PRUDHOMME', affiliation: 'ECMWF, Reading, United Kingdom' },
    { name: 'Pr. Damien RACLOT', affiliation: 'IRD, France' },
    { name: 'Pr. Roger MOUSSA', affiliation: 'INRAE, France' },
    { name: 'Pr. Manuela GRIPPA', affiliation: 'GET Laboratory, Toulouse, France' },
    { name: 'Pr. Stéphanie DUVAIL', affiliation: 'IRD, UMR PALOC, Paris, France' },
    { name: 'Pr. Didier ORANGE', affiliation: 'IRD, France' },
    { name: 'Pr. Eric SERVAT', affiliation: 'UNESCO ICIREWARD, University of Montpellier, France' },
    { name: 'Pr. Freddy VINET', affiliation: 'Paul Valéry University, Montpellier, France' },
    { name: 'Pr. Maria Carmen LLASAT', affiliation: 'University of Barcelona, Spain' },
    { name: 'Pr. Sergio VICENTE-SERRANO', affiliation: 'Instituto Pirenaico de Ecología, Zaragoza, Spain' },
    { name: 'Pr. Giulio CASTELLI', affiliation: 'University of Florence, Italy' },
    { name: 'Pr. Berit ARHEIMER', affiliation: 'SMHI, Norrköping, Sweden' },
    { name: 'Pr. Helmut HABERSACK', affiliation: 'President of UNESCO IHP, Vienna, Austria' },
    { name: 'Pr. Declan CONWAY', affiliation: 'Grantham Research Institute, London, United Kingdom' },
    { name: 'Pr. Simon MISCHEL', affiliation: 'Global Runoff Data Center, Koblenz, Germany' },
    { name: 'Pr. Stephan DIETRICH', affiliation: 'UNESCO International Centre, Koblenz, Germany' },
    { name: 'Pr. Rahim BARZEGAR', affiliation: 'RIME/GRG, UQAT, Canada' },
    { name: 'Pr. Pedro CHAFFE', affiliation: 'Federal University of Santa Catarina, Brazil' },
    { name: 'Pr. Assefa MELESSE', affiliation: 'Florida International University, United States' },
    { name: 'Dr. Thi Phuong Quynh LE', affiliation: "Vietnam Academy of Science and Technology, Hanoi" },
    { name: 'Pr. Abou AMANI', affiliation: "Director, Division of Water Sciences, UNESCO Paris" },
    { name: 'Pr. Dominique BEROD', affiliation: 'WMO, Switzerland' },
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
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Conference <span className="font-accent italic font-medium">Committees</span>
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
              <h2 className="text-2xl font-extrabold text-[#02345e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Organizing Committee
              </h2>
              <p className="text-gray-400 text-sm">
                {organizingCommittee.chairs.length + organizingCommittee.members.length} members
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
                  <h3 className="font-bold text-[#02345e] text-base leading-tight mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
              Members ({organizingCommittee.members.length})
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
                {showAllOrg ? 'Show less' : `Show the other ${organizingCommittee.members.length - ORG_PREVIEW} members`}
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
              <h2 className="text-2xl font-extrabold text-[#02345e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Scientific Committee
              </h2>
              <p className="text-gray-400 text-sm italic">
                {scientificCommittee.chairs.length + scientificCommittee.members.length} members · under development
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
                  <h3 className="font-bold text-[#02345e] text-base leading-tight mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
              Members ({scientificCommittee.members.length})
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
                {showAllSci ? 'Show less' : `Show the other ${scientificCommittee.members.length - SCI_PREVIEW} members`}
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
