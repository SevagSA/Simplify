import './App.css';
import Sidebar from './components/Sidebar/SidebarComponent';
import DashboardCard from './components/DashboardCard/DashboardCard';
import ExpensesCard from './components/ExpensesCard/ExpensesCard';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <DashboardCard />
      <ExpensesCard />
    </div>
  );
}

export default App;
