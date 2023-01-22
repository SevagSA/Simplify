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

function editCard(e){
    e.preventDefault();
    // console.log(e.target.accType.value)
    // console.log(e.target.availBal.value)
    // console.log(e.target.cardId.value)
    fetch(`/transactions/cards/${e.target.cardId.value}/`, {
            method: 'PATCH',
            body: JSON.stringify({
                card_balance:e.target.availBal.value,
                card_type:e.target.accType.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    .then(response => response.json())
    .then(json =>console.log(json));
    window.location.reload(true);
}

function deleteCard(card){
    fetch(`/transactions/cards/${card.id}/`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
// .then(response => response.json())
// .then(json =>console.log(json));
// window.location.reload(true);
}

function EditCard({card}){
    return (
        <div>
            <Form onSubmit={editCard} className="form">
                <FormGroup>
                    <Label for="availBal">Available balance</Label>
                    <Input id="availBal" name="availBal" type="number" min="1" step="any" placeholder='99.99' required/>
                    <Input name="cardId" value={card.id} hidden/>
                </FormGroup>
                <FormGroup>
                    <Label for="accType">Account type</Label>
                    <Input type="select" name="accType" id="accType" required>
                        <option>Debit</option>
                        <option>Credit</option>
                    </Input>
                </FormGroup>
                <div className='marginsomethingcool'>
                    <Button name='editCard' className='somethingcooler'>Edit Card</Button>
                </div>  
            </Form>
            <div>
                <Button name='deleteCard' onClick={deleteCard(card)} className='somethingcooler'>Delete Card</Button>
            </div>
            
        </div>
        
    );
}

export {AddCard, EditCard}