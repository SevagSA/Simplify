import { Component } from "react";
import "./ExpensesCard.css";
import {
    Card, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"

export default class ExpensesCard extends Component{
    render(){
        return (
            <div className=''>
                <div className='half-card-left'>
                    <div className="half-left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="red" fill="currentColor" className="bi bi-chevron-up up-arrow-sizing" viewBox="0 0 16 16">
                            <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>
                    </div>
                    <div className="half-right">
                        <h2 className="no-paddmarg smaller-size">Income</h2>
                        <h4 className="something-cool no-paddmarg">$ 1,000</h4>
                    </div>
                </div>
                <div className='half-card-right'>
                    <div className="half-left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="green" fill="currentColor" className="bi bi-chevron-up up-arrow-sizing" viewBox="0 0 16 16">
                            <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>
                    </div>
                    <div className="half-right">
                        <h2 className="no-paddmarg smaller-size">Spendings</h2>
                        <h4 className="something-cool no-paddmarg">$ 1,200</h4>
                    </div>
                </div>
            </div>
        );   
    }
}