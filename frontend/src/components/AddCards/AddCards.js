import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import './AddCards.css';

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

function AddCard({card}){
    {console.log(card)}
    return (
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Add Card</h1>
            </div>
            <div className="mr-8 ml-8 mb-3 mt-15">
                <div className="flex-center width-full">
                    <div className="height-20" style={{width:'25vw'}}>
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
                            <div className="flex-center width-full">
                                <Button className='primary-button'>Add card</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default AddCard