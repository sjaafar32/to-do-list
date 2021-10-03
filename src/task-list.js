let taskListArray = [];
const wholeTaskListDiv = document.createElement('div');
wholeTaskListDiv.classList.add('whole-task-list-div');
const form = document.querySelector('form');

const clickAddTask = () => {
    const taskInput = document.getElementById('task-input');
    if(taskInput.value == ''){return;}
    taskListArray.push(taskInput.value);

    const task = document.createElement('div');
    task.classList.add('task-list');
    task.textContent = '-' + taskInput.value;

    taskInput.value = '';
    wholeTaskListDiv.appendChild(task);
    form.appendChild(wholeTaskListDiv);
}

const clearTaskArray = () => {
    taskListArray = [];
    wholeTaskListDiv.textContent = '';
}

export {clickAddTask, taskListArray, wholeTaskListDiv, clearTaskArray }