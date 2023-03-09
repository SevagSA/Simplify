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
import CardForm from "../CardForm/CardForm";
import { ScheduledPayments } from "../ScheduledPayments/ScheduledPayments";
import { EditCard, AddCard } from "../AddCards/AddCards";

export default function UserCards({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Cards</h1>
            </div>
            <div className="mr-8 ml-8 mb-3">
                <div className="width-full">
                    <a className="float-right a-button" href="/addcard">Add Card</a>
                </div>
                <div className="flex-center width-full">
                    <div className="height-20" style={{width:'25vw'}}>
                        <DashboardCard />
                    </div>
                </div>
                <div className="mt-15">
                    <div className='inline-left width-full'>
                        <div className="column-container">
                            <CardForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}