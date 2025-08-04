import Link from 'next/link';

const diplomes = [
  {
    name: "DTS",
    niveau: "BACC+2",
    description: "Diplôme de Technicien Supérieur",
    features: [
      "Formation technique spécialisée",
      "Stage en entreprise",
      "Projet de fin d'études",
      "Accès aux formations continues",
      "Reconnaissance professionnelle",
      "Insertion rapide dans le monde du travail"
    ],
    cta: "S'inscrire au DTS",
    href: "/contact",
    popular: false,
    icon: "🎓"
  },
  {
    name: "LICENCE",
    niveau: "BACC+3",
    description: "Formation universitaire complète",
    features: [
      "Formation académique approfondie",
      "Spécialisation dans un domaine",
      "Mémoire de recherche",
      "Stage professionnel",
      "Accès au Master",
      "Reconnaissance internationale"
    ],
    cta: "S'inscrire en Licence",
    href: "/contact",
    popular: true,
    icon: "📚"
  },
  {
    name: "MASTER",
    niveau: "BACC+4/5",
    description: "Formation d'excellence",
    features: [
      "Master I (BACC+4)",
      "Master II (BACC+5)",
      "Recherche avancée",
      "Spécialisation pointue",
      "Mémoire de recherche approfondi",
      "Accès aux postes de direction",
      "Reconnaissance internationale",
      "Formation des futurs leaders"
    ],
    cta: "S'inscrire au Master",
    href: "/contact",
    popular: false,
    icon: "🏆"
  }
];

export default function PricingSection() {
  return (
    <section id="diplomes" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#178fc1]/30 via-[#178fc1] to-[#178fc1]/30"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-[#178fc1]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#178fc1]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-[#178fc1]">Diplômes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Formations reconnues par la FOP et habilitées par le MESUPRES pour former les leaders de demain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {diplomes.map((diplome, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-md border ${
                diplome.popular 
                  ? 'border-[#178fc1]/30 relative transform scale-105' 
                  : 'border-gray-100'
              } transition-all duration-300 hover:scale-105`}
            >
              {diplome.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#178fc1] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                    Plus Populaire
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full ${diplome.popular ? 'bg-blue-50' : 'bg-gray-50'} flex items-center justify-center text-xl sm:text-2xl transition-transform hover:scale-110`}>
                  {diplome.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{diplome.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className={`text-3xl sm:text-4xl font-bold ${diplome.popular ? 'text-[#178fc1]' : 'text-gray-900'}`}>{diplome.niveau}</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{diplome.description}</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {diplome.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${diplome.popular ? 'text-[#178fc1]' : 'text-gray-500'} mt-1 mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={diplome.href}
                className={`block w-full text-center px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  diplome.popular
                    ? 'bg-[#178fc1] text-white hover:bg-[#1578a7] hover:shadow-lg'
                    : 'bg-white text-[#178fc1] border border-[#178fc1]/30 hover:border-[#178fc1] hover:shadow-md hover:bg-blue-50/30'
                }`}
              >
                {diplome.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-[#f0f7fb] rounded-2xl p-6 sm:p-8 text-center shadow-md border border-[#178fc1]/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Besoin d&apos;aide pour choisir ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Notre équipe est là pour vous aider à choisir la formation qui correspond le mieux à vos ambitions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl bg-[#178fc1] text-white hover:bg-[#1578a7] transition-colors shadow-md group"
          >
            Demande d&apos;information
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 