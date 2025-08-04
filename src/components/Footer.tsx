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

const stats = [
  { value: '5', label: 'Filières' },
  { value: '100%', label: 'Reconnus' },
  { value: '24/7', label: 'Support' }
];

const certifications = [
  { icon: '🏆', label: 'FOP Reconnu' },
  { icon: '✓', label: 'MESUPRES Habilité' },
  { icon: '⭐', label: 'Excellence Académique' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-12 pb-6 overflow-hidden bg-white border-t border-gray-100 sm:pt-16 sm:pb-8">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-[#1986c1]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#1986c1]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-xl sm:text-2xl font-bold text-[#1986c1]">ISFPS</div>
                <div className="text-base font-semibold text-red-600 sm:text-lg">LEADER</div>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base">
              Institut Supérieur de Formations des Paramedicaux et Sciences de la Societe. 
              Former les leaders de demain avec excellence.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-2 sm:p-3 bg-[#1986c1]/5 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-[#1986c1] font-bold text-sm sm:text-lg">{stat.value}</div>
                  <div className="text-xs text-gray-600 sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase sm:text-sm sm:mb-6">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#1986c1] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1 h-1 bg-[#1986c1] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#formations" className="text-gray-600 hover:text-[#1986c1] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1 h-1 bg-[#1986c1] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Formations
                </Link>
              </li>
              {/* <li>
                <Link href="/institut" className="text-gray-600 hover:text-[#1986c1] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1 h-1 bg-[#1986c1] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  L&apos;Institut
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#1986c1] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1 h-1 bg-[#1986c1] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase sm:text-sm sm:mb-6">
              Certifications
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {certifications.map((certification, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 p-2 sm:p-3 bg-white rounded-xl border border-[#1986c1]/10 hover:border-[#1986c1]/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg sm:text-xl">{certification.icon}</span>
                  <span className="text-xs text-gray-600 sm:text-sm">{certification.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase sm:text-sm sm:mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-xs text-gray-600 sm:space-y-4 sm:text-sm">
              <div className="flex items-center">
                <span className="mr-2 sm:mr-3">📞</span>
                <span>038 67 744 52</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 sm:mr-3">📞</span>
                <span>034 15 670 45</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 sm:mr-3">📧</span>
                <span>Infoleaderisfps@gmail.com</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#1986c1] text-white rounded-xl transition-all duration-300 hover:bg-[#1673a8] shadow-md text-center text-xs sm:text-sm"
                >
                  Demande d&apos;info
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center justify-between pt-6 border-t border-gray-100 sm:pt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 text-xs text-gray-500 sm:mb-0 sm:text-sm">
            &copy; {currentYear} ISFPS LEADER. Tous droits réservés.
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="/contact" className="text-gray-500 hover:text-[#1986c1] transition-colors text-xs sm:text-sm">
              Confidentialité
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-[#1986c1] transition-colors text-xs sm:text-sm">
              Conditions
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-[#1986c1] transition-colors text-xs sm:text-sm">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}