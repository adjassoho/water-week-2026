export default function Stats() {
  const stats = [
    { 
      number: "1500+", 
      label: "Participants attendus",
      icon: "👥"
    },
    { 
      number: "25+", 
      label: "Pays représentés",
      icon: "🌍"
    },
    { 
      number: "50+", 
      label: "Conférenciers experts",
      icon: "🎤"
    },
    { 
      number: "4", 
      label: "Thématiques majeures",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-gray-700 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
