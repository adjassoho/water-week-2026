'use client';

import { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HighlightsSection() {
  const highlights = [
    {
      title: "Scientific Presentations",
      description: "Present your research and discover the latest advances in digital water, sanitation, and agriculture.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "International Networking",
      description: "Connect with professionals from 15+ countries to expand your African and European networks.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "PriMI Competition",
      description: "Innovation contest: public pitches, high-level jury, and awards for the top 3 digital solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      )
    },
    {
      title: "UNESCO-IHE/WDPP Session",
      description: "Special session on IHE Delft's WDPP: funding opportunities, projects, and Africa-Europe synergies.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
  ];

  const stats = [
    { target: 300, suffix: '+', label: 'Participants expected' },
    { target: 15, suffix: '+', label: 'Countries represented' },
    { target: 30, suffix: '+', label: 'Scientific Presentations' },
    { target: 20, suffix: '+', label: 'Innovation Stands' },
  ];

  // Animated counter
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    if (statsVisible && !hasAnimated) {
      setHasAnimated(true);
      stats.forEach((stat, i) => {
        let start = 0;
        const step = Math.max(1, Math.floor(stat.target / 55));
        const timer = setInterval(() => {
          start += step;
          if (start >= stat.target) {
            start = stat.target;
            clearInterval(timer);
          }
          setCounts(prev => {
            const copy = [...prev];
            copy[i] = start;
            return copy;
          });
        }, 28);
      });
    }
  }, [statsVisible, hasAnimated]);

  return (
    <section id="highlights" className="relative overflow-hidden py-24 font-sans" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Background Glow Bubbles */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#058332]/[0.02] rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-20 right-0 w-[450px] h-[450px] bg-[#02345e]/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header — fades up */}
        <AnimatedSection direction="up" duration={600} className="text-center mb-16">
          <div className="section-kicker">
            <span></span> Why Attend
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#003366' }}>
            Conference <span className="font-accent italic font-medium">Highlights</span>
          </h2>
          <div className="section-divider"></div>
        </AnimatedSection>

        {/* Feature Cards — staggered from bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              duration={600}
              delay={index * 120}
              threshold={0.08}
            >
              <div className="premium-card text-center h-full" style={{ padding: '36px 20px' }}>
                {/* Floating icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    backgroundColor: 'rgba(0,153,102,0.08)',
                    animation: `float ${3 + index * 0.4}s ease-in-out infinite`,
                  }}
                >
                  <div style={{ color: '#009966' }}>{item.icon}</div>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#003366' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats — fades up as a group */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <AnimatedSection key={i} direction="up" duration={500} delay={i * 100} threshold={0.1}>
              <div className="text-center">
                <div className="font-semibold" style={{ color: '#003366', fontSize: '36px' }}>
                  {counts[i]}{stat.suffix}
                </div>
                <div className="font-bold uppercase tracking-wide" style={{ color: '#009966', fontSize: '13px' }}>
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
