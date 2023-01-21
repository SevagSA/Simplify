import './App.css';
import Sidebar from './components/Sidebar/SidebarComponent';
import DashboardCard from './components/DashboardCard/DashboardCard';
import ExpensesCard from './components/ExpensesCard/ExpensesCard';
import MonthlyPayments from './components/MonthlyPayments/MonthlyPayments';
import {LatestSpendings} from './components/LatestSpendings/LatestSpendings'
import DataGraph from './components/DataGraph/DataGraph';
import { ScheduledPayments } from './components/ScheduledPayments/ScheduledPayments';

function App(){
  return (
    <div className="App">
      <ScheduledPayments/>
    </div>
  );
}

export default App;
