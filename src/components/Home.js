import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import background from "./background.png"
import logo from './logo.svg'
import "./Home.css"
import AOS from 'aos'

export const Home = () => {
  AOS.init()
    return(
        <div className="pb-5">
            <Header/>
                <div className="homeimage d-flex align-items-center">
                <div className=" container row justify-content-around ml-5 ">
                    <h1 className="col-sm-12 mt-4 display-2 mr-auto" data-aos="fade-up"  data-aos-delay="1000" style={{color:"white"}}>Moniepay </h1>
                    <div className="row d-flex mr-auto p-2">
                    <h1 className="col-md-8 display-5 text-left " data-aos="fade-down" data-aos-delay="2000" style={{color:"white"}} >Building the next generation payment system for Africa and the world</h1>
                    </div>
                </div>
                </div>

                <div className="container mb-3 mt-3 py-3 d-flex align-items-center partner-logo " >
                <div className = " justify-content-around row " data-aos="fade-up" data-aos-delay="2000">
                        <img className="col-sm-2 " src={logo} alt="company logo"/>
                        <img className="col-sm-2 " src={logo} alt="company logo"/>
                        <img className="col-sm-2 " src={logo} alt="company logo"/>
                        <img className="col-sm-2 " src={logo} alt="company logo"/>
                        <img className="col-sm-2 " src={logo} alt="company logo" />
                        <img className="col-sm-2 " src={logo} alt="company logo"/>
                        
                    </div>
                    </div>

                <div className=" homebody">
                <div className=" container">
                    <div className=" container row mt-3 mb-3 d-flex align-content-center pt-5 pb-5" data-aos="fade-up" data-aos-delay="2000">
                        <h1 className="col-md-12 text-center display-5" >We've Just Partnered With Some Awesome Folks</h1>
                        <p className="text-center col-md-12">Moniepay is building the next generation payment system for africa & the world we want 
                            to ensure we go viral in payment system africa and the world. Moniepay is building the next generation payment system for africa & the world we want 
                            to ensure we go viral in payment system africa and the world.
                        </p>
                    
                    </div>

        <div className=" row justify-content-around mt-5  d-flex align-items-center align-content-center"> 
        <div className="col-md-12 col-sm-12 justify-content-around " >
          <div
            className="card homecard flex-md-row box-shadow h-md-250 shadow-none border-0"
            
          >
            
            <div className="card-body d-flex flex-column align-items-start" data-aos="fade-right">
              <strong
                className="d-inline-block mb-2 text-primary blog-topic"
                style={{ fontSize: "24px" }}
              >
                A growth engine for modern businesses in Africa
              </strong>
              <p className="card-text mb-auto w-75" >
                MoniePay builds technology to help Africa's best businesses grow
                from new startips to market
                leaders launching new business models. MoniePay builds
                technology to help Africa's best businesses grow from new
                startips to markek.leaders launching new business models. MoniePay builds
                technology to help Africa's best businesses grow from new
                startips to market leaders launching new business models
              </p>
            </div>
            <img
            data-aos="fade-left"
              className="card-img-right flex-auto  d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{ width: "450px", height: "250px" }}
              src={background}
              data-holder-rendered="true"
            />  
          </div>
        </div>
        </div>

        <div className=" container row mb-5 d-flex align-content-center my-3 py-3" >
                        <h1 className="col-md-12 text-center display-5" >We've Just Partnered With Some Awesome Folks</h1>
                        <p className="text-center col-md-12">Moniepay is building the next generation payment system for africa & the world we want 
                            to ensure we go viral in payment system africa and the world. Moniepay is building the next generation payment system for africa & the world we want 
                            to ensure we go viral in payment system africa and the world.
                        </p>
                    
                    </div>


        <div className="site-section m-3 d-flex align-items-center mt-5 mb-5 pt-5 pb-5" >
                <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ml-auto order-2">
              <h1 className="mb-4 display-5" style={{color:"#770770"}}>Connect your Business tools with MoniePay</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <a href="/"><button className="btn btn-primary nav-link m-2" style={{color:"white"}}>Read More</button></a>
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <img src={background} alt="comdhgj" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div> 

      <div className="site-section m-3 pb-0 d-flex align-items-center mt-5 mb-5 pt-5 pb-5" >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mr-auto">
              <h1 className="mb-4 display-5" style={{color:"#770770"}}>Connect your Business tools with MoniePay</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <a href="/"><button className="btn btn-primary nav-link m-2" style={{color:"white"}}>Read More</button></a>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <img src={background} alt="Imagesomething" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>

        {/* <div className="col-md-12 col-sm-12 mt-5 mb-5 d-flex align-items-center align-content-center" style={{height:"40vh"}}>
          <div className="card homebody flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary blog-topic display-5" style={{ fontSize: "24px" }}>
                Connect your Business tools with MoniePay
              </strong>
              <p className="card-text mb-3 w-75">
                MoniePay builds technology to help Africa's best businesses grow
                from new startips to market<br/> leaders launching new business
                models
              </p>
              <button classNameName="nav-link nav btn btn-primary" style={{ height: "auto" }} href="/">
                Read More
              </button>
            </div>
            <img
              className="card-img-right flex-auto  d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{ width: "350px", height: "250px" }}
              src={background}
              data-holder-rendered="true"
            />
          </div>
        </div> */}
        <div className="site-section m-3 mt-5 mb-5 d-flex align-items-center pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ml-auto order-2">
              <h1 className="mb-4 display-5" style={{color:"#770770"}}>Connect your Business tools with MoniePay</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <a href="/"><button className="btn btn-primary nav-link" style={{color:"white"}}>Read More</button></a>
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <img src={background} alt="comdhgj" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div> 

      <div className="site-section m-3 pb-0 d-flex align-items-center mt-5 mb-5 pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mr-auto">
              <h1 className="mb-4 display-5" style={{color:"#770770"}}>Connect your Business tools with MoniePay</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
              <a href="/"><button className="btn btn-primary nav-link m-2" style={{color:"white"}}>Read More</button></a>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <img src={background} alt="Imagesomething" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>

        <div>
            <h1 className="display-4 text-center mt-4 pt-4">From Our Blog</h1>
            <div className="justify-content-center mb-3" style={{backgroundColor:"#770770", height:"3px",width:"121px", margin:"0px auto"}}></div>
            <p className="text-center " style={{fontSize:"12px"}}>MoniePay builds technology to help Africa's best businesses <br/>grow
                from new startups</p>
        </div>

        <div className="row d-flex justify-content-center mt-4 p-3" data-aos="zoom-in-up" data-aos-delay="1000">
        <div className="card col-sm-3 text-center shadow-lg mb-5 p-2 m-2 " >
            <img className="card-img-top" src={background} alt="Card cap"/>
        <div className="card-body text-center">
            {/* <h5 className="card-title text-center">Card title</h5> */}
            <p className="card-text text-center">Moniepay is building the next generation payment system for africa & the world we want 
                            to ensure we go viral in payment system africa and the world.</p>
            <a href="/" className=" homebtn btn btn-primary">Read More</a>
        </div>
        </div>

        <div className="card col-sm-3 text-center shadow-lg mb-5 p-2 m-2 " data-aos="zoom-in-up" data-aos-delay="1000">
            <img className="card-img-top" src={background} alt="Card cap"/>
        <div className="card-body text-center">
            {/* <h5 className="card-title text-center">Card title</h5> */}
            <p className="card-text text-center">Moniepay is building the next generation payment system for africa & the world we want 
                            to ensure we go viral in payment system africa and the world.</p>
            <a href="/" className=" homebtn btn btn-primary">Read More</a>
        </div>
        </div>

        <div className="card col-sm-3 text-center shadow-lg mb-5 p-2 m-2" data-aos="zoom-in-up"data-aos-delay="1000">
            <img className="card-img-top" src={background} alt="Card cap"/>
        <div className="card-body text-center">
            {/* <h5 className="card-title text-center">Card title</h5> */}
            <p className="card-text text-center">Moniepay is building the next generation payment system for africa & the world we want 
                            to ensure we go viral in payment system africa and the world.</p>
            <a href="/" className="homebtn btn btn-primary">Read More</a>
        </div>
        </div>

        </div>

        <div className="row d-flex justify-content-center align-content-center mt-4 mb-1">
            
            <div> <h1 className="col-md-12 display-4">DOWNLOAD THE APP</h1></div>
        </div>

        <div className="d-flex justify-content-center row">
            <div><p  className="col-md-12 col-sm-12 text-center" style={{color:"#626162"}}>DON'T MISS ANY UPDATE <br/> <span style={{color:"#A5A6A7", fontSize:"12px"}}>Sign Up with your email to our news letters.</span></p></div>
        </div>
        
        <div className="d-flex justify-content-center row">
        <div className="shadow text-center" ><input className="col-md-12 col-sm-12 shadow border-0 text-center" type="email" class="form-control" id="inputEmail3"  placeholder="Sign Up with your email to our news letters." style={{width:"400px"}}></input></div>
        </div>

        <div className="d-flex justify-content-center row">
            <div><p  className="col-md-12 col-sm-12 text-center mt-2" style={{color:"#626162", fontSize:"11px", fontWeight:"bold"}}>Don't worry, we won't spam your inbox.</p></div>
        </div>
        
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Home