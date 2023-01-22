import { Component } from "react";
import "./DashboardCard.css";
import {
    Card, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"

export default class DashboardCard extends Component{
    render(){
        return (
            <div className="account-card">
                <div className='full-width123456'>
                    <div className='small-width123456'>
                        <h1 className="title-card123">Available balance</h1>
                    </div>
                    <div className='big-width123456'>
                        <h1 className="title-card123456">Credit</h1>
                    </div>
                </div>
                
                <p className="text-cardaccount">$ 14,000.00</p>
                <h1 className="title-card1234">**** 1234</h1>
            </div>
        );
        
    }
}