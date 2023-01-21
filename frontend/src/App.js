import './App.css';

//Routers
// import { ReactDOM } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Sidebar
import Sidebar from './components/Sidebar/SidebarComponent';

// Pages
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';

function App(){
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        {/* <Dashboard /> */}

        <BrowserRouter>
          <Routes>
              <Route path="/" element={null}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/transactions" element={<Transactions />}></Route>
              {/* <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />np
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
