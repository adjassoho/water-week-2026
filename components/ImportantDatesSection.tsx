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
      date: '30 Mars 2026',
      event: 'Date limite de soumission des résumés',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      status: 'upcoming',
    },
    {
      date: '30 Mars 2026',
      event: 'Date limite de demande de formation',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      ),
      status: 'upcoming',
    },
    {
      date: '15 Avril 2026',
      event: 'Notification d\'acceptation',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      status: 'upcoming',
    },
    {
      date: '15 Mai 2026',
      event: 'Date limite d\'inscription anticipée',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      status: 'upcoming',
    },
    {
      date: '1 — 2 Juin 2026',
      event: 'Sessions de formation',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      status: 'training',
    },
    {
      date: '3 — 5 Juin 2026',
      event: 'Semaine de l\'Eau et de l\'Assainissement',
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
              const isTraining = item.status === 'training';

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
                      : isTraining
                        ? 'bg-gradient-to-br from-[#088395] to-[#05BFDB] text-white shadow-[#088395]/30'
                        : 'bg-white border-2 border-[#E0F7FA] text-[#088395] group-hover:border-[#05BFDB] group-hover:shadow-[#05BFDB]/20'
                    }`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-10 pt-1 ${index === dates.length - 1 ? 'pb-0' : ''}`}>
                    <div className={`rounded-2xl p-5 sm:p-6 transition-all duration-500 ${isConference
                        ? 'bg-gradient-to-r from-[#0A2E4D] to-[#0A4D68] shadow-xl shadow-[#0A2E4D]/15'
                        : isTraining
                          ? 'bg-gradient-to-r from-[#088395]/10 to-[#05BFDB]/5 border border-[#088395]/15'
                          : 'bg-white border border-[#E0F7FA] hover:border-[#05BFDB]/20 hover:shadow-lg hover:shadow-[#088395]/5'
                      }`}>
                      <div className={`text-sm font-bold mb-1 ${isConference ? 'text-[#F0D78C]' : isTraining ? 'text-[#088395]' : 'text-[#088395]'
                        }`}>
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
