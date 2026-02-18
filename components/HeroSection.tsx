'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// High-quality water/hydrology themed images from Unsplash
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80',
    alt: 'Rivière en Afrique au coucher du soleil',
  },
  {
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1920&q=80',
    alt: 'Lac de montagne aux eaux cristallines',
  },
  {
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80',
    alt: 'Vue aérienne d\'une rivière sinueuse',
  },
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    alt: 'Chutes d\'eau dans la nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    alt: 'Paysage aquatique africain',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Countdown to June 3, 2026
  useEffect(() => {
    const targetDate = new Date('2026-06-03T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '950px', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Background Carousel — crossfade */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1500"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transitionDuration: '1500ms',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.52)' }}></div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="transition-all duration-300 rounded-full cursor-pointer"
            style={{
              width: i === currentSlide ? '28px' : '8px',
              height: '8px',
              backgroundColor: i === currentSlide ? '#009966' : 'rgba(255,255,255,0.5)',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center px-4">
        {/* Date & Location Badge */}
        <div
          className="inline-flex items-center gap-3 mb-8"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '30px',
            padding: '8px 20px',
          }}
        >
          <span className="flex items-center gap-2" style={{ fontSize: '16px' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            3–5 Juin 2026
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
          <span className="flex items-center gap-2" style={{ fontSize: '16px' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Cotonou, BÉNIN
          </span>
        </div>

        {/* Conference Logo */}
        <img src="/logo.png" alt="SEA 2026 Logo" className="h-32 w-auto mb-6" />

        {/* Main Title */}
        <h1
          style={{
            fontSize: '54px',
            fontWeight: 900,
            lineHeight: '1.2',
            letterSpacing: '-1px',
            color: '#FFFFFF',
            marginBottom: '10px',
          }}
        >
          2<sup>ème</sup> Semaine de l&apos;Eau et de l&apos;Assainissement
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '30px',
          }}
        >
          De la Recherche à l&apos;Innovation et au Transfert de Technologies
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            href="/submission"
            className="no-underline transition-all hover:opacity-90"
            style={{
              backgroundColor: '#009966',
              color: '#FFFFFF',
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: '2px',
              fontSize: '16px',
            }}
          >
            Soumettre un résumé
          </Link>
          <Link
            href="/registration"
            className="no-underline transition-all hover:opacity-90"
            style={{
              backgroundColor: '#002D72',
              color: '#FFFFFF',
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: '2px',
              fontSize: '16px',
            }}
          >
            S&apos;inscrire maintenant
          </Link>
        </div>

        {/* Countdown Timer */}
        <div className="text-center">
          <p
            style={{
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '12px',
              color: '#FFFFFF',
            }}
          >
            TEMPS AVANT LA CONFÉRENCE
          </p>
          <div className="flex gap-3">
            {[
              { value: timeLeft.days, label: 'JOURS' },
              { value: timeLeft.hours, label: 'HEURES' },
              { value: timeLeft.minutes, label: 'MINUTES' },
              { value: timeLeft.seconds, label: 'SECONDES' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px 20px',
                  borderRadius: '4px',
                  minWidth: '80px',
                }}
              >
                <span style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF' }}>
                  {String(item.value).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '11px', color: '#FFFFFF', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
