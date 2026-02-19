'use client';

import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

type Workshop = {
  num: number;
  title: string;
  moderators: {
    name: string;
    affiliation: string;
    photo: string | null;
  }[];
  content: React.ReactNode;
};

const workshops: Workshop[] = [
  {
    num: 1,
    title:
      "Digitalisation et valorisation des savoirs traditionnels de gestion de l'eau face à la pénurie en Afrique : Culture, Patrimoine et Perspectives",
    moderators: [
      {
        name: 'Dr. Hanane BENQLILOU',
        affiliation:
          "Experte Eau, Énergie et Environnement — Institut National de l'Eau et de l'Assainissement IEA-ONEE / Fondation MiftahEssad pour le Capital Immatériel du Maroc",
        photo:
          'https://icar2026.org/wp-content/uploads/2026/01/Photo-Hanane-SIEL-2024-1.jpg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          Le Maroc dispose d&apos;un riche patrimoine de savoirs ancestraux liant eau,
          énergie, agriculture et écosystèmes — développé au fil des siècles pour
          s&apos;adapter au climat semi-aride et aux défis de pénurie d&apos;eau. Among the most
          remarkable traditional water systems are the <strong>Khettara</strong> and the
          ancient sewage systems of Fès.
        </p>
        <p>
          La <strong>Khettara</strong> est un système souterrain ingénieux de captage et
          d&apos;acheminement de l&apos;eau par gravité, prouvant son efficacité depuis des siècles
          dans la gestion durable des ressources en eau.
        </p>
        <p>
          Le <strong>système hydraulique ancestral de Fès</strong> représente un autre
          exemple remarquable de gestion traditionnelle de l&apos;eau, permettant le recyclage
          de l&apos;eau à travers des activités spirituelles, économiques et domestiques.
        </p>
        <p>
          Aujourd&apos;hui, il est urgent de capitaliser sur le patrimoine hydrique africain en
          utilisant les nouvelles technologies. Cet atelier vise à Explorer les opportunités
          de <strong>Partenariat Sud-Sud</strong> entre pays africains pour partager les
          savoirs traditionnels de l&apos;eau.
        </p>
        <p className="mt-4">
          <strong>Mots-clés :</strong> Systèmes hydrauliques traditionnels, Khettara,
          réseaux d&apos;assainissement anciens, solutions fondées sur la nature, changement
          climatique, régions semi-arides, stress hydrique, collecte des eaux pluviales,
          écosystèmes, Culture, Patrimoine, Partenariat Sud-Sud.
        </p>
      </div>
    ),
  },
  {
    num: 2,
    title:
      "De la donnée à l'action : Construire la chaîne de valeur pour répondre aux défis climatiques et hydrologiques",
    moderators: [
      {
        name: 'Dr. Dominique BEROD',
        affiliation:
          "Chef de la section Surveillance hydrologique et gestion des données — Organisation Météorologique Mondiale (OMM)",
        photo:
          'https://icar2026.org/wp-content/uploads/2026/01/photo-D-Berod-2022-bis.jpeg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          Cet atelier se concentre sur l&apos;identification des besoins en matière de
          surveillance et l&apos;exploration des moyens de garantir une chaîne
          données-décisions durable, couvrant la modélisation et la prévision
          hydrologiques.
        </p>
        <p className="text-[#058332] font-semibold italic">
          Plus de détails à venir prochainement.
        </p>
      </div>
    ),
  },
  {
    num: 3,
    title: 'Co-Creating Water Knowledge — CCWK',
    moderators: [
      {
        name: 'Dr. Fairouz MEGDICHE KHARRAT',
        affiliation:
          "Maître-assistante en architecture et urbanisme, Université de Sousse / Chercheure au GADEV/UMRAN, Membre du groupe CCWK, Tunisie",
        photo:
          'https://icar2026.org/wp-content/uploads/2026/01/Fairouz-IDPhoto.jpeg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          <strong>Obj. 1 :</strong> Définir la co-création et l&apos;introduire dans le
          contexte de la connaissance de l&apos;eau — approche collaborative où des parties
          prenantes diverses génèrent ensemble des solutions aux défis hydriques.
        </p>
        <p>
          <strong>Obj. 2 :</strong> Présenter la vision et la mission du groupe CCWK, ses
          objectifs à court et long terme, sa méthodologie et son processus.
        </p>
        <p>
          <strong>Obj. 3 :</strong> Ouvrir le dialogue en connectant différents acteurs dans
          le contexte africain et au-delà — chercheurs, décideurs, praticiens et
          communautés locales.
        </p>
        <p>
          <strong>Obj. 4 :</strong> Partager des études de cas démontrant des approches de
          co-création réussies dans la gestion de l&apos;eau à travers différents contextes
          africains.
        </p>
        <p>
          <strong>Obj. 5 :</strong> Inspirer les acteurs scientifiques, institutionnels et
          sociaux à adopter les 4 piliers de la co-création :{' '}
          <strong>Inclusivité</strong>, <strong>Ouverture</strong>,{' '}
          <strong>Légitimité</strong> &amp; <strong>Actionnabilité</strong>.
        </p>
        <p className="mt-2">
          Cet atelier sera animé par trois membres du groupe CCWK dans le cadre de la
          décennie HELPING de l&apos;IAHS. Le format inclura des activités interactives :
          débats, sessions de collecte d&apos;informations et exercice de constellation des
          parties prenantes.
        </p>
      </div>
    ),
  },
  {
    num: 4,
    title:
      "Défis, enjeux et opportunités de l'Économie Bleue dans les pays en développement : vers une gestion intégrée des ressources en eau",
    moderators: [
      {
        name: 'M. Ernest TINDO',
        affiliation: 'Expert en Économie Bleue et gestion des ressources aquatiques',
        photo:
          'https://icar2026.org/wp-content/uploads/2026/02/Photo-1-Ernest-TINDO-scaled-e1771315066166.jpg',
      },
      {
        name: 'Dr. Asmaa BENSLIMANE',
        affiliation: "Chercheure en gestion intégrée des ressources en eau, Maroc",
        photo: 'https://icar2026.org/wp-content/uploads/2026/02/Photo-Dr-Asmaa.jpg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          L&apos;Économie Bleue représente une approche intégrée qui considère l&apos;eau, les
          océans, les lacs et les rivières comme des vecteurs de développement durable et
          de prospérité économique pour les pays en développement.
        </p>
        <p className="text-[#058332] font-semibold italic">
          Plus de détails à venir prochainement.
        </p>
      </div>
    ),
  },
];

function ModeratorPanel({
  moderator,
}: {
  moderator: Workshop['moderators'][0];
}) {
  return (
    <div className="flex flex-col items-center text-center py-6 px-4">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 mb-3 bg-white/10">
        {moderator.photo ? (
          <Image
            src={moderator.photo}
            alt={moderator.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/50 text-3xl">👤</div>
        )}
      </div>
      <p className="font-bold text-white text-sm leading-tight mb-1">{moderator.name}</p>
      <p className="text-white/65 text-xs italic leading-snug">{moderator.affiliation}</p>
    </div>
  );
}

export default function WorkshopsPage() {
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
            ATELIERS DE DISCUSSION
          </h1>
        </div>
      </div>

      {/* ===== Workshops list ===== */}
      <div className="py-14 bg-[#f4f7f9]">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">

          {workshops.map((workshop) => (
            <div
              key={workshop.num}
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ background: '#e8f5f0' }}
            >
              {/* Workshop header row */}
              <div
                className="px-6 py-4"
                style={{ background: 'linear-gradient(to right, #02345e, #058332)' }}
              >
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  Atelier {workshop.num}
                </span>
                <h2
                  className="text-lg md:text-xl font-bold text-white mt-1 leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {workshop.title}
                </h2>
              </div>

              {/* Body: moderators left, content right */}
              <div className="flex flex-col md:flex-row">
                {/* Left: dark moderator panels */}
                <div
                  className="md:w-56 flex-shrink-0 divide-y divide-white/10"
                  style={{ background: 'linear-gradient(160deg, #02345e 0%, #045c2e 100%)' }}
                >
                  {workshop.moderators.map((mod, i) => (
                    <ModeratorPanel key={i} moderator={mod} />
                  ))}
                  <div className="px-4 pb-6 flex justify-center">
                    <Link
                      href="/moderators"
                      className="px-4 py-1.5 rounded-full bg-[#058332] text-white text-xs font-semibold hover:bg-[#046c2a] transition-colors"
                    >
                      Plus de détails
                    </Link>
                  </div>
                </div>

                {/* Right: workshop content */}
                <div className="flex-1 bg-white p-6 md:p-8">
                  {workshop.content}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <FooterSection />
    </div>
  );
}
