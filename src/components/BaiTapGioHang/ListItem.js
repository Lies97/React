import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { data, handleChiTiet, handleAdd } = this.props;
    return (
      <div className="row listItem">
        {data.map((item) => (
          <div className="col-4">
            <div className="card">
              <img src={item.hinhAnh} width="100%" />
              <div className="card-body">
                <h4 class="card-title">{item.tenSP}</h4>
                <button
                  className="btn btn-success"
                  onClick={() => handleChiTiet(item)}
                >
                  Chi tiết
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleAdd(item)}
                >
                  Thêm giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListItem;
