import { Component } from "react";
import "./SidebarComponent.css";
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
                  <h3>John Doe</h3>
                </div>
              </div>

              <div className="monthly-budget full-width">
                <div>
                  <div className="full-width">
                    <h5>$9,000.00</h5>
                  </div>
                  <h3>Monthly budget</h3>
                </div>
              </div>

              <div className="menu-items full-width">
                <div>
                  <div className="full-width">
                    <h3>Dashboard</h3>
                  </div>
                  <h3>Investment tips</h3>
                  <h3>Transaction</h3>
                  <h3>Cards</h3>
                </div>
              </div>

              <div className="div-styling tip-of-the-day center-text">
                <div className="container-element">
                  <div className="full-width">
                    <h4 className="top-element">Tip of the day</h4>
                  </div>
                  <p className="bottom-element">Make your own coffee, don't buy it.</p>
                </div>
              </div>
            </div>
          );
    }
}