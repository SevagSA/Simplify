// import { Component } from "react";
import "./Transactions.css";

// Child-Components
import { TransactionSummary } from "../TransactionSummary/TransactionSummary";
import DashboardCard from "../DashboardCard/DashboardCard";
import {Tips} from "../Tips/Tips";
import {Link} from 'react-router-dom';

export default function Transactions({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Wallet</h1>
            </div>
            <div>
                <div className='inline-left width-half'>
                    <div className="column-container">
                        <DashboardCard />
                    </div>
                </div>
                <div className='inline-left width-half'>
                    <div className="column-container">
                        <Tips />
                    </div>
                </div>
            </div>
            <div style={{height:'6vh'}}></div>
            <TransactionSummary />
        </div>
    );
}