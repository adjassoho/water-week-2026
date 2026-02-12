import React from 'react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] text-center mb-16">
            DISCUSSION WORKSHOPS
          </h2>

          {/* Workshop 1 - Dr. Hanane BENQLILOU */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/4">
                <img
                  src="/moderators/hanane-benqlilou.jpg"
                  alt="Dr. Hanane BENQLILOU"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                  Dr. Hanane BENQLILOU
                </h3>
                <p className="text-gray-700 mb-4">
                  Water, Energy, and Environment&apos;s Expert / Institute of Water and Sanitation IEA-ONEE, / MiftahEssad Foundation for Morocco&apos;s Intangible Capital
                </p>
                <a
                  href="/moderators"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  More details
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
              Traditional water governance knowledge digitalization and valuation to face water scarcity in Africa: Culture, Heritage and Perspectives
            </h3>

            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Morocco has a rich ancestral knowledge linking water, energy, agriculture and ecosystems. This knowledge has been developed over centuries to adapt to the semi-arid climate and water scarcity challenges. Among the most remarkable traditional water systems are the Khettara and the ancient sewage systems of Fès.
              </p>

              <p>
                The <strong>Khettara</strong> is an ingenious underground water transport system that uses gravity to bring water from groundwater tables to agricultural areas and villages. This nature-based solution has proven its effectiveness for centuries in managing water resources sustainably in arid and semi-arid regions.
              </p>

              <p>
                The <strong>ancient hydraulic system of Fès</strong> represents another remarkable example of traditional water management. This sophisticated network allowed water recycling through spiritual, economic and domestic activities, demonstrating an integrated approach to water resource management that modern cities could learn from.
              </p>

              <p>
                <strong>Rainwater harvesting</strong> has also been practiced for generations as an ancestral solution to cope with irregular rainfall patterns and water stress in semi-arid regions. These traditional techniques offer valuable lessons for contemporary climate change adaptation strategies.
              </p>

              <p>
                Today, there is an urgent need to capitalize on and digitalize Africa&apos;s water heritage using new technologies. Digital tools can help document, preserve and share these traditional knowledge systems, making them accessible to new generations and enabling their integration into modern water management practices.
              </p>

              <p>
                This workshop aims to explore opportunities for <strong>South-South Partnership</strong> between African countries to share traditional water knowledge, promote cultural heritage preservation, and develop collaborative approaches to address water scarcity challenges through the combination of ancestral wisdom and modern technology.
              </p>

              <p className="mt-6">
                <strong>Keywords:</strong> Traditional water system, Khettara, ancient sewage systems, solutions-based nature, climate change, semi-arid regions, water stress, rainwater harvesting, ecosystems, Culture, Heritage, South-South Partnership
              </p>
            </div>
          </div>

          {/* Workshop 2 - Dr. Dominique BEROD */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/4">
                <img
                  src="/moderators/dominique-berod.jpg"
                  alt="Dr. Dominique BEROD"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                  Dr. Dominique BEROD
                </h3>
                <p className="text-gray-700 mb-4">
                  Chief of the hydrological monitoring and data management Section at the World Meteorological Organization (WMO)
                </p>
                <a
                  href="/moderators"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  More details
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
              From Data to Action: Building the Value Chain to Address Climate and Hydrological Challenges.
            </h3>

            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                This workshop focuses on identifying monitoring requirements and exploring ways to ensure a sustainable data-to-decision value chain, spanning hydrological modeling and forecasting.
              </p>

              <p className="text-blue-600 font-semibold italic">
                More details are coming soon
              </p>
            </div>
          </div>

          {/* Workshop 3 - Dr. Fairouz MEGDICHE KHARRAT */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/4">
                <img
                  src="/moderators/fairouz-megdiche.jpg"
                  alt="Dr. Fairouz MEGDICHE KHARRAT"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                  Dr. Fairouz MEGDICHE KHARRAT
                </h3>
                <p className="text-gray-700 mb-4">
                  Assistant professor of architecture and urbanism at the University of Sousse / Researcher at GADEV/UMRAN, Member of the CCWK group, Tunisia.
                </p>
                <a
                  href="/moderators"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  More details
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
              Co-Creating Water Knowledge CCWK
            </h3>

            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>Obj. 1:</strong> Define co-creation and introduce it in the context of water knowledge. Co-creation represents a collaborative approach where diverse stakeholders work together to generate new insights and solutions for water challenges.
              </p>

              <p>
                <strong>Obj. 2:</strong> Present the vision and mission of the CCWK group, its short and long-term objectives, methodology and process. The group aims to bridge the gap between scientific research, institutional practices, and community knowledge in water management.
              </p>

              <p>
                <strong>Obj. 3:</strong> Open dialogue by connecting different actors in the African context and beyond. This includes researchers, policymakers, practitioners, and local communities who all play crucial roles in water governance.
              </p>

              <p>
                <strong>Obj. 4:</strong> Share case studies that demonstrate successful co-creation approaches in water management across different African contexts, highlighting lessons learned and best practices.
              </p>

              <p>
                <strong>Obj. 5:</strong> Inspire scientific, institutional and social actors to adopt the 4 pillars of co-creation: <strong>Inclusivity</strong>, <strong>Openness</strong>, <strong>Legitimacy</strong> & <strong>Actionability</strong>. These principles ensure that co-created knowledge is both scientifically sound and practically applicable.
              </p>

              <p className="mt-6">
                This workshop will be moderated by three members of the CCWK group within the IAHS HELPING decade. The format will include interactive activities such as debates, information gathering sessions, and a stakeholder constellation exercise to map relationships and identify opportunities for collaboration.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
