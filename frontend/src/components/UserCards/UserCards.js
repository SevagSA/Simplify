// import { Component } from "react";
import "./UserCards.css";

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

// Child-Components
import DashboardCard from "../DashboardCard/DashboardCard";
import { ScheduledPayments } from "../ScheduledPayments/ScheduledPayments";
import { EditCard, AddCard } from "../AddCards/AddCards";

export default function UserCards(card){
    return(
        <div>
            <div className="page-title">
                <h1 className="title">Cards</h1>
            </div>
            <div className="special-width">
                <div className="add-button-style sizebutton">
                    <div className="reposition">
                        <AddCard />
                    </div>
                </div>
                    <DashboardCard />
                <div className="asdgsd"></div>
                <EditCard />
            </div>
        </div>
    );
}