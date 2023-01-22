import { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import './AddCards.css';

function AddCard(props){
    return (
        <Link to="/addcard">Add Card</Link>
    );
}

function EditCard(props){
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
            <Button>Edit Card</Button>
            <Button>Delete Card</Button>
        </Form>
    );
}

export {AddCard, EditCard}