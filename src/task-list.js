let taskListArray = [];
let storedTaskList = JSON.parse(localStorage.getItem('taskList'));
const wholeTaskListDiv = document.createElement('div');
wholeTaskListDiv.classList.add('whole-task-list-div');
const form = document.querySelector('form');

const clickAddTask = () => {
    const taskInput = document.getElementById('task-input');
    if(taskInput.value == ''){return;}

    const task = document.createElement('div');
    task.classList.add('task-list');
    task.textContent = '-' + taskInput.value;
    taskListArray.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskListArray));


    taskInput.value = '';
    wholeTaskListDiv.appendChild(task);
    form.appendChild(wholeTaskListDiv);
}

export {clickAddTask}