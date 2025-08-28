Mini Applicant Tracking System
Project Overview
This project is a Mini ATS (Applicant Tracking System) that helps recruiters track job applications visually using a Kanban board and provides analytics.

Features
Kanban Board for application stages (Applied, Interview, Offer, Rejected)
Drag & Drop support
Add, Edit, Delete candidates
Analytics Dashboard with charts
Filters by role, experience, and status
Architecture
The project follows a full-stack MERN architecture:

Frontend (React.js + TailwindCSS)

Pages/Components:
KanbanBoard: Displays candidates in Kanban stages
Dashboard: Analytics with Pie and Bar charts
AddCandidate: Form to add new candidates
KanbanCard & KanbanColumn: Individual cards and columns with drag-and-drop
State management: React hooks (useState, useEffect) and props
Charts: Recharts library for analytics
Backend (Node.js + Express)

Routes:
routes/candidates.js: CRUD operations for candidates
Controllers:
Handles fetching, adding, editing, deleting candidates
Database:
MongoDB Atlas storing candidate data
Data Flow:

Frontend sends HTTP requests (GET, POST, PUT, DELETE) to backend API.
Backend interacts with MongoDB and returns responses.
Frontend updates UI dynamically based on backend responses.
Charts update automatically whenever candidate data changes.
Database Schema
Candidate

_id: string
name: string
role: string
experience: number
status: string
resume: string (file name or URL)
Setup Instructions
Clone the repository
git clone <repo-url>
Install dependencies
npm install
Start backend
npm run server (or node server.js)
Start frontend
npm start
Make sure MongoDB is running / connected
Libraries Used
React.js, TailwindCSS
Node.js, Express
MongoDB
Recharts for charts
@hello-pangea/dnd for drag-and-drop
Demo
https://drive.google.com/file/d/1YjQwCCIjBRWUTPT--4rB_92_m9VzRj5I/view?usp=sharing
