import './App.css';
import Sidebar from './components/Sidebar/SidebarComponent';
import DashboardCard from './components/DashboardCard/DashboardCard';
import ExpensesCard from './components/ExpensesCard/ExpensesCard';
import MonthlyPayments from './components/MonthlyPayments/ExpensesCard/MonthlyPayments';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <DashboardCard />
      <ExpensesCard />
      <MonthlyPayments />
    </div>
  );
}

export default App;
