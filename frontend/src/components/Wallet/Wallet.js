// import { Component } from "react";
import "./Wallet.css";

// Child-Components
import { TransactionSummary } from "../TransactionSummary/TransactionSummary";
import DashboardCard from "../DashboardCard/DashboardCard";
import DataGraph from "../DataGraph/DataGraph";
import {LatestSpendings} from '../../components/LatestSpendings/LatestSpendings'
import {Link} from 'react-router-dom';

export default function Wallet({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Wallet</h1>
            </div>
            <div className="mr-8 ml-8">
                <DataGraph card={card}/>
                <div style={{height:'2vh'}}></div>
                <p>Note: Not all expenses have alternatives</p>
                <div style={{height:'2vh'}}></div>
                <div className='spaced-container'>
                    <LatestSpendings title="Current Expenses"/>
                    <LatestSpendings title="Alternative Suggestions"/>
                    <LatestSpendings title="Potential Savings"/>
                </div>
            </div>
        </div>
    );
}