// import { Component } from "react";
import "./Accounts.css";

// Child-Components
import DashboardCard from "../DashboardCard/DashboardCard";
import { ScheduledPayments } from "../ScheduledPayments/ScheduledPayments";
import { AddCards } from "../AddCards/AddCards";

export default function Accounts(){
    return(
        <div>
            <h1>Accounts</h1>
            <div>
                <DashboardCard />
            </div>
            <div>
                <AddCards />
            </div>
            <div>
                <ScheduledPayments />
            </div>
        </div>
    );
}