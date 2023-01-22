import './TransactionsForm.css'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

function TransactionsForm(props){
    return (
        <div>
            <h1>Add Card</h1>
            <Form className="form">
                <FormGroup>
                    <Label for="sourceVal">Transaction Source</Label>
                    <Input id="sourceVal" type="text" placeholder='SOURCE' required/>
                </FormGroup>
                <FormGroup>
                    <Label for="accType">Category</Label>
                    <Input type="select" name="accType" id="accType" required>
                        <option>Food</option>
                        <option>Housing</option>
                        <option>Entertainement</option>
                        <option>Miscellaneous</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="tranFreq">Frequency</Label>
                    <Input type="select" name="accType" id="tranFreq" required>
                        <option>One-Time</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Bi-Weekly</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for='tranDate'>Date of Transaction</Label>
                    <Input type='date' id='tranDate' required/>
                </FormGroup>
                <FormGroup>
                    <Label for='isRecurring'>Recurring Transaction?</Label>
                    <Input type='checkbox' id='isRecurring' required/>
                </FormGroup>
                <FormGroup>
                    <Label for="tranAmnt">Amount</Label>
                    <Input id="tranAmnt" type="number" min="1" step=".01" placeholder='99.99' required/>
                </FormGroup>
                <Button>Add Card</Button>
            </Form>
        </div>
    );
}

export default TransactionsForm;