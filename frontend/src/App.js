import './App.css';
import { useEffect, useState } from 'react';
import bannerPicture from "./images/banner2-cropped.jpg";

//Routers
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Sidebar
import Sidebar from './components/Sidebar/SidebarComponent';

// Pages
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';
import UserCards from './components/UserCards/UserCards';
import CardForm from './components/CardForm/CardForm';
import Wallet from './components/Wallet/Wallet';
import TranasctionsForm from './components/TransactionsForm/TransactionsForm';

function App(){
  const [card, setCard] = useState({});

  useEffect(() => {
    document.addEventListener('cardChanged', function({ detail }) {
      setCard(detail);
    }, [])
  })

  return (
    <BrowserRouter>
      <div cardChanged className="">
        <img className='box-shadow top-banner' src={bannerPicture}/>
        <div className='flex-container'>
          <div className='inline-left sidebar-container'>
            <Sidebar />
          </div>
          <div className='inline-left main-container'>
              <Routes>
                  <Route path="/" element={null}></Route>
                  <Route path="/dashboard" element={<Dashboard card={card}/>}></Route>
                  <Route path="/wallet" element={<Wallet card={card}/>}></Route>
                  <Route path="/transactions" element={<Transactions card={card}/>}></Route>
                  <Route path="/cards" element={<UserCards card={card}/>}></Route>
                  <Route path="/addcard" element={<CardForm card={card}/>}></Route>
                  <Route path="/addtransaction" element={<TranasctionsForm card={card}/>}></Route>
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;