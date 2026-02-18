'use client';

import Link from 'next/link';

export default function FooterSection() {
  const footerLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Intervenants', href: '/speakers' },
    { name: 'Programme', href: '/program' },
    { name: 'Soumission', href: '/submission' },
    { name: 'Formations', href: '/formations' },
    { name: 'Ateliers', href: '/workshops' },
    { name: 'Inscription', href: '/registration' },
  ];

  return (
    <footer
      className="py-16 font-sans"
      style={{
        background: 'linear-gradient(to bottom, #003366, #002244)',
        color: '#FFFFFF',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Centered Nav Links */}
        <nav className="text-center mb-12">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm transition-colors no-underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-t border-white/15 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/50 text-sm">
            © 2026 SEA 2026 — Semaine de l&apos;Eau et de l&apos;Assainissement. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
