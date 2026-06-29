'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function FooterSection() {
  const footerLinks = [
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

  return (
    <footer
      className="relative overflow-hidden font-sans"
      style={{ background: 'linear-gradient(to bottom, #002244, #001122)', color: '#FFFFFF' }}
    >
      {/* Top gradient accent line */}
      <div
        className="w-full h-1"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #003366 30%, #058332 70%, transparent 100%)' }}
      />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#058332]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* Logo + tagline */}
        <AnimatedSection direction="up" duration={600} className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="/logo.png" alt="SEA 2026" className="h-10 w-auto opacity-90" />
            <span className="font-extrabold text-xl text-white tracking-tight">SEA 2026</span>
          </div>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            3rd Water and Sanitation Week — Cotonou, Benin<br />
            October 20–22, 2026
          </p>
        </AnimatedSection>

        {/* Nav Links */}
        <AnimatedSection direction="up" duration={600} delay={100} className="mb-10">
          <nav className="text-center">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors no-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </AnimatedSection>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom row */}
        <AnimatedSection direction="up" duration={500} delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-white/40 text-xs">
              © 2026 SEA 2026 — 3rd Water and Sanitation Week · INE / C2EA / UAC, Cotonou, Benin. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-xs">Organized by</span>
              <img src="https://i.ibb.co/rGL6BZs2/logo-C2-EA.png" alt="C2EA" className="h-6 w-auto opacity-60 hover:opacity-90 transition-opacity" />
              <img src="https://i.ibb.co/8nLpXxbm/Logo-INE.png" alt="INE" className="h-6 w-auto opacity-60 hover:opacity-90 transition-opacity" />
            </div>
          </div>
        </AnimatedSection>

      </div>
    </footer>
  );
}
