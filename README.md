# Todo App

A simple and efficient Todo App built with React. This app allows users to add, edit, delete, and mark tasks as completed. The app uses local storage to persist tasks across sessions.

## Features

- **Add Tasks**: Users can add new tasks with a title and optional due date.
- **Edit Tasks**: Users can edit the text of existing tasks (due date editing might be included).
- **Delete Tasks**: Tasks can be deleted when no longer needed.
- **Mark Tasks as Complete**: Users can mark tasks as completed, which will be visually indicated.
- **Persistent Storage**: Tasks are saved to the browser's local storage, so they persist even after a page refresh or browser restart.

## Project Structure

- **MainComponent**: The main container that manages the state of the entire application and handles adding, editing, deleting, and completing tasks.
- **AddComponent**: A form component for adding new tasks.
- **ListComponent**: Displays a list of tasks.
- **TaskItem**: A single task item that supports editing, deletion, and marking as complete.

## Technologies Used
- **React.js:** Frontend library for building the user interface
- **date-fns:** for date formatting
- **CSS:** Styling of components
- **ESLint:** Ensuring code quality
- **Vercel:** Deployment platform for hosting the application with ease

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/behnam-nbt/todo-app.git
   cd todo-app
   npm install
## Usage
- **Adding a Task:** Enter a task description and optional due date in the input fields and click "Add Task".
- **Editing a Task:** Click "Edit" next to a task to change its text.
- **Deleting a Task:** Click "Delete" to remove a task.
- **Marking a Task as Complete:** Use the checkbox next to a task to mark it as complete. The task text will be strikethrough.
- **Persistent Tasks:** The tasks you add or modify are saved to local storage, so they'll be there when you return to the app later.

## Acknowledgments
- **React:** JavaScript library for building user interfaces.
- **date-fns:** JavaScript date utility library used for formatting dates in the app.
