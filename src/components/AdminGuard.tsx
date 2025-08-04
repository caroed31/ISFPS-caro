'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Skip redirect for login page
    if (pathname === '/admin-dashboard/login') {
      setIsLoading(false);
      return;
    }
    
    // Check if admin session exists and verify role
    const checkAuth = async () => {
      try {
        // Check if we have admin session data in localStorage
        const sessionData = localStorage.getItem('admin_session');
        
        if (!sessionData) {
          // No session data, redirect to login
          router.push('/admin-dashboard/login');
          return;
        }
        
        // Parse session data
        interface AdminSession {
          id: string;
          name: string;
          firstname: string;
          email: string;
          role: string;
        }
        
        const session = JSON.parse(sessionData) as AdminSession;
        
        // Verify admin role
        if (session && session.role === 'admin') {
          setIsAuthenticated(true);
          setIsLoading(false);
        } else {
          // Not an admin, redirect to login
          localStorage.removeItem('admin_session');
          router.push('/admin-dashboard/login');
        }
      } catch (error: unknown) {
        console.error('Authentication error:', error);
        localStorage.removeItem('admin_session');
        router.push('/admin-dashboard/login');
      }
    };
    
    checkAuth();
  }, [pathname, router]);

  if (isLoading && pathname !== '/admin-dashboard/login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  // Show content if authenticated or on login page
  if (isAuthenticated || pathname === '/admin-dashboard/login') {
    return <>{children}</>;
  } else if (isLoading) {
    // Still loading, the loading spinner is already displayed above
    return null;
  } else {
    // Should navigate to login page, but as a fallback
    if (typeof window !== 'undefined') {
      router.push('/admin-dashboard/login');
    }
    return null;
  }
}