const cardContentDom = (titleElement, dateElement, cardElement, cardsDiv) => {
    cardElement.appendChild(titleElement);
    cardElement.appendChild(dateElement);
    cardsDiv.appendChild(cardElement);
}

export {cardContentDom}