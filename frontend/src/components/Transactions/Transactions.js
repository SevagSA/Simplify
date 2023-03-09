import "./Transactions.css";

// Child-Components
import { TransactionSummary } from "../TransactionSummary/TransactionSummary";
import DashboardCard from "../DashboardCard/DashboardCard";
import {Tips} from "../Tips/Tips";

export default function Transactions({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Transactions</h1>
            </div>
            <div className="height-20">
                <div className='inline-left width-half'>
                    <div className="column-container">
                        <DashboardCard />
                    </div>
                </div>
                <div className='inline-left width-half'>
                    <div className="column-container">
                        <Tips />
                    </div>
                </div>
            </div>
            <div className="mr-8 ml-8 mt-10 mb-3">
                <TransactionSummary card={card}/>
            </div>
        </div>
    );
}