'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div>
            <div className="mb-6">
              <span className="text-[#058332] font-bold uppercase tracking-widest text-sm mb-2 block">
                À propos de la conférence
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] leading-tight font-heading">
                Bienvenue à la <br />
                <span className="text-[#058332]">Semaine de l'Eau 2026</span>
              </h2>
            </div>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
              La 2ème édition de la <strong>Semaine de l'Eau et de l'Assainissement (SEA 2026)</strong> est un événement international majeur dédié à la recherche, l'innovation technologique et la formation dans le secteur de l'eau en Afrique.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed text-base">
              Organisée conjointement par le <strong className="text-[#003366]">Centre d'Excellence d'Afrique pour l'Eau et l'Assainissement (C2EA)</strong> et l'<strong className="text-[#003366]">Institut National de l'Eau (INE)</strong>, cette conférence réunit experts, chercheurs et décideurs pour relever les défis hydriques du continent.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold transition-all hover:opacity-90 shadow-md no-underline"
                style={{
                  backgroundColor: '#009966',
                  borderRadius: '12px',
                  fontSize: '16px',
                }}
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Compositions */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/speakers/prof-mama.jpg"
                alt="Prof. Daouda Mama au Forum Mondial de l'Eau"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-3/4 h-3/4 border-4 border-[#058332]/20 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-[#003366]/5 rounded-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
