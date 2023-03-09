import "../css/global.css";
import "./Dashboard.css";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import ExpensesCard from "../../components/ExpensesCard/ExpensesCard";
import DataGraph from "../../components/DataGraph/DataGraph";
import PersonalGoal from "../../components/PersonalGoal/PersonalGoal";
import { ScheduledPayments } from "../../components/ScheduledPayments/ScheduledPayments";
import { LatestSpendings } from "../../components/LatestSpendings/LatestSpendings"


export default function Dashboard({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Dashboard</h1>
            </div>
            <div>
                <div id="dashboard-column-left" className="inline-left width-half">
                    <div className="column-container">
                        <DashboardCard />
                        <div className="height-6"></div>
                        <PersonalGoal />
                        <div className="height-6"></div>
                        <LatestSpendings title="Latest Expenses"/>
                    </div>
                </div>
                <div id="dashboard-small-divider" className="height-6 display-none"></div>
                <div id="dashboard-column-right" className="inline-left width-half">
                    <div className="column-container">
                        <DataGraph card={card}/>
                        <div className="height-6"></div>
                        <ExpensesCard />
                        <div className="height-6"></div>
                        <ScheduledPayments />
                    </div>
                </div>
                <div id="dashboard-small-divider" className="height-6 display-none"></div>
            </div>
        </div>
    );
}