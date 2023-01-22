import { Component } from "react";
import './TransactionSummary.css';
import { Table, Button } from "reactstrap";

class TransactionSummary extends Component{
    constructor(props){
        super(props);

        this.state={
            transactions: Array(30).fill({
                "card":"1",
                "source":"2",
                "amount":"3",
                "frequency":"4",
                "date_of_expense":"5",
                "is_income":"6",
                "category":"7",
            }),
        }
    }

    renderTransactions(){
        var transactions = this.state.transactions.slice().map((item, i) => {
            return <Transaction key={i} value={item} />
        });
    
        return transactions;
    }

    render(){
        return(
            <div>
                <Table striped bordered hover>
                <Button variant="dark">Add Transaction</Button>
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Account</th>
                        </tr>      
                    </thead>
                    <tbody>
                        {this.renderTransactions()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

function Transaction(props){
    return(
        <tr>
            <td>{props.value['source']}</td>
            <td>{props.value['category']}</td>
            <td>{props.value['date_of_expense']}</td>
            <td>{props.value['amount']}</td>
            <td>{props.value['card']}</td>
        </tr>
    )
}

export {TransactionSummary, Transaction}