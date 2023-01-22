import './CardForm.css'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';


function createCard(e){
    e.preventDefault();

    fetch(`/transactions/cards/`, {
            method: 'POST',
            body: JSON.stringify({
                card_balance:e.target.availBal.value,
                card_type:e.target.accType.value,
                card_numper:e.target.cardNum.value,
            }),
            headers: {
                "Content-Type": "application/json",
                // Add CSRF token
            },
        }
    )
    .then(response => response.json())
    .then(json =>console.log(json));
}

function CardForm(card){
    return (
        <div>
            <div className="page-title">
                <h1 className="title">Add card</h1>
            </div>
            <div className='losingtheplot'>
                <Form onSubmit={createCard} className="form">
                    <FormGroup>
                        <Label for="availBal">Available balance</Label>
                        <Input id="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
                        <Input name="cardId" value={card.id} hidden/>
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