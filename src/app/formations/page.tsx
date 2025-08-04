"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const formations = [
  {
    id: "paramedicaux",
    title: "PARAMEDICAUX",
    description: "Formation d'excellence dans le domaine médical et paramédical",
    specialites: ["Sage-femme", "Infirmièr(e)"],
    icon: "🏥",
    color: "from-red-500 to-pink-600"
  },
  {
    id: "gestion",
    title: "GESTION MANAGEMENT",
    description: "Formation complète en gestion d'entreprise et management",
    specialites: [
      "Transit et Douanes & Commerce International",
      "Comptabilité et Finances",
      "Banque et microfinance",
      "Trade Marketing",
      "Management D'Entreprise"
    ],
    icon: "💼",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "droit",
    title: "DROIT ET TECHNIQUE DES AFFAIRES",
    description: "Formation juridique complète pour les futurs professionnels du droit",
    specialites: ["Droit Privé", "Droit Public"],
    icon: "⚖️",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "communication",
    title: "INFORMATION COMMUNICATION JOURNALISME ET MULTIMÉDIA",
    description: "Formation aux métiers de la communication et des médias",
    specialites: [
      "Communication Publique",
      "Journalisme",
      "Présentateur(trice)",
      "Rédacteur(trice)",
      "Reporteur",
      "Archiviste",
      "Web-Son-Vidéo-Image"
    ],
    icon: "📺",
    color: "from-green-500 to-teal-600"
  },
  {
    id: "informatique",
    title: "INFORMATIQUE",
    description: "Formation aux technologies de pointe et à l'innovation numérique",
    specialites: ["Génie Logiciel", "Intelligence Artificielle"],
    icon: "💻",
    color: "from-orange-500 to-red-600"
  }
];

const diplomes = [
  {
    niveau: "DTS",
    description: "Diplôme de Technicien Supérieur",
    duree: "BACC+2",
    icon: "🎓"
  },
  {
    niveau: "LICENCE",
    description: "Formation universitaire complète",
    duree: "BACC+3",
    icon: "📚"
  },
  {
    niveau: "MASTER I",
    description: "Formation d'excellence niveau 1",
    duree: "BACC+4",
    icon: "🏆"
  },
  {
    niveau: "MASTER II",
    description: "Formation d'excellence niveau 2",
    duree: "BACC+5",
    icon: "👑"
  }
];

export default function FormationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f0f7fb] to-white">
      <Navbar />
      
      <motion.section 
        className="py-16 sm:py-20 md:py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Nos <span className="text-[#1986c1]">Formations</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl sm:max-w-3xl">
              Découvrez nos 5 filières d&apos;excellence et nos diplômes reconnus par la FOP et habilités par le MESUPRES.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {formations.map((formation) => (
              <motion.div 
                key={formation.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#1986c1]/10 hover:border-[#1986c1]/20 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${formation.color} flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6`}>
                  {formation.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">{formation.title}</h3>
                <p className="mb-4 text-sm text-gray-600 sm:text-base">{formation.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 sm:text-base">Spécialités :</h4>
                  <ul className="space-y-1">
                    {formation.specialites.map((specialite, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600 sm:text-sm">
                        <span className="w-1 h-1 bg-[#1986c1] rounded-full mr-2"></span>
                        {specialite}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-[#1986c1] to-[#1673a8] rounded-2xl p-6 sm:p-8 md:p-12 text-white mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 text-center sm:mb-8">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Nos Diplômes Reconnus</h2>
              <p className="text-base sm:text-lg opacity-90">
                Formations habilitées par le MESUPRES et reconnues par la FOP
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
              {diplomes.map((diplome, index) => (
                <motion.div 
                  key={index}
                  className="p-4 text-center bg-white/10 rounded-xl sm:p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-3 text-2xl sm:text-3xl sm:mb-4">{diplome.icon}</div>
                  <h3 className="mb-2 text-lg font-bold sm:text-xl">{diplome.niveau}</h3>
                  <p className="mb-2 text-xs sm:text-sm opacity-90">{diplome.description}</p>
                  <p className="text-base font-semibold sm:text-lg">{diplome.duree}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl sm:mb-6">
              Prêt à rejoindre l&apos;excellence ?
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600 sm:text-xl sm:mb-8">
              Contactez-nous pour plus d&apos;informations sur nos formations et procédures d&apos;admission.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl text-white bg-[#1986c1] hover:bg-[#1673a8] transition-all duration-300 shadow-lg"
                >
                  Demande d&apos;information
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-xl bg-white text-[#1986c1] border border-[#1986c1]/30 hover:border-[#1986c1] hover:bg-[#1986c1]/5 transition-all duration-300 shadow-sm"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </main>
  );
} 