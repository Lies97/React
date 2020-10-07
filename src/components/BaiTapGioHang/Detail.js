import React, { Component } from "react";

class Detail extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="row">
        <div className="row">
          <div className="col-5">
            <img src={item.hinhAnh} width="100%"></img>
          </div>
          <div className="col-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{item.thongSoKyThuat.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{item.thongSoKyThuat.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{item.thongSoKyThuat.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{item.thongSoKyThuat.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{item.thongSoKyThuat.RAM}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{item.thongSoKyThuat.ROM}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
