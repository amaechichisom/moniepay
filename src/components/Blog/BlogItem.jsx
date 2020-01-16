import React from "react";
import logo from "../logo.svg";
import'./Blog.css'
export const BlogItem = props => {
  return (
    <div className="container">
      <div className="row">
          
        <div class="col-md-12 col-sm-12">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary blog-topic">
                Connect your Business tools with MoniePay
              </strong>
              <h3 class="mb-0">
                <p class="text-dark" href="/">
                  PRODUCT UPDATE
                </p>
              </h3>
              <div class="mb-1 text-muted">Nov 12, 2019</div>
              <p class="card-text mb-auto">
                MoniePay builds technology to help Africa's best businesses grow
                from new startips to market<br/> leaders launching new business
                models
              </p>
              <a className="nav-link nav" style={{ height: "auto" }} href="/">
                Read More
              </a>
            </div>
            <img
              class="card-img-right flex-auto  d-md-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              style={{ width: "250px", height: "250px" }}
              src={logo}
              data-holder-rendered="true"
            />
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default BlogItem;
