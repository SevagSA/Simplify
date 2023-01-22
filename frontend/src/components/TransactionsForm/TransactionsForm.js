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
            <div className="page-title">
                <h1 className="title">Add transactions</h1>
            </div>
            <div className='losingtheplot'>
                <Form className="form">
                    <FormGroup>
                        <Label for="sourceVal">Transaction Source</Label>
                        <Input id="sourceVal" type="text" placeholder='Source' required/>
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
                        <Label for="tranAmnt">Amount</Label>
                        <Input id="tranAmnt" type="number" min="1" step=".01" placeholder='99.99' required/>
                    </FormGroup>
                    <Button className='somethingcooler wrtfbnbfdvc'>Add Transaction</Button>
                </Form>
            </div>
        </div>
    );
}

export default TransactionsForm;