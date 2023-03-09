import '../css/global.css';
import './PersonalGoal.css';
import { Component } from "react";


export default class PersonalGoal extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p className="mb-0">Personal goal <label className="float-right"><label className="text-black">$1000 /</label> $2000</label></p>
                <progress className="width-full" value="32" max="100"/>
            </div>
        );
    }
}