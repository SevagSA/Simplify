import './TransactionsForm.css'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

function CreateTransaction(e){
    e.preventDefault();
    fetch(`/transactions/expenses/`, {
        method: 'POST',
            body: JSON.stringify({
                source:e.target.availBal.value,
                category:e.target.accType.value,
                date_of_expense:e.target.cardNum.value,
                frequence:e.target.fre.value,
                amount:e.target.tranAmnt.value,
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
  
function TransactionsForm(){
    return (
        <div>
            <div className="page-title">
                <h1 className="title">Add transaction</h1>
            </div>
            <div className='losingtheplot'>
                <Form onSubmit={CreateTransaction} className="form">
                    <FormGroup>
                        <Label for="sourceVal">Transaction source</Label>
                        <Input id="sourceVal" type="text" placeholder='Source' required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select" name="accType" id="category" required>
                            <option>Food</option>
                            <option>Housing</option>
                            <option>Entertainement</option>
                            <option>Miscellaneous</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tranFreq">Frequency</Label>
                        <Input type="select" name="accType" id="tranFreq" required>
                            <option>One-time</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='tranDate'>Date of transaction</Label>
                        <Input type='date' id='tranDate' required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="tranAmnt">Amount</Label>
                        <Input id="tranAmnt" type="number" min="1" step=".01" placeholder='99.99' required/>
                    </FormGroup>
                    <Button className='somethingcooler wrtfbnbfdvc'>Add transaction</Button>
                </Form>
            </div>
        </div>
    );
}

export default TransactionsForm;