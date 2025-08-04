import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const filieres = [
  {
    title: "PARAMEDICAUX",
    description: "Sage-femme, Infirmièr(e) - Formation d'excellence dans le domaine médical",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "GESTION MANAGEMENT",
    description: "Transit et Douanes, Commerce International, Comptabilité et Finances, Banque et microfinance, Trade Marketing, Management D'Entreprise",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "DROIT ET TECHNIQUE DES AFFAIRES",
    description: "Droit Privé, Droit Public - Formation juridique complète pour les futurs leaders",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "INFORMATION COMMUNICATION JOURNALISME ET MULTIMÉDIA",
    description: "Communication Publique, Journalisme, Présentateur(trice), Rédacteur(trice), Reporteur, Archiviste, Web-Son-Vidéo-Image",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "INFORMATIQUE",
    description: "Génie Logiciel, Intelligence Artificielle - Technologies de pointe pour l'avenir",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function FeaturesSection() {
  return (
    <section id="formations" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#f0f7fb] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1986c1]/30 via-[#1986c1] to-[#1986c1]/30"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-[#1986c1]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#1986c1]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-[#1986c1]">Formations</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Découvrez nos 5 filières d&apos;excellence pour former les leaders de demain
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filieres.map((filiere, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#1986c1]/10 hover:border-[#1986c1]/20 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1986c1]/10 text-[#1986c1] flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {filiere.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1986c1] transition-colors">{filiere.title}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{filiere.description}</p>
              <motion.div whileHover={{ x: 5 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-[#1986c1] hover:text-[#1673a8] transition-colors text-sm sm:text-base"
                >
                  En savoir plus
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-[#1986c1] to-[#1673a8] rounded-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Diplômes Reconnus</h3>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              DTS (BACC+2), LICENCE (BACC+3), MASTER I (BACC+4), MASTER II (BACC+5)
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl bg-white text-[#1986c1] hover:bg-gray-50 transition-all duration-300 shadow-md"
                >
                  Voir nos formations
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Demande d&apos;information
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}