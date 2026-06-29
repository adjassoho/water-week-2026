'use client';

import { useEffect, useRef, useState } from 'react';

export default function ImportantDatesSection() {
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

  const dates = [
    {
      date: '30 Juillet 2026',
      event: 'Date limite de soumission des résumés',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      status: 'upcoming',
    },
    {
      date: '30 Juillet 2026',
      event: 'Date limite des candidatures — Compétition PriMI',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      ),
      status: 'upcoming',
    },
    {
      date: '30 Août 2026',
      event: 'Notification d\'acceptation',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      status: 'upcoming',
    },
    {
      date: '20 — 22 Octobre 2026',
      event: '3ème Semaine de l\'Eau et de l\'Assainissement',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      status: 'conference',
    },
  ];

  return (
    <section id="dates" className="relative py-24 sm:py-32 px-4 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F0F9FF]/50 to-white" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mx-auto w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Calendrier
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2E4D] mt-4 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Dates{' '}
            <span className="gradient-text">Importantes</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#05BFDB] via-[#088395] to-[#D4A843]" />

          <div className="space-y-0">
            {dates.map((item, index) => {
              const isConference = item.status === 'conference';

              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 sm:gap-8 transition-all duration-700 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                  style={{ transitionDelay: `${150 * index}ms` }}
                >
                  {/* Node */}
                  <div className={`relative z-10 flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${isConference
                      ? 'bg-gradient-to-br from-[#D4A843] to-[#F0D78C] text-[#0A2E4D] shadow-[#D4A843]/30'
                      : 'bg-white border-2 border-[#E0F7FA] text-[#088395] group-hover:border-[#05BFDB] group-hover:shadow-[#05BFDB]/20'
                    }`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-10 pt-1 ${index === dates.length - 1 ? 'pb-0' : ''}`}>
                    <div className={`rounded-2xl p-5 sm:p-6 transition-all duration-500 ${isConference
                        ? 'bg-gradient-to-r from-[#0A2E4D] to-[#0A4D68] shadow-xl shadow-[#0A2E4D]/15'
                        : 'bg-white border border-[#E0F7FA] hover:border-[#05BFDB]/20 hover:shadow-lg hover:shadow-[#088395]/5'
                      }`}>
                      <div className={`text-sm font-bold mb-1 ${isConference ? 'text-[#F0D78C]' : 'text-[#088395]'}`}>
                        {item.date}
                      </div>
                      <div className={`text-base sm:text-lg font-semibold ${isConference ? 'text-white' : 'text-[#0A2E4D]'
                        }`} style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.event}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
