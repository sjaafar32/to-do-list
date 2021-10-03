import _ from 'lodash';
import sheet from './style.css';

const lowPriority = document.getElementById('low-priority');
const mediumPriority = document.getElementById('medium-priority');
const highPriority = document.getElementById('high-priority');

const priority = () => {
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('sidebar-project-priority');

    let priorityArray = [lowPriority, mediumPriority, highPriority];
    priorityArray.forEach(element => {
        if(element.checked == true && element.value == 'lowPriority'){ 
            projectPriority.textContent = 'Low Priority'; } //document.documentElement.style.setProperty('color', 'greenyellow');}

        else if(element.checked == true && element.value == 'mediumPriority'){ 
            projectPriority.textContent = 'Medium Priority'; }
            
        else if(element.checked == true && element.value == 'highPriority'){ 
            projectPriority.textContent = 'High Priority';}
    });
    return projectPriority;
}

const priorityColor = (priorityLevel) => {
    if(priorityLevel == 'Low Priority'){return 'yellowgreen';}
    if(priorityLevel == 'Medium Priority'){return 'orange';}
    if(priorityLevel == 'High Priority'){return 'red';}
}

export {priority, priorityColor}