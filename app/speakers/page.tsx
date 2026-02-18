'use client';

import FooterSection from '@/components/FooterSection';

const speakers = [
  {
    name: 'Pr. Lahcen BENAABIDATE',
    photo: 'https://icar2026.org/wp-content/uploads/2025/12/Pr.Benaabidate-e1765874768113-266x300.png',
    initials: 'LB',
    bio: `Pr. Lahcen Benaabidate est professeur et directeur du Laboratoire Géo-Ressources et Environnement à la Faculté des Sciences et Techniques, Université Sidi Mohammed Ben Abdellah de Fès. Il est titulaire d'un Doctorat d'État en Hydrogéologie de la même université (2000) et d'un PhD de Troisième Cycle en Hydrogéothermie de l'Université de Sfax, Tunisie (1994). Il est également Vice-Président du Comité Marocain de l'Association Internationale des Hydrogéologues. Ses recherches portent principalement sur l'hydrologie, l'hydrogéologie et l'étude des eaux thermales. Il représente son université au sein du Consortium des Universités pour l'Avancement de la Science Hydrologique (CUAHSI). Il a participé à plusieurs projets de recherche européens, des programmes PHC Maghreb, des Actions Conjointes Maroc-Tunisie et des projets Erasmus+. Il a encadré une dizaine de thèses de doctorat et a reçu plusieurs bourses de mobilité internationale, notamment Fulbright, DAAD, Erasmus+ et TWAS.`,
  },
  {
    name: 'Dr. Oula AMROUNI',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Pr-Oula-Amrouni-1-e1760910626860-285x300.png',
    initials: 'OA',
    bio: `Dr. Oula Amrouni est Maître de Conférences à l'Institut National des Sciences et Technologies de la Mer (INSTM) - Université de Carthage, et experte en géologie et en étude de la dynamique des sédiments dans les systèmes côtiers aériens et sous-marins. Dr. Amrouni se spécialise dans l'évolution du littoral nord-africain dans le contexte des changements climatiques et urbains. Depuis 2003, elle a dirigé ou participé à une vingtaine de projets nationaux et internationaux. Ses recherches portent sur le développement de solutions basées sur la nature pour la restauration des plages sableuses tout en promouvant le rôle du tourisme durable dans l'économie verte. Depuis 2016, elle est Coordinatrice Régionale du programme UNESCO MEDFRIEND-WATER et dirige le thème "Écohydrologie Côtière". Elle est également le point focal de l'Observatoire Côtier OMELI, reconnu comme site de démonstration UNESCO depuis 2022.`,
  },
  {
    name: 'Pr. Ernest AMOUSSOU',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Pr-Ernest-AMOUSSOU-270x300.png',
    initials: 'EA',
    bio: `Pr. Ernest Amoussou est Professeur Titulaire de Géographie Physique Appliquée (Hydrologie & Climatologie) au Département de Géographie et Aménagement du Territoire, Université de Parakou (Bénin), où il enseigne depuis 2011. Son enseignement et ses recherches portent sur l'hydrologie, les statistiques, la modélisation hydroclimatique et la gestion intégrée des ressources en eau. Il est membre du Laboratoire de Climatologie et de Ethnoclimatologie Tropicale (Labo ClimET-UP) à l'Université de Parakou et chercheur associé au Laboratoire Pierre Pagney. Il est Coordinateur Régional de FRIEND AOC / UNESCO-PHI et Vice-Président de la Commission Internationale sur les Eaux de Surface (ICSW) au sein de l'IAHS. Ses intérêts de recherche incluent la variabilité et le changement climatiques, les risques climatiques, les extrêmes hydrologiques et la dynamique des écosystèmes côtiers.`,
  },
  {
    name: 'Pr. Yves TRAMBLAY',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Pr.-Yves-Tramblay-300x300.png',
    initials: 'YT',
    bio: `Pr. Yves Tramblay est spécialiste de la Modélisation des Risques Hydrologiques, IRD Espace-DEV, France. Yves Tramblay est chercheur senior (directeur de recherche) à l'Institut de Recherche pour le Développement (IRD). Il travaille principalement sur l'impact du changement climatique sur les risques hydrologiques : précipitations intenses, inondations et sécheresses. L'objectif est de comprendre comment les processus associés à ces phénomènes évoluent dans le contexte du changement climatique dans différentes régions telles que la Méditerranée et l'Afrique de l'Ouest. Il a contribué à divers rapports scientifiques, notamment le rapport MAR1 de l'initiative MedECC et le chapitre du GIEC sur la Méditerranée dans AR6 WGII.`,
  },
  {
    name: 'Pr. Christel PRUDHOMME',
    photo: 'https://icar2026.org/wp-content/uploads/2025/10/Portrait1PrudhommeMay2022-1-scaled-e1760004187720-150x150.jpg',
    initials: 'CP',
    bio: `Pr. Christel Prudhomme est une experte en hydrologie globale, avec plus de 30 ans d'expérience en recherche et opérations, spécialisée dans la compréhension et la modélisation des extrêmes hydrologiques et leur réponse à la variabilité météorologique et climatique. Elle dirige l'équipe de Surveillance et Prévision Hydrologique au Centre Européen pour les Prévisions Météorologiques à Moyen Terme (ECMWF), en charge des activités de prévision hydrologique avec pour objectif d'améliorer la compétence globale des prévisions à des horizons entre 1 semaine et plusieurs mois. Elle gère également le Centre de calcul de Prévision Hydrologique du Service de Gestion des Urgences Copernicus (CEMS), responsable du développement, de la maintenance et du fonctionnement opérationnel des Systèmes Européens et Mondiaux de Sensibilisation aux Inondations.`,
  },
  {
    name: 'Dr. Victor KONGO',
    photo: 'https://icar2026.org/wp-content/uploads/2025/12/Victor1-768x712.jpeg',
    initials: 'VK',
    bio: `Dr. Kongo est un Ingénieur en Ressources en Eau accompli et consultant international vérifié sous le Roster d'Experts du PNUD sur le Changement Climatique et la Résilience. Il est actuellement le représentant régional de l'Association Internationale des Sciences Hydrologiques (IAHS) et membre du Conseil IAHS Afrique. Il est le Coordinateur National immédiat pour le Groupe de Ressources en Eau 2030 de la Banque Mondiale (WRG) en Tanzanie et a servi comme Directeur Exécutif du Partenariat Mondial de l'Eau Tanzanie. Il a été Consultant Senior pour la Banque Mondiale sur l'Eau et la Résilience Climatique et Conseiller à la Fondation Bill et Melinda Gates (BMGF). Dr. Kongo faisait partie de l'équipe technique qui a développé le Programme Continental d'Investissement dans l'Eau de l'Union Africaine (AU-AIP) et a soutenu des pays en Afrique pour développer des programmes nationaux d'investissement dans l'eau.`,
  },
];

export default function SpeakersPage() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#f5f7f9' }}>

      {/* ===== 1. HERO BANNER ===== */}
      <div
        className="relative flex items-center justify-center"
        style={{
          height: '220px',
          backgroundImage: 'url(https://icar2026.org/wp-content/uploads/2025/07/20250718_2303_Distinguished-Speaker-Spotlight_simple_compose_01k0fs05ahf87bm2vn975ssf28-e1752879076164.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255,255,255,0.55)' }} />
        <h1
          className="relative z-10 text-center font-extrabold uppercase"
          style={{
            fontSize: 'clamp(28px, 5vw, 52px)',
            color: '#111111',
            letterSpacing: '0.04em',
            fontFamily: 'Georgia, serif',
          }}
        >
          INTERVENANTS PRINCIPAUX
        </h1>
      </div>

      {/* ===== 2. SUB-BANNER ===== */}
      <div className="px-6 py-8" style={{ backgroundColor: '#f5f7f9' }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="text-center px-8 py-4 text-white font-medium text-base"
            style={{
              background: 'linear-gradient(to right, #003366, #009966)',
              borderRadius: '999px',
            }}
          >
            Découvrez nos six experts intervenants et leurs contributions scientifiques clés.
          </div>
        </div>
      </div>

      {/* ===== 3. SPEAKERS GRID ===== */}
      <div className="px-6 pb-20" style={{ backgroundColor: '#f5f7f9' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center"
              style={{
                background: 'linear-gradient(135deg, #5aab8a 0%, #7ab8c8 50%, #8fa8b8 100%)',
                borderRadius: '16px',
                padding: '28px 20px 24px',
              }}
            >
              {/* Photo frame */}
              <div
                className="mb-4"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '6px',
                  borderRadius: '4px',
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {speaker.photo ? (
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #003366, #009966)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '28px',
                      fontWeight: 800,
                    }}
                  >
                    {speaker.initials}
                  </div>
                )}
              </div>

              {/* Name */}
              <h3
                className="font-bold mb-3"
                style={{ color: '#ffffff', fontSize: '16px', lineHeight: '1.3' }}
              >
                {speaker.name}
              </h3>

              {/* Bio */}
              <p
                className="leading-relaxed text-center"
                style={{ color: '#ffffff', fontSize: '12px', opacity: 0.95 }}
              >
                {speaker.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
