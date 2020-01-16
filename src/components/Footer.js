import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";


//const mainlogo = "./assests/mainlogo.png";

function Footer(){
    return(
    <footer>
        <div className="container-fluid row justify-content-center mt-5 mr-0 ml-0 creat-tab">
            <div  className="col-sm-12 col-md-8">
                <h4>
                    Get started by creating an account with MoniePay today
                </h4>
            </div>
            <div className="col-sm-12 col-md-3">
                <button className="btn btn-primary acc">
                    CREATE AN ACCOUNT
                </button>
            </div>
        </div>

                    
    <div className="footer">

        <div className="inner-footer">
        <div className="footer-items">
            <h1>
                MONIE-PAY
            </h1>
            <p>
            Building the next generation payment 
                        System for Africa and the world. 
                        Building the next generation payment 
                        System for Africa and the world.
            </p>
        </div>

        <div className="footer-items">
            <h2>
                INFORMATION
            </h2>
            <div className="border"></div>
            <ul>
                <a href="/"><li>Contact Us</li></a>
                <a href="/"><li>Support</li></a>
                <NavLink to={"/Privacy"}><li>Security Policy</li></NavLink>
                <NavLink to={"/Terms"}><li>Terms & Conditions</li></NavLink>
            </ul>
        </div>

        <div className="footer-items">
            <h2>
                USEFUL LINKS
            </h2>
            <div className="border"></div>
            <ul>
            <NavLink to={"/About"}><li>About Us</li></NavLink>
                <NavLink to={"/Blog"}><li>Blog</li></NavLink>
                <a href="/"><li>Create Free Account</li></a>
                <a href="/"><li>Download App</li></a>
            </ul>
        </div>

        <div className="footer-items">
            <h2>
                LOCATION
            </h2>
            <div className="border"></div>
            <ul>
                <li><i className="fa fa-map-marker aria-hidden="true></i>126 Joel Shitu Street,Alausa Ikeja,
                Lagos,Nigeria.</li>
                <li><i className="fa fa-map-phone aria-hidden="true></i>1234567890</li>
                <li><i className="fa fa-map-envelope aria-hidden="true></i>support@moniepay.com</li>
            </ul>

            <div className="social-media">
                <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    <div className="footer-bottom ">
        Copyright &copy; MoniePay 2020. All rights reserved.
    </div>
</div>

    </footer>
    )
}

export default Footer;