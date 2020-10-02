import React, { Component } from "react";
import MovieItem from "./MovieItem";
import item1 from "../assets/img/minions.jpg";
import item2 from "../assets/img/home.jpg";
import item3 from "../assets/img/harvie.jpg";
import item4 from "../assets/img/minions.jpg";
class MovieList extends Component {
  render() {
    return (
      <MovieItem item1={item1} item2={item2} item3={item3} item4={item4} />
    );
  }
}

export default MovieList;
