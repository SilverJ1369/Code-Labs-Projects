const body = document.body;
const input = document.querySelector('.task-input');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('#to-do-form');
const taskList = document.querySelector('.task-list');

input.addEventListener('focusin', focusInput);
input.addEventListener('focusout', endFocus);
form.addEventListener('submit', createTask);
taskList.addEventListener('submit', console.log('submitted'))

// const allTasks = [];

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
    const removeButton = document.createElement('button');

    newTaskCheck.setAttribute('type', 'checkbox');
    newTaskCheck.addEventListener('click', crossoutP);

    newTask.className = 'task';
    newTask.innerText = task;
    newTask.target = '_blank';

    removeButton.className = 'btn-remove';
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', removeTask);
    

    taskContainer.appendChild(newTaskCheck);
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(removeButton);
    taskList.appendChild(taskContainer);

    // allTasks.push(task);

    // populateTaskList(allTasks);

    // function populateTaskList(tasks = []) {
    //     taskList.innerHTML = tasks
    //         .map(  
    //             (link =>
    //                 `<li> <input type="check"> <p class="task" target="_blank">${task}</p> <button class="btn-remove>Remove</button>`)
    //             )
    //         .join("");
    // }

    function crossoutP() {
        if(this.checked) {
            newTask.classList.add('crossout-p');
        } else {
            if (newTask.classList.contains('crossout-p'))  {
                newTask.classList.remove('crossout-p');
            }
        
          }
    }

    function removeTask() {
        console.log('remove');
        taskContainer.remove();
    }

    endFocus();
    form.reset();
}

function testcheck() {
    if(this.checked) {
        console.log('checked');
    } else {
        console.log('not checked');
    }
}
