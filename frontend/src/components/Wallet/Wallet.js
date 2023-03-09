import "../css/global.css";
import "./Wallet.css";
import DataGraph from "../DataGraph/DataGraph";
import { LatestSpendings } from "../../components/LatestSpendings/LatestSpendings"


export default function Wallet({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Wallet</h1>
            </div>
            <div className="mr-8 ml-8">
                <DataGraph card={card}/>
                <div className="height-2"></div>
                <p>Note: Not all expenses have alternatives</p>
                <div className="height-2"></div>
                <div id="wallet-expenses-container">
                    <div id="wallet-expenses" className="spaced-container">
                        <LatestSpendings title="Current Expenses"/>
                        <div id="dashboard-small-divider" className="height-6 display-none"></div>
                        <LatestSpendings title="Alternative Suggestions"/>
                        <div id="dashboard-small-divider" className="height-6 display-none"></div>
                        <LatestSpendings title="Potential Savings"/>
                        <div id="dashboard-small-divider" className="height-6 display-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}