import './CardForm.css'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

function CardForm(props){
    return (
        <div>
            <div className="page-title">
                <h1 className="title">Add card</h1>
            </div>
            <div className='losingtheplot'>
                <Form className="form">
                    <FormGroup>
                        <Label for="availBal">Available balance</Label>
                        <Input id="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="accType">Account type</Label>
                        <Input type="select" name="accType" id="accType" required>
                            <option>Debit</option>
                            <option>Saving</option>
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