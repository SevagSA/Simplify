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
            <div className="page-title">
                <h1 className="title">Add card</h1>
            </div>
            <div className='losingtheplot'>
                <Form onSubmit={CreateCard} className="form">
                    <FormGroup>
                        <Label for="availBal">Available balance</Label>
                        <Input id="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
                        <Input name="cardId" value={card.id} hidden/>
                        <Input name="memberId" value={card.member} hidden/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="accType">Account type</Label>
                        <Input type="select" name="accType" id="accType" required>
                            <option>Debit</option>
                            <option>Credit</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cardNum">Card number</Label>
                        <Input id="cardNum" minLength="19" maxLength="19" required placeholder='XXXX XXXX XXXX XXXX'/>
                    </FormGroup>
                    <Button className='somethingcooler wrtfbnbfdvc'>Add card</Button>
                </Form>
            </div>
        </div>
    );
}

export default CardForm;