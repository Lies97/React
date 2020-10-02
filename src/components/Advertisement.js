import React, { Component } from "react";
import item1 from "../assets/img/promotion_1.png";
import item2 from "../assets/img/promotion_2.png";
import item3 from "../assets/img/promotion_3.jpg";
class Advertisement extends Component {
  render() {
    return (
      <div>
        <section id="promotion" className="container-fluid pt-5 pb-5">
          <h1 className="text-center text-white">PROMOTION</h1>
          <div className="container bg-light pt-5 pb-5">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                  <img src={item1} alt="" style={{ maxWidth: "100%" }} />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                  <img src={item2} alt="" style={{ maxWidth: "100%" }} />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                  <img src={item3} alt="" style={{ maxWidth: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Advertisement;
