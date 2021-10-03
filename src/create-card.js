import _ from 'lodash';
import sheet from './style.css';
import { cardContentDom, projectListDom } from './dom';
import { cardsDiv, cardArray, mainContent } from './submit-button';
import { createDeleteButton } from './delete-button';
import { wholeTaskListDiv } from './task-list';
import { priorityColor } from './priority';

let cardElement;
let titleElement;
let dateElement;
let priorityElement;
let projectTitle;
let projectDate;
let projectPriority;

function card(title, date, taskArray, priority){
    this.title = title;
    this.date = date;
    this.taskArray = taskArray;
    this.priority = priority;
}

const displayCards = (card) => {
    cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    titleElement = document.createElement('div');
    titleElement.textContent = card.title;
    titleElement.classList.add('project-title');

    dateElement = document.createElement('div');
    dateElement.textContent = card.date;
    dateElement.classList.add('project-date');

    priorityElement = document.createElement('div');
    priorityElement.textContent = card.priority;
    priorityElement.classList.add('project-priority');
    priorityElement.style.color = priorityColor(priorityElement.textContent);

    cardContentDom(titleElement, dateElement, priorityElement, card.taskArray ,cardElement, mainContent);
    createDeleteButton(cardElement, cardArray.length-1);
}


const sideBar = document.getElementById('side-bar');

const sideBarProjectList = (card) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');

    projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');

    projectDate = document.createElement('div');
    projectDate.classList.add('project-date');

    projectPriority = document.createElement('div');
    projectPriority.textContent = card.priority;
    projectPriority.classList.add('project-priority');
    projectPriority.style.color = priorityColor(projectPriority.textContent);

    projectTitle.textContent = card.title;
    projectDate.textContent = 'DUE: ' + card.date;

    projectListDom(projectTitle, projectDate, projectPriority, projectDiv, sideBar);
}

export {card, displayCards, sideBarProjectList}