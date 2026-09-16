# 📝 To-Do List Web Application

A simple and responsive **To-Do List Web Application** developed using **HTML, JavaScript, Bootstrap, and LocalStorage**. The application allows users to add, update, and delete tasks while maintaining the tasks even after refreshing the browser.

## 🚀 Features

- ➕ Add new tasks
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 💾 Store tasks using Browser LocalStorage
- 🔄 Retrieve saved tasks after page refresh
- 📱 Responsive user interface
- 🎨 Bootstrap-based styling
- ⚡ Dynamic task rendering using JavaScript DOM manipulation

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling
- **JavaScript** – Application logic and DOM manipulation
- **Bootstrap** – Responsive UI and components
- **LocalStorage** – Persistent task storage

## 📂 Project Structure

```text
todo-list-javascript/
│
├── ToDoListLocalStorage.html
├── todoslocal.js
│
└── bootstrap/
    ├── css/
    └── js/
```

## ⚙️ How It Works

1. Enter a task in the input field.
2. Click the **Add** button to add the task.
3. Tasks are displayed dynamically in the To-Do List.
4. Click **Update** to modify an existing task.
5. Click **Delete** to remove a task.
6. Tasks are stored in the browser's **LocalStorage**, so they remain available after refreshing the page.

## 💾 LocalStorage

The application uses JavaScript LocalStorage to save tasks:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

Saved tasks are retrieved when the application starts:

```javascript
let storedTasks = localStorage.getItem("tasks");

let tasks = storedTasks ? JSON.parse(storedTasks) : [];
```

## 🎯 Learning Outcomes

Through this project, I practiced:

- JavaScript Arrays and Objects
- Functions and Arrow Functions
- DOM Manipulation
- Event Handling
- Form Submission
- LocalStorage
- JSON Parsing and Stringification
- Bootstrap Components and Utilities
- CRUD operations using JavaScript

## ▶️ How to Run

1. Clone the repository:

```bash
git clone https://github.com/lohith136/todo-list-javascript.git
```

2. Open the project folder.

3. Open `ToDoListLocalStorage.html` in your browser.

No backend or database is required.

## 📌 Future Enhancements

- Add task completion functionality
- Add task priority levels
- Add task categories
- Add search and filtering
- Add due dates
- Add dark mode

## 👨‍💻 Author

**Lohith**

GitHub:
https://github.com/lohith136
