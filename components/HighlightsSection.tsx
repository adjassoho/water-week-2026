'use client';

import { useState, useEffect, useRef } from 'react';

export default function HighlightsSection() {
  const highlights = [
    {
      title: "Conférenciers Experts",
      description: "Des présentations par des chercheurs renommés et des experts de l'industrie.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Articles de Recherche",
      description: "Présentez vos travaux et découvrez les dernières avancées scientifiques.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Réseautage Mondial",
      description: "Échangez avec des professionnels et développez votre réseau international.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Sessions de Formation",
      description: "Participez à des ateliers pratiques et des sessions de formation certifiantes.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Publications SCOPUS",
      description: "Opportunités de publication dans des revues scientifiques indexées SCOPUS.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
  ];

  const stats = [
    { target: 500, suffix: '+', label: 'Participants' },
    { target: 50, suffix: '+', label: 'Conférenciers' },
    { target: 15, suffix: '', label: 'Pays Représentés' },
    { target: 30, suffix: '+', label: 'Sessions' },
  ];

  // Animated counter
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, i) => {
            let start = 0;
            const step = Math.max(1, Math.floor(stat.target / 60));
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
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="highlights" className="py-24 font-sans" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-bold uppercase tracking-widest text-sm mb-2 block" style={{ color: '#009966' }}>
            Pourquoi Participer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#003366' }}>
            Points Forts de l&apos;Événement
          </h2>
          <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: '#009966' }}></div>
        </div>

        {/* Features Grid — 5 cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transition-all duration-300"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '36px 20px',
                border: '1px solid #E3F3EC',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(0,153,102,0.08)' }}>
                <div style={{ color: '#009966' }}>{item.icon}</div>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#003366' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Counters */}
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-semibold" style={{ color: '#003366', fontSize: '36px' }}>
                {counts[i]}{stat.suffix}
              </div>
              <div className="font-bold uppercase tracking-wide" style={{ color: '#009966', fontSize: '13px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
