'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalEtudiants: 0,
    totalFormations: 5,
    totalContacts: 0,
    demandesInfo: 0,
    maxCapacity: 1000,
  });

  interface Contact {
    id: string;
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    formation: string;
    message: string;
    createdAt: string;
  }
  
  const [recentContacts, setRecentContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch dashboard data from API
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/admin/dashboard');

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const result = await response.json();

        if (result.success) {
          setStats(result.data.stats);
          setRecentContacts(result.data.recentContacts);
        } else {
          throw new Error(result.message || 'Failed to fetch dashboard data');
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div>
      <div className="p-6 mb-8 bg-white shadow-sm rounded-xl dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Tableau de Bord Administratif</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Bienvenue dans le portail d&apos;administration d&apos;ISFPS LEADER. Gérez votre institution efficacement.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex px-3 py-1 text-xs font-medium text-[#1986c1] rounded-full bg-[#1986c1]/10 dark:bg-[#1986c1]/30 dark:text-[#1986c1]">
              {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <svg className="w-10 h-10 mx-auto mb-4 text-[#1986c1] animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-600 dark:text-gray-400">Chargement des données...</p>
          </div>
        </div>
      ) : error ? (
        <div className="px-4 py-3 text-red-700 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400">
          <p className="font-medium">Erreur lors du chargement des données</p>
          <p className="text-sm">{error}</p>
        </div>
      ) : (
      <>
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative p-6 overflow-hidden bg-white shadow-md rounded-xl dark:bg-gray-800 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#1986c1]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Étudiants Inscrits</h3>
            <div className="p-2 text-[#1986c1] bg-[#1986c1]/10 rounded-lg dark:bg-[#1986c1]/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalEtudiants.toLocaleString()}</div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {Math.round((stats.totalEtudiants / stats.maxCapacity) * 100)}% de la capacité
          </div>
          <div className="w-full h-2 mt-4 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
            <div 
              className="h-full transition-all duration-500 bg-[#1986c1]" 
              style={{ width: `${(stats.totalEtudiants / stats.maxCapacity) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="relative p-6 overflow-hidden bg-white shadow-md rounded-xl dark:bg-gray-800 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-purple-600">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Formations Disponibles</h3>
            <div className="p-2 text-purple-600 bg-purple-100 rounded-lg dark:bg-purple-900/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalFormations}</div>
          <div className="flex items-center mt-2">
            <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
              </svg>
              5 filières d&apos;excellence
            </span>
          </div>
        </div>
        
        <div className="relative p-6 overflow-hidden bg-white shadow-md rounded-xl dark:bg-gray-800 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-green-600">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Demandes d&apos;Info</h3>
            <div className="p-2 text-green-600 bg-green-100 rounded-lg dark:bg-green-900/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.demandesInfo}</div>
          <div className="flex items-center mt-2">
            <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Ce mois
            </span>
          </div>
        </div>
        
        <div className="relative p-6 overflow-hidden bg-white shadow-md rounded-xl dark:bg-gray-800 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-amber-600">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Capacité</h3>
            <div className="p-2 rounded-lg text-amber-600 bg-amber-100 dark:bg-amber-900/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.maxCapacity.toLocaleString()}</div>
          <div className="flex items-center mt-2">
            <span className="inline-flex items-center text-sm">
              <span className="px-2 py-1 text-xs font-medium text-[#1986c1] bg-[#1986c1]/10 rounded-md dark:text-[#1986c1] dark:bg-[#1986c1]/30">
                {(stats.maxCapacity - stats.totalEtudiants).toLocaleString()} places disponibles
              </span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="overflow-hidden bg-white shadow-md rounded-xl dark:bg-gray-800">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Demandes de Contact Récentes
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Dernières demandes d&apos;information reçues</p>
            </div>
            <Link 
              href="/admin-dashboard/contacts"
              className="flex items-center px-3 py-1.5 text-sm font-medium text-[#1986c1] bg-[#1986c1]/10 rounded-lg hover:bg-[#1986c1]/20 dark:bg-[#1986c1]/20 dark:text-[#1986c1] dark:hover:bg-[#1986c1]/30 transition-colors"
            >
              <span>Voir tout</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {recentContacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                      Nom
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                      Formation
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {recentContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-[#1986c1] rounded-full">
                            {contact.prenom?.[0]}{contact.nom?.[0]}
                          </div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {contact.prenom} {contact.nom}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{contact.formation}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(contact.createdAt)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex items-center justify-center p-6">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400">Aucune demande de contact reçue</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-white shadow-md rounded-xl dark:bg-gray-800">
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Actions Rapides
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Tâches administratives courantes</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
              <div 
                className="flex items-center justify-between p-4 transition-all duration-300 border border-transparent rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:border-[#1986c1]/20 dark:hover:border-[#1986c1]/30 hover:shadow-md"
              >
                <div className="flex items-center">
                  <div className="p-3 mr-4 text-[#1986c1] bg-[#1986c1]/10 rounded-lg dark:bg-[#1986c1]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">Gérer les Formations</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Modifier les informations des formations</div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 text-[#1986c1] transition-transform duration-300 bg-white rounded-full shadow-md dark:bg-gray-700 dark:text-[#1986c1] group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <Link 
                href="/admin-dashboard/contacts" 
                className="flex items-center justify-between p-4 transition-all duration-300 border border-transparent rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:border-green-200 dark:hover:border-green-900 hover:shadow-md"
              >
                <div className="flex items-center">
                  <div className="p-3 mr-4 text-green-600 bg-green-100 rounded-lg dark:bg-green-900/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">Gérer les Contacts</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Voir et traiter les demandes de contact</div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 text-green-600 transition-transform duration-300 bg-white rounded-full shadow-md dark:bg-gray-700 dark:text-green-400 group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
              
              <div className="p-4 mt-2 border border-gray-300 border-dashed rounded-xl dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-3 mr-4 text-purple-600 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">Statut du Système</div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                        Tous les systèmes opérationnels
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
}