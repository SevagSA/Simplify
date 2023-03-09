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
                source:e.target.sourceVal.value,
                category:e.target.category.value,
                date_of_expense:e.target.tranDate.value,
                frequence:e.target.tranFreq.value,
                amount:e.target.tranAmnt.value,
                is_income:e.target.isIncome.value,
                alternative_amount:0,
                alternative_name:"",
                card:1,
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
  
function TransactionsForm(card){
    return (
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Add Transaction</h1>
            </div>
            <div className="mr-8 ml-8 mb-3 mt-10">
                <div className="flex-center width-full">
                    <div className="height-20" style={{width:'25vw'}}>
                        <Form onSubmit={CreateTransaction} className="form">
                            <FormGroup>
                                <Label for="sourceVal">Transaction source</Label>
                                <Input id="sourceVal" type="text" placeholder='Source' required/>
                                <Input name="cardId" value={card.id} hidden/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">Category</Label>
                                <Input type="select" name="category" id="category">
                                    <option>Food</option>
                                    <option>Housing</option>
                                    <option>Entertainement</option>
                                    <option>Miscellaneous</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="tranFreq">Frequency</Label>
                                <Input type="select" name="tranFreq" id="tranFreq" required>
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
                            <FormGroup>
                                <Label for='isIncome'>Is this income?&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                                <Input type='checkbox' id='isIncome'/>
                            </FormGroup>
                            <div className="flex-center width-full">
                                <Button className='primary-button'>Add transaction</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionsForm;