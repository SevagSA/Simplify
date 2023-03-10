import "../css/global.css";
import "./HamburgerMenu.css";
import React from "react";
import { slide as Menu } from "react-burger-menu";


export default function HamburgerMenu(){
    return (
        <div id="hamburger-menu">
            <Menu>
                <a className="menu-item" href="/dashboard">
                    Dashboard
                </a>
                <a className="menu-item" href="/wallet">
                    Wallet
                </a>
                <a className="menu-item" href="/transactions">
                    Transactions
                </a>
                <a className="menu-item" href="/cards">
                    Cards
                </a>
            </Menu>
        </div>
    );
}