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
            <div>
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
        <div className="scheduledCard margin-left3">
            <h1 className="title-card123 margin-top-custom">$11.99/m</h1>
            <div className="user-picture icon-picture2"></div>
            <h1 className="title-card1234789">Ps5 Game</h1>
        </div>
    </div>
    );
}

export {ScheduledPayments, Payment}