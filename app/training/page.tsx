'use client';

import Link from 'next/link';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';

const sessions = [
  {
    day: 1, num: 1,
    title: 'Télédétection Intégrée et Techniques Statistiques Multivariées pour la Surveillance Hydrologique',
    trainer: 'Pr. Mounia Tahiri',
    affiliation: 'Faculté des Sciences, Université Mohammed V Rabat, Maroc',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Pr-Mounia.jpg',
    description:
      "Ce cours vise à fournir aux participants les connaissances et compétences pratiques pour intégrer la télédétection et les techniques statistiques multivariées dans la surveillance des processus hydrologiques. Il couvre l'utilisation des données satellitaires et des observations au sol pour évaluer les composantes du cycle de l'eau (précipitations, ruissellement, évapotranspiration, eaux souterraines). Les participants apprendront à appliquer des approches statistiques et pilotées par les données : analyse en composantes principales (ACP), analyse de corrélation et modélisation par régression.",
  },
  {
    day: 1, num: 2,
    title: "Machine Learning pour la Cartographie des Impacts Hydrologiques",
    trainer: 'Pr. Tarik Bouramtane',
    affiliation: 'Faculté des Sciences, Université Mohammed V Rabat, Maroc',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Pr-Tarik.png',
    description:
      "Ce cours introduit l'application des techniques de Machine Learning (ML) pour cartographier et prédire les impacts hydrologiques et environnementaux : érosion des sols, susceptibilité aux inondations, variations des eaux souterraines. Les participants apprendront à collecter, prétraiter et intégrer des données géospatiales et de télédétection dans des modèles prédictifs. Des exercices pratiques démontreront comment des algorithmes ML, notamment Random Forest, peuvent générer des cartes d'impact haute résolution.",
  },
  {
    day: 1, num: 3,
    title: 'SAR — Radar à Synthèse d\'Ouverture (Coming soon)',
    trainer: 'Pr. Essam Heggy',
    affiliation: 'À confirmer',
    photo: 'https://icar2026.org/wp-content/uploads/2025/11/d1b38415-8d3c-4a59-a7c1-8d6f45e03a16-e1762461588903.jpg',
    description: "Contenu de cette session à venir prochainement. Restez connectés pour les détails.",
    comingSoon: true,
  },
  {
    day: 1, num: 4,
    title: "Prévision Hydrologique et GloFAS — Copernicus",
    trainer: 'Pr. Christel Prudhomme & M. Mohamed Azhar',
    affiliation: 'ECMWF, Reading, UK',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Portrait1PrudhommeMay2022-1-scaled-e1760004187720.jpg',
    description:
      "Exercices pratiques avec Jupyter notebooks, système GloFAS, cartographie de stations de jaugeage, techniques de prévision des crues et applications de gestion des urgences hydrologiques.",
  },
  {
    day: 2, num: 5,
    title: "Traceurs Géochimiques en Hydrologie et Écohydrologie",
    trainer: 'Pr. Bertil Nlend',
    affiliation: 'Université de Douala, Cameroun',
    photo: null,
    description:
      "Les isotopes stables et radioactifs comme traceurs naturels du cycle de l'eau, interactions surface/eaux souterraines, analyse des temps de résidence et transport de contaminants.",
  },
  {
    day: 2, num: 6,
    title: "Altimétrie Radar Satellite pour Rivières Non Jaugées",
    trainer: 'Pr. Sakaros Bogning',
    affiliation: 'Maître de Conférence, Université de Douala, Cameroun',
    photo: 'https://icar2026.org/wp-content/uploads/2025/11/Dr.-photo_sakaros-.jpeg',
    description:
      "Altimétrie radar, stations virtuelles, séries temporelles de niveaux d'eau et techniques d'estimation des débits pour les systèmes fluviaux non jaugés. Ce cours couvre les principes fondamentaux de l'altimétrie, la technique pour établir et valider des stations virtuelles (VS) aux traversées de rivières.",
  },
  {
    day: 2, num: 7,
    title: "Deep Learning pour la Prédiction des Séries Temporelles Hydrologiques",
    trainer: 'Dr. Nour El Houda Karmouda',
    affiliation: 'Faculté des Sciences, Université Mohammed V Rabat, Maroc',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Dr-Nour.jpg',
    description:
      "Ce cours propose une introduction pratique à l'utilisation du Deep Learning, notamment les réseaux LSTM (Long Short-Term Memory), pour la prédiction des séries temporelles hydrologiques. Les participants exploreront les principaux défis de la modélisation de séries temporelles et les raisons d'appliquer des réseaux de neurones en hydrologie. Ils apprendront l'approche théorique complète : prétraitement des données, construction du modèle LSTM et évaluation des performances (R², RMSE, NSE).",
  },
  {
    day: 2, num: 8,
    title: "LiDAR et Photogrammétrie pour la Numérisation du Terrain : Instrumentation, Mesure et Modélisation",
    trainer: 'Dr. Laurent Froideval',
    affiliation: 'CNRS, France',
    photo: 'https://icar2026.org/wp-content/uploads/2026/02/Mr-Laurent-Froideval.jpg',
    description:
      "Cours introductif d'une journée sur la numérisation du terrain par LiDAR aéroporté et SfM (Structure from Motion). Les participants apprendront la photogrammétrie SfM, les procédures QA/QC, la génération DTM/DSM, la détection de changements, la fusion multi-capteurs, ainsi que les applications côtières et hydrologiques.",
  },
];

const day1 = sessions.filter(s => s.day === 1);
const day2 = sessions.filter(s => s.day === 2);

function TrainerCard({ session }: { session: typeof sessions[0] }) {
  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-sm border border-gray-200">
      {/* Left — dark trainer panel */}
      <div
        className="md:w-56 flex-shrink-0 flex flex-col items-center justify-center py-8 px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #02345e 0%, #058332 100%)' }}
      >
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 mb-4 bg-white/10">
          {session.photo ? (
            <Image
              src={session.photo}
              alt={session.trainer}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/50 text-3xl">
              👤
            </div>
          )}
        </div>
        <p className="font-bold text-white text-sm leading-tight mb-1">{session.trainer}</p>
        <p className="text-white/60 text-xs italic leading-snug mb-4">{session.affiliation}</p>
        <button className="px-4 py-1.5 rounded-full bg-[#058332] text-white text-xs font-semibold hover:bg-[#046c2a] transition-colors">
          {session.comingSoon ? 'Détails à venir' : 'Plus de détails'}
        </button>
      </div>

      {/* Right — content */}
      <div className="flex-1 p-6 md:p-8 bg-white">
        <p className="text-sm font-bold text-[#058332] mb-2">
          Jour {session.day} — Session {session.num}
        </p>
        <h3 className="text-lg font-bold text-[#02345e] mb-4 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
          {session.title}
        </h3>
        <p className="text-gray-600 text-sm leading-[1.8]">{session.description}</p>
      </div>
    </div>
  );
}

export default function TrainingPage() {
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
            FORMATIONS
          </h1>
        </div>
      </div>

      {/* ===== Intro — dark background + 2 cards ===== */}
      <div
        className="py-14"
        style={{ background: 'linear-gradient(to right, #02345e 0%, #058332 100%)' }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Info card */}
            <div className="bg-white rounded-xl p-8">
              <h2 className="font-bold text-[#02345e] text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Formations Post-Conférence (10–11 juillet 2026)
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                Une formation spécialisée de deux jours sera proposée après la conférence, animée par des experts internationaux.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Chaque session de formation est prévue pour une journée, un participant peut donc assister à une ou deux sessions.
              </p>
              <p className="text-gray-700 text-sm font-bold">
                Les frais de participation pour chaque session sont de 50€. Toutes les demandes ne seront prises en compte qu&apos;une fois les frais réglés.
              </p>
            </div>

            {/* CTA card */}
            <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <h2 className="font-bold text-[#02345e] text-lg mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Prêt à participer ?
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Remplissez le formulaire pour demander l&apos;accès à une session de formation :
              </p>
              <Link
                href="/training-request"
                className="px-8 py-3 rounded-full bg-[#058332] text-white font-semibold hover:bg-[#046c2a] transition-colors"
              >
                Demander l&apos;accès
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Sessions Overview ===== */}
      <div className="py-14 bg-[#f4f7f9]">
        <div className="container mx-auto px-4 max-w-5xl">

          <h2
            className="text-3xl font-extrabold text-[#02345e] text-center mb-10"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Aperçu des Sessions de Formation
          </h2>

          {/* Day 1 */}
          <h3 className="text-xl font-bold text-[#02345e] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Vendredi 10 juillet 2026 — Jour 1
          </h3>
          <div className="space-y-6 mb-10">
            {day1.map((s, i) => <TrainerCard key={i} session={s} />)}
          </div>

          {/* Day 2 */}
          <h3 className="text-xl font-bold text-[#02345e] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Samedi 11 juillet 2026 — Jour 2
          </h3>
          <div className="space-y-6">
            {day2.map((s, i) => <TrainerCard key={i} session={s} />)}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
