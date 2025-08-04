# ISFPS LEADER - Site Web Institutionnel

## 📋 Description

ISFPS LEADER est un site web institutionnel moderne pour l'**Institut Supérieur de Formations des Paramédicaux et Sciences de la Société**. Le site présente l'institution, ses formations, ses événements et permet aux visiteurs de prendre contact avec l'établissement.

**Slogan :** "Le leader reste toujours le premier"

## 🏗️ Architecture du Projet

### Stack Technologique

#### **Frontend**
- **Next.js 15.3.3** - Framework React avec App Router
- **React 19.0.0** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Framer Motion 12.18.1** - Animations fluides

#### **Backend & Base de Données**
- **Prisma 6.9.0** - ORM pour la gestion de base de données
- **PostgreSQL** - Base de données relationnelle
- **bcryptjs 3.0.2** - Hachage sécurisé des mots de passe
- **Zod 3.25.64** - Validation de schémas

#### **Outils de Développement**
- **ESLint** - Linting du code
- **Turbopack** - Bundler rapide pour le développement
- **PostCSS** - Traitement CSS avancé

## 🎯 Fonctionnalités Principales

### **Site Public**

#### 1. **Page d'Accueil**
- Bannière dynamique avec slogan institutionnel
- Section héro avec présentation de l'ISFPS
- Présentation des formations phares
- Section avantages de l'institution
- Section diplômes délivrés
- Appels à l'action vers le contact

#### 2. **Page Formations**
- Présentation détaillée des 5 filières :
  - **PARAMEDICAUX** : Sage-femme, Infirmier(e)
  - **GESTION MANAGEMENT** : Transit et Douanes, Comptabilité, Banque, Trade Marketing, Management
  - **DROIT ET TECHNIQUE DES AFFAIRES** : Droit Privé, Droit Public
  - **INFORMATION COMMUNICATION JOURNALISME** : Communication, Journalisme, Présentateur, Rédacteur, Reporteur, Archiviste, Web-Son-Vidéo-Image
  - **INFORMATIQUE** : Génie Logiciel, Intelligence Artificielle
- Niveaux de formation : DTS (BACC+2), Licence (BACC+3), Master I (BACC+4), Master II (BACC+5)

#### 3. **Page Événements**
- Affichage des événements à venir
- Archives des événements passés
- Galerie photos des événements
- Inscription à la newsletter

#### 4. **Page Contact**
- Formulaire de contact complet
- Coordonnées de l'institution :
  - Téléphone : 038 67 744 52 - 034 15 670 45
  - Email : Infoleaderisfps@gmail.com
- Plan d'accès
- Réseaux sociaux

### **Administration**

#### 1. **Dashboard Administratif**
- Statistiques en temps réel
- Gestion des contacts
- Vue d'ensemble des demandes d'information
- Actions rapides

#### 2. **Gestion des Contacts**
- Liste paginée des demandes de contact
- Recherche et filtrage
- Affichage détaillé des informations
- Ajout manuel de contacts
- Suppression de contacts

#### 3. **Système d'Authentification**
- Login sécurisé pour administrateurs
- Session persistante
- Protection des routes admin

## 🗄️ Base de Données

### **Modèles Prisma**

#### **User** (Administrateurs)
```prisma
- id: String (CUID)
- name: String
- firstname: String
- email: String (unique)
- password: String (hashé)
- plan: String
- role: String
- secret: String?
- createdAt: DateTime
- updatedAt: DateTime
```

#### **Contact** (Demandes d'information)
```prisma
- id: String (CUID)
- prenom: String
- nom: String
- email: String
- telephone: String
- formation: String
- message: String
- createdAt: DateTime
- updatedAt: DateTime
```

## 🎨 Design & UX

### **Système de Couleurs**
- **Couleur principale** : #1986c1 (Bleu ISFPS)
- **Couleurs secondaires** : Palette de bleus et gris
- **Mode sombre** : Support complet
- **Responsive** : Mobile-first design

### **Composants UI**
- **Navbar** : Navigation principale avec menu mobile
- **Footer** : Informations de contact et liens utiles
- **HeroSection** : Bannière d'accueil dynamique
- **AdminNavbar** : Navigation administrative
- **Modals** : Fenêtres modales pour les actions

## 🚀 API Routes

### **Contact**
- `POST /api/contact` - Créer un nouveau contact
- `GET /api/contact` - Récupérer tous les contacts
- `GET /api/contact/[id]` - Récupérer un contact spécifique
- `DELETE /api/contact/[id]` - Supprimer un contact

### **Admin**
- `GET /api/admin/dashboard` - Données du dashboard
- `POST /api/admin/login` - Authentification admin

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev          # Démarrer en mode développement avec Turbopack

# Production
npm run build        # Build de production avec génération Prisma
npm run start        # Démarrer en production

# Utilitaires
npm run lint         # Linting du code
npm run create-admin # Créer un administrateur
```

## 🌐 Déploiement

### **Variables d'Environnement**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/isfps_db"
NODE_ENV="production"
```

### **Base de Données**
1. Configurer PostgreSQL
2. Exécuter les migrations Prisma
3. Générer le client Prisma

## 📊 Fonctionnalités Avancées

### **Sécurité**
- Hachage bcrypt des mots de passe
- Validation Zod des données
- Protection CSRF
- Sessions sécurisées

### **Performance**
- Optimisation des images
- Lazy loading des composants
- Code splitting automatique
- Cache intelligent

### **SEO**
- Métadonnées optimisées
- Sitemap automatique
- Robots.txt configuré
- Structure HTML sémantique

## 🎓 À Propos d'ISFPS LEADER

**Institut Supérieur de Formations des Paramédicaux et Sciences de la Société**

- **Diplômes reconnus** par la FOP
- **Formations habilitées** par le MESUPRES
- **5 filières d'excellence**
- **Formation continue** et **formation initiale**
- **Partenariats** avec le secteur professionnel

## 📞 Contact

- **Téléphone** : 038 67 744 52 - 034 15 670 45
- **Email** : Infoleaderisfps@gmail.com
- **Adresse** : [Adresse de l'institution]

---

**Développé avec ❤️ pour ISFPS LEADER**
