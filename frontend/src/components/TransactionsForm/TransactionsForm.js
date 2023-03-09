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
            hello there
        </div>
    );
}

export default TransactionsForm;