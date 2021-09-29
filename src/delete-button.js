import _ from 'lodash';
import sheet from './style.css';
import { cardsDiv, cardArray, storedArray } from './submit-button';

const createDeleteButton = (cardElement, arrayPosition) => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Delete';

    cardElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        cardArray.splice(arrayPosition, 1);
        localStorage.setItem('storedArray', JSON.stringify(cardArray));
        cardsDiv.removeChild(cardElement);
    });
    
}

export {createDeleteButton}