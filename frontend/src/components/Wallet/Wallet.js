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
        <div className="mr-2 ml-2">
            <div className="page-title-container">
                <h1 className="page-title text-black">Wallet</h1>
            </div>
            <DataGraph card={card}/>
            <div style={{height:'6vh'}}></div>
            <div className='spaced-container'>
                <LatestSpendings/>
                <LatestSpendings/>
                <LatestSpendings/>
            </div>
        </div>
    );
}