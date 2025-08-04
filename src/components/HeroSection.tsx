import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export default function HeroSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#f0f7fb] to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-[#1986c1]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#1986c1]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col items-center px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <motion.span 
          className="bg-[#1986c1]/10 text-[#1986c1] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &quot;Savoir, Excellence, Avenir&quot;
        </motion.span>
        
        <motion.h1 
          className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <span className="text-[#1986c1]">ISFPS</span> LEADER
        </motion.h1>
        
        <motion.p 
          className="max-w-2xl mb-3 text-lg leading-relaxed text-gray-600 sm:text-xl sm:mb-4 sm:max-w-3xl"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          &quot;Le leader reste toujours le premier&quot;
        </motion.p>
        
        <motion.p 
          className="max-w-2xl mb-8 text-base leading-relaxed text-gray-600 sm:text-lg sm:mb-10 sm:max-w-3xl"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          INSTITUT SUPÉRIEUR DE FORMATIONS DES PARAMEDICAUX ET SCIENCES DE LA SOCIETE
        </motion.p>
        
        <motion.div 
          className="flex flex-col w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:w-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl text-white bg-[#1986c1] hover:bg-[#1673a8] transition-all duration-300 shadow-lg group"
            >
              <span>Découvrir nos formations</span>
              <svg className="w-4 h-4 ml-2 transition-transform transform sm:w-5 sm:h-5 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl bg-white text-[#1986c1] border border-[#1986c1]/30 hover:border-[#1986c1] hover:bg-[#1986c1]/5 transition-all duration-300 shadow-sm"
            >
              Nous Contacter
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full max-w-4xl mt-12 sm:mt-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-[#1986c1]/10 hover:border-[#1986c1]/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1986c1]/10 flex items-center justify-center">
                  <span className="text-[#1986c1] text-sm sm:text-lg">🎓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 sm:text-base">Formations Reconnues</p>
                  <p className="text-xs text-gray-500 sm:text-sm">Diplômes habilités par le MESUPRES</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 sm:text-sm">Maintenant</div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-[#1986c1]/5 p-3 sm:p-4 rounded-xl max-w-[85%]">
                <p className="text-sm text-gray-700 sm:text-base">DIPLOMES RECONNUS PAR LA FOP FORMATIONS HABILITEES PAR LE MESUPRES</p>
              </div>
              <div className="bg-[#1986c1]/10 p-3 sm:p-4 rounded-xl max-w-[85%] ml-auto border border-[#1986c1]/20">
                <p className="text-sm text-gray-700 sm:text-base">Former les Leader de Demain</p>
              </div>
            </div>
            <div className="mt-4 text-center sm:mt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-lg text-[#1986c1] hover:text-[#1673a8] hover:bg-[#1986c1]/5 transition-all duration-300"
              >
                Voir nos formations →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}