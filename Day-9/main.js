const body = document.body;
const input = document.querySelector('.task-input');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('#to-do-form');
const taskList = document.querySelector('.task-list');

input.addEventListener('focusin', focusInput);
input.addEventListener('focusout', endFocus);
form.addEventListener('submit', createTask);
taskList.addEventListener('submit', console.log('submitted'))

function focusInput() {
	body.classList.add('focus-form');
}

function endFocus() {
	if (body.classList.contains('focus-form')) body.classList.remove('focus-form');
}

function createTask(e) {
    e.preventDefault();

    const task = input.value;
    const taskContainer = document.createElement('li');
    const newTask = document.createElement('p');
    const newTaskCheck = document.createElement('input');

    newTaskCheck.setAttribute('type', 'checkbox');
    newTaskCheck.className = 'check';

    newTask.className = 'task';
    newTask.innerText = task;
    newTask.target = '_blank';

    taskContainer.appendChild(newTaskCheck);
    taskContainer.appendChild(newTask);
    taskList.appendChild(taskContainer);
    endFocus();
    form.reset();
}