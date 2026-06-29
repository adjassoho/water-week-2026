'use client';

import { useState } from 'react';
import CollapsibleSection from './CollapsibleSection';
import AnimatedSection from './AnimatedSection';

export default function ThemesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const themes = [
    {
      number: '01',
      title: 'Digital Transformation and Management of Water, Sanitation and Agriculture',
      description: 'Digital tools and integrated water resource management under flood and drought risks (real-time platforms, early warning systems, remote sensing). Digital transformation and precision agriculture for sustainable water use (soil moisture sensors, weather stations, satellite imagery). Digital innovation for sustainable urban and peri-urban water and sanitation governance.',
    },
    {
      number: '02',
      title: 'Open Data, AI and Participatory Science in Service of Research and Innovation',
      description: 'Open data and water governance (standardization, metadata structuring, interoperability). Artificial intelligence and big data for water risk management (machine learning, predictive modeling, time-series analysis). Participatory science and co-production of knowledge for water innovation.',
    },
    {
      number: '03',
      title: 'Artificial Intelligence and Optimisation of Educational Systems',
      description: 'Intelligent adaptive learning systems and academic performance (adaptive environments, personalized learning pathways). Strategic use of educational data for planning and decision-making. Design of sustainable and equitable digital educational ecosystems (low-bandwidth, offline functionality).',
    },
    {
      number: '04',
      title: 'Innovative Processes and Smart Technologies in Water and Sludge Treatment',
      description: 'Smart faecal sludge treatment and valorisation of by-products. Innovative decentralised wastewater management technologies in urban and peri-urban areas. Digital tools and predictive modelling of membrane performance for drinking water treatment. Machine learning for leak detection and drinking water network management.',
    },
  ];

  return (
    <CollapsibleSection id="themes" title="Conference Themes" defaultOpen={false}>
      <div className="relative overflow-hidden py-16" style={{ backgroundColor: '#ffffff' }}>
        {/* Background Glow Bubbles */}
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-[#058332]/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-[#02345e]/[0.02] rounded-full blur-[90px] pointer-events-none z-0" />

        <div className="relative z-10">
          {/* Section Header */}
          <AnimatedSection direction="up" duration={600} className="text-center mb-12">
            <div className="section-kicker">
              <span></span> Scientific Programme
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#003366' }}>
              Conference <span className="font-accent italic font-medium">Themes</span>
            </h2>
            <div className="section-divider"></div>
          </AnimatedSection>

          {/* Accordion — each item staggered */}
          <div className="space-y-3 max-w-4xl mx-auto px-4">
            {themes.map((theme, index) => (
              <AnimatedSection
                key={index}
                direction="up"
                duration={550}
                delay={index * 100}
                threshold={0.05}
              >
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors cursor-pointer"
                    style={{
                      background: openIndex === index
                        ? 'linear-gradient(to right, #003366, #058332)'
                        : '#f8f9fa',
                      color: openIndex === index ? '#FFFFFF' : '#003366',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="font-bold text-sm px-2 py-1 rounded shrink-0"
                        style={{
                          backgroundColor: openIndex === index ? 'rgba(255,255,255,0.2)' : 'rgba(0,51,102,0.1)',
                          color: openIndex === index ? '#FFFFFF' : '#003366',
                        }}
                      >
                        Theme {theme.number}
                      </span>
                      <span className="font-bold text-sm sm:text-base leading-snug">{theme.title}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>

                  {/* Accordion Body */}
                  <div
                    className="transition-all duration-400 overflow-hidden"
                    style={{
                      maxHeight: openIndex === index ? '220px' : '0px',
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="px-6 py-5" style={{ backgroundColor: '#f8fafb' }}>
                      <p className="leading-relaxed" style={{ color: '#334155', fontSize: '15px' }}>
                        {theme.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}
