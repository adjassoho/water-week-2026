'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

export default function PartnersPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: organizersRef, isVisible: organizersVisible } = useScrollReveal();
  const { ref: institutionalRef, isVisible: institutionalVisible } = useScrollReveal();
  const { ref: sponsorsRef, isVisible: sponsorsVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const mainOrganizers = [
    {
      name: "Centre d'Excellence d'Afrique pour l'Eau (C2EA)",
      description: "Centre de recherche visant à renforcer les capacités des chercheurs et professionnels africains dans le domaine de l'eau et de l'assainissement.",
      img: 'https://i.ibb.co/rGL6BZs2/logo-C2-EA.png', color: 'from-[#088395] to-[#05BFDB]',
    },
    {
      name: "Institut National de l'Eau (INE/UAC)",
      description: "Centre d'excellence pour la formation et la recherche dans le domaine des sciences de l'eau au Bénin, rattaché à l'Université d'Abomey-Calavi.",
      img: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png', color: 'from-[#D4A843] to-[#F0D78C]',
    },
  ];

  const institutionalPartners = [
    { name: 'FRIEND AOC', desc: "Coopération internationale dans le domaine de l'eau et développement durable.", img: 'https://i.ibb.co/LXbQgQn9/jhfjhf.jpg', color: 'from-[#088395] to-[#05BFDB]' },
    { name: 'IAHS', desc: "Association Internationale des Sciences Hydrologiques — avancement de l'hydrologie.", img: 'https://i.ibb.co/XZW7BHKz/jhhv.png', color: 'from-[#0A4D68] to-[#088395]' },
    { name: "Université d'Abomey-Calavi", desc: "L'une des plus importantes universités du Bénin, recherche eau et environnement.", img: 'https://i.ibb.co/8nLpXxbm/Logo-INE.png', color: 'from-[#05BFDB] to-[#00FFCA]' },
    { name: 'IRD', desc: "Institut de Recherche pour le Développement — organisme français de recherche.", img: null, color: 'from-[#D4A843] to-[#F0D78C]' },
  ];

  const officialSponsors = [
    { name: 'AFD', full: 'Agence Française de Développement', desc: "Finance et accompagne des projets pour l'accès à l'eau.", img: null, color: 'from-[#088395] to-[#05BFDB]' },
    { name: 'Banque Mondiale', full: 'Banque Mondiale', desc: "Accompagne les pays en développement pour l'accès à l'eau.", img: null, color: 'from-[#0A4D68] to-[#088395]' },
    { name: 'AUA', full: 'Association des Universités Africaines', desc: "Coopération entre institutions d'enseignement supérieur en Afrique.", img: null, color: 'from-[#05BFDB] to-[#00FFCA]' },
    { name: 'UNESCO', full: 'UNESCO', desc: "Promotion de la gestion durable de l'eau.", img: null, color: 'from-[#D4A843] to-[#F0D78C]' },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-20" style={{
          background: `radial-gradient(ellipse 50% 60% at 60% 40%, rgba(5,191,219,0.3) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(212,168,67,0.15) 0%, transparent 60%)`
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-[#00FFCA]">Partenaires</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Écosystème</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Nos <span className="gradient-text-gold">Partenaires</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              Les institutions et organismes qui rendent possible la Semaine de l&apos;Eau 2026
            </p>
          </div>
        </div>

        <div className="text-white">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
            <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ===== Main Organizers ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />
        <div ref={organizersRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${organizersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              Organisateurs principaux
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Organisateurs <span className="gradient-text">principaux</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {mainOrganizers.map((org, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl overflow-hidden border border-[#E0F7FA]/80 bg-white hover:border-[#05BFDB]/20 hover:shadow-2xl hover:shadow-[#088395]/10 transition-all duration-700 ${organizersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Top gradient accent */}
                <div className={`h-1.5 bg-gradient-to-r ${org.color}`} />
                <div className="p-8 sm:p-10 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-lg mx-auto mb-6 border border-[#E0F7FA]">
                    <img src={org.img} alt={org.name} className="w-14 h-14 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2E4D] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {org.name}
                  </h3>
                  <p className="text-[#0A2E4D]/50 text-sm leading-relaxed">{org.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Institutional Partners ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />
        <div ref={institutionalRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${institutionalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
              </svg>
              Partenaires institutionnels
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Partenaires <span className="gradient-text">institutionnels</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {institutionalPartners.map((p, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden border border-[#E0F7FA]/80 bg-white hover:border-[#05BFDB]/20 hover:shadow-xl hover:shadow-[#088395]/8 hover:-translate-y-1 transition-all duration-700 ${institutionalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex">
                  <div className={`w-1.5 flex-shrink-0 bg-gradient-to-b ${p.color}`} />
                  <div className="p-6 flex items-start gap-4 flex-1">
                    {p.img ? (
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0 border border-[#E0F7FA]">
                        <img src={p.img} alt={p.name} className="w-8 h-8 object-contain" />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">{p.name.substring(0, 3)}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-[#0A2E4D] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{p.name}</h3>
                      <p className="text-[#0A2E4D]/40 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Official Sponsors ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#05BFDB]/[0.03] rounded-full blur-[100px]" />
        <div ref={sponsorsRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${sponsorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
              </svg>
              Sponsors officiels
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Sponsors <span className="gradient-text-gold">officiels</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {officialSponsors.map((s, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden border border-[#E0F7FA]/80 bg-white hover:border-[#D4A843]/20 hover:shadow-xl hover:shadow-[#D4A843]/8 hover:-translate-y-1 transition-all duration-700 ${sponsorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex">
                  <div className={`w-1.5 flex-shrink-0 bg-gradient-to-b ${s.color}`} />
                  <div className="p-6 flex items-start gap-4 flex-1">
                    {s.img ? (
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0 border border-[#E0F7FA]">
                        <img src={s.img} alt={s.name} className="w-8 h-8 object-contain" />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">{s.name.substring(0, 3)}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-[#0A2E4D] mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>{s.name}</h3>
                      <p className="text-[#088395] text-xs font-medium mb-1">{s.full}</p>
                      <p className="text-[#0A2E4D]/40 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA — Become a partner ===== */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div ref={ctaRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-24 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Devenez <span className="gradient-text-gold">partenaire</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Associez votre organisation à cet événement international dédié à l&apos;eau
            </p>
          </div>

          <div className={`grid sm:grid-cols-3 gap-4 mb-10 transition-all duration-700 delay-200 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: '👁️', title: 'Visibilité', desc: "Logo sur tous les supports, visibilité auprès des décideurs du secteur." },
              { icon: '👥', title: 'Réseautage', desc: "Accès exclusif aux conférenciers et participants de plus de 25 pays." },
              { icon: '💡', title: 'Innovation', desc: "Présentez vos solutions innovantes lors de sessions dédiées." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm p-6 sm:p-8 text-center group hover:bg-white/[0.1] transition-all duration-500">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-700 delay-400 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/#contact" className="btn-gold inline-flex text-base px-10 py-4 rounded-xl shadow-2xl shadow-[#D4A843]/20 group">
              Nous contacter
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
