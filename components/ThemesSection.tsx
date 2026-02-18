'use client';

import { useState } from 'react';
import CollapsibleSection from './CollapsibleSection';

export default function ThemesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const themes = [
    {
      number: '01',
      title: 'Hydrologie de surface et souterraine',
      description: 'Comprendre les dynamiques des ressources en eau de surface et souterraine en Afrique, les impacts du changement climatique et les stratégies d\'adaptation.',
    },
    {
      number: '02',
      title: 'Eau et Assainissement (WASH)',
      description: 'Innovations dans l\'assainissement, l\'accès à l\'eau potable, la gestion des eaux usées et les approches communautaires durables.',
    },
    {
      number: '03',
      title: 'Énergie et Environnement',
      description: 'Nexus eau-énergie, hydroélectricité durable, impact environnemental et biodiversité des écosystèmes aquatiques.',
    },
    {
      number: '04',
      title: 'Gouvernance et Gestion de l\'eau',
      description: 'Politiques et cadres juridiques, gestion intégrée des ressources en eau (GIRE) et coopération transfrontalière.',
    },
  ];

  return (
    <CollapsibleSection
      id="themes"
      title="Thématiques de la Conférence"
      defaultOpen={false}
    >
      <div className="py-16" style={{ backgroundColor: '#ffffff' }}>
        {/* Accordion */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300"
              style={{
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
              }}
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
                    className="font-bold text-sm px-2 py-1 rounded"
                    style={{
                      backgroundColor: openIndex === index ? 'rgba(255,255,255,0.2)' : 'rgba(0,51,102,0.1)',
                      color: openIndex === index ? '#FFFFFF' : '#003366',
                    }}
                  >
                    Thème {theme.number}
                  </span>
                  <span className="font-bold text-lg">{theme.title}</span>
                </div>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>

              {/* Accordion Body */}
              <div
                className="transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0px',
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
          ))}
        </div>
      </div>
    </CollapsibleSection>
  );
}
