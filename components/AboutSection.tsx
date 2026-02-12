'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [countersVisible, setCountersVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 1500, suffix: '+', label: 'Participants attendus', icon: '👥' },
    { value: 25, suffix: '+', label: 'Pays représentés', icon: '🌍' },
    { value: 50, suffix: '+', label: 'Conférenciers experts', icon: '🎓' },
    { value: 4, suffix: '', label: 'Thématiques principales', icon: '📊' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 bg-white overflow-hidden" ref={sectionRef}>
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #088395 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      {/* Soft gradient blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mx-auto w-fit">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            À propos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
            À propos de la conférence
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Image Column */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#088395]/15 group">
              <img
                src="https://i.ibb.co/LXZ9sXvP/prof.jpg"
                alt="Conférence sur l'eau - Prof. Daouda Mama"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E4D]/70 via-[#0A2E4D]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-card px-5 py-3 inline-flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00FFCA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-white text-sm font-medium">Palais des Congrès, Cotonou</p>
                </div>
              </div>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-br from-[#05BFDB]/20 to-[#00FFCA]/20 rounded-3xl -z-10" />
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-[#D4A843]/15 to-[#F0D78C]/15 rounded-2xl -z-10" />
          </div>

          {/* Text Column */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#088395]/8 border border-[#088395]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#088395]" />
              <span className="text-[#088395] text-xs font-semibold uppercase tracking-wider">3 — 5 juin 2026</span>
            </div>

            <p className="text-[#0A2E4D] text-base sm:text-lg leading-relaxed mb-5">
              Le <strong className="text-[#088395]">Centre d&apos;Excellence d&apos;Afrique pour l&apos;Eau et l&apos;Assainissement (C2EA)</strong> de
              l&apos;Institut National de l&apos;Eau (INE/UAC), en collaboration avec l&apos;Association Internationale des
              Sciences Hydrologiques (IAHS) et le réseau FRIEND AOC, organise la deuxième édition de la Semaine
              de l&apos;Eau et de l&apos;Assainissement au Palais des Congrès de Cotonou (Bénin).
            </p>

            <p className="text-[#0A2E4D]/75 text-base leading-relaxed mb-5">
              Cette édition se concentre sur la thématique : <em className="text-[#D4A843] font-semibold not-italic">De la Recherche
                à l&apos;Innovation et au Transfert de Technologies</em>. L&apos;événement
              rassemblera des chercheurs, des décideurs politiques et des praticiens pour faire progresser
              notre compréhension des systèmes hydriques africains.
            </p>

            <p className="text-[#0A2E4D]/60 text-sm leading-relaxed mb-8">
              Avec le soutien de l&apos;UNESCO FRIEND-Water et de l&apos;IAHS, cette conférence s&apos;inscrit dans la
              continuité des éditions précédentes et vise à promouvoir la recherche et l&apos;innovation dans
              le domaine de l&apos;eau en Afrique.
            </p>

            <a href="/about" className="btn-primary-water inline-flex group">
              En savoir plus
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Counter Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl p-7 sm:p-8 text-center border border-[#E0F7FA] hover:border-[#05BFDB]/30 hover:shadow-lg hover:shadow-[#05BFDB]/10 transition-all duration-500 group overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#05BFDB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-2xl mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {countersVisible ? (
                    <CountUp target={stat.value} duration={2000} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-[#0A2E4D]/50 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, duration, suffix }: { target: number; duration: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}{suffix}</>;
}
