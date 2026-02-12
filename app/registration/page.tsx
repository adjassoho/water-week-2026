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

export default function RegistrationPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();
  const { ref: feesRef, isVisible: feesVisible } = useScrollReveal();
  const { ref: trainingRef, isVisible: trainingVisible } = useScrollReveal();
  const { ref: calculatorRef, isVisible: calculatorVisible } = useScrollReveal();
  const { ref: paymentRef, isVisible: paymentVisible } = useScrollReveal();
  const { ref: ctaSecRef, isVisible: ctaSecVisible } = useScrollReveal();

  const [conferenceType, setConferenceType] = useState('0');
  const [trainingDays, setTrainingDays] = useState('0');
  const total = parseInt(conferenceType) + parseInt(trainingDays);

  const benefitItems = [
    { icon: '🎤', label: 'Sessions illimitées', desc: 'Accès à toutes les présentations et keynotes' },
    { icon: '☕', label: 'Pauses café', desc: 'Networking pendant les pauses' },
    { icon: '🍽️', label: '3 déjeuners', desc: 'Repas complets inclus' },
    { icon: '🎉', label: 'Dîner de gala', desc: 'Soirée de gala officielle' },
    { icon: '🏆', label: 'Adhésion IAHS', desc: 'Membership international inclus' },
  ];

  const feeRows = [
    { category: 'Étudiants (tous pays)', early: '50€', standard: '65€', earlyVal: 50, standardVal: 65, icon: '🎓' },
    { category: 'Chercheurs du Maroc', early: '120€', standard: '140€', earlyVal: 120, standardVal: 140, icon: '🇲🇦' },
    { category: 'Chercheurs pays du Sud', early: '200€', standard: '250€', earlyVal: 200, standardVal: 250, icon: '🌍' },
    { category: 'Chercheurs pays du Nord', early: '350€', standard: '450€', earlyVal: 350, standardVal: 450, icon: '🌐' },
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
              <span className="text-[#00FFCA]">Inscription</span>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00FFCA] animate-pulse" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">All-Inclusive</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  S&apos;inscrire à la{' '}<span className="gradient-text-gold">Conférence</span>
                </h1>
                <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                  Votre inscription ouvre les portes à une expérience complète : sessions, repas, gala et adhésion IAHS inclus.
                </p>
              </div>

              {/* Price highlight card */}
              <div className="lg:col-span-2">
                <div className="rounded-3xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl p-8 text-center">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2">À partir de</p>
                  <div className="text-5xl font-extrabold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    50<span className="text-[#D4A843]">€</span>
                  </div>
                  <p className="text-white/40 text-sm mb-6">Tarif early-bird étudiant</p>
                  <a href="#calculator" className="btn-gold inline-flex text-sm px-8 py-3 rounded-xl group">
                    Calculer mes frais
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
            <path d="M0,30 C180,60 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1350,20 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ===== Benefits ===== */}
      <div className="bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#05BFDB]/[0.03] rounded-full blur-[130px]" />
        <div ref={benefitsRef} className="max-w-5xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Inclus
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Tout est <span className="gradient-text">inclus</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {benefitItems.map((b, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl border border-[#E0F7FA]/80 bg-white p-6 text-center hover:border-[#05BFDB]/20 hover:shadow-xl hover:shadow-[#088395]/8 hover:-translate-y-2 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="text-sm font-bold text-[#0A2E4D] mb-1">{b.label}</h3>
                <p className="text-[#0A2E4D]/40 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <p className={`text-center text-[#0A2E4D]/40 text-sm mt-8 italic transition-all duration-700 delay-500 ${benefitsVisible ? 'opacity-100' : 'opacity-0'}`}>
            Les sessions de formation sont optionnelles et soumises à des frais supplémentaires modiques.
          </p>
        </div>
      </div>

      {/* ===== Fees Table ===== */}
      <div className="bg-[#F8FDFF] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4A843]/[0.03] rounded-full blur-[100px]" />
        <div ref={feesRef} className="max-w-4xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-12 transition-all duration-700 ${feesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              Tarifs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frais de <span className="gradient-text">participation</span>
            </h2>
          </div>

          {/* Premium fee cards */}
          <div className="space-y-3">
            {/* Header */}
            <div className="grid grid-cols-12 gap-3 px-4 sm:px-6">
              <div className="col-span-6" />
              <div className="col-span-3 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00FFCA]/10 text-[#088395] text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCA]" />
                  Early Bird
                </span>
              </div>
              <div className="col-span-3 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A2E4D]/5 text-[#0A2E4D]/50 text-[10px] font-bold uppercase tracking-wider">
                  Standard
                </span>
              </div>
            </div>

            {feeRows.map((row, i) => (
              <div
                key={i}
                className={`group grid grid-cols-12 gap-3 items-center rounded-2xl border border-[#E0F7FA]/80 bg-white p-4 sm:p-6 hover:border-[#05BFDB]/20 hover:shadow-lg hover:shadow-[#088395]/5 transition-all duration-700 ${feesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="col-span-6 flex items-center gap-3">
                  <span className="text-2xl">{row.icon}</span>
                  <span className="text-sm sm:text-base font-semibold text-[#0A2E4D]">{row.category}</span>
                </div>
                <div className="col-span-3 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#088395]" style={{ fontFamily: 'var(--font-heading)' }}>{row.early}</span>
                </div>
                <div className="col-span-3 text-center">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0A2E4D]/30" style={{ fontFamily: 'var(--font-heading)' }}>{row.standard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Training fees ===== */}
      <div className="bg-white relative overflow-hidden">
        <div ref={trainingRef} className="max-w-4xl mx-auto px-4 py-14 sm:py-16 relative z-10">
          <div className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${trainingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F7FA]/50 border border-[#E0F7FA] p-6 sm:p-8 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#088395] to-[#05BFDB] flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0 shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>1j</div>
              <div>
                <p className="text-[#0A2E4D]/40 text-xs font-bold uppercase tracking-wider mb-1">1 jour de formation</p>
                <p className="text-2xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>50€</p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F7FA]/50 border border-[#E0F7FA] p-6 sm:p-8 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A843] to-[#F0D78C] flex items-center justify-center text-[#0A2E4D] text-xl font-extrabold flex-shrink-0 shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>2j</div>
              <div>
                <p className="text-[#0A2E4D]/40 text-xs font-bold uppercase tracking-wider mb-1">2 jours de formation</p>
                <p className="text-2xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>100€</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Fee Calculator ===== */}
      <div id="calculator" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div ref={calculatorRef} className="max-w-3xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-10 transition-all duration-700 ${calculatorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Calculer vos <span className="gradient-text-gold">frais</span>
            </h2>
            <p className="text-white/40 text-sm">Estimez le montant total de votre inscription</p>
          </div>

          <div className={`rounded-3xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl p-8 sm:p-10 transition-all duration-700 delay-200 ${calculatorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-3">Conférence</label>
                <select
                  value={conferenceType}
                  onChange={e => setConferenceType(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#05BFDB]/40 transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  <option value="0" className="bg-[#0A2E4D]">Pas de participation (0€)</option>
                  <option value="50" className="bg-[#0A2E4D]">Étudiant (50€)</option>
                  <option value="120" className="bg-[#0A2E4D]">Chercheur Maroc (120€)</option>
                  <option value="200" className="bg-[#0A2E4D]">Chercheur pays du Sud (200€)</option>
                  <option value="350" className="bg-[#0A2E4D]">Chercheur pays du Nord (350€)</option>
                </select>
              </div>
              <div>
                <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-3">Formation</label>
                <select
                  value={trainingDays}
                  onChange={e => setTrainingDays(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#05BFDB]/40 transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  <option value="0" className="bg-[#0A2E4D]">Pas de formation (0€)</option>
                  <option value="50" className="bg-[#0A2E4D]">1 jour (50€)</option>
                  <option value="100" className="bg-[#0A2E4D]">2 jours (100€)</option>
                </select>
              </div>
            </div>

            {/* Total */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 text-center">
              <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">Total estimé</p>
              <div className="text-5xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {total}<span className="text-[#D4A843]">€</span>
              </div>
              <p className="text-white/30 text-xs mt-2">Tarif early-bird · prix standard peut être supérieur</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Payment Terms ===== */}
      <div className="bg-white relative overflow-hidden">
        <div ref={paymentRef} className="max-w-4xl mx-auto px-4 py-16 sm:py-20 relative z-10">
          <div className={`text-center mb-10 transition-all duration-700 ${paymentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-label mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              Paiement
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E4D]" style={{ fontFamily: 'var(--font-heading)' }}>
              Modalités de <span className="gradient-text">paiement</span>
            </h2>
          </div>

          <div className={`rounded-3xl border border-[#E0F7FA] bg-gradient-to-br from-[#F0F9FF] to-white p-8 sm:p-10 transition-all duration-700 delay-200 ${paymentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#0A2E4D]/60 text-sm leading-relaxed mb-6">
              Par virement bancaire au compte suivant, en précisant dans l&apos;objet du virement <strong className="text-[#0A2E4D]">ICAR2026</strong> ainsi que vos <strong className="text-[#0A2E4D]">nom et prénom</strong>.
            </p>

            {/* Bank details card */}
            <div className="rounded-2xl bg-white border border-[#E0F7FA] p-6 sm:p-8 mb-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-[#088395] text-xs font-bold uppercase tracking-wider mb-2">IBAN</p>
                  <p className="text-[#0A2E4D] font-mono text-sm font-semibold tracking-wide">MA 64 350 810 0000000001812046 12</p>
                </div>
                <div>
                  <p className="text-[#088395] text-xs font-bold uppercase tracking-wider mb-2">BIC / SWIFT</p>
                  <p className="text-[#0A2E4D] font-mono text-sm font-semibold tracking-wide">ABBMMAMC</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-[#D4A843]">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-sm text-[#0A2E4D]/50">
                Le paiement des frais de conférence et de formation peut être effectué en un seul virement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E4D] via-[#0A4D68] to-[#088395]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div ref={ctaSecRef} className="max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center relative z-10">
          <div className={`transition-all duration-1000 ${ctaSecVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Prêt à <span className="gradient-text-gold">s&apos;inscrire</span> ?
            </h2>
            <p className="text-white/50 text-base mb-8 max-w-lg mx-auto">
              Réservez votre place pour la Semaine de l&apos;Eau 2026 dès maintenant
            </p>
            <a href="/registration-form" className="btn-gold inline-flex text-base px-10 py-4 rounded-xl shadow-2xl shadow-[#D4A843]/20 group">
              S&apos;inscrire maintenant
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
