'use client';

import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

export default function AboutPage() {
  const organizations = [
    {
      abbr: 'C2EA',
      full: 'Africa Centre of Excellence for Water and Sanitation',
      logo: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png',
    },
    {
      abbr: 'INE / UAC',
      full: 'National Institute of Water — University of Abomey-Calavi',
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/UNESCO_logo.svg',
    },
    {
      abbr: 'IRD',
      full: 'French National Research Institute for Sustainable Development',
      logo: null,
    },
    {
      abbr: 'Ministry of Water',
      full: 'Ministry of Water and Sanitation, Benin',
      logo: null,
    },
    {
      abbr: 'UAC',
      full: 'University of Abomey-Calavi, Benin',
      logo: null,
    },
  ];

  const conferenceDetails = [
    {
      title: 'Context and Rationale',
      content: 'The 3rd edition of the Water and Sanitation Week takes place in a context of growing challenges related to climate change, demographic pressure, and food and water security. In response, digital innovation and inclusion (digitalization, artificial intelligence, participatory science) emerge as key levers to transform governance, operational efficiency, and decision-making in Africa.',
      bullets: null,
    },
    {
      title: 'Theme of the 3rd Edition',
      content: '“Harnessing Innovation and Digital Inclusion in Education and Research for Sustainable Transformation of Water, Sanitation, and Agriculture” — This unifying theme guides all sessions, panels, and competitions.',
      bullets: null,
    },
    {
      title: 'Specific Objectives',
      content: null,
      bullets: [
        { bold: 'Multi-stakeholder exchanges:', text: 'Facilitate discussions between researchers, professionals, and decision-makers on the challenges of digital transformation in water, sanitation, and agriculture.' },
        { bold: 'Role of technology:', text: 'Reassess the role of digital technologies in education and research for the sustainable transformation of target sectors.' },
        { bold: 'Public-Private Partnerships (PPP):', text: 'Promote dialogue on Public-Private Partnerships to fund digital inclusion in education.' },
        { bold: 'PriMI Innovations:', text: 'Identify and reward the best digital innovations through the Best Innovation Award (PriMI).' },
        { bold: 'Regional capacity building:', text: 'Strengthen regional capacities through high-level expert sessions, notably via the Water and Development Partnership Programme (WDPP) of UNESCO-IHE.' },
      ],
    },
    {
      title: 'Conference Thematic Streams',
      content: null,
      bullets: [
        { bold: 'Stream 1:', text: 'Digital Transformation and Management of Water, Sanitation, and Agriculture.' },
        { bold: 'Stream 2:', text: 'Open Data, AI, and Participatory Sciences in Service of Research and Innovation.' },
        { bold: 'Stream 3:', text: 'Artificial Intelligence and Optimization of Educational Systems.' },
        { bold: 'Stream 4:', text: 'Innovative Processes and Smart Technologies in Water and Sludge Treatment.' },
      ],
    },
    {
      title: 'Special Sessions',
      content: null,
      bullets: [
        { bold: 'Cross-Debate:', text: '“AI vs. Classical Approaches for Forecasting Natural Phenomena: Complementarity or Opposition?” (floods, droughts, agricultural yields).' },
        { bold: 'UNESCO-IHE/WDPP Session:', text: 'Water diplomacy, transboundary governance, and capacity building in West Africa (Block 1: Panel, Block 2: Communications & Alumni).' },
        { bold: 'PriMI Competition:', text: 'Best Innovation Award honoring the best technological solutions adapted to the African context with public pitches.' },
      ],
    },
    {
      title: 'Expected Outcomes',
      content: null,
      bullets: [
        { bold: 'Participation & Audience:', text: '300+ participants from the sub-region, 15+ high-level panelists, 15+ international keynotes, and representatives from 15+ countries.' },
        { bold: 'Scientific Output:', text: '30+ scientific communications presented, peer-reviewed proceedings published, and a compilation of innovations and recommendations.' },
        { bold: 'Innovation & Stands:', text: '20+ technology exhibition stands, and 3 PriMI laureates awarded and supported.' },
        { bold: 'Partnerships & Cooperation:', text: 'Sharing results of WDPP projects and strengthening the alumni network (WaSahelNet) in Africa.' },
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
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          Conference <span className="font-accent italic font-medium">Identity</span>
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
            Organizations
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
          <div className="mb-10 text-center">
            <span
              className="inline-block px-6 py-2 font-bold uppercase tracking-wider text-white text-sm"
              style={{
                background: 'linear-gradient(to right, #003366, #009966)',
                borderRadius: '999px',
              }}
            >
              Conference Details
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
