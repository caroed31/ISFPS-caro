import Navbar from '@/components/Navbar';
import RegisterForm from '@/components/RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Navbar />
      <section className="relative py-12 overflow-hidden md:py-20">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-[#178fc1]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#178fc1]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Left Column - Form */}
            <div className="w-full max-w-md mx-auto lg:w-1/2">
              <div className="mb-8 text-center lg:text-left">
                <span className="inline-block bg-blue-50 text-[#178fc1] px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
                  Limited Time Offer
                </span>
                <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Start Your <span className="text-[#178fc1]">AI Journey</span> Today</h1>
                <p className="text-gray-600 md:text-lg">
                  Join thousands of businesses already using our AI to boost their conversions and customer retention.
                </p>
              </div>
              
              <RegisterForm />
              
              <div className="mt-8 text-sm text-center text-gray-600 lg:text-left">
                <p>Limited spots available. Join now to secure your place.</p>
                <div className="w-full h-4 mt-4 overflow-hidden bg-gray-200 rounded-full shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-[#178fc1] to-[#1da1d9]" 
                    style={{ width: '37%' }}
                  ></div>
                </div>
                <p className="mt-2 font-medium">850/2300 spots claimed</p>
              </div>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
              <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">What You&apos;ll Get</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-blue-50">
                      <svg className="h-5 w-5 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">AI-Powered Conversations</h4>
                      <p className="text-gray-600">Advanced natural language processing that understands context and nuance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-blue-50">
                      <svg className="h-5 w-5 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Conversion Optimization</h4>
                      <p className="text-gray-600">Proven techniques to convert prospects into customers, tailored to your business.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-blue-50">
                      <svg className="h-5 w-5 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Real-time Analytics</h4>
                      <p className="text-gray-600">Comprehensive insights into customer interactions and conversion metrics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-blue-50">
                      <svg className="h-5 w-5 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Enterprise-grade Security</h4>
                      <p className="text-gray-600">End-to-end encryption and compliance with global data protection standards.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-5 bg-[#f0f7fb] rounded-xl border border-[#178fc1]/10">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-10 w-10 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">30-Day Money-Back Guarantee</h4>
                      <p className="text-gray-600">Try it risk-free. Not satisfied? Get a full refund, no questions asked.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}