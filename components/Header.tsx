'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [mobileArticlesOpen, setMobileArticlesOpen] = useState(false);
  const articlesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Intervenants', href: '/speakers' },
    { name: 'Programme', href: '/program' },
    { name: 'Soumission', href: '/submission' },
    { name: 'Formations', href: '/training' },
    { name: 'Ateliers', href: '/workshops' },
    { name: 'Inscription', href: '/registration' },
    { name: 'Lieu', href: '/venue' },
    { name: 'Comités', href: '/committee' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
  ];

  const articles = [
    { name: 'Édition 2024', href: 'https://piahs.copernicus.org/articles/388/index.html' },
    { name: 'Édition 2025', href: 'https://piahs.copernicus.org/articles/389/index.html' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 h-[50px]">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 no-underline">
          <img src="/logo.png" alt="SEA 2026" className="h-8 w-auto" />
          <span
            className="font-bold tracking-tight"
            style={{ color: '#002D72', fontSize: '18px' }}
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
                className="no-underline transition-colors"
                style={{
                  color: isActive ? '#16A34A' : '#334155',
                  fontSize: '14.4px',
                  fontWeight: 500,
                  padding: '8px 12px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Nos articles dropdown */}
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
                fontSize: '14.4px',
                fontWeight: 500,
                padding: '8px 12px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Nos articles
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
                className="absolute top-full left-0 bg-white shadow-lg rounded border border-gray-100 py-1 z-50"
                style={{ minWidth: '160px' }}
              >
                {articles.map((article) => (
                  <a
                    key={article.name}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline px-4 py-2 transition-colors hover:bg-gray-50"
                    style={{
                      color: '#334155',
                      fontSize: '14px',
                      fontWeight: 500,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {article.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

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
                className="no-underline px-4 py-3 rounded transition-colors"
                style={{
                  color: pathname === item.href ? '#16A34A' : '#334155',
                  fontSize: '15px',
                  fontWeight: pathname === item.href ? 600 : 500,
                  backgroundColor: pathname === item.href ? '#f0fdf4' : 'transparent',
                }}
              >
                {item.name}
              </Link>
            ))}

            {/* Nos articles — mobile accordion */}
            <button
              onClick={() => setMobileArticlesOpen(!mobileArticlesOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded transition-colors bg-transparent border-0 cursor-pointer text-left"
              style={{ color: '#334155', fontSize: '15px', fontWeight: 500 }}
            >
              Nos articles
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
                    className="no-underline px-4 py-2 rounded transition-colors"
                    style={{ color: '#334155', fontSize: '14px', fontWeight: 500 }}
                  >
                    {article.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
