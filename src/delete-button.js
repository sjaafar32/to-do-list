import _ from 'lodash';
import sheet from './style.css';
import { cardArray, storedArray, mainContent } from './submit-button';

const createDeleteButton = (cardElement, arrayPosition) => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    cardElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        cardArray.splice(arrayPosition, 1);
        localStorage.setItem('storedArray', JSON.stringify(cardArray));
        mainContent.removeChild(cardElement);
    });
    
}

export {createDeleteButton}