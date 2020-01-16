import React from 'react'
import logo from './logo.svg'
import Footer from './Footer'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
export const Agent = () => {
  AOS.init()
    return(
        <div>
            <Header/>
            <div className="online-land jumbotron ">
                <div className="row justify-content-around ">
            
            <div className="col-sm-10">
            <h1 className="display-4 lnd-heading float-right" data-aos="fade-up"  data-aos-delay="800">
              Set your goals.
            </h1>
            </div>
            <div className="col-sm-10">
            <h1 className="display-4 lnd-heading float-right " data-aos="fade-up"  data-aos-delay="1500">
              Level up your business.
            </h1>
            </div>
            
            <div className="col-sm-10  w-auto lnd-text " data-aos="fade-down"  data-aos-delay="2000">
            <p className="float-right text-right">
              Access MoniePay API to connect your website to accept payment for
              Fintech Solutions
            </p>
            </div>
          <div className="col-sm-10 lnd-btn" data-aos="fade-down"  data-aos-delay="2000">
            <button className="btn btn-primary float-right" style={{backgroundColor:"#770770", border:"unset"}}>
              Read Documentations
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
      <div className=" row justify-content-around ">
        <div className="col-sm-8">
          <p className="text-center display-4" style={{color:"#fba11a"}} data-aos="fade-down"  data-aos-delay="2500">HOW CAN MONIEPAY HELP YOU</p>
        </div>
        <div className="col-sm-8 ">
          <p className="growing text-break text-center" data-aos="fade-down"  data-aos-delay="2500">
            Growing your business is tough, but it can be easier with greater
            access to funding. At MoniePay opening doors wider for businesses
            like yours to receive funding, so you can reach new heights.
          </p>
        </div>
        </div>

        <div className="d-flex justify-content-around mt-5" data-aos="fade-down"  data-aos-delay="2500">
          <div className="text-center shadow-lg p-4 mb-5  bg-white rounded" >
            <img src={logo} alt="expand quickly"/>
            <p>Expand Quickly</p>
          </div>

          <div className="text-center shadow-lg p-4 mb-5 bg-white rounded">
            <img src={logo} alt="expand quickly"/>
            <p>Expand Quickly</p>
          </div>

          <div className="text-center shadow-lg p-4 mb-5 bg-white rounded">
            <img src={logo} alt="expand quickly"/>
            <p>Expand Quickly</p>
          </div>

          <div className="text-center shadow-lg p-4 mb-5 bg-white rounded">
            <img src={logo} alt="expand quickly"/>
            <p>Expand Quickly</p>
          </div>
        </div>

        <div className="container-fluid row justify-content-center mt-5 p-4">
        <div className="row col-sm-12 col-md-8 card-deck " >
            <div className="card col-sm-12 col-md-6 shadow-lg p-4 mb-5 bg-white rounded" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <img src={logo} className="card-img-top" alt="stuffs" />
              <div className="card-body">
                <h5 className="card-title">Working Capital Financing</h5>
                <p className="card-text">
                  Growing your business is tough but it can be easier with great access to funding.
                </p>
                <a href="/" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
            <div className="card col-sm-12 col-md-6 shadow-lg p-4 mb-5  bg-white rounded" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="500">
              <img src={logo} className="card-img-top" alt="stuffs" />
              <div className="card-body">
                <h5 className="card-title">Working Capital Financing</h5>
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
      
      <div className=" row justify-content-around ">
        <div className="col-sm-12">
          <p className=" text-center p-4 m-5 display-4" style={{color:"#fba11a"}}>WE ARE HERE TO MOVE YOUR BUSINESS FORWARD</p>
        </div>
        <div className="col-md-8 col-sm-12 justify-content-around">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <img
              className="card-img-right flex-auto  d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{ width: "350px", height: "250px" }}
              src={logo}
              data-holder-rendered="true"
            />
            <div className="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary blog-topic" style={{fontSize:"24px"}}>
                Run your Business tools with MoniePay
              </strong>
              {/* <h3 class="mb-0">
                <p class="text-dark" href="/">
                  PRODUCT UPDATE
                </p>
              </h3>
              <div class="mb-1 text-muted">Nov 12, 2019</div> */}
              <p className="card-text mb-auto">
                MoniePay builds technology to help Africa's best businesses grow
                from new startips to market<br/> leaders launching new business
                models
              </p>
              <a className="nav-link nav" style={{ height: "auto" }} href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 justify-content-around">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <img
              className="card-img-right flex-auto  d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{ width: "350px", height: "250px" }}
              src={logo}
              data-holder-rendered="true"
            />
            <div className="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary blog-topic" style={{fontSize:"24px"}}>
                Run your Business tools with MoniePay
              </strong>
              {/* <h3 class="mb-0">
                <p class="text-dark" href="/">
                  PRODUCT UPDATE
                </p>
              </h3>
              <div class="mb-1 text-muted">Nov 12, 2019</div> */}
              <p className="card-text mb-auto">
                MoniePay builds technology to help Africa's best businesses grow
                from new startips to market<br/> leaders launching new business
                models
              </p>
              <a className="nav-link nav" style={{ height: "auto" }} href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
        </div>

      </div>
      <div className="FAQ container-fluid row justify-content-center mt-3 mb-4">
        <div>
          <h4 className="display-4 p-4">FREQUENTLY ASKED QUESTIONS</h4>
        </div>
      </div>
      <div className="FAQ row justify-content-center">

      <div className="container mt-3">
        <div id="accordion" class="accordion">
          <div className="m-b-0">
              <div className="card-header collapsed shadow p-4 mb-4 bg-white" aria-expanded="true" data-toggle="collapse" data-patent="#accordion" href="#collapseOne" data-aos="fade-left"
                    data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="400">
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
                    data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="600">
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
                    data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="800">
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
    )
}

export default Agent