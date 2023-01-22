// import { Component } from "react";
import "./Transactions.css";

// Child-Components
import { TransactionSummary } from "../TransactionSummary/TransactionSummary";
import DashboardCard from "../DashboardCard/DashboardCard";
import {Link} from 'react-router-dom';

export default function Transactions(){
    return(
        <div>
            <div className="page-title">
                <h1 className="title">Transactions</h1>
            </div>
            <div className="add-button-style sizebutton34">
                <div className="reposition23">
                    <Link  className='add-button-style' to="/addtransaction">Add Transaction</Link>
                </div>
            </div>
            <div className="special-width">
                <DashboardCard />
                <div className="asdgsd"></div>
            </div>
            <div className="fdgkalsdjfae">
                <h1 className="sub-title2">Transactions summary</h1>
                <TransactionSummary />
            </div>
        </div>
    );
}