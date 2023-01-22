// import { Component } from "react";
import "./Transactions.css";

// Child-Components
import { TransactionSummary } from "../TransactionSummary/TransactionSummary";
import DashboardCard from "../DashboardCard/DashboardCard";

export default function Transactions(){
    return(
        <div>
            <h1>Transactions</h1>
            <div>
                <DashboardCard />
            </div>
            <div>
                <h2>Transactions Summary</h2>
                <TransactionSummary />
            </div>
        </div>
    );
}