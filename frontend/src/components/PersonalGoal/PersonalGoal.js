import { Component } from "react";
import './PersonalGoal.css';

export default class PersonalGoal extends Component{
    // Total of all cards set for personal goal

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <h2>Personal Goal</h2>
                <p>$1000 / $2000</p>
                <progress value="50" max="100"> 32% </progress>
            </div>
        );

    }
}