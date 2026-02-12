'use client';

export default function FooterSection() {
  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Intervenants', href: '/speakers' },
    { name: 'Programme', href: '/program' },
    { name: 'Soumission', href: '/submission' },
    { name: 'Formations', href: '/training' },
    { name: 'Inscription', href: '/registration' },
    { name: 'Contact', href: '/contact' },
  ];

  const organizers = [
    { name: 'C2EA', img: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png' },
    { name: 'INE/UAC', img: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png' },
    { name: 'IAHS', img: 'https://i.ibb.co/XZW7BHKz/jhhv.png' },
    { name: 'FRIEND AOC', img: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Wave Separator */}
      <div className="text-[#0A2E4D]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
          <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-gradient-to-b from-[#0A2E4D] to-[#061B30] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="https://i.ibb.co/8nLpXxbm/Logo-INE.png"
                  alt="INE Logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    Semaine de l&apos;Eau
                  </h3>
                  <span className="text-[#00FFCA] text-xs font-bold">2026</span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                De la Recherche à l&apos;Innovation et au Transfert de Technologies. Un événement international majeur sur l&apos;eau et l&apos;assainissement en Afrique.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { label: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                  { label: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/40 hover:bg-[#088395]/30 hover:text-[#05BFDB] transition-all duration-500 hover:scale-110"
                  >
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                Liens rapides
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-white/40 text-sm hover:text-[#05BFDB] transition-colors duration-300 flex items-center gap-2 group">
                      <span className="text-[#05BFDB]/50 group-hover:text-[#05BFDB] transition-colors">›</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organizers */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                Organisé par
              </h4>
              <div className="space-y-3">
                {organizers.map((org, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 group">
                    <img src={org.img} alt={org.name} className="w-8 h-8 object-contain rounded" />
                    <span className="text-white/60 text-sm font-medium group-hover:text-white/80 transition-colors">{org.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                Contact
              </h4>
              <div className="space-y-4">
                <a href="mailto:audace@aims.ac.za" className="flex items-center gap-3 text-white/40 text-sm hover:text-[#05BFDB] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center group-hover:bg-[#088395]/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  audace@aims.ac.za
                </a>
                <a href="tel:+22901989170029" className="flex items-center gap-3 text-white/40 text-sm hover:text-[#05BFDB] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center group-hover:bg-[#088395]/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  +229 01 98 91 70 29
                </a>
                <div className="flex items-center gap-3 text-white/40 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  Palais des Congrès<br />Cotonou, Bénin
                </div>
                <div className="flex items-center gap-3 text-white/40 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  3 — 5 juin 2026
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">
              © 2026 Semaine de l&apos;Eau — Cotonou. Tous droits réservés.
            </p>
            <div className="flex items-center gap-5">
              <a href="/legal" className="text-white/25 text-xs hover:text-white/50 transition-colors">
                Mentions légales
              </a>
              <a href="/privacy" className="text-white/25 text-xs hover:text-white/50 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
