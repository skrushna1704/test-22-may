// Simple Todo App

let todos = [];

// Add Todo
function addTodo(task) {
  todos.push(task);
  console.log(`Added: ${task}`);
}

// Remove Todo
function removeTodo(index) {
  if (index >= 0 && index < todos.length) {
    console.log(`Removed: ${todos[index]}`);
    todos.splice(index, 1);
  } else {
    console.log("Invalid index");
  }
}

// Show Todos
function showTodos() {
  console.log("\nTodo List:");
  
  if (todos.length === 0) {
    console.log("No tasks available.");
    return;
  }

  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
}

// Example Usage
addTodo("Learn JavaScript");
addTodo("Build Projects");
addTodo("Practice Coding");

showTodos();

removeTodo(1);

showTodos();
