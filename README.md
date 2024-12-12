# Task Management System Documentation

A full-stack task management application built with Django REST Framework and React with TypeScript.

## Live Demo
- Frontend: [https://task-manager-live.vercel.app](https://task-manager-live.vercel.app)
- Backend: [https://web-production-0183.up.railway.app](https://web-production-0183.up.railway.app)

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [API Endpoints](#api-endpoints)
5. [Security](#security)
6. [Project Structure](#project-structure)

## Features
- User Authentication (Login/Register)
- Task Management (CRUD operations)
- Task Status Management (Todo, Started, Complete, Archived)
- Search & Filter Tasks
- Responsive Design
- Rich Text Editor for Task Descriptions
- Due Date Management
- Token-based Authentication

## Tech Stack

### Backend
- Django 5.1.4
- Django REST Framework
- PostgreSQL (Railway)
- Django CORS Headers
- Django CKEditor
- Python-dotenv

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router v6

## Installation

### Backend Setup

1. Clone the repository
```bash
git clone https://github.com/imrankabir02/task-manager.git
cd task-manager
```

2. Create a virtual environment
````bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
````

3. Install dependencies
````bash
pip install -r requirements.txt
````

4. Apply migrations
````bash
python3 manage.py migrate
````

5. Run the development server
````bash
python3 manage.py runserver
````

### Frontend Setup

# Navigate to frontend directory
````bash
cd frontend
npm install
npm run dev
````

## API Endpoints
### Authentication

- Register: `POST /api/users/`
- Get Token/Login: `POST /api/auth/token/`

### Tasks

- List Tasks: `GET /api/tasks/`
- Create Task: `POST /api/tasks/`
- Retrieve Task: `GET /api/tasks/{id}/`
- Update Task: `PUT /api/tasks/{id}/`
- Delete Task: `DELETE /api/tasks/{id}/`
- Filter Tasks by Status: `GET /api/tasks/by_status/?status={status}`

<!-- API Usage Examples -->

## Task Status Options

- `todo`: To Do
- `started`: Started
- `complete`: Complete
- `archived`: Archived

## Security

- Token-based authentication
- User-specific task access
- Django's built-in security features

## Project Structure

```
task-manager/
├── .git/
├── .gitignore
├── README.md
├── requirements.txt
├── manage.py
├── base/
│   ├── __init__.py
│   ├── admin.py
│   ├── api.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── templates/
│       ├── base.html
│       └── base/
│           ├── login.html
│           ├── register.html
│           ├── task_create.html
│           ├── task_delete.html
│           ├── task_detail.html
│           ├── task_list.html
│           └── task_update.html
├── django_task_management_system/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── api.ts     # API service functions
    │   ├── components/
    │   │   ├── Auth/
    │   │   │   ├── Login.tsx
    │   │   │   └── Register.tsx
    │   │   ├── Layout/
    │   │   │   ├── Layout.tsx
    │   │   │   ├── Navbar.tsx
    │   │   │   └── Footer.tsx
    │   │   └── Tasks/
    │   │       ├── TaskForm.tsx
    │   │       ├── TaskList.tsx
    │   │       ├── TaskItem.tsx
    │   │       └── TaskUpdate.tsx
    │   ├── hooks/
    │   │   └── useAuth.ts
    │   ├── types/
    │   │   └── index.ts
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json

```
