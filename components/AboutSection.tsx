'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-white font-sans">
      {/* Background Glow Bubbles */}
      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#058332]/[0.03] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#02345e]/[0.03] rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text Content — slides in from left */}
          <AnimatedSection direction="left" duration={700} delay={0}>
            <div className="mb-6">
              <div className="section-kicker">
                <span></span> About the Conference
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] leading-tight font-heading">
                Welcome to the <br />
                <span className="text-[#058332]">Water &amp; Sanitation <span className="font-accent italic font-medium">Week 2026</span></span>
              </h2>
            </div>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
              The 3rd edition of the <strong>Water and Sanitation Week (SEA 2026)</strong> is a major international event dedicated to digital innovation, research, and education in the water, sanitation, and agriculture sectors in Africa.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed text-base">
              Organized by the <strong className="text-[#003366]">National Institute of Water (INE)</strong> and the <strong className="text-[#003366]">Africa Centre of Excellence for Water and Sanitation (C2EA)</strong> of the University of Abomey-Calavi (UAC), this conference brings together researchers, professionals, and decision-makers to address the continent&apos;s hydric and digital challenges. The event will be held from <strong className="text-[#058332]">October 20 to 22, 2026</strong> at the <strong className="text-[#058332]">Palais des Congrès in Cotonou, Benin</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md no-underline"
                style={{
                  background: 'linear-gradient(135deg, #003366 0%, #058332 100%)',
                  borderRadius: '12px',
                  fontSize: '16px',
                }}
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          {/* Image Composition — slides in from right */}
          <AnimatedSection direction="right" duration={700} delay={150}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/speakers/prof-mama.jpg"
                  alt="Prof. Daouda Mama"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative accent borders */}
              <div className="absolute -top-6 -right-6 w-3/4 h-3/4 border-4 border-[#058332]/20 rounded-2xl -z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-[#003366]/5 rounded-2xl -z-10"></div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
