import { Component } from 'react';
import './DataGraph.css';
import {
    Card, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"

export default class DataGraph extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return (
          <div className="account-card account-card2">
            <div className="full-width123456">
              <div className="small-width123456">
                <h1 className="sub-title">Expenses statistics</h1>
              </div>
              <div className="big-width123456">
                <select className="title-card1234567" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            
            <div class="container-graph"></div>
          </div>
        );   
    }
}