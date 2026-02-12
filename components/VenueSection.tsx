'use client';

import { useEffect, useRef, useState } from 'react';

export default function VenueSection() {
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

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'audace@aims.ac.za',
      href: 'mailto:audace@aims.ac.za',
      gradient: 'from-[#088395] to-[#05BFDB]',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Téléphone',
      value: '+229 01 98 91 70 29',
      href: 'tel:+22901989170029',
      gradient: 'from-[#0A4D68] to-[#088395]',
    },
  ];

  return (
    <section id="venue" className="relative py-24 sm:py-32 px-4 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F0F9FF]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#05BFDB]/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mx-auto w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Lieu
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2E4D] mt-4 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Lieu de la{' '}
            <span className="gradient-text">Conférence</span>
          </h2>
          <p className="text-[#0A2E4D]/60 text-lg">
            Palais des Congrès de Cotonou, Bénin
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
          {/* Map */}
          <div className={`md:col-span-3 rounded-3xl overflow-hidden shadow-xl shadow-[#088395]/10 border border-[#E0F7FA] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2441!2d2.4!3d6.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInMTIuMCJOIDLCsDI0JzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Palais des Congrès de Cotonou"
              className="w-full h-full"
            />
          </div>

          {/* Contact Cards */}
          <div className={`md:col-span-2 flex flex-col gap-5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
            {/* Address Card */}
            <div className="bg-gradient-to-br from-[#0A2E4D] to-[#088395] rounded-2xl p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#05BFDB]/10 rounded-full blur-[40px]" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00FFCA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Palais des Congrès
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Cotonou, Bénin<br />
                  Centre de conférences international
                </p>
              </div>
            </div>

            {/* Contact Info */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group bg-white rounded-2xl p-6 border border-[#E0F7FA] hover:border-[#05BFDB]/30 hover:shadow-lg hover:shadow-[#088395]/8 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2E4D] mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>
                      {info.label}
                    </h4>
                    <p className="text-[#088395] text-sm font-medium group-hover:text-[#05BFDB] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
