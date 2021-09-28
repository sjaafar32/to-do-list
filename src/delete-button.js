import _ from 'lodash';
import sheet from './style.css';
import { cardElement } from './submit-button';

const createDeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Delete';

    cardElement.appendChild(deleteButton);
    
}

export {createDeleteButton}