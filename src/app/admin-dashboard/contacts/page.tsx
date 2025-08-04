'use client';

import { useState, useEffect } from 'react';

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

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newContact, setNewContact] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    formation: '',
    message: ''
  });
  const contactsPerPage = 10;

  // Charger les contacts depuis l'API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/contact');
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des contacts');
        }
        
        const data = await response.json();
        setContacts(data.contacts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Filtrer les contacts basé sur la recherche
  const filteredContacts = contacts.filter(contact => 
    contact.nom.toLowerCase().includes(search.toLowerCase()) ||
    contact.prenom.toLowerCase().includes(search.toLowerCase()) ||
    contact.email.toLowerCase().includes(search.toLowerCase()) ||
    contact.formation.toLowerCase().includes(search.toLowerCase())
  );

  // Obtenir les contacts actuels pour la pagination
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

  // Changer de page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Formater la date
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

  // Ouvrir le modal avec les détails du contact
  const openContactDetails = (contact: Contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  // Supprimer un contact
  const deleteContact = async (contactId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
      try {
        const response = await fetch(`/api/contact/${contactId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setContacts(contacts.filter(c => c.id !== contactId));
          if (selectedContact?.id === contactId) {
            setShowModal(false);
            setSelectedContact(null);
          }
        } else {
          alert('Erreur lors de la suppression');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        alert('Erreur lors de la suppression');
      }
    }
  };

  // Ajouter un nouveau contact
  const addContact = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });

      if (response.ok) {
        const result = await response.json();
        setContacts([result.contact, ...contacts]);
        setShowAddModal(false);
        setNewContact({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          formation: '',
          message: ''
        });
        alert('Contact ajouté avec succès !');
      } else {
        alert('Erreur lors de l\'ajout du contact');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Erreur lors de l\'ajout du contact');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <svg className="w-10 h-10 mx-auto mb-4 text-[#1986c1] animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600 dark:text-gray-400">Chargement des contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-3 text-red-700 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400">
        <p className="font-medium">Erreur lors du chargement des contacts</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Gestion des Contacts</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez toutes les demandes d&apos;information reçues via le formulaire de contact.
        </p>
      </div>
      
      <div className="mb-8 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Rechercher des contacts..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1986c1] focus:border-transparent w-full md:w-80 dark:bg-gray-700 dark:text-white"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#1986c1] rounded-lg hover:bg-[#1673a8] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Ajouter un contact
              </button>
              <div className="text-gray-600 dark:text-gray-400">
                Affichage de <span className="font-medium">{currentContacts.length}</span> sur{' '}
                <span className="font-medium">{filteredContacts.length}</span> contacts
              </div>
            </div>
          </div>
        </div>
        
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
                  Téléphone
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                  Formation
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {currentContacts.length > 0 ? (
                currentContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {contact.prenom} {contact.nom}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">{contact.telephone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">{contact.formation}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(contact.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className="text-[#1986c1] hover:text-[#1673a8] dark:hover:text-[#1673a8] mr-4"
                        onClick={() => openContactDetails(contact)}
                      >
                        Voir
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 dark:hover:text-red-400"
                        onClick={() => deleteContact(contact.id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    {contacts.length === 0 ? 'Aucun contact trouvé.' : 'Aucun contact trouvé correspondant à votre recherche.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {filteredContacts.length > contactsPerPage && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === 1
                  ? 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Précédent
            </button>
            
            <div className="hidden md:flex">
              {[...Array(Math.ceil(filteredContacts.length / contactsPerPage))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-4 py-2 border rounded-lg ${
                    currentPage === i + 1
                      ? 'bg-[#1986c1] text-white border-[#1986c1]'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-gray-700 md:hidden dark:text-gray-300">
              Page {currentPage} sur {Math.ceil(filteredContacts.length / contactsPerPage)}
            </div>
            
            <button
              onClick={() => paginate(currentPage < Math.ceil(filteredContacts.length / contactsPerPage) ? currentPage + 1 : currentPage)}
              disabled={currentPage === Math.ceil(filteredContacts.length / contactsPerPage)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === Math.ceil(filteredContacts.length / contactsPerPage)
                  ? 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Suivant
            </button>
          </div>
        )}
      </div>

      {/* Modal pour les détails du contact */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Détails du Contact
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Prénom
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.prenom}</p>
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nom
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.nom}</p>
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.email}</p>
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Téléphone
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.telephone}</p>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Formation d&apos;intérêt
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.formation}</p>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <p className="text-gray-900 whitespace-pre-wrap dark:text-white">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date de soumission
                  </label>
                  <p className="text-gray-900 dark:text-white">{formatDate(selectedContact.createdAt)}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end px-6 py-4 space-x-3 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg dark:text-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  deleteContact(selectedContact.id);
                  setShowModal(false);
                }}
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour ajouter un nouveau contact */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Ajouter un nouveau contact
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={newContact.prenom}
                    onChange={(e) => setNewContact({...newContact, prenom: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1986c1] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={newContact.nom}
                    onChange={(e) => setNewContact({...newContact, nom: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1986c1] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={newContact.email}
                    onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1986c1] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={newContact.telephone}
                    onChange={(e) => setNewContact({...newContact, telephone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1986c1] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Formation d&apos;intérêt *
                  </label>
                  <select
                    value={newContact.formation}
                    onChange={(e) => setNewContact({...newContact, formation: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1986c1] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Sélectionner une formation</option>
                    <option value="Informatique de Gestion">Informatique de Gestion</option>
                    <option value="Comptabilité">Comptabilité</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="Gestion des Ressources Humaines">Gestion des Ressources Humaines</option>
                    <option value="Tourisme et Hôtellerie">Tourisme et Hôtellerie</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    value={newContact.message}
                    onChange={(e) => setNewContact({...newContact, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1986c1] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Message optionnel..."
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end px-6 py-4 space-x-3 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg dark:text-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Annuler
              </button>
              <button
                onClick={addContact}
                disabled={!newContact.prenom || !newContact.nom || !newContact.email || !newContact.telephone || !newContact.formation}
                className="px-4 py-2 text-white bg-[#1986c1] rounded-lg hover:bg-[#1673a8] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ajouter le contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 