import './CardForm.css'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';


function editCard(e){
    e.preventDefault();
    fetch(`/transactions/cards/${e.target.cardId.value}/`, {
            method: 'PATCH',
            body: JSON.stringify({
                card_balance:e.target.availBal.value,
                card_type:e.target.accType.value,
            }),
            headers: {
                "Content-Type": "application/json",
                'X-CSRFToken':'habibi',
            },
        }
    )
    .then(response => response.json())
    .then(json =>console.log(json));
    window.location.reload(true);
}

function CardForm(card){
    return (
        <div>
            <Form onSubmit={editCard} className="form">
            <FormGroup>
                    <Label for="availBal">Available balance</Label>
                    <Input id="availBal" name="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
                    <Input name="cardId" value={card.id} hidden/>
                </FormGroup>
                <FormGroup>
                    <Label for="accType">Account type</Label>
                    <Input type="select" name="accType" id="accType" required>
                        <option>Debit</option>
                        <option>Credit</option>
                    </Input>
                </FormGroup>
                <div className="flex-center width-full">
                    <Button className="primary-button" name='editCard'>Edit Card</Button>
                </div>  
            </Form>
        </div>
    );
}

export default CardForm;