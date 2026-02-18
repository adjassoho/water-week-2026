'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
          </div>
        </div>
      )}
    </header>
  );
}
