function getCards(){
    return fetch("/transactions/cards/")
            .then(response => response.json())
            .then(data => data);
}

async function publish(eventName, data) {
    if (data == null){
        const cards = await getCards();
        console.log("CARDS", cards);
        data = cards[0];
        console.log("ALI", data);
    }
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}

export {publish};