# Semaine de l'Eau - Cotonou 2026

Site web officiel de la deuxième édition de la Semaine de l'Eau et de l'Assainissement, du 3 au 5 juin 2026 au Palais des Congrès de Cotonou (Bénin).

## 🎯 À propos

Ce projet est une refonte moderne du site Waterweek2026 utilisant **Next.js 15**, avec un design **EXACTEMENT inspiré d'ICAR2026** (https://icar2026.org/) et le contenu complet de l'événement Semaine de l'Eau.

**Thématique principale :** De la Recherche à l'Innovation et au Transfert de Technologies

## ✨ Structure du Site (Identique à ICAR2026)

### Page d'accueil (/)
1. **Header** - Navigation fixe avec menu hamburger
2. **Hero Section** - Titre + dates importantes
3. **About Section** - Description courte de la conférence
4. **Highlights** - 5 points forts + 4 statistiques
5. **Speakers** - 6 conférenciers keynote
6. **Themes** - 4 thèmes de conférence numérotés
7. **Submission** - Guidelines pour soumissions
8. **Important Dates** - 4 dates clés
9. **Training Sessions** - 8 sessions de formation
10. **Venue** - Lieu et contact
11. **Footer** - Liens et organisateurs

### Page About (/about)
1. **Conference Identity** - Titre et organisateurs
2. **Organizations** - Liste des 8 organismes
3. **Conference Details** - Contexte et défis
4. **Thematic Areas** - Domaines scientifiques
5. **Priority Themes** - Thèmes émergents
6. **Technological Innovations** - Innovations et monitoring

## 🛠️ Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Styling moderne
- **React Hooks** - Gestion d'état

## 🚀 Installation et Démarrage

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build pour production
npm run build

# Démarrage en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
water-week-2026/
├── app/
│   ├── layout.tsx              # Layout global avec Header
│   ├── page.tsx                # Page d'accueil
│   ├── about/
│   │   └── page.tsx            # Page About
│   └── globals.css             # Styles globaux
├── components/
│   ├── Header.tsx              # Navigation fixe
│   ├── HeroSection.tsx         # Section hero
│   ├── AboutSection.tsx        # Section about (home)
│   ├── HighlightsSection.tsx   # Points forts + stats
│   ├── SpeakersSection.tsx     # Conférenciers
│   ├── ThemesSection.tsx       # 4 thèmes
│   ├── SubmissionSection.tsx   # Guidelines soumission
│   ├── ImportantDatesSection.tsx # Dates importantes
│   ├── TrainingSessionsSection.tsx # Sessions formation
│   ├── VenueSection.tsx        # Lieu et contact
│   └── FooterSection.tsx       # Footer
└── public/                     # Assets statiques
```

## 🎨 Design

Le design reproduit EXACTEMENT la structure d'ICAR2026 :
- Layout one-page scrolling pour la page d'accueil
- Navigation fixe avec menu hamburger responsive
- Sections empilées verticalement
- Style épuré et professionnel
- Palette de couleurs sobre (bleu/gris)
- Cartes avec hover effects
- Typographie claire et lisible

## 📝 Contenu

Le contenu provient du site original Waterweek2026 adapté :
- 4 thématiques principales
- 8 sessions de formation
- Dates et lieu (3-5 juin 2026, Cotonou)
- Organisateurs (C2EA, INE/UAC, IAHS, FRIEND AOC)
- Guidelines de soumission

## 🔄 Pages Disponibles

- `/` - Page d'accueil (toutes les sections)
- `/about` - Page About détaillée

## 📧 Contact

Pour toute question concernant l'événement :
- Email : contact@waterweek2026.org
- Téléphone : +229 XX XX XX XX
- Lieu : Palais des Congrès, Cotonou, Bénin

## 📄 Licence

© 2026 Semaine de l'Eau - Cotonou. Tous droits réservés.

---

**Organisé par :** C2EA, INE/UAC, IAHS, FRIEND AOC
