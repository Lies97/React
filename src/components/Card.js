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
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: this.props.cardContent,
    };
  }

  render() {
    const { cardContent } = this.state;
    console.log(cardContent);
    return (
      <div
        className="card text-left"
        style={{ width: "300px", position: "relative" }}
      >
        <img className="card-img-top" src={modelImg} alt="hinh model" />
        <img
          src={col1}
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
          <span className="card-title badge-danger h3 px-2 rounded">$30</span>
          <p className="card-text mt-2">GUCCI G8850U</p>
        </div>
      </div>
    );
  }
}

export default Card;
