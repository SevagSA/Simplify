import { Component } from 'react';
import './LatestSpendings.css';

class LatestSpendings extends Component{
    constructor(props){
        super(props)
        this.state = {
            expenses: Array(5).fill("apple")
        }
    }

    renderExpenses(){
        var expenses = this.state.expenses.slice(0,3).map((item, i) => {
            return <Spendings key={i} value={item} />
        });
    
        return expenses;
    }

    render(){
        return (
        <div>
            <h5>Latest Spendings</h5>
            <div className="d-flex p-2 flex-column">
                {this.renderExpenses()}
            </div>
        </div>
        );
    }
}

function Spendings(props){
    return (
        <div>
            <h5>{props.value}</h5>
        </div>
    );
}

export {LatestSpendings, Spendings}