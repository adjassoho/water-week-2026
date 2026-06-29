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
      "Digitalization and Valorization of Traditional Water Management Knowledge Facing Scarcity in Africa: Culture, Heritage and Perspectives",
    moderators: [
      {
        name: 'Dr. Hanane BENQLILOU',
        affiliation:
          "Water, Energy & Environment Expert — National Institute of Water and Sanitation IEA-ONEE / MiftahEssad Foundation for the Intangible Capital of Morocco",
        photo:
          'https://icar2026.org/wp-content/uploads/2026/01/Photo-Hanane-SIEL-2024-1.jpg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          Morocco has a rich heritage of ancestral knowledge linking water, energy, agriculture, and ecosystems — developed over centuries to adapt to the semi-arid climate and water scarcity challenges. Among the most remarkable traditional water systems are the <strong>Khettara</strong> and the ancient sewage systems of Fez.
        </p>
        <p>
          The <strong>Khettara</strong> is an ingenious underground system for capturing and conveying water by gravity, proving its effectiveness for centuries in the sustainable management of water resources.
        </p>
        <p>
          The <strong>ancestral hydraulic system of Fez</strong> represents another remarkable example of traditional water management, allowing water recycling through spiritual, economic, and domestic activities.
        </p>
        <p>
          Today, there is an urgent need to capitalize on African water heritage using new technologies. This workshop aims to explore <strong>South-South Partnership</strong> opportunities between African countries to share traditional water knowledge.
        </p>
        <p className="mt-4">
          <strong>Keywords:</strong> Traditional hydraulic systems, Khettara, ancient sewerage networks, nature-based solutions, climate change, semi-arid regions, water stress, rainwater harvesting, ecosystems, Culture, Heritage, South-South Partnership.
        </p>
      </div>
    ),
  },
  {
    num: 2,
    title:
      "From Data to Action: Building the Value Chain to Address Climate and Hydrological Challenges",
    moderators: [
      {
        name: 'Dr. Dominique BEROD',
        affiliation:
          "Head of Hydrological Monitoring and Data Management Section — World Meteorological Organization (WMO)",
        photo:
          'https://icar2026.org/wp-content/uploads/2026/01/photo-D-Berod-2022-bis.jpeg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          This workshop focuses on identifying monitoring needs and exploring ways to ensure a sustainable data-to-decision chain, covering hydrological modeling and forecasting.
        </p>
        <p className="text-[#058332] font-semibold italic">
          More details coming soon.
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
          "Assistant Professor in Architecture and Urbanism, University of Sousse / Researcher at GADEV/UMRAN, CCWK Group Member, Tunisia",
        photo:
          'https://icar2026.org/wp-content/uploads/2026/01/Fairouz-IDPhoto.jpeg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          <strong>Obj. 1:</strong> Define co-creation and introduce it in the context of water knowledge — a collaborative approach where diverse stakeholders jointly generate solutions to water challenges.
        </p>
        <p>
          <strong>Obj. 2:</strong> Present the vision and mission of the CCWK group, its short-term and long-term objectives, its methodology and process.
        </p>
        <p>
          <strong>Obj. 3:</strong> Open dialogue by connecting different actors in the African context and beyond — researchers, decision-makers, practitioners, and local communities.
        </p>
        <p>
          <strong>Obj. 4:</strong> Share case studies demonstrating successful co-creation approaches in water management across various African contexts.
        </p>
        <p>
          <strong>Obj. 5:</strong> Inspire scientific, institutional, and social stakeholders to adopt the 4 pillars of co-creation:{' '}
          <strong>Inclusivity</strong>, <strong>Openness</strong>,{' '}
          <strong>Legitimacy</strong> &amp; <strong>Actionability</strong>.
        </p>
        <p className="mt-2">
          This workshop will be facilitated by three members of the CCWK group as part of the IAHS HELPING decade. The format will include interactive activities: debates, information collection sessions, and a stakeholder mapping exercise.
        </p>
      </div>
    ),
  },
  {
    num: 4,
    title:
      "Challenges, Issues, and Opportunities of the Blue Economy in Developing Countries: Towards Integrated Water Resources Management",
    moderators: [
      {
        name: 'M. Ernest TINDO',
        affiliation: 'Blue Economy & Aquatic Resources Management Expert',
        photo:
          'https://icar2026.org/wp-content/uploads/2026/02/Photo-1-Ernest-TINDO-scaled-e1771315066166.jpg',
      },
      {
        name: 'Dr. Asmaa BENSLIMANE',
        affiliation: "Researcher in Integrated Water Resources Management, Morocco",
        photo: 'https://icar2026.org/wp-content/uploads/2026/02/Photo-Dr-Asmaa.jpg',
      },
    ],
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.8]">
        <p>
          The Blue Economy represents an integrated approach that considers water, oceans, lakes, and rivers as drivers of sustainable development and economic prosperity for developing countries.
        </p>
        <p className="text-[#058332] font-semibold italic">
          More details coming soon.
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
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Discussion <span className="font-accent italic font-medium">Workshops</span>
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
                  Workshop {workshop.num}
                </span>
                <h2
                  className="text-lg md:text-xl font-bold text-white mt-1 leading-snug"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
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
                      More Details
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
