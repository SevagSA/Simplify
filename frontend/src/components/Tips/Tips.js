import { Component } from 'react';
import './Tips.css';
import '../css/global.css';

class Tips extends Component{
    constructor(props){
        super(props)
        this.state = {
            expenses: Array(5).fill("apple")
        }
    }

    renderTips(){
        var expenses = this.state.expenses.slice(0,5).map((item, i) => {
            return <AllTips key={i} value={item} />
        });
    
        return expenses;
    }

    render(){
        return (
        <div>
            <p className="bold-text text-black spaced-container mb-0">Tips<label className="float-right text-grey unbold-text">View All</label></p>
            <hr class="solid"></hr>
            <div>
                {this.renderTips()}
            </div>
        </div>
        );
    }
}

function AllTips(props){
    return (
        <div className='spaced-container tips-container'>
            <div>
                <div className="inline-left">
                    <div className="center-vertical">
                        <p className="no-paddmarg">
                            <label className='text-black bold-text text-s16'>Stop Coffee</label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="inline-left">
                <div className="center-vertical">
                    <p className="no-paddmarg text-s16">
                        <label className='pr-05 text-grey'>
                            Save $10.34
                        </label>
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="1vw" fill="gray" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg>
                </div>
            </div>
        </div>
    );
}

export {Tips, AllTips}