import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MovieList from "./components/MovieList";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <MovieList />
      <Advertisement />
      <Footer />
    </div>
  );
}

export default App;
