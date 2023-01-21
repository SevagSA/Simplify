import './App.css';
import Sidebar from './components/Sidebar/SidebarComponent';
import Dashboard from './components/Dashboard/Dashboard';

function App(){
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
