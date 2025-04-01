Todo List

A simple Todo List application built with Next, TypeScript, and TailwindCSS. Users can add, update, complete, and delete tasks.

Features
✅ Create a account
✅ Add new todos
✅ Mark todos as complete
✅ Remove todos
✅ Prioritize tasks
✅ Modal for task details
✅ Persist data with API calls

Tech Stack

Frontend: Next, TypeScript, TailwindCSS

Backend: Golang, Gin, Postgres

State Management: React useState, useEffect

Installation

Clone the repository:

git clone https://github.com/ppeymann/todo-fe.git
cd todo-fe

Install dependencies:

yarn install # or npm install

Run the development server:

yarn dev # or npm run dev

API Endpoints

GET /todos - Fetch all todos

POST /todos - Add a new todo

PATCH /todos/status/:id/:status - Update a todo for complete it

DELETE /todos/:id - Delete a todo

Usage

Sign Up in Site

Click the Add Todo button to create a task.

Click the checkbox to mark a todo as complete.

Click on a todo to open the details modal.

Click the delete button to remove a task.

Folder Structure

/todo-fe
├── src
│ ├── components # Reusable components
│ ├── apps # Page views
├── public # Static assets
├── api # API functions
├── package.json # Dependencies & scripts
├── README.md # Project documentation
