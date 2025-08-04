import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function AffiliatePage() {
  const benefits = [
    {
      title: 'High Commission Rates',
      description: 'Earn up to 30% commission on all referred customers for the lifetime of their subscription.',
      icon: '💰',
    },
    {
      title: 'Extended Cookie Duration',
      description: '90-day cookie duration means you get credit even if users sign up weeks after clicking your link.',
      icon: '🍪',
    },
    {
      title: 'Marketing Materials',
      description: 'Access professionally designed banners, email templates, and promotional content.',
      icon: '🎨',
    },
    {
      title: 'Real-time Analytics',
      description: 'Track your performance with detailed statistics and conversion data.',
      icon: '📊',
    },
    {
      title: 'Fast Payouts',
      description: 'Get paid monthly via PayPal, Stripe, or direct bank transfer. Low minimum payout threshold.',
      icon: '💸',
    },
    {
      title: 'Dedicated Support',
      description: 'Our affiliate managers are ready to help you maximize your earnings.',
      icon: '🤝',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Become a Flirty.ai Affiliate Partner</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-10">
            Earn generous commissions by promoting the next generation AI platform to your audience.
          </p>
          <Link href="/register" className="btn btn-primary text-lg px-8 py-3">
            Join Our Affiliate Program
          </Link>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our affiliate program is designed to reward you generously for sharing Flirty.ai with your audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full mr-4 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sign Up as an Affiliate</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Complete our simple registration process to join the Flirty.ai affiliate program.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full mr-4 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Get Your Unique Links</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Access your dashboard to get personalized affiliate links and marketing materials.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full mr-4 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Promote Flirty.ai</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Share your links with your audience through your website, social media, or email list.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full mr-4 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Earn Commissions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Earn up to 30% commission on all referrals that sign up through your links.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="md:w-2/5 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Commission Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                  <span className="font-medium">Free Plan Referrals</span>
                  <span className="text-lg font-semibold">$2 per signup</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                  <span className="font-medium">Premium Plan Referrals</span>
                  <span className="text-lg font-semibold">30% recurring</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                  <span className="font-medium">Business Plan Referrals</span>
                  <span className="text-lg font-semibold">25% recurring</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Minimum Payout</span>
                  <span className="text-lg font-semibold">$50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Earning?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join our affiliate program today and start earning generous commissions by promoting the next generation of AI technology.
          </p>
          <Link 
            href="/register" 
            className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
          >
            Become an Affiliate Partner
          </Link>
        </div>
      </section>
    </main>
  );
}