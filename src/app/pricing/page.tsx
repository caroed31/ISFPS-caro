import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Flirty',
      price: '0€',
      description: 'Parfait pour débuter',
      features: [
        'Conversations de base',
        'Réponses personnalisées',
        'Support par email',
        'Jusqu\'à 100 messages/mois',
        'Personnalité de base',
        'Templates simples'
      ],
      isFeatured: false,
      ctaText: 'Commencer gratuitement',
      icon: '👋',
      color: 'from-blue-50 to-blue-100'
    },
    {
      name: 'Naughty',
      price: '49€',
      period: '/mois',
      description: 'Pour les professionnels',
      features: [
        'Conversations illimitées',
        'Réponses hyper-personnalisées',
        'Support prioritaire 24/7',
        'Analytics avancés',
        'Personnalisation avancée',
        'Templates premium',
        'Stratégies de vente optimisées',
        'Jusqu\'à 1000 messages/mois'
      ],
      isFeatured: true,
      ctaText: 'Essayer Naughty',
      icon: '🔥',
      color: 'from-[#1986c1]/10 to-[#456cf7]/10'
    },
    {
      name: 'Premium',
      price: 'Sur mesure',
      description: 'Pour les grandes équipes',
      features: [
        'Tout le plan Naughty',
        'API personnalisée',
        'Manager de compte dédié',
        'Formation de l\'équipe',
        'Messages illimités',
        'SLA garanti',
        'Personnalités multiples',
        'Templates exclusifs'
      ],
      isFeatured: false,
      ctaText: 'Contactez-nous',
      icon: '💎',
      color: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1986c1] via-[#456cf7] to-[#1986c1]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-[rgba(69,108,247,0.09)] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#1986c1]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Choisissez votre <span className="text-[#1986c1]">Personnalité</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-10">
            Des solutions adaptées à tous les besoins. Commencez gratuitement et évoluez à votre rythme.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-[#1986c1] text-white font-medium">
              Mensuel
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-gray-600 font-medium border border-gray-200">
              Annuel <span className="text-[#1986c1]">-20%</span>
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative bg-gradient-to-b from-[rgba(69,108,247,0.09)] to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-soft border transition-all duration-300 hover:scale-105 ${
                  plan.isFeatured 
                    ? 'border-[#1986c1]/20 relative transform scale-105' 
                    : 'border-gray-100'
                }`}
              >
                {plan.isFeatured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#1986c1] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <div className={`text-center mb-8 bg-gradient-to-br ${plan.color} rounded-xl p-6`}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center text-2xl shadow-sm">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start group">
                      <svg className="w-5 h-5 text-[#1986c1] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/register" 
                  className={`block w-full text-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    plan.isFeatured
                      ? 'bg-[#1986c1] text-white hover:bg-[#1673a8] hover:shadow-lg'
                      : 'bg-white text-[#1986c1] border border-[#1986c1]/20 hover:border-[#1986c1]/40 hover:shadow-md'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-[rgba(69,108,247,0.09)] to-[#1986c1]/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d&apos;aide pour choisir ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider à choisir le plan qui correspond le mieux à vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-xl bg-[#1986c1] text-white hover:bg-[#1673a8] transition-colors shadow-soft"
            >
              Contactez notre équipe
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-[rgba(69,108,247,0.09)] to-[#1986c1]/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Prêt à commencer ?</h2>
          <Link 
            href="/register" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-xl bg-[#1986c1] text-white hover:bg-[#1673a8] transition-colors shadow-soft"
          >
            Commencer maintenant
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}