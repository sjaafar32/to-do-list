import _ from 'lodash';
import sheet from './style.css';
import card from './create-card';
import { clickSubmit } from './submit-button';

const submitButton = document.getElementById('submit-button');

submitButton.onclick = clickSubmit;


let titleObject = {
    title:'Title',
    element: 'div'
}

let titleObjectTwo = {
    title: 'Title2',
    element: 'div'
}


