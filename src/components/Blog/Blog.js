import React from 'react'
import './Blog.css'
import './BlogItem'
import BlogItem from './BlogItem'
import Header from '../Header'
import Footer from '../Footer'
import AOS from 'aos'
export const Blog = () => {AOS.init() 
  return(
  
    <div>
      <Header/>
        <div className="online-land jumbotron ">
        <div className="row justify-content-around">
          <div className="col-sm-10">
            <h1 className="display-4 lnd-heading blog-header" data-aos="fade-up"  data-aos-delay="800">
              MONIEPAY FOR ONLINE USERS
            </h1>
          </div>
          <div className="col-sm-10 text-left w-auto lnd-text">
          <h1 className="display-4 lnd-heading update" style={{color:"#5E5D5E"}} data-aos="fade-down"  data-aos-delay="1300">
              UPDATE AND ANNOUNCEMENT FROM MoniePay Team
            </h1>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-sm-10 lnd-btn">
          <form class="form-inline">
        <div class="form-group mx-sm-1 mb-2">
            <input type="email" class="form-control blog-email" id="inputPassword2" placeholder="Enter Email"/>
        </div>
        <button type="submit" class=" submit btn btn-primary mb-1">Subscribe Now</button>
        </form>
          </div>
        </div>
      </div>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>

      <div className=" container justify-content-around">
        <h1 style={{color:"#5E5D5E", fontSize:"18px"}}>Try MoniePay Now</h1>
        <div className="row">
          <div className="col-md-6">
            <strong style={{color:"#770770", fontSize:"18px"}} >Start Accepting Payments In Just 20 minutes!</strong>
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary submit">Create An Account!</button>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
)
  }
export default Blog