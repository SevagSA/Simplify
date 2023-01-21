import './App.css';
import Sidebar from './components/Sidebar/SidebarComponent';
import Dashboard from './components/Dashboard/Dashboard';

function App(){
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
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
