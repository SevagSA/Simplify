// import { Component } from "react";
import "./Dashboard.css";
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import ExpensesCard from '../../components/ExpensesCard/ExpensesCard';
import MonthlyPayments from '../../components/MonthlyPayments/MonthlyPayments';
import {LatestSpendings} from '../../components/LatestSpendings/LatestSpendings'
import DataGraph from '../../components/DataGraph/DataGraph';
import { ScheduledPayments } from '../../components/ScheduledPayments/ScheduledPayments';
import PersonalGoal from '../../components/PersonalGoal/PersonalGoal';

export default function Dashboard(){
    return(
        <div>
            <div className="page-title">
                <h1 className="title">Dashboard</h1>
            </div>
            <div className='full-width12345'>
                <div className='width-40'>
                    <DashboardCard />
                    <PersonalGoal />
                    <ExpensesCard />
                    <LatestSpendings />
                </div>
                <div className='width-40'>
                    <DataGraph />
                    <ScheduledPayments />
                </div>
            </div>
        </div>
    );
}