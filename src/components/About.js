import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg";
import person from "./chisom.jpg"
import "./About.css"
export const About = () => {
  const ProCard = {
    border: "unset !important"
  };
  return (
    <div>
      <Header />

      <div className="online-land jumbotron ">
        <div className="row justify-content-around ">
          <div className="col-sm-10">
            <h1 className="display-4 lnd-heading text-center ">
              Powering a new generation of businesses in Africa
            </h1>
          </div>

          <div className="col-sm-10 d-flex justify-content-center lnd-text ">
            <p className=" text-center" style={{ color: "#770770" }}>
              Moniepay ology company solving payments problems for ambitious
              businesses. Our mission is to help businesses in Africa become
              profitable, envied and loved.
            </p>
          </div>
        </div>
      </div>

      <div className=" row justify-content-around d-flex align-items-center">
        <div className="col-md-8 col-sm-12 justify-content-around ">
          <div
            className="card flex-md-row mb-4 box-shadow h-md-250 shadow-none border-0"
            id={ProCard}
          >
            <img
              className="col-md-6  d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{ width: "auto", height: "auto" }}
              src={logo}
              data-holder-rendered="true"
            />
            <div className="col-md-6">
              <strong
                className="d-inline-block mb-2 text-primary blog-topic"
                style={{ fontSize: "24px" }}
              >
                A growth engine for modern businesses in Africa
              </strong>
              <p className="card-text mb-auto w-75">
                MoniePay builds technology to help Africa's best businesses grow
                from new startips to market
                leaders launching new business models. MoniePay builds
                technology to help Africa's best businesses grow from new
                startips to market
                leaders launching new business models. MoniePay builds
                technology to help Africa's best businesses grow from new
                startips to market
                leaders launching new business models
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid row justify-content-around">
        <h1
          className="col-sm-12 text-center display-4"
          style={{ color: "#770770", fontWeight: "bold" }}
        >
          The Team
        </h1>
        <h6 className="col-sm-12 text-center">
          MoniePay builds technology to help Africa's best businesses grow from
          new startips to market
        </h6>
        <div className="col-md-12 row justify-content-around mt-4 team-section d-flex align-items-center" >
          <div className="col-md-3">
            <img src={person} alt="founder"  className="rounded-circle mx-auto d-block shadow" height="200px" width="200px"/>
            <h5 className="text-center">Gary Odeh</h5>
            <p className="text-center">Founder</p>
          </div>
          <div className="col-md-3">
            <img src={person} alt="founder"  className="rounded-circle mx-auto d-block shadow" height="200px" width="200px"/>
            <h5 className="text-center">Gary Odeh</h5>
            <p className="text-center">Founder</p>
          </div>
          <div className="col-md-3">
            <img src={person} alt="founder"  className="rounded-circle mx-auto d-block shadow" height="200px" width="200px"/>
            <h5 className="text-center">Gary Odeh</h5>
            <p className="text-center">Founder</p>
          </div>
          <div className="col-md-3">
            <img src={person} alt="founder"  className="rounded-circle mx-auto d-block shadow" height="200px" width="200px"/>
            <h5 className="text-center">Gary Odeh</h5>
            <p className="text-center">Founder</p>
          </div>

        </div>
        <div>
            <h1 className=" col-sm-12 text-center display-4 mt-5" style={{color:"#770770", fontWeight:"bold"}}>Our Value</h1>
            <h6 className="col-sm-12 text-center mb-5">
          MoniePay builds technology to help Africa's best businesses grow from
          new startips to market
        </h6>
        <div className="row container">
        <h2 className=" col-sm-12 col-md-8 display-5 mt-3" style={{color:"#770770", fontWeight:"bold"}}>
            Welcome to MoniePay</h2>
            <h6 className="col-sm-12 col-md-8 text-left">
          MoniePay builds technology to help Africa's best businesses grow from
          new startips to market.MoniePay builds technology to help Africa's best businesses grow from
          new startips to market.
        </h6>
        <h2 className=" col-sm-12 col-md-8 display-5 mt-3" style={{color:"#770770", fontWeight:"bold"}}>
            Welcome to MoniePay</h2>
            <h6 className="col-sm-12 col-md-8 text-left">
          MoniePay builds technology to help Africa's best businesses grow from
          new startips to market.MoniePay builds technology to help Africa's best businesses grow from
          new startips to market.
        </h6>
        <h2 className=" col-sm-12 col-md-8 display-5 mt-3" style={{color:"#770770", fontWeight:"bold"}}>
            Welcome to MoniePay</h2>
            <h6 className="col-sm-12 col-md-8 text-left">
          MoniePay builds technology to help Africa's best businesses grow from
          new startips to market.MoniePay builds technology to help Africa's best businesses grow from
          new startips to market.
        </h6>
        </div>
        </div>
      </div>
      
      <div className=" container justify-content-center mt-5">
        <h1 style={{color:"#5E5D5E", fontSize:"18px"}}>Try MoniePay Now</h1>
        <div className="row">
          <div className="col-md-6 display-4">
            <strong style={{color:"#770770",}} >Start Accepting Payments In Just 20 minutes!</strong>
          </div>
          <div className="col-md-6 d-flex  align-items-center ">
            <button className="btn btn-primary about-button align-self-center" style={{backgroundColor:"#770770", border:"unset", fontSize:"20px"}}>Create An Account!</button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default About;
