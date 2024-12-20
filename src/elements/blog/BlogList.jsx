import React, { Component, Fragment } from "react";
import BlogContent from "./BlogContent";

class BLogList extends Component {
  render() {
    const PostList = BlogContent.slice(0, 6);
    return (
      <Fragment>
        <div className="row">
          {PostList.map((value, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href={value.link}>
                    <img
                      className="w-100"
                      src={value.images}
                      alt="Blog Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="blogtype">{value.category}</p>
                  <h4 className="title">
                    <a href={value.link}>{value.title}</a>
                  </h4>
                  <div className="blog-btn">
                    <a className="rn-btn text-white" href={value.link}>
                      Leia Mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default BLogList;
