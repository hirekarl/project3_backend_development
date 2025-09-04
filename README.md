# Project 3: Backend Development

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<time datetime="2025-09-02">2025-09-02</time>  

## Overview
### Viewer Instructions
1. In the terminal, run:

```bash
cd taskmaster && npm i
```

2. Create a `.env` in `./taskmaster` with the following environment variables:
- `MONGO_URI`: a MongoDB connection URL of the form `mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/<databaseName>`
- `JWT_SECRET`: a secret key for signing JSON web tokens (see, e.g., https://jwtsecrets.com/)
- `PORT`: the port number on which to run the server; default is `3001`

3. Run `npm run dev` from the `./taskmaster` directory

4. Run API requests against:
- `http://localhost:<PORT>/api/users`
- `http://localhost:<PORT>/api/projects`
- `http://localhost:<PORT>/api/tasks`

### Submission Source
Top-level application behavior can be found in [`./taskmaster/server.js`](./taskmaster/server.js).

### API Routes
#### Users
- `POST` `http://localhost:<PORT>/api/users/register`: create a new user
- `POST` `http://localhost:<PORT>/api/users/login`: login as an existing user

#### Projects
- `POST` `http://localhost:<PORT>/api/projects`: create new project owned by currently logged-in user
- `GET` `http://localhost:<PORT>/api/projects`: get all projects owned by currently logged-in user
- `GET` `http://localhost:<PORT>/api/projects/:id`: get project by ID, restricted to projects owned by currently logged-in user
- `PUT` `http://localhost:<PORT>/api/projects/:id`: update project, restricted to modification by owner only
- `DELETE` `http://localhost:<PORT>/api/projects:id`: delete project, restricted to deletion by owner only
- `POST` `http://localhost:<PORT>/api/projects/:projectId/tasks`: create new task for project by ID, restricted to currently logged-in user as project owner
- `GET` `http://localhost:<PORT>/api/projects/:projectId/tasks`: get all tasks for project by ID, restricted to currently logged-in user as project owner

#### Tasks
- `PUT` `http://localhost:<PORT>/api/tasks/:taskId`: update a single task, restricted to currently logged-in user as owner of parent project
- `DELETE` `http://localhost:<PORT>/api/tasks/:taskId`: delete a single task, restricted to currently logged-in user as owner of parent project

## Assignment
You are a junior backend developer at “Productivity Inc.,” a startup building a new suite of productivity tools. Your first major assignment is to build the entire backend for their flagship product, TaskMaster. This API will be the engine that powers the entire application, handling user accounts, project management, and individual tasks.

This is a capstone project designed to synthesize the skills you have learned across multiple modules. You will plan and execute the development of a real-world, secure, and functional RESTful API from the ground up. Success will require careful planning, clean code, and a solid understanding of authentication and authorization principles.

This project emphasizes the DRY (Don’t Repeat Yourself) principle. You are strongly encouraged to reference, reuse, and adapt the code and patterns you have developed in the labs and lessons from previous modules.
