import { Component } from "react";
import userPicture from "../../images/user-picture.jpg";
import "../css/global.css";
import "./SidebarComponent.css";
import { BrowserRouter, Link } from 'react-router-dom';

export default class Sidebar extends Component{
  render(){
    return (
      <div className="box-shadow border-radius side-menu">
        <div className="centered-container height-10 pt-5">
          <h1>$implify</h1>
        </div>

        <div style={{height:'10vh'}}></div>

        <div className="user-element">
          <div className="centered-container">
            <img className="user-picture" src={userPicture}/>
            <h2>Welcome back,</h2>
            <h6>John Doe</h6>
          </div>
        </div>
      </div>
    );
  }
}