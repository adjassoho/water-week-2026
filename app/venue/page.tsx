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

export default function VenuePage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: venueRef, isVisible: venueVisible } = useScrollReveal();
  const { ref: travelRef, isVisible: travelVisible } = useScrollReveal();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal();

  const travelCards = [
    {
      icon: '🛂', title: 'Visa',
      desc: 'Les participants sont responsables de vérifier s\'ils ont besoin d\'un visa pour entrer au Bénin. Consultez les sources officielles bien avant votre voyage.',
      color: 'from-[#088395] to-[#05BFDB]',
    },
    {
      icon: '✈️', title: 'Vols',
      desc: 'L\'aéroport international Cadjehoun (COO) est situé à ~5 km du centre-ville. Connexions vers les principales villes africaines et européennes.',
      color: 'from-[#0A4D68] to-[#088395]',
    },
    {
      icon: '🏨', title: 'Hébergement',
      desc: 'Cotonou offre un large choix d\'hébergements : hôtels, maisons d\'hôtes, Airbnb. Le comité pourra suggérer des hôtels partenaires.',
      color: 'from-[#05BFDB] to-[#00FFCA]',
    },
    {
      icon: '🚕', title: 'Transport local',
      desc: 'Le Palais des Congrès est au centre ville. Accessible en taxi, moto-taxi ou à pied selon la distance de votre hébergement.',
      color: 'from-[#D4A843] to-[#F0D78C]',
    },
  ];

  const venueFeatures = [
    { icon: '🎙️', label: 'Auditoriums multiples' },
    { icon: '👥', label: 'Salles de sous-comission' },
    { icon: '🖥️', label: 'Équipement AV moderne' },
    { icon: '📡', label: 'Streaming en direct' },
    { icon: '🍽️', label: 'Espaces de restauration' },
    { icon: '♿', label: 'Accès PMR complet' },
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
              <span className="text-[#00FFCA]">Lieu</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Cotonou, Bénin</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Le <span className="gradient-text-gold">Lieu</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
              Visa, transport, hébergement — tout ce dont vous avez besoin pour préparer votre séjour à Cotonou
            </p>

            {/* Quick location stats */}
            <div className="flex flex-wrap gap-4">
              {[
                { val: '🏛️', label: 'Palais des Congrès' },
                { val: '✈️', label: 'Aéroport COO · 5km' },
                { val: '🌡️', label: '27°C · Tropical' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.06] backdrop-blur-sm">
                  <span className="text-xl">{s.val}</span>
                  <span className="text-white/50 text-xs font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
            <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ===== Venue Info ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />
        <div ref={venueRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${venueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              Lieu de la conférence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Palais des <span className="gradient-text">Congrès</span>
            </h2>
            <p className="text-[#0A2E4D]/40 text-sm mt-3 max-w-lg mx-auto">Boulevard de la Marina, Cotonou, Bénin</p>
          </div>

          {/* Venue features grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {venueFeatures.map((f, i) => (
              <div
                key={i}
                className={`group rounded-2xl border border-[#E0F7FA]/80 bg-white p-5 text-center hover:border-[#05BFDB]/20 hover:shadow-lg hover:shadow-[#088395]/5 hover:-translate-y-1 transition-all duration-700 ${venueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-2xl block mb-2">{f.icon}</span>
                <span className="text-[#0A2E4D] text-xs font-semibold">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Venue description card */}
          <div className={`rounded-3xl bg-gradient-to-r from-[#F0F9FF] to-[#E0F7FA]/50 border border-[#E0F7FA] p-8 sm:p-10 transition-all duration-700 delay-300 ${venueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#0A2E4D]/60 text-sm leading-[1.9]">
              Le <strong className="text-[#0A2E4D]">Palais des Congrès de Cotonou</strong> est un centre de conférences moderne offrant de multiples auditoriums, salles de sous-commission, espaces d&apos;exposition et services de restauration. Entièrement accessible et équipé d&apos;un matériel audiovisuel de pointe pour les présentations et la diffusion en direct.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Travel Cards ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />

        <div ref={travelRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${travelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Informations pratiques
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Préparer votre <span className="gradient-text">voyage</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {travelCards.map((card, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl overflow-hidden border border-[#E0F7FA]/80 bg-white hover:border-[#05BFDB]/20 hover:shadow-xl hover:shadow-[#088395]/8 hover:-translate-y-2 transition-all duration-700 ${travelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Accent bar */}
                  <div className={`sm:w-1.5 h-1.5 sm:h-auto flex-shrink-0 bg-gradient-to-r sm:bg-gradient-to-b ${card.color}`} />
                  <div className="p-6 sm:p-8 flex-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}>
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#0A2E4D] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          {card.title}
                        </h3>
                        <p className="text-[#0A2E4D]/50 text-sm leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className={`mt-8 flex items-start gap-3 text-[#D4A843] transition-all duration-700 delay-500 ${travelVisible ? 'opacity-100' : 'opacity-0'}`}>
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-[#0A2E4D]/40 italic">
              Les participants sont priés d&apos;organiser eux-mêmes leur visa, transport, hébergement et déplacements locaux. Le comité organisateur pourra partager des tarifs hôteliers négociés ultérieurement.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Gallery (placeholders) ===== */}
      <div className="bg-white relative overflow-hidden">
        <div ref={galleryRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-10 transition-all duration-700 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Découvrir <span className="gradient-text">Cotonou</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { emoji: '🏛️', title: 'Palais des Congrès', sub: 'Lieu de la conférence', color: 'from-[#0A2E4D] to-[#088395]' },
              { emoji: '🎤', title: 'Salle de conférence', sub: 'Auditorium principal', color: 'from-[#0A4D68] to-[#05BFDB]' },
              { emoji: '🌅', title: 'Cotonou', sub: 'Capitale économique', color: 'from-[#088395] to-[#00FFCA]' },
            ].map((card, i) => (
              <div
                key={i}
                className={`group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-default transition-all duration-700 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">{card.emoji}</span>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                  <p className="text-white/60 text-sm">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Map / CTA ===== */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div ref={mapRef} className="max-w-4xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`rounded-3xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-700 ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Map embed */}
            <div className="aspect-[16/7] relative bg-[#0A2E4D]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d2.4242!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9b8b97a70b3%3A0x2c37ad40e7e0e8c8!2sPalais%20des%20Congr%C3%A8s%20de%20Cotonou!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Address bar */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A843] to-[#F0D78C] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0A2E4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Palais des Congrès de Cotonou</p>
                  <p className="text-white/40 text-xs">Boulevard de la Marina, Cotonou, Bénin</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Palais+des+Congres+de+Cotonou"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm px-6 py-2.5 rounded-xl group inline-flex"
              >
                Itinéraire
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
