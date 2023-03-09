import "../css/global.css";
import "./DashboardCard.css";
import Carousel from "react-bootstrap/Carousel";
import { publish } from "../../events";
import { useEffect, useState } from "react";


export default function DashboardCard(){
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState([]);

    const getAllCards = () => {
        fetch("/transactions/cards/")
        .then(response => response.json())
        .then(data => setCards(data));
    }

    useEffect(() => {
        publish("cardChanged", cards[index]);
        getAllCards();
    }, [])
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        publish("cardChanged", cards[selectedIndex]);
    };
    
    return (
        <Carousel className="box-shadow border-radius" activeIndex={index} onSelect={handleSelect} interval={null} variant="dark" controls={true}>
            {cards.map((card, i)=> {
                return (
                    <Carousel.Item key={i}>
                        <div className="account-card">
                            <p className="no-pm">Available balance<label className="float-right">Credit</label></p>
                            <div style={{height:"3vh"}}></div>
                            <h1 className="text-black no-pm card-balance">$ {card["card_balance"]}</h1>
                            <div style={{height:"4vh"}}></div>
                            <p className="text-black no-pm">{card["card_number"]}</p>
                        </div>
                        <div></div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}