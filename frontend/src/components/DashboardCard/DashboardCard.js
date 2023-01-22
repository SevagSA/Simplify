import { Component, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./DashboardCard.css";
import {
    Card, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"


export default function DashboardCard(){
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState([
        {
            'member':'Malaka',
            'bank_name':'RBC',
            'card_number':'1234 5678 9012 3456',
            'card_type':'Credit',
            'card_balance':'13000',
        },

        {
            'member':'Malak43a',
            'bank_name':'R533gBC',
            'card_number':'12343533 5678 9012 3456',
            'card_type':'Credg54it',
            'card_balance':'13g454g000',
        },

        {
            'member':'Malaka1',
            'bank_name':'RBC',
            'card_number':'1234 5678 9012 3456',
            'card_type':'Credit',
            'card_balance':'13000',
        },

        {
            'member':'Malaka2',
            'bank_name':'RBC',
            'card_number':'1234 567ergregge8 9012 3456',
            'card_type':'g3445',
            'card_balance':'gergeregr',
        }
    ]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} variant='dark' controls={true}>
            {cards.map((card)=> {
                    return (
                        <Carousel.Item key={card.number}>
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