import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="fix">
            <nav className="header navbar navbar-expand-lg">
                <Link className="navbar-brand logo" to="/">
                    HairVise
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="ml-auto collapse navbar-collapse navbar-light" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto interdomain">
                        <Link className="nav-item nav-link element subdomain" to="/home">
                            Home
                        </Link>
                        <Link  className="nav-item nav-link element subdomain" to="/quiz">
                            Take A Quiz  
                        </Link>
                        <Link className="nav-item nav-link element subdomain" to="/shop">
                            Shop 
                        </Link>
                        <Link className="nav-item nav-link element subdomain" to="#about">
                            About
                        </Link>
                        <Link  className="nav-item nav-link element subdomain" to="/chat">
                            Chatbot 
                        </Link>
                        <Link className="nav-item nav-link element subdomain" to="/profile">
                            Profile 
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
