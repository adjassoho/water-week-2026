'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [mobileArticlesOpen, setMobileArticlesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const articlesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Program', href: '/program' },
    { name: 'Submission', href: '/submission' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Registration', href: '/registration' },
    { name: 'Venue', href: '/venue' },
    { name: 'Committees', href: '/committee' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
  ];

  const articles = [
    { name: '2024 Edition', href: 'https://piahs.copernicus.org/articles/388/index.html' },
    { name: '2025 Edition', href: 'https://piahs.copernicus.org/articles/389/index.html' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : '#ffffff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,51,102,0.09)' : '0 1px 0 rgba(0,0,0,0.06)',
      }}
    >
      {/* Bottom gradient shimmer line */}
      <div className="header-gradient-line" />

      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 h-[50px]">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 no-underline">
          <img src="/logo.png" alt="SEA 2026" className="h-8 w-auto" />
          <span
            className="font-bold tracking-tight"
            style={{ color: '#002D72', fontSize: '18px', fontFamily: 'DM Sans, sans-serif' }}
          >
            SEA 2026
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative no-underline transition-colors group"
                style={{
                  color: isActive ? '#058332' : '#334155',
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  padding: '14px 11px',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {item.name}
                {/* Active underline */}
                <span
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-opacity duration-200"
                  style={{
                    background: 'linear-gradient(90deg, #003366, #058332)',
                    opacity: isActive ? 1 : 0,
                  }}
                />
                {/* Hover underline */}
                {!isActive && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                    style={{ background: 'linear-gradient(90deg, #003366, #058332)' }}
                  />
                )}
              </Link>
            );
          })}

          {/* Our Proceedings dropdown */}
          <div
            ref={articlesRef}
            className="relative"
            onMouseEnter={() => setArticlesOpen(true)}
            onMouseLeave={() => setArticlesOpen(false)}
          >
            <button
              className="flex items-center gap-1 no-underline transition-colors bg-transparent border-0 cursor-pointer"
              style={{
                color: '#334155',
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 11px',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Our Proceedings
              <svg
                className="w-3.5 h-3.5 transition-transform"
                style={{ transform: articlesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {articlesOpen && (
              <div
                className="absolute top-full left-0 bg-white rounded-lg py-2 z-50 overflow-hidden"
                style={{
                  minWidth: '170px',
                  boxShadow: '0 8px 32px rgba(0,51,102,0.12)',
                  border: '1px solid #e8eef3',
                }}
              >
                {/* Top accent line */}
                <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, #003366, #058332)' }} />
                {articles.map((article) => (
                  <a
                    key={article.name}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline px-4 py-2.5 transition-colors hover:bg-[#f0fdf4]"
                    style={{
                      color: '#334155',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {article.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA button — Register */}
        <Link
          href="/registration"
          className="hidden xl:inline-flex items-center gap-2 no-underline font-bold text-white text-sm px-4 py-2 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #003366 0%, #058332 100%)',
            fontSize: '13.5px',
          }}
        >
          Register
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
        >
          <span className="sr-only">Menu</span>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-50px)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="no-underline px-4 py-3 rounded-lg transition-colors"
                style={{
                  color: pathname === item.href ? '#058332' : '#334155',
                  fontSize: '15px',
                  fontWeight: pathname === item.href ? 700 : 500,
                  backgroundColor: pathname === item.href ? '#f0fdf4' : 'transparent',
                }}
              >
                {item.name}
              </Link>
            ))}

            {/* Proceedings — mobile accordion */}
            <button
              onClick={() => setMobileArticlesOpen(!mobileArticlesOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors bg-transparent border-0 cursor-pointer text-left"
              style={{ color: '#334155', fontSize: '15px', fontWeight: 500 }}
            >
              Our Proceedings
              <svg
                className="w-4 h-4 transition-transform"
                style={{ transform: mobileArticlesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileArticlesOpen && (
              <div className="pl-4 flex flex-col space-y-1">
                {articles.map((article) => (
                  <a
                    key={article.name}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="no-underline px-4 py-2 rounded-lg transition-colors hover:bg-gray-50"
                    style={{ color: '#334155', fontSize: '14px', fontWeight: 500 }}
                  >
                    {article.name}
                  </a>
                ))}
              </div>
            )}

            {/* Mobile CTA */}
            <Link
              href="/registration"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white font-bold text-center py-3 px-6 rounded-full mt-2 transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #003366 0%, #058332 100%)', fontSize: '15px' }}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
