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

const avantages = [
  {
    title: 'Formations Reconnues',
    description: 'Diplômes reconnus par la FOP et habilités par le MESUPRES pour une reconnaissance nationale et internationale.',
    icon: '🏆',
  },
  {
    title: '5 Filières d\'Excellence',
    description: 'Paramedicaux, Gestion Management, Droit, Communication et Informatique pour tous les profils.',
    icon: '🎯',
  },
  {
    title: 'Formation des Leaders',
    description: 'Notre mission est de former les futurs professionnels influents et les leaders de demain.',
    icon: '👑',
  },
  {
    title: 'Insertion Professionnelle',
    description: 'Accompagnement personnalisé pour une insertion rapide et réussie dans le monde professionnel.',
    icon: '💼',
  }
];

export default function AffiliateSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#f0f7fb] to-white relative overflow-hidden">
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
            Pourquoi choisir <span className="text-[#1986c1]">ISFPS LEADER</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Découvrez les avantages qui font de notre institut le choix d&apos;excellence pour votre formation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {avantages.map((avantage, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#1986c1]/10 hover:border-[#1986c1]/20 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1986c1]/10 text-[#1986c1] flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {avantage.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1986c1] transition-colors">{avantage.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{avantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-[#1986c1] to-[#1673a8] rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Contactez-nous</h3>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg opacity-90">
                <div className="flex items-center">
                  <span className="mr-3">📞</span>
                  <span>038 67 744 52 - 034 15 670 45</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span>Infoleaderisfps@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🎓</span>
                  <span>Formez-vous avec les meilleurs</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center w-full">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl bg-white text-[#1986c1] hover:bg-gray-50 transition-all duration-300 shadow-md group"
                >
                  <span>Demande d&apos;information</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}