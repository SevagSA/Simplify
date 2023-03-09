import "../css/global.css";
import "./ExpensesCard.css";
import { Component } from "react";


export default class ExpensesCard extends Component{
    render(){
        return (
            <div className="height-8">
                <div className="inline-left border-radius brdr expense-card-left">
                    <div className="inline-left width-half">
                        <div className="center-vertical height-8">
                            <svg className="margin-auto rotate-180" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vw" fill="green" viewBox="0 0 16 16">
                                <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="inline-left width-half">
                        <div className="center-vertical height-8">
                            <p className="no-paddmarg">Income <br/><label className="text-black bold-text text-s16">$ 1,000</label></p>
                        </div>
                    </div>
                </div>
                <div className="inline-left border-radius box-shadow expense-card-right">
                    <div className="inline-left width-half">
                        <div className="center-vertical height-8">
                            <svg className="margin-auto" xmlns="http://www.w3.org/2000/svg" width="3.5vw" height="3.5vw" fill="red" viewBox="0 0 16 16">
                                <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="inline-left width-half">
                        <div className="center-vertical height-8">
                            <p className="no-paddmarg">Spendings <br/><label className="text-black bold-text text-s16">$ 1,500</label></p>
                        </div>
                    </div>
                </div>
            </div>
        );   
    }
}