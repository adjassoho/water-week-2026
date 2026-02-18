'use client';

import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

export default function AboutPage() {
  const organizations = [
    {
      abbr: 'C2EA',
      full: 'Centre d\'Excellence Africain pour l\'Eau et l\'Assainissement',
      logo: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png',
    },
    {
      abbr: 'INE / UAC',
      full: 'Institut National de l\'Eau — Université d\'Abomey-Calavi',
      logo: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png',
    },
    {
      abbr: 'IAHS',
      full: 'International Association of Hydrological Sciences',
      logo: 'https://i.ibb.co/XZW7BHKz/jhhv.png',
    },
    {
      abbr: 'FRIEND AOC',
      full: 'Flow Regimes From International Experimental and Network Data',
      logo: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg',
    },
    {
      abbr: 'UNESCO',
      full: 'Intergovernmental Hydrological Programme',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UNESCO_logo.svg/200px-UNESCO_logo.svg.png',
    },
    {
      abbr: 'IRD',
      full: 'Institut de Recherche pour le Développement, France',
      logo: null,
    },
    {
      abbr: 'Min. de l\'Eau',
      full: 'Ministère de l\'Eau et de l\'Assainissement, Bénin',
      logo: null,
    },
    {
      abbr: 'UAC',
      full: 'Université d\'Abomey-Calavi, Bénin',
      logo: null,
    },
  ];

  const conferenceDetails = [
    {
      title: 'Contexte et défis de l\'eau en Afrique',
      content: 'En Afrique, les ressources en eau sont soumises à une pression croissante en raison du changement climatique, de la croissance démographique rapide et du développement économique accéléré. Une compréhension détaillée des climats, des régimes hydrologiques et de leur variabilité spatiale et temporelle est un prérequis essentiel pour toute stratégie de gestion durable et de planification prospective des ressources en eau.',
      bullets: null,
    },
    {
      title: 'Histoire et développement d\'une communauté scientifique panafricaine',
      content: 'Les éditions précédentes des conférences internationales tenues à Hammamet (2015), Dakar (2016), Alger (2018) et Cotonou (2021) ont contribué à la structuration d\'un réseau de recherche hydrologique africain axé sur les rivières et cours d\'eau du continent. Ce réseau, soutenu par le programme FRIEND-Water de l\'UNESCO et l\'Association Internationale des Sciences Hydrologiques (IAHS), a permis le partage de méthodes, d\'outils et de données, et a favorisé une meilleure compréhension des régimes hydrologiques tropicaux et semi-arides.',
      bullets: null,
    },
    {
      title: 'Positionnement de la 2ème édition dans un paysage scientifique renouvelé',
      content: 'Cette deuxième édition se déroule dans un environnement scientifique international en évolution, notamment marqué par la création du Comité Afrique de l\'IAHS, qui soutient activement l\'événement. Cette structuration institutionnelle renforce la visibilité de la recherche hydrologique africaine au sein de la communauté scientifique mondiale et fournit un cadre stratégique pour la promotion de la production scientifique régionale.',
      bullets: null,
    },
    {
      title: 'Axes thématiques et focus scientifique',
      content: null,
      bullets: [
        { bold: 'Hydrologie des bassins :', text: 'de l\'étude des grands bassins fluviaux transfrontaliers aux petits bassins versants, incluant des approches multi-échelles adaptées à la modélisation physique.' },
        { bold: 'Processus hydrologiques à fine échelle :', text: 'analyse des dynamiques locales, essentielles pour le développement de modèles à haute résolution.' },
      ],
    },
    {
      title: 'Thèmes prioritaires émergents',
      content: null,
      bullets: [
        { bold: 'Qualité de l\'eau et santé :', text: 'évaluation des risques microbiologiques et méthodes de traitement innovantes.' },
        { bold: 'Écohydrologie :', text: 'intégration des processus écologiques dans la gestion intégrée des ressources en eau.' },
        { bold: 'Eaux souterraines :', text: 'quantification des ressources, problèmes de qualité liés à l\'agriculture, et rôle dans l\'approvisionnement en eau des populations.' },
        { bold: 'Flux sédimentaires et érosion :', text: 'des origines aux impacts sur les réservoirs, le cycle du carbone et la vulnérabilité des zones côtières.' },
      ],
    },
    {
      title: 'Innovations technologiques et surveillance',
      content: null,
      bullets: [
        { bold: 'Télédétection et intelligence artificielle :', text: 'pour l\'observation, la modélisation et la prévision hydrologiques.' },
        { bold: 'Capteurs low-cost et science citoyenne :', text: 'développement de réseaux de surveillance décentralisés et implication des communautés locales.' },
      ],
    },
  ];

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#f5f7f9' }}>

      {/* ===== 1. HERO BANNER ===== */}
      <div
        className="relative flex items-center justify-center"
        style={{
          height: '220px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        {/* Dark overlay */}
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
          L&apos;IDENTITÉ DE LA CONFÉRENCE
        </h1>
      </div>

      {/* ===== 2. ORGANIZATIONS BANNER + GRID ===== */}
      <div>
        {/* Green banner */}
        <div
          className="py-5 text-center"
          style={{ background: 'linear-gradient(to right, #009966, #007755)' }}
        >
          <h2
            className="font-bold tracking-widest uppercase"
            style={{ color: '#FFFFFF', fontSize: '22px', letterSpacing: '0.25em' }}
          >
            Organisations
          </h2>
        </div>

        {/* Logo grid */}
        <div
          className="py-14 px-6"
          style={{ backgroundColor: '#f5f7f9' }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
            {organizations.map((org, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Logo or placeholder */}
                <div className="h-20 flex items-center justify-center mb-3">
                  {org.logo ? (
                    <img
                      src={org.logo}
                      alt={org.abbr}
                      className="max-h-16 max-w-[120px] object-contain"
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: 'linear-gradient(135deg, #003366, #009966)' }}
                    >
                      {org.abbr.slice(0, 3)}
                    </div>
                  )}
                </div>
                {/* Name */}
                <h3
                  className="font-bold mb-1"
                  style={{ color: '#111111', fontSize: '14px' }}
                >
                  {org.abbr}
                </h3>
                {/* Teal underline */}
                <div
                  className="mb-2"
                  style={{ width: '32px', height: '2px', backgroundColor: '#009966' }}
                />
                {/* Description */}
                <p
                  className="text-center leading-snug"
                  style={{ color: '#555555', fontSize: '12px' }}
                >
                  {org.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 3. CONFERENCE DETAILS ===== */}
      <div
        className="pb-20 px-6"
        style={{ backgroundColor: '#f5f7f9' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Pill button */}
          <div className="mb-10">
            <span
              className="inline-block px-6 py-2 font-bold uppercase tracking-wider text-white text-sm"
              style={{
                background: 'linear-gradient(to right, #003366, #009966)',
                borderRadius: '999px',
              }}
            >
              Détails de la Conférence
            </span>
          </div>

          {/* 2-column grid of content cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {conferenceDetails.map((card, i) => (
              <div
                key={i}
                className="rounded-lg"
                style={{
                  backgroundColor: '#eef2f7',
                  borderLeft: '4px solid #009966',
                  padding: '24px 28px',
                }}
              >
                {/* Title with teal dot */}
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="shrink-0 mt-1 rounded-full"
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#009966',
                      display: 'inline-block',
                    }}
                  />
                  <h3
                    className="font-bold leading-snug"
                    style={{ color: '#111111', fontSize: '16px' }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Paragraph content */}
                {card.content && (
                  <p
                    className="leading-relaxed"
                    style={{ color: '#444444', fontSize: '14px' }}
                  >
                    {card.content}
                  </p>
                )}

                {/* Bullet list */}
                {card.bullets && (
                  <ul className="space-y-3">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span
                          className="shrink-0 mt-1.5"
                          style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#003366',
                            borderRadius: '1px',
                            display: 'inline-block',
                          }}
                        />
                        <span style={{ color: '#444444', fontSize: '14px', lineHeight: '1.6' }}>
                          <strong style={{ color: '#111111' }}>{b.bold}</strong>{' '}{b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
