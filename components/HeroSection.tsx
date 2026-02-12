'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  useEffect(() => {
    const targetDate = new Date('June 3, 2026 09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' },
  ];

  const partnerLogos = [
    { src: 'https://sbpe.bj/img/logos-liens-utiles/logo-gouv.png', alt: 'Gouvernement du Bénin' },
    { src: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png', alt: 'INE' },
    { src: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png', alt: 'C2EA' },
    { src: 'https://i.ibb.co/XZW7BHKz/jhhv.png', alt: 'IAHS' },
    { src: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg', alt: 'UNESCO' },
    { src: 'https://i.ibb.co/h1Dcq2xX/IHE.jpg', alt: 'IHE Delft' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/jPzkWzSV/image.jpg"
          alt="Water Week Conference"
          className="w-full h-full object-cover scale-105"
          style={{
            filter: 'brightness(0.3) saturate(1.2)',
            transition: 'transform 20s ease-out',
            transform: loaded ? 'scale(1.1)' : 'scale(1.05)',
          }}
        />
        {/* Premium gradient overlay with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E4D]/80 via-[#088395]/30 to-[#0A2E4D]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4D]/40 via-transparent to-[#0A2E4D]/40" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Particles — more dynamic */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 22}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + (i % 3) * 2}s`,
              width: `${3 + (i % 4) * 2}px`,
              height: `${3 + (i % 4) * 2}px`,
              opacity: 0.2 + (i % 4) * 0.1,
              background: i % 3 === 0 ? 'rgba(212, 168, 67, 0.4)' : 'rgba(5, 191, 219, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-8 text-center flex flex-col items-center flex-1 justify-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl mb-10 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFCA] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFCA]" />
          </span>
          <span className="text-white/90 text-sm font-medium tracking-wide">
            3 — 5 juin 2026 • Palais des Congrès, Cotonou
          </span>
        </div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.05] tracking-tight transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="text-white drop-shadow-2xl">Semaine de l&apos;Eau</span>
          <br />
          <span className="bg-gradient-to-r from-[#05BFDB] via-[#00FFCA] to-[#D4A843] bg-clip-text text-transparent bg-[length:200%_auto]" style={{ animation: 'gradientShift 4s ease infinite' }}>
            2026
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-3 font-light leading-relaxed transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          De la Recherche à l&apos;Innovation et au Transfert de Technologies
        </p>

        <p
          className={`text-base text-[#00FFCA]/70 font-medium mb-12 tracking-wide transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          2ème Édition — Cotonou, Bénin
        </p>

        {/* Countdown */}
        <div
          className={`flex justify-center gap-3 sm:gap-4 mb-14 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {countdownItems.map((item, index) => (
            <div
              key={index}
              className="glass-card px-4 sm:px-7 py-5 sm:py-6 min-w-[72px] sm:min-w-[110px] text-center relative overflow-hidden group hover:bg-white/[0.12] transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#05BFDB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-3xl sm:text-5xl font-bold text-white tabular-nums" style={{ fontFamily: 'var(--font-heading)' }}>
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 mt-2 uppercase tracking-[0.2em] font-semibold">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <Link href="/submission" className="btn-gold text-base px-10 py-4 rounded-2xl shadow-2xl shadow-[#D4A843]/20 hover:shadow-[#D4A843]/40">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Soumettre un résumé
          </Link>
          <Link href="/program" className="btn-secondary-water text-base px-10 py-4 rounded-2xl">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Voir le programme
          </Link>
        </div>
      </div>

      {/* Partner Logos Strip */}
      <div
        className={`relative z-10 w-full py-8 border-t border-white/[0.06] transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.3em] mb-5 font-semibold">
          Organisé par
        </p>
        <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap px-4">
          {partnerLogos.map((logo, i) => (
            <div key={i} className="h-9 sm:h-11 flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-all duration-500 hover:scale-110"
                style={{ maxWidth: '70px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-white">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[50px] sm:h-[70px]" preserveAspectRatio="none">
          <path d="M0,60 C240,20 480,90 720,50 C960,10 1200,70 1440,40 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
