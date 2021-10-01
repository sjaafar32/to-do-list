const cardContentDom = (titleElement, dateElement, cardElement, cardsDiv, mainContent) => {
    cardElement.appendChild(titleElement);
    cardElement.appendChild(dateElement);
    cardsDiv.appendChild(cardElement);
    mainContent.appendChild(cardsDiv);
}

export {cardContentDom}