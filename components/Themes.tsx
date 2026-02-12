export default function Themes() {
  const themes = [
    {
      icon: "🌊",
      title: "Ressources en eau et écosystèmes transfrontaliers",
      description: "Gestion des bassins partagés, coopération internationale, préservation des écosystèmes aquatiques.",
      color: "from-[#088395] to-[#05BFDB]"
    },
    {
      icon: "♻️",
      title: "Innovations dans le traitement et la réutilisation de l'eau",
      description: "Technologies durables, économie circulaire de l'eau, valorisation des eaux usées.",
      color: "from-[#05BFDB] to-[#00FFCA]"
    },
    {
      icon: "⚠️",
      title: "Technologies pour la prévention et gestion des catastrophes",
      description: "Inondations, sécheresses, systèmes d'alerte précoce, résilience communautaire.",
      color: "from-[#0A4D68] to-[#088395]"
    },
    {
      icon: "🌾",
      title: "Gestion intelligente de l'eau et agriculture durable",
      description: "Irrigation de précision, technologies intelligentes de l'eau, adaptation au changement climatique.",
      color: "from-[#088395] to-[#00FFCA]"
    }
  ];

  return (
    <section id="themes" className="py-20 px-4 bg-gradient-to-b from-white to-[#F0F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-5xl">🌊</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#05BFDB] bg-clip-text text-transparent mb-4">
            Thématiques
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#088395] via-[#05BFDB] to-[#00FFCA] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-[#05BFDB]/10 hover:shadow-2xl hover:shadow-[#05BFDB]/20 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden border-2 border-[#E0F7FA]"
            >
              {/* Top accent bar with shimmer effect */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${theme.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              
              {/* Decorative water drop */}
              <div className="absolute top-4 right-4 text-2xl opacity-10 group-hover:opacity-30 transition-opacity">💧</div>
              
              {/* Icon */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${theme.color} flex items-center justify-center text-4xl shadow-lg shadow-[#05BFDB]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {theme.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0A4D68] mb-4 text-center group-hover:text-[#088395] transition-colors">
                {theme.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {theme.description}
              </p>

              {/* Learn more link */}
              <div className="mt-6 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#088395] font-semibold hover:text-[#05BFDB] transition-colors group/link"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
