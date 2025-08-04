import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Navbar />
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-[#178fc1]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-[#178fc1]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8 shadow-md">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Account is Ready!</h1>
            
            <div className="max-w-xl mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                We&apos;ve sent a confirmation email to your inbox with important next steps.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[#f0f7fb] p-5 rounded-xl border border-[#178fc1]/10">
                  <div className="w-12 h-12 rounded-full bg-[#178fc1]/10 flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Verify Email</h3>
                  <p className="text-sm text-gray-600">Check your inbox and verify your email</p>
                </div>
                
                <div className="bg-[#f0f7fb] p-5 rounded-xl border border-[#178fc1]/10">
                  <div className="w-12 h-12 rounded-full bg-[#178fc1]/10 flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Log In</h3>
                  <p className="text-sm text-gray-600">Access your new dashboard</p>
                </div>
                
                <div className="bg-[#f0f7fb] p-5 rounded-xl border border-[#178fc1]/10">
                  <div className="w-12 h-12 rounded-full bg-[#178fc1]/10 flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-[#178fc1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Get Started</h3>
                  <p className="text-sm text-gray-600">Set up your first AI assistant</p>
                </div>
              </div>
              
              <div className="mb-10 p-6 bg-[#178fc1]/5 rounded-xl border border-[#178fc1]/10">
                <h3 className="text-xl font-semibold mb-4">Share and Get 2 Weeks Free Premium</h3>
                <p className="text-gray-700 mb-4">
                  Invite your colleagues and friends to join Flirty.ai and get 2 weeks of Premium for each person who signs up!
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="inline-flex items-center justify-center px-6 py-2 rounded-lg text-white bg-[#1DA1F2] hover:bg-[#0d95e8] transition-colors shadow-md">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.93 4.93 0 00-8.39 4.482A13.98 13.98 0 011.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                    </svg>
                    Share on Twitter
                  </button>
                  <button className="inline-flex items-center justify-center px-6 py-2 rounded-lg text-white bg-[#4267B2] hover:bg-[#365899] transition-colors shadow-md">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Share on Facebook
                  </button>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-[#178fc1] hover:text-[#1578a7] transition-colors group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}