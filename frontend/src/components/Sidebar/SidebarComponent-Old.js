import { Component } from "react";
import "./SidebarComponent.css";
import { BrowserRouter, Link } from 'react-router-dom';
//import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';

export default class Sidebar extends Component{
    render(){
        return (
            <div className="div-styling side-menu container-element">
              <div className="simplify">
                <h1>$implify</h1>
              </div>

              <div className="user-element">
                <div>
                  <div className="full-width center-element">
                    <div className="width-4"></div>
                    <div className="user-picture"></div>
                    <div className="width-4"></div>
                  </div>
                  <h2>Welcome back</h2>
                  <h6>John Doe</h6>
                </div>
              </div>

              <div className="monthly-budget full-width">
                <div>
                  <div className="full-width">
                    <h1 className="size-24">$9,000.00</h1>
                  </div>
                  <h2>Monthly budget</h2>
                </div>
              </div>

              <div className="menu-items full-width">
                <div>
                  <div className="small-width center-element">
                    <div className="width-5"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                    </svg>
                  </div>
                  <div className="small-width center-element">
                    <div className="width-5"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                    </svg>
                  </div>
                  <div className="small-width center-element">
                    <div className="width-5"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                    </svg>
                  </div>
                  <div className="small-width center-element">
                    <div className="width-5"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
                    </svg>
                  </div>
                </div>
                <div className="center-left">
                  <div className="full-width small-margin-top">
                    <h2><Link to="/dashboard" style={{ textDecoration: 'none' }} className="sidemenu-links">Dashboard</Link></h2>
                  </div>
                  <div className="full-width small-margin-top">
                    <h2><Link to="/wallet" style={{ textDecoration: 'none' }} className="sidemenu-links">Wallet</Link></h2>
                  </div>
                  <div className="full-width small-margin-top">
                    <h2><Link to="/transactions" style={{ textDecoration: 'none' }} className="sidemenu-links">Transactions</Link></h2>
                  </div>
                  <div className="full-width small-margin-top">
                    <h2><Link to="/cards" style={{ textDecoration: 'none' }} className="sidemenu-links">Cards</Link></h2>
                  </div>
                </div>
              </div>

              <div className="div-styling tip-of-the-day center-text">
                <div className="container-element">
                  <div className="full-width-small">
                    <h6 className="top-element size-18 margin-top-small">Tip of the day</h6>
                  </div>
                  <p className="bottom-element">Instead of buying your coffee, make it at home.</p>
                </div>
              </div>
            </div>
          );
    }
}