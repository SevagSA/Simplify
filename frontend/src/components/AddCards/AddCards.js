import { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import './AddCards.css';

function AddCards(props){
    return (
        <Form className="form">
            <FormGroup>
                <Label for="availBal">Available Balance</Label>
                <Input id="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
            </FormGroup>
            <FormGroup>
                <Label for="accType">Account Type</Label>
                <Input type="select" name="accType" id="accType" required>
                    <option>Debit</option>
                    <option>Saving</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="cardNum">Card Number</Label>
                <Input id="cardNum" minLength="19" maxLength="19" required placeholder='XXXX XXXX XXXX XXXX'/>
            </FormGroup>
        <Button>Add Card</Button>
        </Form>
    );
}

export {AddCards}