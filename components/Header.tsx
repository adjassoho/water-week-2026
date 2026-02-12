'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Intervenants', href: '/speakers' },
    { name: 'Programme', href: '/program' },
    { name: 'Soumission', href: '/submission' },
    { name: 'Formations', href: '/training' },
    { name: 'Inscription', href: '/registration' },
    { name: 'Lieu', href: '/venue' },
    { name: 'Comité', href: '/committee' },
    { name: 'Partenaires', href: '/partners' },
  ];

  const partners = [
    { name: 'C2EA', img: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png' },
    { name: 'INE / UAC', img: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png' },
    { name: 'IAHS', img: 'https://i.ibb.co/XZW7BHKz/jhhv.png' },
    { name: 'FRIEND AOC', img: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg' },
  ];

  /* Duplicate array for seamless infinite scroll (CSS translates -50%) */
  const marqueeItems = [...partners, ...partners];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-lg transition-transform group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Water Week 2026 Logo"
                className="w-full h-full object-contain bg-white p-1"
              />
            </div>
            <div className="hidden sm:block">
              <div className={`text-base font-bold font-heading leading-tight transition-colors ${isScrolled ? 'text-[#0A2E4D]' : 'text-white'
                }`}>
                Semaine de l&apos;Eau
              </div>
              <div className={`text-[11px] font-semibold transition-colors ${isScrolled ? 'text-[#088395]' : 'text-[#00FFCA]'
                }`}>
                Cotonou 2026
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-0.5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-all relative group rounded-lg ${isScrolled
                  ? 'text-[#0A2E4D]/80 hover:text-[#088395] hover:bg-[#088395]/5'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${isScrolled ? 'bg-[#05BFDB]' : 'bg-[#00FFCA]'
                  }`} />
              </Link>
            ))}
          </nav>

          {/* Right Side: CTA + Language */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm font-medium ${isScrolled ? 'text-[#0A2E4D]/60' : 'text-white/60'
              }`}>
              <button className={`transition-colors ${isScrolled ? 'text-[#088395] font-bold' : 'text-white font-bold'
                }`}>FR</button>
              <span>|</span>
              <button className="hover:text-[#05BFDB] transition-colors">EN</button>
            </div>
            <Link
              href="/submission"
              className="px-5 py-2.5 bg-gradient-to-r from-[#D4A843] to-[#F0D78C] text-[#0A2E4D] font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-[#D4A843]/30 hover:scale-105 transition-all duration-300"
            >
              Soumettre
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`xl:hidden p-2.5 rounded-xl transition-all ${isScrolled ? 'text-[#0A2E4D] hover:bg-[#088395]/10' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className={`rounded-2xl p-4 space-y-1 ${isScrolled ? 'bg-[#F0F9FF]' : 'glass-dark'
            }`}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isScrolled
                  ? 'text-[#0A2E4D] hover:bg-[#088395]/10 hover:text-[#088395]'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 px-2 flex flex-col gap-3">
              <Link
                href="/submission"
                onClick={() => setIsMenuOpen(false)}
                className="btn-gold text-sm text-center rounded-xl py-3"
              >
                Soumettre un résumé
              </Link>
              <div className="flex items-center justify-center space-x-4 py-2">
                <button className={`font-bold text-sm ${isScrolled ? 'text-[#088395]' : 'text-white'}`}>FR</button>
                <span className={isScrolled ? 'text-gray-400' : 'text-white/40'}>|</span>
                <button className={`text-sm ${isScrolled ? 'text-gray-400' : 'text-white/50'} hover:text-[#05BFDB]`}>EN</button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* ===== Partner Ticker — thin marquee below nav ===== */}
      <div
        className={`hidden xl:block overflow-hidden transition-all duration-500 ${isScrolled
          ? 'max-h-7 opacity-100 border-t border-[#E0F7FA]/60'
          : 'max-h-0 opacity-0'
          }`}
      >
        <div
          className="relative h-7"
          style={{
            maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="partner-marquee h-full items-center whitespace-nowrap">
            {marqueeItems.map((p, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-6 flex-shrink-0">
                <img src={p.img} alt={p.name} className="h-4 w-auto object-contain opacity-50" />
                <span className="text-[10px] font-semibold text-[#0A2E4D]/35 uppercase tracking-wider">{p.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
