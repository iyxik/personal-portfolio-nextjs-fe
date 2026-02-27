# Personal Portfolio

A portfolio website built with **Next.js** for the frontend and **Strapi** as the backend CMS.

## Features

- Home, About, Projects, Blog, and Contact pages  
- Content managed via Strapi  
- Responsive design with Tailwind CSS  
- Custom fonts using Google Fonts  
- Contact form for sending messages  

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Strapi CMS (headless)  
- **Styling:** Tailwind + custom CSS variables  

## Setup

### Frontend

```bash
cd frontend
npm install
npm run dev

### **Backend (Strapi)**

# Create a new Strapi project in JavaScript
npx create-strapi-app@latest backend --quickstart

# Navigate to backend folder
cd backend

# Install dependencies (if not already)
npm install

# Run Strapi
npm run develop

## Running the Project

- Frontend: http://localhost:3000
- Backend Admin Panel: http://localhost:1337/admin
- Backend API endpoints: /api/home, /api/about, /api/projects, /api/blogs
