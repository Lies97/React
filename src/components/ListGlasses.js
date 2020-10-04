import React, { Component } from "react";
import col1 from "../assets/img/g1.jpg";
import col2 from "../assets/img/g2.jpg";
import col3 from "../assets/img/g3.jpg";
import col4 from "../assets/img/g4.jpg";
import col5 from "../assets/img/g5.jpg";
import col6 from "../assets/img/g6.jpg";
import col7 from "../assets/img/g7.jpg";
import col8 from "../assets/img/g8.jpg";
import col9 from "../assets/img/g9.jpg";
class ListGlasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr1: [col1, col2, col3, col4],
      arr2: [col5, col6, col7, col8],
      arr3: col9,
    };
  }

  render() {
    return <div className="col"></div>;
  }
}

export default ListGlasses;
