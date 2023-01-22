import { Component } from "react";
import './PersonalGoal.css';

export default class PersonalGoal extends Component{
    // Total of all cards set for personal goal

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="margin-top-specific"  >
                <div className='full-width123456 something123'>
                    <div className='small-width123456 something123'>
                        <h2 className="something123">Personal goal</h2>
                    </div>
                    <div className='big-width123456789 something123'>
                        <h2 className="align-right123 something123">$1000 / $2000</h2>
                    </div>
                </div>
                <progress className="progress-self" value="50" max="100"> 32% </progress>
            </div>
        );

    }
}