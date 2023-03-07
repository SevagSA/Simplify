// import { Component } from "react";
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
            <h1 className="page-title">Dashboard</h1>
            <div className=''>
                <div className='inline-left width-half column-container'>
                    <DashboardCard />
                    {/* <PersonalGoal />
                    <LatestSpendings /> */}
                </div>
                <div className='inline-left width-half column-container'>
                    {/* <DataGraph card={card}/>
                    <ExpensesCard />
                    <ScheduledPayments /> */}
                </div>
            </div>
        </div>
    );
}