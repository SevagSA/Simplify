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
        <Link className='add-button-style' to="/addcard">Add Card</Link>
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
        <div>
            <Form className="form">
                <FormGroup>
                    <Label for="availBal">Available Balance</Label>
                    <Input id="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
                </FormGroup>
                <FormGroup>
                    <Label for="accType">Account Type</Label>
                    <Input type="select" name="accType" id="accType" required>
                        <option>Debit Card</option>
                        <option>Credit Card</option>
                    </Input>
                </FormGroup>
                <div className='marginsomethingcool'>
                    <Button name='editCard' onSubmit={editCard(card)} className='somethingcooler'>Edit Card</Button>
                </div>  
            </Form>
            <div>
                <Button name='deleteCard' onClick={deleteCard} className='somethingcooler'>Delete Card</Button>
            </div>
            
        </div>
        
    );
}

export {AddCard, EditCard}