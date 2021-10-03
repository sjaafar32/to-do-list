import _ from 'lodash';
import sheet from './style.css';
import { cardArray, storedArray, mainContent } from './submit-button';
import { sideBarArray } from './create-card';

const sideBar = document.getElementById('side-bar');

const createDeleteButton = (cardElement, projectDiv, arrayPosition) => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    cardElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        cardArray.splice(arrayPosition, 1);
        sideBarArray.splice(arrayPosition, 1);
        localStorage.setItem('storedArray', JSON.stringify(cardArray));
        mainContent.removeChild(cardElement);
        sideBar.removeChild(projectDiv);
    });
    
}

export {createDeleteButton}