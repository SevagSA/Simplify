import { useNavigate } from "react-router-dom";
import './CardForm.css'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';


function CreateCard(e){
    e.preventDefault();
    fetch(`/transactions/cards/`, {
            method: 'POST',
            body: JSON.stringify({
                card_balance:e.target.availBal.value,
                card_type:e.target.accType.value,
                card_number:e.target.cardNum.value,
                member:1
            }),
            headers: {
                "Content-Type": "application/json",
                'X-CSRFToken':'habibi',
            },
        }
    )
    .then(response => response.json())
    .then(json => console.log(json));
    window.location.reload(true);
}

function CardForm(card){
    return (
        <div>
            
        </div>
    );
}

export default CardForm;