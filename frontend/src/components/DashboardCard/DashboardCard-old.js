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
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} variant='dark' controls={true}>
            {cards.map((card, i)=> {
                    return (
                        <Carousel.Item key={i}>
                            <div className="account-card">
                                    <div className='full-width123456'>
                                        <div className='small-width123456'>
                                            <h1 className="title-card123">Available balance</h1>
                                        </div>
                                        <div className='big-width123456'>
                                            <h1 className="title-card123456">Credit</h1>
                                        </div>
                                    </div>
                                    
                                    <p className="text-cardaccount">${card['card_balance']}</p>
                                    <h1 className="title-card1234">**** 1234</h1>
                                </div>
                        </Carousel.Item>
                    )
                })}
        </Carousel>  
    );
}