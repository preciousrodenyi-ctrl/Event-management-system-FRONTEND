Event Management System - Frontend

A React-based frontend application for an Event Management System. This application allows users to register, log in, view events, create events, edit events, and manage their event activities through a responsive user interface.

The frontend connects to a Flask REST API backend.

Live Demo

Frontend:

https://event-management-system-frontend-1.onrender.com

Backend API:

https://event-management-system-backend-tjsl.onrender.com

Features
User signup and login
User authentication
Protected routes
View events
Create events
Edit events
Delete events
Responsive navigation
Axios API communication
React Router navigation
Session-based authentication
Technologies Used
React
Vite
JavaScript
React Router DOM
Axios
CSS
Render Deployment
Project Structure
Event-management-system-FRONTEND/

├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── EventCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetails.jsx
│   │   ├── CreateEvent.jsx
│   │   └── EditEvent.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── vite.config.js
├── package.json
└── README.md
Installation and Setup

Clone the repository:

git clone https://github.com/preciousrodenyi-ctrl/Event-management-system-FRONTEND.git

Move into the project folder:

cd Event-management-system-FRONTEND

Install dependencies:

npm install
Running the Application

Start the development server:

npm run dev

The application will run on:

http://localhost:5173
Backend Configuration

The frontend communicates with the Flask backend API.

Backend URL:

https://event-management-system-backend-tjsl.onrender.com

API configuration is located in:

src/services/api.js

Example:

axios.create({
  baseURL: "https://event-management-system-backend-tjsl.onrender.com/api",
  withCredentials: true
});
Application Routes
Public Routes
Route	Description
/	Home page
/login	Login page
/signup	Create account
Protected Routes
Route	Description
/dashboard	User dashboard
/events	View events
/create-event	Add new event
/edit-event/:id	Update event
/event/:id	Event details
Deployment

This project is deployed on Render.

Build Command
npm install && npm run build
Publish Directory
dist
Vite Configuration

Because Render uses a custom hostname, vite.config.js allows the Render domain:

preview: {
  allowedHosts: [
    "event-management-system-frontend-1.onrender.com"
  ]
}
API Endpoints Used
Authentication
POST /api/signup
POST /api/login
GET /api/check_session
POST /api/logout
Events
GET /api/events
POST /api/events
PUT /api/events/:id
DELETE /api/events/:id
Author

Precious Rodenyi

GitHub:

https://github.com/preciousrodenyi-ctrl

License

This project was created for educational purposes.