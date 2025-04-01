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

git clone https://github.com/yourusername/todo-list.git
cd todo-list

Install dependencies:

yarn install # or npm install

Run the development server:

yarn dev # or npm run dev

API Endpoints

GET /todos - Fetch all todos

POST /todos - Add a new todo

PATCH /todos/:id - Update a todo

DELETE /todos/:id - Delete a todo

Usage

Click the Add Todo button to create a task.

Click the checkbox to mark a todo as complete.

Click on a todo to open the details modal.

Click the delete button to remove a task.

Folder Structure

/todo-list
├── src
│ ├── components # Reusable components
│ ├── pages # Page views
│ ├── services # API functions
│ ├── styles # Tailwind styles
│ ├── App.tsx # Main App component
│ ├── index.tsx # Entry point
├── public # Static assets
├── package.json # Dependencies & scripts
├── README.md # Project documentation

Contributing

Feel free to submit a PR if you find bugs or want to improve functionality.

License

This project is licensed under the MIT License.
