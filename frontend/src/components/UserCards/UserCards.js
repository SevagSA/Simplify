// import { Component } from "react";
import "./UserCards.css";

// Child-Components
import DashboardCard from "../DashboardCard/DashboardCard";
import { ScheduledPayments } from "../ScheduledPayments/ScheduledPayments";
import { EditCard, AddCard } from "../AddCards/AddCards";

export default function UserCards(){
    return(
        <div>
            <h1>Cards</h1>
            <div>
                <DashboardCard />
                <AddCard />
            </div>
            <div>
                <EditCard />
            </div>
            <div>
                <ScheduledPayments />
            </div>
        </div>
    );
}