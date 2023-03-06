import { Component, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./DashboardCard.css";
import {publish} from "../../events";
import {
    Card, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"

export default function DashboardCard(){
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState([]);

    const getAllCards = () => {
        fetch('/transactions/cards/')
        .then(response => response.json())
        .then(data => setCards(data));
    }

    useEffect(() => {
        publish('cardChanged', cards[index]);
        getAllCards();
    }, [])
    

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        publish('cardChanged', cards[selectedIndex]);
    };
    
    return (
        <div>
            
        </div>
    );
}