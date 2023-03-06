import { Component } from "react";
import './ScheduledPayments.css';
import {
    Card, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"

class ScheduledPayments extends Component{
    constructor(props){
        super(props); 
        this.state = {
            payments: Array(5).fill('orange'),
        }
    }

    renderPayments(){
        var expenses = this.state.payments.slice(0,3).map((item, i) => {
            return <Payment key={i} value={item} />
        });
    
        return expenses;
    }

    render(){
        return(
            <div className="margin-top-specific4">
                <h1 className="sub-title">Scheduled payments</h1>
                <div className="d-flex p-2 flex-row">
                    {this.renderPayments()}
                </div>
            </div>
        );
    }
}

function Payment(props){
    return (
    <div>
        
    </div>
    );
}

export {ScheduledPayments, Payment}