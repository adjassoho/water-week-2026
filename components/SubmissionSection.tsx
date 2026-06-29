'use client';

import Link from 'next/link';
import CollapsibleSection from './CollapsibleSection';
import AnimatedSection from './AnimatedSection';

export default function SubmissionSection() {
  const dates = [
    { date: 'July 30, 2026', label: 'Abstract submission deadline' },
    { date: 'August 30, 2026', label: 'Notification of acceptance' },
    { date: 'July 30, 2026', label: 'PriMI Innovation submission deadline' },
    { date: 'Oct. 20-22, 2026', label: 'Water and Sanitation Week' },
  ];

  return (
    <CollapsibleSection id="submission" title="Submission" defaultOpen={false}>
      <div className="relative overflow-hidden py-16 px-4 sm:px-6" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Background Glow Bubbles */}
        <div className="absolute top-20 left-0 w-[450px] h-[450px] bg-[#058332]/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-[#02345e]/[0.02] rounded-full blur-[90px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Section Header */}
          <AnimatedSection direction="up" duration={600} className="text-center mb-12">
            <div className="section-kicker">
              <span></span> Abstract Submission
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#003366' }}>
              Submission <span className="font-accent italic font-medium">Guidelines</span>
            </h2>
            <div className="section-divider"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left — slides from left */}
            <AnimatedSection direction="left" duration={650} delay={100}>
              <h3 className="text-2xl font-extrabold mb-4" style={{ color: '#003366' }}>
                Instructions
              </h3>
              <span
                className="inline-block px-4 py-1.5 mb-6 font-bold text-sm rounded"
                style={{ backgroundColor: '#009966', color: '#FFFFFF' }}
              >
                English &amp; French
              </span>
              <p className="mb-8 leading-relaxed" style={{ color: '#334155', fontSize: '15px' }}>
                We welcome original research contributions on all aspects of water, sanitation, and agriculture in Africa.
              </p>

              {/* Oral Presentations */}
              <div
                className="p-6 mb-6 rounded-lg transition-transform duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #003366, #058332)', color: '#FFFFFF' }}
              >
                <h4 className="text-lg font-bold mb-3" style={{ color: '#a7f3d0' }}>
                  Oral Presentations
                </h4>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  15-minute presentations followed by 5 minutes of Q&amp;A
                </p>
                <div
                  className="p-4 rounded"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Requirements: Abstract — 300–500 words
                  </p>
                </div>
              </div>

              {/* Poster Presentations */}
              <div
                className="p-6 mb-6 rounded-lg transition-transform duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #003366, #058332)', color: '#FFFFFF' }}
              >
                <h4 className="text-lg font-bold mb-3" style={{ color: '#a7f3d0' }}>
                  Poster Presentations
                </h4>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Visual displays during dedicated poster sessions
                </p>
                <div
                  className="p-4 rounded"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Requirements: Abstract — 300–500 words · Poster: A0 (841 × 1189 mm)
                  </p>
                </div>
              </div>

              <Link
                href="/submission"
                className="inline-block px-6 py-3 font-bold text-sm no-underline transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ border: '2px solid #003366', borderRadius: '20px', color: '#003366' }}
              >
                More Details
              </Link>
            </AnimatedSection>

            {/* Right — slides from right */}
            <AnimatedSection direction="right" duration={650} delay={100}>
              {/* Publication banner */}
              <div
                className="p-6 sm:p-8 rounded-lg mb-8 flex flex-wrap sm:flex-nowrap items-start gap-4 sm:gap-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ border: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}
              >
                <div
                  className="shrink-0 w-24 h-28 rounded-lg flex flex-col items-center justify-center text-center"
                  style={{ background: 'linear-gradient(135deg, #003366, #058332)', color: '#FFFFFF' }}
                >
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Publication in</span>
                  <span className="text-sm font-extrabold mt-1">SCOPUS JOURNALS</span>
                </div>
                <div>
                  <h4 className="text-lg font-extrabold mb-3" style={{ color: '#003366' }}>
                    Publication Opportunities
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>
                    Selected authors will be invited to submit full papers for publication in special issues of SCOPUS-indexed journals, such as <em>Hydrological Sciences Journal</em>, <em>Proceedings of IAHS</em>…
                  </p>
                </div>
              </div>

              {/* Important Dates */}
              <div className="p-8 rounded-lg" style={{ backgroundColor: '#f0f4f8' }}>
                <h4 className="text-xl font-extrabold mb-2 text-center" style={{ color: '#003366' }}>
                  📅 Important Dates
                </h4>
                <p className="text-sm text-center mb-6" style={{ color: '#64748b' }}>
                  Keep track of these key dates for submissions and registration
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {dates.map((item, i) => (
                    <AnimatedSection
                      key={i}
                      direction="up"
                      duration={450}
                      delay={200 + i * 90}
                      threshold={0.05}
                    >
                      <div
                        className="p-4 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1"
                        style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #009966' }}
                      >
                        <div className="font-extrabold mb-1" style={{ color: '#009966', fontSize: '15px' }}>
                          {item.date}
                        </div>
                        <div className="text-xs" style={{ color: '#334155' }}>
                          {item.label}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}
