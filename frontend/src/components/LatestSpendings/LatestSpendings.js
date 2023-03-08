import { Component } from 'react';
import './LatestSpendings.css';
import '../css/global.css';

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
            <p className="bold-text text-black spaced-container mb-0">Latest spendings<label className="float-right text-grey unbold-text">View All</label></p>
            <hr class="solid"></hr>
            <div>
                {this.renderExpenses()}
            </div>
        </div>
        );
    }
}

function Spendings(props){
    return (
        <div className='spaced-container' style={{height:'8vh', marginTop:'1vh'}}>
            <div>
                <div className="inline-left">
                    <div className="center-vertical height-8">
                        <svg width="5vh" height="5vh" fill="black" viewBox="0 0 640 512"><path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>
                    </div>
                </div>
                <div className="inline-left">
                    <div className="center-vertical height-8">
                        <p className="no-paddmarg">
                            <label className='text-black bold-text text-s16' style={{paddingRight:'5vw'}}>Super C</label>
                            <br/>June 3, 2022 at 8:12 PM
                        </p>
                    </div>
                </div>
            </div>
            <div className="inline-left">
                <div className="center-vertical height-8">
                    <p className="no-paddmarg text-s16">
                        -$10.34
                        <svg className="margin-auto rotate-90" xmlns="http://www.w3.org/2000/svg" width="1vw" height="1vw" fill="gray" viewBox="0 0 16 16"><path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>
                    </p>
                </div>
            </div>
        </div>
    );
}

export {LatestSpendings, Spendings}