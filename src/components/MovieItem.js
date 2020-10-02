import React, { Component } from "react";

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item1, item2, item3, item4 } = this.props;
    return (
      <div>
        <div className="container mt-5">
          <h1 className="text-center m-3">LIST MOVIE</h1>
          <div className="row">
            <div className="col-sm-3">
              {/*Begin item */}
              <div className="card">
                <img className="card-img-top" src={item1} alt="" />
                <div className="card-body">
                  <h4 className="card-title">Minions</h4>
                  <p className="card-text">85000</p>
                  <button className="btn btn-primary">Detail</button>
                </div>
              </div>
              {/* End item */}
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img className="card-img-top" src={item2} alt="" />
                <div className="card-body">
                  <h4 className="card-title">Home</h4>
                  <p className="card-text">85000</p>
                  <button className="btn btn-primary">Detail</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img className="card-img-top" src={item3} alt="" />
                <div className="card-body">
                  <h4 className="card-title">Harvie</h4>
                  <p className="card-text">85000</p>
                  <button className="btn btn-primary">Detail</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img className="card-img-top" src={item4} alt="" />
                <div className="card-body">
                  <h4 className="card-title">Insideout</h4>
                  <p className="card-text">85000</p>
                  <button className="btn btn-primary">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
