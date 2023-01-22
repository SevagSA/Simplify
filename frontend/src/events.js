function publish(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
document.dispatchEvent(event);
}

export {publish};