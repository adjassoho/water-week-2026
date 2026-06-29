'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// High-quality water/hydrology themed images from Unsplash
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80',
    alt: 'African River at sunset',
  },
  {
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1920&q=80',
    alt: 'Mountain lake with crystal clear water',
  },
  {
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80',
    alt: 'Aerial view of a winding river',
  },
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    alt: 'Waterfalls in nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    alt: 'African aquatic landscape',
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

  // Countdown to October 20, 2026
  useEffect(() => {
    const targetDate = new Date('2026-10-20T09:00:00').getTime();

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
      style={{ minHeight: 'clamp(600px, 100svh, 950px)', fontFamily: 'DM Sans, sans-serif' }}
    >
      {/* Background Carousel — crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.48)' }}></div>

        {/* Glow circles inspired by icar2026.org */}
        {/* Top-right gold glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            top: '-80px',
            right: '-80px',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(212,168,67,0.25) 0%, transparent 70%)',
            zIndex: 1,
          }}
        />
        {/* Bottom-left green glow */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            bottom: '-100px',
            left: '-60px',
            width: '380px',
            height: '380px',
            background: 'radial-gradient(circle, rgba(5,131,50,0.28) 0%, transparent 70%)',
            zIndex: 1,
          }}
        />
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
          className="inline-flex flex-wrap justify-center items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            20–22 Oct. 2026
          </span>
          <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Cotonou, BENIN
          </span>
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: 'clamp(26px, 5vw, 56px)',
            fontWeight: 900,
            lineHeight: '1.15',
            letterSpacing: '-1px',
            color: '#FFFFFF',
            marginBottom: '8px',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          3<sup>rd</sup> Water and Sanitation <span className="font-accent italic font-medium">Week</span>
        </h1>

        {/* Gradient accent divider */}
        <div
          className="mx-auto mb-5 rounded-full"
          style={{
            width: '72px',
            height: '4px',
            background: 'linear-gradient(90deg, #003366, #058332)',
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(14px, 2.2vw, 20px)',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.88)',
            marginBottom: '32px',
            maxWidth: '720px',
            lineHeight: '1.55',
            textShadow: '0 1px 8px rgba(0,0,0,0.25)',
          }}
        >
          Harnessing Innovation and Digital Inclusion in Education and Research for Sustainable Transformation of Water, Sanitation, and Agriculture
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            href="/submission"
            className="no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #058332 0%, #009966 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              padding: '13px 28px',
              borderRadius: '999px',
              fontSize: '15px',
              boxShadow: '0 4px 18px rgba(5,131,50,0.40)',
            }}
          >
            Submit an Abstract
          </Link>
          <Link
            href="/registration"
            className="no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(255,255,255,0.4)',
              color: '#FFFFFF',
              fontWeight: 700,
              padding: '13px 28px',
              borderRadius: '999px',
              fontSize: '15px',
            }}
          >
            Register Now
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
            TIME BEFORE THE CONFERENCE
          </p>
          <div className="flex gap-3">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEC' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: 'clamp(8px, 2vw, 14px) clamp(10px, 3vw, 18px)',
                  borderRadius: '12px',
                  minWidth: 'clamp(60px, 18vw, 78px)',
                }}
              >
                <span style={{ fontSize: 'clamp(22px, 6vw, 34px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                  {String(item.value).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 'clamp(9px, 2vw, 10px)', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '4px' }}>
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
