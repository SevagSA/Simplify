import "../css/global.css";
import "./Transactions.css";
import DashboardCard from "../DashboardCard/DashboardCard";
import { TransactionSummary } from "../TransactionSummary/TransactionSummary";
import { Tips } from "../Tips/Tips";


export default function Transactions({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Transactions</h1>
            </div>
            <div className="height-20">
                <div className="flex-center width-full">
                    <div id="transactions-card" className="height-20" style={{width:"25vw"}}>
                        <DashboardCard />
                    </div>
                </div>
            </div>
            <div className="mr-8 ml-8 mt-15">
                <TransactionSummary card={card}/>
            </div>
        </div>
    );
}