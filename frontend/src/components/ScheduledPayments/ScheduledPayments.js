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
        var expenses = this.state.payments.slice(0,5).map((item, i) => {
            return <Payment key={i} value={item} />
        });
    
        return expenses;
    }

    render(){
        return(
            <div>
                <h5>Scheduled Payments</h5>
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
        <Card>
            <CardBody>
                <CardTitle tag="h5">Sample Card title</CardTitle>
                <CardText>Sample Card Text to display!</CardText>
                <Button>Action Button</Button>
            </CardBody>
        </Card>
    </div>
    );
}

export {ScheduledPayments, Payment}