'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState('Admin');
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    // Get admin info from session
    const sessionData = localStorage.getItem('admin_session');
    if (sessionData) {
      try {
        const userData = JSON.parse(sessionData);
        setUserName(userData.firstname || 'Admin');
      } catch (e) {
        console.error('Error parsing admin session:', e);
      }
    }
    
    // Set current time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 60000); // Update every minute
    
    return () => clearInterval(timeInterval);
  }, []);
  
  const handleLogout = () => {
    // Remove admin session from localStorage
    localStorage.removeItem('admin_session');
    console.log('Logout: admin_session removed from localStorage');
    
    // Dispatch a custom event to notify other components about the logout
    const authEvent = new Event('auth_state_changed');
    window.dispatchEvent(authEvent);
    console.log('Logout: auth_state_changed event dispatched');
    
    // Redirect to login page
    router.push('/admin-dashboard/login');
  };
  
  const navLinks = [
    { 
      name: 'Dashboard', 
      href: '/admin-dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    { 
      name: 'Contacts', 
      href: '/admin-dashboard/contacts',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )
    },
    { 
      name: 'Users', 
      href: '/admin-dashboard/users',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      )
    }
  ];

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      {/* Top bar with logo and user info */}
      <div className="px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mx-auto text-sm max-w-7xl">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{currentTime}</span>
          </div>
          <div className="items-center hidden sm:flex">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-700/50">
              Administration Panel
            </span>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/admin-dashboard" className="flex items-center">
                <div className="p-2 mr-2 text-white bg-blue-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ISFPS LEADER <span className="text-sm font-normal text-gray-600 dark:text-gray-300">Admin</span>
                </span>
              </Link>
            </div>
            
            <div className="hidden space-x-1 sm:ml-10 sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="items-center hidden sm:flex">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {userName}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Administrator
                  </span>
                </div>
                <div className="flex items-center justify-center w-8 h-8 font-medium text-white bg-blue-600 rounded-full">
                  {userName.charAt(0)}
                </div>
              </div>
            </div>
            
            <div className="hidden w-px h-6 bg-gray-200 sm:block dark:bg-gray-700"></div>
            
            <div className="hidden sm:block">
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-colors rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414a1 1 0 00-.293-.707L11.414 3.293A1 1 0 0011 3H3zm9 2.414L15.586 8H12V5.414zM15 11a1 1 0 01-1 1H6a1 1 0 110-2h8a1 1 0 011 1zm-4 4a1 1 0 01-1 1H6a1 1 0 110-2h4a1 1 0 011 1z" clipRule="evenodd" />
                </svg>
                Logout
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex sm:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="bg-white border-t border-gray-200 sm:hidden dark:bg-gray-900 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-3 py-2">
                <div className="flex items-center justify-center w-8 h-8 mr-3 font-medium text-white bg-blue-600 rounded-full">
                  {userName.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-medium text-gray-800 dark:text-white">{userName}</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Administrator</div>
                </div>
              </div>
              
              <div className="px-2 mt-3">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 rounded-md dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414a1 1 0 00-.293-.707L11.414 3.293A1 1 0 0011 3H3zm9 2.414L15.586 8H12V5.414zM15 11a1 1 0 01-1 1H6a1 1 0 110-2h8a1 1 0 011 1zm-4 4a1 1 0 01-1 1H6a1 1 0 110-2h4a1 1 0 011 1z" clipRule="evenodd" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}