import { Component } from "react";
import './TransactionSummary.css';
import { Table, Button } from "reactstrap";
import {Link} from 'react-router-dom';

class TransactionSummary extends Component{
    constructor(props){
        super(props);

        this.state={
            transactions: [],
        }
    }

    getAllTransactions(){
        fetch(`/transactions/expenses/card/${this.props.card.id}/`)
        .then(response => response.json())
        .then(data => this.setState({transactions:data}));
    }

    componentDidUpdate(prevProps) {
        if (this.props.card.id != prevProps.card.id){
            this.getAllTransactions();
        } 
    }

    renderTransactions(){
        console.log(this.state)
        var transactions = this.state.transactions.slice().map((item, i) => {
            return <Transaction key={i} value={item} />
        });
    
        return transactions;
    }

    render(){
        return(
            <div className="scrollabletable special-table">
                <Table striped bordered hover special-table>
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Account</th>
                            {/* <th>Operations</th> */}
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
            <td>John Doe</td>
            {/* <td><Button className='somethingcooler7' variant="dark">Delete</Button></td> */}
        </tr>
    )
}

export {TransactionSummary, Transaction}