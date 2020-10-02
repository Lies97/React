import React, { Component } from "react";
import carouselImg1 from "../assets/img/slide_1.png";
import carouselImg2 from "../assets/img/slide_2.png";
class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} className />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={carouselImg1}
                alt="Los Angeles"
                width="100%"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carouselImg2}
                alt="Los Angeles"
                width="100%"
              />
            </div>
          </div>
          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
