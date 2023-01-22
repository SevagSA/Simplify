import './App.css';
import { useEffect, useState } from 'react';

//Routers
// import { ReactDOM } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Sidebar
import Sidebar from './components/Sidebar/SidebarComponent';

// Pages
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';
import UserCards from './components/UserCards/UserCards';
import CardForm from './components/CardForm/CardForm';
import TranasctionsForm from './components/TransactionsForm/TransactionsForm';

var test = null;

function App(){
  const [card, setCard] = useState(null);

  useEffect(() => {
    document.addEventListener('cardChanged', function({ detail }) {
      setCard(detail);
    })
  })

  return (
    <BrowserRouter>
      <div cardChanged className="App background-color-class">
        <div className='top-banner full-width1234'></div>
        <div className='menu-items123 full-width123'>
          <div className='small-width123'>
            <Sidebar />
          </div>
          <div className='big-width123'>
            
              <Routes>
                  <Route path="/" element={null}></Route>
                  <Route path="/dashboard" element={<Dashboard
                    card={card}
                   />}></Route>
                  <Route path="/transactions" element={<Transactions />}></Route>
                  <Route path="/cards" element={<UserCards />}></Route>
                  <Route path="/addcard" element={<CardForm />}></Route>
                  <Route path="/addtransaction" element={<TranasctionsForm />}></Route>
                  
                  {/* <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />np
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} /> */}
                
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
