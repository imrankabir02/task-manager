# Django Task Management System API

A robust Task Management System built with Django REST Framework, featuring user authentication, task CRUD operations, and status management.

## Features

- User Authentication with Token-based system
- Create, Read, Update, and Delete tasks
- Task status management (Todo, Started, Complete, Archived)
- Rich text descriptions using CKEditor
- Organized task view with search functionality

## Technologies

- Python 3.12+
- Django 5.1.4
- Django REST Framework
- CKEditor
- PostgreSQL/SQLite3

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager.git
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
└── django_task_management_system/
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py

```