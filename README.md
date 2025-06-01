# ☁️ Projet d'application cloud – S2-Boutique ☁️

S2-Boutique est une plateforme e-commerce cloud-native, moderne et évolutive, permettant la gestion complète des produits, utilisateurs et commandes, avec une architecture MERN et un déploiement optimisé pour le cloud.

Dans le cadre de ce projet, nous avons conçu et réalisé une application cloud autour de la thématique **E-commerce**.  
L'objectif est de proposer une solution concrète à la problématique suivante :  
**Comment offrir une plateforme e-commerce moderne, scalable et accessible, permettant la gestion complète des produits, des utilisateurs et des commandes, tout en exploitant les avantages de l'architecture Cloud ?**

---

### 🎯 Objectifs du projet

- Concevoir une application e-commerce cloud-native, inspirée des meilleures pratiques du secteur.
- Exploiter les principes de l'architecture Cloud pour garantir scalabilité, disponibilité et simplicité de déploiement.
- Proposer une expérience utilisateur moderne, avec des fonctionnalités avancées pour les clients et les administrateurs.

---

### 🏗️ Architecture logicielle

- **Frontend** : ReactJS, Redux, Bootstrap, React-Router
- **Backend** : Node.js, Express.js, MongoDB (Mongoose), JWT, Multer
- **API REST** : pour la gestion des utilisateurs, produits, commandes, etc.
- **Déploiement Cloud** : Support AWS, Heroku, Netlify, Vercel (public cloud, modèle PaaS/SaaS selon l'hébergement)
- **Schéma d'architecture** : (à insérer dans le rapport PDF)

---

### ☁️ Choix du modèle Cloud

- **Type de déploiement** : PaaS/SaaS (ex : Heroku, Netlify, Vercel)
- **Modèle de cloud** : Public cloud
- **Justification** :  
  - **Coût** : solutions gratuites ou peu coûteuses pour le prototypage
  - **Scalabilité** : montée en charge facilitée par l'infrastructure cloud
  - **Simplicité** : déploiement rapide, gestion simplifiée
  - **Performance** : disponibilité mondiale, CDN, etc.

---

### 🚀 Mise en œuvre technique

- Prototype fonctionnel disponible (voir code source)
- Déploiement possible sur Netlify/Vercel (frontend) et Heroku/AWS (backend)

---

# S2-Boutique: Fullstack E-Commerce Platform

## Table of Contents
- [About the Project](#about-the-project)
- [Team](#team)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Deployment](#deployment)
- [API Overview](#api-overview)
- [Screenshots](#screenshots)
- [License](#license)

---

## About the Project

S2-Boutique is a full-featured e-commerce platform inspired by best-selling apps on ThemeForest. Built with the MERN stack (MongoDB, Express, React, Node.js), it supports user and admin flows, product management, Facebook login, and more. The project is designed for scalability and modern cloud deployment.

---

## Team

Developed by a passionate team:
- Badreddine CHEOUAI
- Amine el halili
- Hamza abougrin


---

## Tech Stack

- **Frontend:** ReactJS, Redux, Bootstrap, React-Router, React-Slick, React-Toastify, Facebook OAuth
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, Multer, CORS, dotenv
- **Cloud/Deployment:** AWS, Heroku, Netlify, Vercel

---

## Features

- Modern, responsive UI inspired by top e-commerce templates
- User registration and authentication (including Facebook OAuth)
- Admin dashboard for product and user management
- Product catalog with images, carousel, and pagination
- Shopping cart and checkout flow
- Notifications and alerts (React-Toastify)
- Local storage for cart persistence
- Secure API with JWT authentication
- File upload for product images (Multer)
- Serverless deployment support (Netlify/Vercel)
- Health check endpoint

---

## Project Structure

```
ProjectCloud/
  BackEnd_Cloud-APP-ecomerce/
    controller/
    models/
    routes/
    public/
      productImages/
    views/
    index.js
    package.json
  FrontEnd_Cloud-APP-ecomerce/
    src/
      components/
        AdminPages/
        UserPages/
      actionCreators/
      reducers/
    public/
    package.json
```

---

## Getting Started

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd BackEnd_Cloud-APP-ecomerce
   npm install
   ```

2. **Environment variables:**
   - Create a `.env` file with:
     ```
     PRIVATE_URL_MONGODB_LOCALHOST=your_local_mongo_url
     ONLINE_URL_MONGODB=your_cloud_mongo_url
     JWT_SECRET=your_jwt_secret
     ```
3. **Run the server:**
   ```bash
   npm run dev
   ```
   The backend will be available at `http://localhost:5000` (or as configured).

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd FrontEnd_Cloud-APP-ecomerce
   npm install
   ```

2. **Run the app:**
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.

---

## Deployment

- **Backend:** Can be deployed to AWS, Heroku, or as serverless functions (Netlify/Vercel).
- **Frontend:** Deployable to Netlify, Vercel, or any static hosting.

**Notes:**
- For Heroku, use `git push heroku master` for deployment.
- For Cloudflare, set SSL to "flexible" for AWS compatibility.

---

## API Overview

- **/users**: User registration, login, profile
- **/product**: Product CRUD, image upload
- **/order**: Order creation, history
- **/health**: Health check endpoint

(See `BackEnd_Cloud-APP-ecomerce/routes/` for detailed route handlers.)

---


## License

This project is licensed under the ISC License.
