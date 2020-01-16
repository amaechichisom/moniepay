import React from "react";
import "./Header.css";
import mainlogo from "../assests/mainlogo.png";
import {NavLink, BrowserRouter as Router} from "react-router-dom"
//const mainlogo = "./assests/mainlogo.png";

function Header(){
    return(
    <header id="header" className="container-fluid sticky-top tops" >
    <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/"><img src={mainlogo}  alt="moniepay logo" width="120px" height="30px"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            
        </button>
        

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                
                <NavLink className="nav-link" to={"/"}>    
                    Home
                </NavLink>
                
                 
                </li>
                    
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/Agent"}>    
                        Individual
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/Agent"}>    
                        Business
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to={"/OnlineUser"}>    
                        Online
                    </NavLink> 
                </li>
            </ul>
            <button className="btn signed btn-primary my-2 my-sm-0 signin " href="#">Login</button>
            
            <button className="btn created btn-primary my-2 my-sm-0 create">Create Account</button>
        </div>
    
    </nav> 
    

    
</header>


    )
}

export default Header;