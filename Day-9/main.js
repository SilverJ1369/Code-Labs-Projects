const body = document.body;
const input = document.querySelector('.task-input');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('#to-do-form');
const taskList = document.querySelector('.task-list');

input.addEventListener('focusin', focusInput);
input.addEventListener('focusout', endFocus);
form.addEventListener('submit', createTask);

let allTasks = JSON.parse(localStorage.getItem('task_list')) || [];
populateTaskList(allTasks);

function focusInput() {
	body.classList.add('focus-form');
}

function endFocus() {
	if (body.classList.contains('focus-form')) body.classList.remove('focus-form');
}

function createTask(e) {
    e.preventDefault();

    const task = {
        taskName: input.value,
        isChecked: false,
    }
    allTasks.push(task);
    console.log(allTasks);
    updateTaskList(allTasks);
    endFocus();
    form.reset();
}

function crossoutP(index) {
    const checkboxElement = document.querySelectorAll('.task-checkbox')[index];
    const taskText = document.querySelectorAll('.task')[index];
    allTasks[index].isChecked = checkboxElement.checked;
    updateTaskList(allTasks);
    console.log(checkboxElement.checked);
}

function removeTask(index) {
    console.log('remove');
    allTasks.splice(index, 1);
    updateTaskList(allTasks);
}

function populateTaskList(tasks = []) {
    taskList.innerHTML = tasks
    .map(  
        ((task, index) =>
        `<li> 
                <input type="checkbox" class="task-checkbox" ${task.isChecked ? "checked" : ""} onclick="crossoutP(${index}, this)">
                <p class="task ${task.isChecked ? 'crossout-p' : ''}" target="_blank">${task.taskName}</p> 
                <button class="btn-remove" onclick="removeTask(${index})">Remove</button>
            </li>`)
        )
    .join("");
}

function updateTaskList(tasks = []) {
    allTasks = tasks
    saveTaskToLocalStorage(allTasks);
    populateTaskList(allTasks);
}

function saveTaskToLocalStorage(tasks = []) {
    localStorage.setItem('task_list', JSON.stringify(tasks));
}
