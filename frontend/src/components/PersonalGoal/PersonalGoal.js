import { Component } from "react";
import '../css/global.css';
import './PersonalGoal.css';

export default class PersonalGoal extends Component{
    // Total of all cards set for personal goal

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <p>Personal goal <label className="float-right">$1000 / $2000</label></p>
                <progress className="width-full" value="32" max="100"/>
            </div>
        );
    }
}