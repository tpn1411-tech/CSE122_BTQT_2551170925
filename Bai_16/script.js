const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");

let todos = [
    { text: "Đọc chương HTML5 cơ bản", completed: true },
    { text: "Làm bài tập CSS Grid", completed: false },
    { text: "Quay video OBS nộp bài", completed: false }
];

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(function(todo, index) {
        const li = document.createElement("li");
        li.className = "todo-item";

        if (todo.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("button");
        checkbox.className = "todo-check";
        checkbox.setAttribute("aria-label", "Đổi trạng thái công việc");

        const text = document.createElement("span");
        text.className = "todo-text";
        text.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Xoá";

        checkbox.addEventListener("click", function() {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        });

        text.addEventListener("click", function() {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        });

        deleteBtn.addEventListener("click", function() {
            todos.splice(index, 1);
            renderTodos();
        });

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });

    const remaining = todos.filter(function(todo) {
        return todo.completed === false;
    }).length;

    todoCount.textContent = "Còn " + remaining + " việc chưa hoàn thành";
}

function addTodo() {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    todos.push({
        text: text,
        completed: false
    });

    todoInput.value = "";
    renderTodos();
    todoInput.focus();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

renderTodos();