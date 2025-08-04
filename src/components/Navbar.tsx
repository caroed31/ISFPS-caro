'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-4 border-b border-gray-100 backdrop-blur-sm bg-white/90">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-[#1986c1]">ISFPS</div>
              <div className="text-lg font-semibold text-red-600">LEADER</div>
            </div>
          </Link>
          
          {/* Desktop menu */}
          <div className="items-center hidden space-x-1 md:flex">
            <Link 
              href="/#formations" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#178fc1] hover:bg-blue-50 font-medium transition-colors"
            >
              Formations
            </Link>
            {/* <Link 
              href="/institut" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#178fc1] hover:bg-blue-50 font-medium transition-colors"
            >
              L&apos;Institut
            </Link> */}
            {/* <Link 
              href="/actualites" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#178fc1] hover:bg-blue-50 font-medium transition-colors"
            >
              Actualités
            </Link> */}
            <Link 
              href="/evenements" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#178fc1] hover:bg-blue-50 font-medium transition-colors"
            >
              Événements
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#178fc1] hover:bg-blue-50 font-medium transition-colors"
            >
              Contact
            </Link>
            
            <div className="ml-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-xl text-white bg-[#178fc1] hover:bg-[#1578a7] transition-all duration-300 shadow-md"
              >
                Demande d&apos;info
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-primary hover:bg-primary/5 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 mt-2 space-y-1 border-t border-gray-100 sm:px-3">
          <Link 
            href="/#formations" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#178fc1] hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Formations
          </Link>
          <Link 
            href="/institut" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#178fc1] hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            L&apos;Institut
          </Link>
          <Link 
            href="/actualites" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#178fc1] hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Actualités
          </Link>
          <Link 
            href="/evenements" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#178fc1] hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Événements
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#178fc1] hover:bg-blue-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            className="block w-full text-center mt-4 px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#178fc1] hover:bg-[#1578a7] transition-all duration-300 shadow-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Demande d&apos;info
          </Link>
        </div>
      </div>
    </nav>
  );
}