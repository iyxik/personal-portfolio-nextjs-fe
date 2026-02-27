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
```

### Backend

Create a new Strapi project in JavaScript
```bash
npx create-strapi-app@latest backend --quickstart
```

Navigate to backend folder
```bash
cd backend
```

Install dependencies (if not already)
```bash
npm install
```

Run Strapi
```bash
npm run develop
```

## Running the Project

- Frontend: http://localhost:3000
- Backend Admin Panel: http://localhost:1337/admin
- Backend API endpoints: /api/home, /api/about, /api/projects, /api/blogs
