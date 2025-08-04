"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8 }
// };

const evenements = [
  {
    id: 1,
    titre: "Journée Portes Ouvertes 2024",
    date: "15 Mars 2024",
    description: "Découvrez nos formations et rencontrez nos enseignants lors de notre journée portes ouvertes annuelle.",
    image: "/images/pexels-pavel-danilyuk-7942535.jpg",
    categorie: "Événement",
    lieu: "Campus ISFPS LEADER"
  },
  {
    id: 2,
    titre: "Conférence sur l'Intelligence Artificielle",
    date: "22 Avril 2024",
    description: "Conférence spécialisée sur les dernières avancées en Intelligence Artificielle et leurs applications.",
    image: "/images/pexels-pavel-danilyuk-7942512.jpg",
    categorie: "Conférence",
    lieu: "Amphithéâtre Principal"
  },
  {
    id: 3,
    titre: "Forum des Métiers de la Santé",
    date: "10 Mai 2024",
    description: "Rencontrez les professionnels du secteur paramédical et découvrez les opportunités de carrière.",
    image: "/images/pexels-pavel-danilyuk-7942471.jpg",
    categorie: "Forum",
    lieu: "Salle de Conférence"
  },
  {
    id: 4,
    titre: "Workshop Gestion d'Entreprise",
    date: "28 Mai 2024",
    description: "Atelier pratique sur les fondamentaux de la gestion d'entreprise et du management.",
    image: "/images/pexels-pavel-danilyuk-7942472.jpg",
    categorie: "Workshop",
    lieu: "Salle de Formation"
  },
  {
    id: 5,
    titre: "Séminaire Droit des Affaires",
    date: "12 Juin 2024",
    description: "Séminaire spécialisé sur le droit des affaires et les aspects juridiques de l'entreprise.",
    image: "/images/pexels-pavel-danilyuk-7944174.jpg",
    categorie: "Séminaire",
    lieu: "Amphithéâtre B"
  },
  {
    id: 6,
    titre: "Exposition Multimédia",
    date: "25 Juin 2024",
    description: "Exposition des projets étudiants en communication, journalisme et multimédia.",
    image: "/images/pexels-mccutcheon-1152500.jpg",
    categorie: "Exposition",
    lieu: "Galerie d'Art"
  }
];

const evenementsPasses = [
  {
    id: 7,
    titre: "Cérémonie de Remise des Diplômes 2023",
    date: "15 Décembre 2023",
    description: "Cérémonie officielle de remise des diplômes aux lauréats de la promotion 2023.",
    image: "/images/pexels-olia-danilevich-8127302.jpg",
    categorie: "Cérémonie",
    lieu: "Grand Hall"
  }
];

export default function EvenementsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f0f7fb] to-white">
      <Navbar />
      
      <motion.section 
        className="py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Nos <span className="text-[#1986c1]">Événements</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl">
              Découvrez les événements, conférences et activités organisés par ISFPS LEADER pour enrichir votre formation.
            </p>
          </div>

          {/* Événements à venir */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
              Événements à Venir
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {evenements.map((evenement, index) => (
                <motion.div 
                  key={evenement.id}
                  className="bg-white rounded-2xl shadow-lg border border-[#1986c1]/10 hover:border-[#1986c1]/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <Image
                      src={evenement.image}
                      alt={evenement.titre}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#1986c1] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {evenement.categorie}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{evenement.date}</span>
                      <span className="text-sm text-[#1986c1] font-medium">{evenement.lieu}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                      {evenement.titre}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {evenement.description}
                    </p>
                    <motion.button
                      className="w-full bg-[#1986c1] text-white py-2 px-4 rounded-xl font-medium hover:bg-[#1673a8] transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.location.href = '/contact'}
                    >
                      Plus d&apos;infos
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Événements passés */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
              Événements Passés
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {evenementsPasses.map((evenement, index) => (
                <motion.div 
                  key={evenement.id}
                  className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-lg opacity-75 rounded-2xl hover:border-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <Image
                      src={evenement.image}
                      alt={evenement.titre}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-sm font-medium text-white bg-gray-600 rounded-full">
                        {evenement.categorie}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{evenement.date}</span>
                      <span className="text-sm font-medium text-gray-600">{evenement.lieu}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                      {evenement.titre}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {evenement.description}
                    </p>
                    <button className="w-full px-4 py-2 font-medium text-gray-600 bg-gray-300 cursor-not-allowed rounded-xl">
                      Événement terminé
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div 
            className="bg-gradient-to-r from-[#1986c1] to-[#1673a8] rounded-2xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold">
              Restez informé de nos événements
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
              Inscrivez-vous à notre newsletter pour recevoir les dernières informations sur nos événements et activités.
            </p>
            <div className="flex flex-col justify-center max-w-md gap-4 mx-auto sm:flex-row">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                className="bg-white text-[#1986c1] px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                S&apos;inscrire
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </main>
  );
} 