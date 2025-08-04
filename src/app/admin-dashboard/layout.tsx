'use client';

import AdminNavbar from '@/components/AdminNavbar';
import AdminGuard from '@/components/AdminGuard';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// i'm lodphin porjet
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check if the user is authenticated for displaying the navbar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkAuth = () => {
        // Skip checking for login page
        if (pathname === '/admin-dashboard/login') {
          setIsAuthenticated(false);
          return;
        }
        
        try {
          const sessionData = localStorage.getItem('admin_session');
          if (sessionData) {
            const session = JSON.parse(sessionData);
            if (session && session.role === 'admin') {
              console.log('Admin session found, showing navbar');
              setIsAuthenticated(true);
              return;
            }
          }
          console.log('No valid admin session found, hiding navbar');
          setIsAuthenticated(false);
        } catch (error) {
          console.error('Error checking auth for navbar:', error);
          setIsAuthenticated(false);
        }
      };
      
      checkAuth();
      
      // Listen for storage events to update navbar visibility
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === 'admin_session') {
          checkAuth();
        }
      };
      
      // Listen for custom auth events
      const handleAuthChange = () => {
        console.log('Auth state changed event received');
        checkAuth();
      };
      
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('auth_state_changed', handleAuthChange);
      
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('auth_state_changed', handleAuthChange);
      };
    }
  }, [pathname]);
  
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {isAuthenticated && <AdminNavbar />}
        <main className={`${isAuthenticated ? 'py-10' : 'py-0'}`}>
          <div className={`mx-auto ${isAuthenticated ? 'max-w-7xl px-4 sm:px-6 lg:px-8' : ''}`}>
            {children}
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}