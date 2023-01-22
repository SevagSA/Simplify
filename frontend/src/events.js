function getCards(){
    return fetch('/transactions/cards/')
            .then(response => response.json())
            .then(data => data);
}

async function publish(eventName, data) {
    if (data == null){
        const cards = await getCards();
        console.log(cards);
        data = cards[0];
    }
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}

export {publish};