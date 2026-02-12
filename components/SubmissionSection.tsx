'use client';

import { useEffect, useRef, useState } from 'react';

export default function SubmissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const submissionTypes = [
    {
      type: 'Communication orale',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
      details: [
        'Résumé de 300 mots maximum',
        'Langue : Français ou Anglais',
        'Présentation de 15 minutes + 5 min de discussion',
        'Support PowerPoint recommandé',
      ],
    },
    {
      type: 'Poster',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      details: [
        'Format A0 portrait (841 × 1189 mm)',
        'Résumé de 250 mots maximum',
        'Session poster dédiée avec jury',
        'Meilleurs posters récompensés',
      ],
    },
  ];

  const journals = [
    { name: 'Proceedings of IAHS', badge: 'SCOPUS' },
    { name: 'Journal of Water Science', badge: 'SCOPUS' },
    { name: 'Actes de la Conférence', badge: 'Open Access' },
  ];

  return (
    <section id="submission" className="relative py-24 sm:py-32 px-4 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E4D] via-[#0A4D68]/95 to-[#088395]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#05BFDB]/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label-light mx-auto w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Soumission
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Soumettez vos{' '}
            <span className="gradient-text-gold">travaux</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Partagez vos résultats de recherche avec la communauté scientifique internationale
          </p>
        </div>

        {/* Submission Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-14">
          {submissionTypes.map((item, index) => (
            <div
              key={index}
              className={`glass-card p-7 sm:p-9 hover:bg-white/[0.1] transition-all duration-700 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#05BFDB]/20 to-[#00FFCA]/10 flex items-center justify-center text-[#00FFCA] group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.type}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/65 text-sm">
                    <svg className="w-5 h-5 text-[#00FFCA] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Publication Opportunities */}
        <div className={`glass-card p-7 sm:p-9 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <h3 className="text-xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            📚 Opportunités de Publication
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {journals.map((journal, index) => (
              <div key={index} className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
                <span className="text-white/80 text-sm font-medium">{journal.name}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${journal.badge === 'SCOPUS'
                    ? 'bg-[#D4A843]/20 text-[#F0D78C]'
                    : 'bg-[#05BFDB]/20 text-[#05BFDB]'
                  }`}>
                  {journal.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="/submission" className="btn-gold inline-flex text-lg px-12 py-5 rounded-2xl shadow-2xl shadow-[#D4A843]/20 group">
            Soumettre un résumé
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-white/30 text-sm mt-4">Date limite : 30 mars 2026</p>
        </div>
      </div>
    </section>
  );
}
