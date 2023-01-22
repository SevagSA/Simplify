import './App.css';
import Sidebar from './components/Sidebar/SidebarComponent';
import Dashboard from './components/Dashboard/Dashboard';

function App(){
  return (
    <div className="App background-color-class">
      {/* <header className="App-header">
        
      </header> */}
      <div className='top-banner full-width1234'></div>
      <div className='menu-items123 full-width123'>
        <div className='small-width123'>
          <Sidebar />
        </div>
        <div className='big-width123'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
