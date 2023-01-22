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
        <Link className='add-button-style' to="/addcard">Add card</Link>
    );
}

function editCard(card){
    // console.log(card);
    // fetch('/transactions/cards/')
    // .then(response => response.json())
    // .then(data =>setCards(data));
}

function deleteCard(){

}

function EditCard(card){
    {console.log(card)}

    return (
        <Form className="form">
            <FormGroup>
                <Label for="availBal">Available balance</Label>
                <Input id="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
            </FormGroup>
            <FormGroup>
                <Label for="accType">Account type</Label>
                <Input type="select" name="accType" id="accType" required>
                    <option>Debit</option>
                    <option>Saving</option>
                </Input>
            </FormGroup>
            <div className='marginsomethingcool'>
                <Button className='somethingcooler'>Edit card</Button>
                < br/>
                <Button className='somethingcooler'>Delete card</Button>
            </div>         
        </Form>
        
    );
}

export {AddCard, EditCard}