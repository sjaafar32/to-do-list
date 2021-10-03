import _ from 'lodash';
import sheet from './style.css';
import {card, displayCards, sideBarProjectList} from './create-card';
import { taskListArray, wholeTaskListDiv, clearTaskArray } from './task-list';
import { priority } from './priority';

const mainContent = document.getElementById('main-content');
const title = document.getElementById('title-input');
const date = document.getElementById('date-input');
const clearButton = document.getElementById('clear-button');
let storedArray = JSON.parse(localStorage.getItem('storedArray'));

let cardArray = [];
let newCard;
let priorityLevel;

const clickSubmit = () => {
    document.documentElement.style.setProperty('--display', 'none');
    priorityLevel = priority();
    newCard = new card (title.value, date.value, taskListArray, priorityLevel.textContent);
    if(!cardArray){cardArray = [];}
    clearTaskArray();
    cardArray.push(newCard);
    localStorage.setItem('storedArray', JSON.stringify(cardArray));
    title.value = '';
    displayCards(newCard);
    sideBarProjectList(newCard);
};

clearButton.addEventListener('click', () => {
    cardArray = [];
    localStorage.setItem('storedArray', JSON.stringify(cardArray));
    cardsDiv.textContent = '';
    displayCards();
});


window.onload = () => {
    document.documentElement.style.setProperty('--display', 'none');
    console.log(storedArray);
    storedArray.forEach(card => {
        cardArray.push(card);
        displayCards(card);
        sideBarProjectList(card);
    });
}

export {title, date, clickSubmit, mainContent, cardArray, storedArray}