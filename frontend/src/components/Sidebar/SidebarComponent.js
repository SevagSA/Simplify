import { Component } from "react";
import userPicture from "../../images/user-picture.jpg";
import "../css/global.css";
import "./SidebarComponent.css";
import { BrowserRouter, Link } from 'react-router-dom';

export default class Sidebar extends Component{
  render(){
    return (
      <div className="box-shadow border-radius centered-container side-menu">
        <h1>$implify</h1>

        <div style={{height:'10vh'}}></div>

        <img className="user-picture mb-2" src={userPicture}/>
        <h2>Welcome back,</h2>
        <h6>John Doe</h6>

        <div style={{height:'10vh'}}></div>

        <h1>$9,000.00</h1>
        <h2>Monthly budget</h2>
      </div>
    );
  }
}