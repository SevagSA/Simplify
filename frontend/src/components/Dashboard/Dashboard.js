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
            <h1>Dashboard</h1>
            <div>
                <DashboardCard />
                <ExpensesCard />
                <MonthlyPayments />
                <LatestSpendings />
                <DataGraph />
                <ScheduledPayments />
                <PersonalGoal />
            </div>
        </div>
    );
}