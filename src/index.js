import _ from 'lodash';
import sheet from './style.css';
import card from './create-card';
import { clickSubmit } from './submit-button';
import { clickAddTask } from '../task-list';

const submitButton = document.getElementById('submit-button');
const addButton = document.getElementById('add-button');
const xButton = document.getElementById('x-button');

submitButton.onclick = clickSubmit;

addButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--display', 'flex');
});

xButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--display', 'none');
});


const addTaskButton = document.getElementById('add-task');
addTaskButton.onclick = clickAddTask;

