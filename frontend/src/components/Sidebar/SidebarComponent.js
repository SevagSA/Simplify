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
                    <div className="icon-picture"></div>
                  </div>
                  <div className="small-width center-element">
                    <div className="width-5"></div>
                    <div className="icon-picture"></div>
                  </div>
                  <div className="small-width center-element">
                    <div className="width-5"></div>
                    <div className="icon-picture"></div>
                  </div>
                  <div className="small-width center-element">
                    <div className="width-5"></div>
                    <div className="icon-picture"></div>
                  </div>
                </div>
                <div className="center-left">
                  <div className="full-width small-margin-top">
                    <h2><Link to="/dashboard" style={{ textDecoration: 'none' }} className="sidemenu-links">Dashboard</Link></h2>
                  </div>
                  <div className="full-width small-margin-top">
                    <h2><Link to="/investements" style={{ textDecoration: 'none' }} className="sidemenu-links">Investment Tips</Link></h2>
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