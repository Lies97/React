import React, { Component } from "react";
import modelImg from "../assets/img/model.jpg";
import col1 from "../assets/img/v1.png";
import col2 from "../assets/img/v2.png";
import col3 from "../assets/img/v3.png";
import col4 from "../assets/img/v4.png";
import col5 from "../assets/img/v5.png";
import col6 from "../assets/img/v6.png";
import col7 from "../assets/img/v7.png";
import col8 from "../assets/img/v8.png";
import col9 from "../assets/img/v9.png";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "GUCCI G8759H",
      price: "$50",
      color: col2,
      modelImg,
      arr: [col1, col2, col3, col4, col5, col6, col7, col8, col9],
    };
  }
  handleClick = (data) => {
    switch (data) {
      case col1:
        this.setState({
          name: "GUCCI G8850U",
          price: "$30",
          color: col1,
        });
        break;
      case col2:
        this.setState({
          name: "GUCCI G8759H",
          price: "$50",
          color: col2,
        });
        break;
      case col3:
        this.setState({
          name: "DIOR D6700HQ",
          price: "$30",
          color: col3,
        });
        break;
      case col4:
        this.setState({
          name: "DIOR D6005U",
          price: "$30",
          color: col4,
        });
        break;
      case col5:
        this.setState({
          name: "PRADA P8750",
          price: "$30",
          color: col5,
        });
        break;
      case col6:
        this.setState({
          name: "PRADA P9700",
          price: "$30",
          color: col6,
        });
        break;
      case col7:
        this.setState({
          name: "FENDI F8750",
          price: "$30",
          color: col7,
        });
        break;
      case col8:
        this.setState({
          name: "FENDI F8500",
          price: "$30",
          color: col8,
        });
        break;
      case col9:
        this.setState({
          name: "FENDI F4300",
          price: "$30",
          color: col9,
        });
        break;
      default:
        return;
    }
  };
  render() {
    const { color, price, name, arr } = this.state;
    arr.map((data) => {
      console.log(data);
    });
    return (
      <div className="row">
        <div className="col-6">
          <div
            className="card text-left"
            style={{ width: "300px", position: "relative" }}
          >
            <img className="card-img-top" src={modelImg} alt="hinh model" />
            <img
              src={color}
              alt="kinh"
              style={{
                width: "170px",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "16%",
              }}
            />
            <div className="card-body">
              <span className="card-title badge-danger h3 px-2 rounded">
                {price}
              </span>
              <p className="card-text mt-2">{name}</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row list">
            {arr.map((data) =>
              data === col9 ? (
                <div className="col-3 item specialItem">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick(data)}
                  >
                    <img src={data} width="100px"></img>
                  </button>
                </div>
              ) : (
                <div className="col-3 item">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleClick(data)}
                  >
                    <img src={data} width="100px"></img>
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
