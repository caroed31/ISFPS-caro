import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      title: 'Natural Conversations',
      description: 'Our AI provides the most natural conversational experience on the market, with nuanced understanding of context, emotions, and subtle cues.',
      icon: '🗣️',
    },
    {
      title: 'Personalized Learning',
      description: 'The more you interact with your AI, the more it learns about your preferences, communication style, and interests.',
      icon: '🧠',
    },
    {
      title: 'Multi-modal Interactions',
      description: 'Beyond text, communicate with images, audio, and more for a richer interactive experience.',
      icon: '📷',
    },
    {
      title: 'Memory & Recall',
      description: 'Your AI remembers your past conversations and can reference them intelligently during future interactions.',
      icon: '💭',
    },
    {
      title: 'Advanced Privacy',
      description: 'We use state-of-the-art encryption and privacy-preserving technologies to keep your conversations secure.',
      icon: '🔐',
    },
    {
      title: 'Cross-platform Experience',
      description: 'Access your AI companion from any device - web, mobile, tablet - with seamless synchronization.',
      icon: '📱',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Features that Redefine AI Interaction</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-10">
            Discover what makes Flirty.ai the most advanced AI companion platform in the market today.
          </p>
          <Link href="/register" className="btn btn-primary text-lg px-8 py-3">
            Join the BETA
          </Link>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to experience the future?</h2>
          <Link href="/register" className="btn btn-primary text-lg px-8 py-3">
            Join the BETA waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}