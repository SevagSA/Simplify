import "./Dashboard.css";
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import ExpensesCard from '../../components/ExpensesCard/ExpensesCard';
import {LatestSpendings} from '../../components/LatestSpendings/LatestSpendings'
import DataGraph from '../../components/DataGraph/DataGraph';
import { ScheduledPayments } from '../../components/ScheduledPayments/ScheduledPayments';
import PersonalGoal from '../../components/PersonalGoal/PersonalGoal';

export default function Dashboard({card}){
    return(
        <div>
            <div className="page-title-container">
                <h1 className="page-title text-black">Dashboard</h1>
            </div>
            <div>
                <div className='inline-left width-half'>
                    <div className="column-container">
                        <DashboardCard />
                        <div style={{height:'6vh'}}></div>
                        <PersonalGoal />
                        <div style={{height:'6vh'}}></div>
                        <LatestSpendings title="Latest Expenses"/>
                    </div>
                </div>
                <div className='inline-left width-half'>
                    <div className="column-container">
                        <DataGraph card={card}/>
                        <div style={{height:'6vh'}}></div>
                        <ExpensesCard />
                        <div style={{height:'6vh'}}></div>
                        <ScheduledPayments />
                    </div>
                </div>
            </div>
        </div>
    );
}