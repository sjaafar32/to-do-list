import _ from 'lodash';
import sheet from './style.css';
import {card} from './create-card';
import {cardContentDom} from './dom';
import { createDeleteButton } from './delete-button';

const main = document.querySelector('main');
const title = document.getElementById('title-input');
const date = document.getElementById('date-input');
const cardsDiv = document.getElementById('cards-div');
const clearButton = document.getElementById('clear-button');
let storedArray = JSON.parse(localStorage.getItem('storedArray'));

let cardArray = [];
let newCard;
let cardElement;
let titleElement;
let dateElement;

const clickSubmit = () => {
    newCard = new card (title.value, date.value);
    if(!cardArray){cardArray = [];}
    cardArray.push(newCard);
    localStorage.setItem('storedArray', JSON.stringify(cardArray));
    title.value = '';
    displayCards(newCard);
};

const displayCards = (card) => {
    cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    const titleElement = document.createElement('div');
    titleElement.textContent = card.title;

    const dateElement = document.createElement('div');
    dateElement.textContent = card.date;

    cardContentDom(titleElement, dateElement, cardElement, cardsDiv);
    createDeleteButton();
}

clearButton.addEventListener('click', () => {
    cardArray = [];
    localStorage.setItem('storedArray', JSON.stringify(cardArray));
    cardsDiv.textContent = '';
    displayCards();
});


window.onload = () => {
    console.log(storedArray);
    storedArray.forEach(card => {
        cardArray.push(card);
        displayCards(card);
    });
}

export {clickSubmit, cardsDiv, cardElement, titleElement, dateElement}