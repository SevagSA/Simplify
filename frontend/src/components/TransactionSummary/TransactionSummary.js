import "../css/global.css";
import "./TransactionSummary.css";
import { Component } from "react";
import { Table } from "reactstrap";


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
            <div>
                <p className="bold-text text-black spaced-container mb-0">
                    Transactions Summary
                    <a className="float-right a-button" href="/addtransaction">Add Transactions</a>
                </p>
                <hr class="solid"></hr>
            
                <div className="summary-table">
                    <div className="inner-table">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Source</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Account</th>
                                    <th>Bank</th>
                                </tr>      
                            </thead>
                            <tbody>
                                {this.renderTransactions()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

function Transaction(props){
    console.log(props);
    return(
        <tr>
            <td>{props.value["source"]}</td>
            <td>{props.value["category"]}</td>
            <td>{props.value["date_of_expense"]}</td>
            <td>{props.value["amount"]}</td>
            <td>John Doe</td>
            <td>{
                ["RBC","TD","National Bank","BMO","Scotia"][Math.floor(Math.random() * 5)]
            }</td>
        </tr>
    )
}

export {TransactionSummary, Transaction}