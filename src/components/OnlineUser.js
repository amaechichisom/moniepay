import React from "react";
import "./OnlineUser.css";
import logo from "./logo.svg";
import Header from "./Header"
import Footer from "./Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
const cardstuff = {
  width: "18rem"
};

function OnlineUser() {
  AOS.init()
  return (
    <div>
      <Header/>
      <div className="online-land jumbotron ">
        <div className="row justify-content-around">
          <div className="col-sm-10">
            <h1 className="display-4 lnd-heading " data-aos="fade-up"  data-aos-delay="800">
              MONIEPAY FOR ONLINE USERS
            </h1>
          </div>
          <div className="col-sm-10 text-left w-auto lnd-text" data-aos="fade-down"  data-aos-delay="1200">
            <p>
              Access MoniePay API to connect your website to accept payment for
              Fintech Solutions
            </p>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-sm-10 lnd-btn" data-aos="fade-down"  data-aos-delay="1500">
            <button className="btn creates btn-primary" >
              Read Documentations
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid row justify-content-around mx-0  px-0" data-aos="fade-down"  data-aos-delay="1600" >
        <div className="col-sm-8">
          <p className="solutions">MONIEPAY SOLUTIONS FOR ONLINE USERS</p>
        </div>
        <div className="col-sm-8 ">
          <p className="growing text-break">
            Growing your business is tough, but it can be easier with greater
            access to funding. At MoniePay opening doors wider for businesses
            like yours to receive funding, so you can reach new heights.
          </p>
        </div>
      </div>
      <div>
        <div className="container-fluid row justify-content-center">
          <div className="row col-sm-12 col-md-8 card-deck center-block justify-content-center" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="800">
            <div className="card col-sm-12 col-md-6 mt-5" style={cardstuff}>
              <img src={logo} className="card-img-top" alt="stuffs" />

              <div className="card-body">
                <h5 className="card-title">Making Payments with MoniePay</h5>
                <p className="card-text">
                  Growing your business is tough but it can be easier with great access to funding.
                </p>
                <a href="/" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
            <div className="card col-sm-12 col-md-6 mt-5 " style={cardstuff}>
              <img src={logo} className="card-img-top" alt="stuffs" />
              <div className="card-body">
                <h5 className="card-title">Making Payments with MoniePay</h5>
                <p className="card-text">
                  Growing your business is tough but it can be easier with great access to funding.
                </p>
                <a href="/" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* this is the second card deck */}

          <div className="row col-sm-12 col-md-8 card-deck justify-content-center"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="1000">
            <div className="card col-sm-12 col-md-6" style={cardstuff}>
              <img src={logo} className="card-img-top" alt="stuffs" />
              <div className="card-body">
                <h5 className="card-title">Making Payments with MoniePay</h5>
                <p className="card-text">
                  Growing your business is tough but it can be easier with great access to funding.
                </p>
                <a href="/" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
            <div className="card col-sm-12 col-md-6" style={cardstuff}>
              <img src={logo} className="card-img-top" alt="stuffs" />
              <div className="card-body">
                <h5 className="card-title">Making Payments with MoniePay</h5>
                <p className="card-text">
                  Growing your business is tough but it can be easier with great access to funding.
                </p>
                <a href="/" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Third card deck */}

          <div className="row col-sm-12 col-md-8 card-deck justify-content-center" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="1200">
            <div className="card col-sm-12 col-md-6" style={cardstuff}>
              <img src={logo} className="card-img-top" alt="stuffs" />
              <div className="card-body">
                <h5 className="card-title">Making Payments with MoniePay</h5>
                <p className="card-text">
                  Growing your business is tough but it can be easier with great access to funding.
                </p>
                <a href="/" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
            <div className="card col-sm-12 col-md-6" style={cardstuff}>
              <img src={logo} className="card-img-top" alt="stuffs" />
              <div className="card-body text-wrap">
                <h5 className="card-title">Making Payments with MoniePay</h5>
                <p className="card-text">
                  Growing your business is tough but it can be easier with great access to funding.
                </p>
                <a href="/" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="FAQ container-fluid row justify-content-center mt-3 mb-4">
        <div>
          <h4>FREQUENTLY ASKED QUESTIONS</h4>
        </div>
      </div>
      <div className="FAQ row justify-content-center">

      <div className="container mt-3">
        <div id="accordion" class="accordion">
          <div className="m-b-0">
              <div className="card-header collapsed shadow p-4 mb-4 bg-white" aria-expanded="true" data-toggle="collapse" data-patent="#accordion" href="#collapseOne"data-aos="fade-left"
                    data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="400" >
                <a href="/" className="card-title">
                  Why should you go cashless with MoniePay?
                </a>
                <FontAwesomeIcon icon={faPlus} className="float-right" aria-expanded="true" data-toggle="collapse" href="#minuscollapse" style={{color:"#770770"}} />
                {/* <FontAwesomeIcon icon={faMinus} className="float-right collapse" id="#minuscollapse" style={{color:"#770770"}} /> */}

              </div>
              <div class="card-block collapse " id="collapseOne">
                  <p style={{fontSize:"14px"}}>
                    LoremAmet magna eu commodo ullamco commodo magna aliquip. 
                    Est sunt non laboris reprehenderit officia elit consequat tempor ex enim dolor ea. 
                    Ad sit aliquip quis ut commodo enim occaecat excepteur in commodo deserunt consectetur. Cillum Lorem sint proident et adipisicing aute ut minim adipisicing nulla. Elit eu occaecat et sit veniam qui.
                  </p>
              </div>

              <div className="card-header collapsed shadow p-4 mb-4 bg-white" aria-expanded="true" data-toggle="collapse" data-patent="#accordion" href="#collapseTwo" data-aos="fade-right"
                    data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="400">
                <a href="/" className="card-title">
                    Why should you go cashless with MoniePay?
                </a>
                <FontAwesomeIcon icon={faPlus} className="float-right" style={{color:"#770770"}}  />

              </div>
              <div class="card-block collapse" id="collapseTwo">
                  <p style={{fontSize:"14px"}}>
                    LoremAmet magna eu commodo ullamco commodo magna aliquip. 
                    Est sunt non laboris reprehenderit officia elit consequat tempor ex enim dolor ea. 
                    Ad sit aliquip quis ut commodo enim occaecat excepteur in commodo deserunt consectetur. Cillum Lorem sint proident et adipisicing aute ut minim adipisicing nulla. Elit eu occaecat et sit veniam qui.
                  </p>
              </div>

              <div className="card-header collapsed shadow p-4 mb-4 bg-white" aria-expanded="true" data-toggle="collapse" data-patent="#accordion" href="#collapseThree" data-aos="fade-left"
                    data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="400">
                <a href="/" className="card-title">
                    Why should you go cashless with MoniePay?
                </a>
                <FontAwesomeIcon icon={faPlus} className="float-right" style={{color:"#770770"}} />

              </div>
              <div class="card-block collapse" id="collapseThree">
                  <p style={{fontSize:"14px"}}>
                    LoremAmet magna eu commodo ullamco commodo magna aliquip. 
                    Est sunt non laboris reprehenderit officia elit consequat tempor ex enim dolor ea. 
                    Ad sit aliquip quis ut commodo enim occaecat excepteur in commodo deserunt consectetur. Cillum Lorem sint proident et adipisicing aute ut minim adipisicing nulla. Elit eu occaecat et sit veniam qui.
                  </p>
              </div>

          </div>
        </div>

      </div>

      </div>

      <Footer/>
    </div>
  );
}

export default OnlineUser;
