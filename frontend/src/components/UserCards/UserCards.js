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

export default function UserCards(){
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
            </div>
            <div className='full-width12345asdf'>
                <div className='width-4012'>
                    <EditCard />
                </div>
                <div className='width-401'>
                    <h1 className="sub-title">Scheduled payments</h1>
                    <div className="d-flex p-2 flex-row">
                        <div className="asdfghjk">
                            <div className="scheduledCard margin-left3">
                                <h1 className="title-card123 margin-top-custom">$11.99/m</h1>
                                <div className="user-picture icon-picture2"></div>
                                <h1 className="title-card1234789">Ps5 Game</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className='full-width12345asdf2'>
                        <FormGroup className="new-widthisgood">
                            <Label for="availBal">Price</Label>
                            <Input id="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
                        </FormGroup>
                        
                        <FormGroup className="new-widthisgood">
                            <Label for="availBal">Name</Label>
                            <Input id="availBal" type="text"step="any" placeholder='Name' required/>
                        </FormGroup>
                        
                        <FormGroup className="new-widthisgood">
                            <Label for="availBal">Occurence</Label>
                            <Input id="availBal" type="text" step="any" placeholder='monthly' required/>
                        </FormGroup>
                    </div>
                    <Button className='somethingcooler margin346'>Save payment</Button>
                </div>
            </div>
        </div>
    );
}