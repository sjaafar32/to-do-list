const cardContentDom = (titleElement, dateElement, priorityElement, taskArray, cardElement, mainContent) => {
    cardElement.appendChild(titleElement);
    cardElement.appendChild(dateElement);
    cardElement.appendChild(priorityElement);

    const cardTaskDiv = document.createElement('div');
    cardTaskDiv.classList.add('card-task-div');
    taskArray.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.textContent = '-' + task;
        taskDiv.classList.add('tasks');
        cardTaskDiv.appendChild(taskDiv);
    });
    cardElement.appendChild(cardTaskDiv);
    
    mainContent.appendChild(cardElement);
}

const projectListDom = (projectTitle, projectDate, projectPriority, projectDiv, sideBar) => {
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDate);
    projectDiv.appendChild(projectPriority);
    sideBar.appendChild(projectDiv);
}

export {cardContentDom, projectListDom}