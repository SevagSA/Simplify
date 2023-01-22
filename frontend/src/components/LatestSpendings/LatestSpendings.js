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
        <div className='margin-top-specific2'>
            <h1 className="sub-title smth">Latest spendings</h1>
            <div>
                {this.renderExpenses()}
            </div>
        </div>
        );
    }
}

function Spendings(props){
    return (
        // <div className='resent-income'>
        //     <h5>{props.value}</h5>
        // </div>

        <div className='full-width12345asdf22'>
            <div className="account-card45 new-widthisgood2">
                
            </div>
            
            <div className="new-widthisgood23">
                <p className='gjdskfji'>Online store</p>
                <p className='gjdskfj'>May 23, 2021 - 10:12:34 PM</p>
            </div>
            
            <div className="new-widthisgood234">
                <p className='dfhgndgh'>-$10.22</p>
            </div>

            <p className="new-widthisgood236">
                <svg xmlns="http://www.w3.org/2000/svg"  className='dfhgndghi' fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
        </div>
    );
}

export {LatestSpendings, Spendings}