const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskDate = document.getElementById('taskDate');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const dateTime = taskDate.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText} ${dateTime ? <small>(${new Date(dateTime).toLocaleString()})</small> : ''}</span>
        <div>
            <button onclick="completeTask(this)">✅</button>
            <button onclick="editTask(this)">✏</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDate.value = '';
}

function completeTask(btn) {
    btn.parentElement.parentElement.classList.toggle('completed');
}

function editTask(btn) {
    const li = btn.parentElement.parentElement;
    const newTask = prompt("Edit your task:", li.firstChild.textContent.trim());
    if (newTask) {
        li.firstChild.innerHTML = newTask;
    }
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}