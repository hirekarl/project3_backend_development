# Project 3: Backend Development

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<time datetime="2025-09-02">2025-09-02</time>  

## Overview
### Viewer Instructions
1. In the terminal, run:

```bash
cd taskmaster && npm i && npm run dev
```

2. Run API requests against:
- `http://localhost:3001/api/users`
- `http://localhost:3001/api/projects`
- `http://localhost:3001/api/tasks`

### Submission Source
Top-level application behavior can be found in [`./taskmaster/server.js`](./taskmaster/server.js).

### API Routes
#### Users
- `POST` `http://localhost:3001/api/users/register`: create a new user
- `POST` `http://localhost:3001/api/users/login`: login as an existing user

#### Projects
- `POST` `http://localhost:3001/api/projects`: create new project owned by currently logged-in user
- `GET` `http://localhost:3001/api/projects`: get all projects owned by currently logged-in user
- `GET` `http://localhost:3001/api/projects/:id`: get project by ID, restricted to projects owned by currently logged-in user
- `PUT` `http://localhost:3001/api/projects/:id`: update project, restricted to modification by owner only
- `DELETE` `http://localhost:3001/api/projects:id`: delete project, restricted to deletion by owner only
- `POST` `http://localhost:3001/api/projects/:projectId/tasks`: create new task for project by ID, restricted to currently logged-in user as project owner
- `GET` `http://localhost:3001/api/projects/:projectId/tasks`: get all tasks for project by ID, restricted to currently logged-in user as project owner

#### Tasks
- `PUT` `http://localhost:3001/api/tasks/:taskId`: update a single task, restricted to currently logged-in user as owner of parent project
- `DELETE` `http://localhost:3001/api/tasks/:taskId`: delete a single task, restricted to currently logged-in user as owner of parent project

## Assignment
You are a junior backend developer at “Productivity Inc.,” a startup building a new suite of productivity tools. Your first major assignment is to build the entire backend for their flagship product, TaskMaster. This API will be the engine that powers the entire application, handling user accounts, project management, and individual tasks.

This is a capstone project designed to synthesize the skills you have learned across multiple modules. You will plan and execute the development of a real-world, secure, and functional RESTful API from the ground up. Success will require careful planning, clean code, and a solid understanding of authentication and authorization principles.

This project emphasizes the DRY (Don’t Repeat Yourself) principle. You are strongly encouraged to reference, reuse, and adapt the code and patterns you have developed in the labs and lessons from previous modules.
