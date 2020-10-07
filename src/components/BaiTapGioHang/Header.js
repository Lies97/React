import React, { Component } from "react";
import swal from "sweetalert";

class Header extends Component {
  render() {
    const {
      item1Count,
      item2Count,
      item3Count,
      totalCount,
      data,
      handlePlus,
      handleMinus,
      handleDelete,
      isAddedItem1,
      isAddedItem2,
      isAddedItem3,
    } = this.props;
    const vinSmart = data.find((item) => item.tenSP === "VinSmart Live");
    const meizu = data.find((item) => item.tenSP === "Meizu 16Xs");
    const iPhone = data.find((item) => item.tenSP === "Iphone XS Max");
    return (
      <div>
        <div className="row">
          <div className="col-9" style={{ paddingLeft: "300px" }}>
            <h2>Bài tập giỏ hàng</h2>
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({totalCount})
            </button>
          </div>
          <div className="col-3">
            {isAddedItem1 && (
              <div className="alert alert-success" role="alert">
                <button type="button" class="close" data-dismiss="alert">
                  &times;
                </button>
                Đã thêm <strong>{vinSmart.tenSP}</strong> vào giỏ hàng.
              </div>
            )}
            {isAddedItem2 && (
              <div className="alert alert-success" role="alert">
                <button type="button" class="close" data-dismiss="alert">
                  &times;
                </button>
                Đã thêm <strong>{meizu.tenSP}</strong> vào giỏ hàng.
              </div>
            )}
            {isAddedItem3 && (
              <div className="alert alert-success" role="alert">
                <button type="button" class="close" data-dismiss="alert">
                  &times;
                </button>
                Đã thêm <strong>{iPhone.tenSP}</strong> vào giỏ hàng.
              </div>
            )}
          </div>
          {}
        </div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          aria-labelledby="modelTitleId"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "1000px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>tên sản phẩm</th>
                      <th>hình ảnh</th>
                      <th>số lượng</th>
                      <th>đơn giá</th>
                      <th>thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item1Count > 0 && item2Count > 0 && item3Count ? (
                      <>
                        <tr className="card-item">
                          <td>{vinSmart.maSP}</td>
                          <td>{vinSmart.tenSP}</td>
                          <td>
                            <img src={vinSmart.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(vinSmart)}>
                              -
                            </button>
                            {item1Count}
                            <button onClick={() => handlePlus(vinSmart)}>
                              +
                            </button>
                          </td>
                          <td>{vinSmart.price}</td>
                          <td>{vinSmart.price * item1Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(vinSmart)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="card-item">
                          <td>{meizu.maSP}</td>
                          <td>{meizu.tenSP}</td>
                          <td>
                            <img src={meizu.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(meizu)}>
                              -
                            </button>
                            {item2Count}
                            <button onClick={() => handlePlus(meizu)}>+</button>
                          </td>
                          <td>{meizu.price}</td>
                          <td>{meizu.price * item2Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(meizu)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="card-item">
                          <td>{iPhone.maSP}</td>
                          <td>{iPhone.tenSP}</td>
                          <td>
                            <img src={iPhone.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(iPhone)}>
                              -
                            </button>
                            {item3Count}
                            <button onClick={() => handlePlus(iPhone)}>
                              +
                            </button>
                          </td>
                          <td>{iPhone.price}</td>
                          <td>{iPhone.price * item3Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(iPhone)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ) : item1Count > 0 && item2Count > 0 ? (
                      <>
                        <tr className="card-item">
                          <td>{vinSmart.maSP}</td>
                          <td>{vinSmart.tenSP}</td>
                          <td>
                            <img src={vinSmart.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(vinSmart)}>
                              -
                            </button>
                            {item1Count}
                            <button onClick={() => handlePlus(vinSmart)}>
                              +
                            </button>
                          </td>
                          <td>{vinSmart.price}</td>
                          <td>{vinSmart.price * item1Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(vinSmart)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="card-item">
                          <td>{meizu.maSP}</td>
                          <td>{meizu.tenSP}</td>
                          <td>
                            <img src={meizu.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(meizu)}>
                              -
                            </button>
                            {item2Count}
                            <button onClick={() => handlePlus(meizu)}>+</button>
                          </td>
                          <td>{meizu.price}</td>
                          <td>{meizu.price * item2Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(meizu)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ) : item2Count > 0 && item3Count > 0 ? (
                      <>
                        <tr className="card-item">
                          <td>{meizu.maSP}</td>
                          <td>{meizu.tenSP}</td>
                          <td>
                            <img src={meizu.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(meizu)}>
                              -
                            </button>
                            {item2Count}
                            <button onClick={() => handlePlus(meizu)}>+</button>
                          </td>
                          <td>{meizu.price}</td>
                          <td>{meizu.price * item2Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(meizu)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="card-item">
                          <td>{iPhone.maSP}</td>
                          <td>{iPhone.tenSP}</td>
                          <td>
                            <img src={iPhone.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(iPhone)}>
                              -
                            </button>
                            {item3Count}
                            <button onClick={() => handlePlus(iPhone)}>
                              +
                            </button>
                          </td>
                          <td>{iPhone.price}</td>
                          <td>{iPhone.price * item3Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(iPhone)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ) : item1Count > 0 && item3Count > 0 ? (
                      <>
                        <tr className="card-item">
                          <td>{vinSmart.maSP}</td>
                          <td>{vinSmart.tenSP}</td>
                          <td>
                            <img src={vinSmart.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(vinSmart)}>
                              -
                            </button>
                            {item1Count}
                            <button onClick={() => handlePlus(vinSmart)}>
                              +
                            </button>
                          </td>
                          <td>{vinSmart.price}</td>
                          <td>{vinSmart.price * item1Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(vinSmart)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="card-item">
                          <td>{iPhone.maSP}</td>
                          <td>{iPhone.tenSP}</td>
                          <td>
                            <img src={iPhone.hinhAnh} width={50} alt="" />
                          </td>
                          <td>
                            <button onClick={() => handleMinus(iPhone)}>
                              -
                            </button>
                            {item3Count}
                            <button onClick={() => handlePlus(iPhone)}>
                              +
                            </button>
                          </td>
                          <td>{iPhone.price}</td>
                          <td>{iPhone.price * item3Count}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(iPhone)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ) : item1Count > 0 ? (
                      <tr className="card-item">
                        <td>{vinSmart.maSP}</td>
                        <td>{vinSmart.tenSP}</td>
                        <td>
                          <img src={vinSmart.hinhAnh} width={50} alt="" />
                        </td>
                        <td>
                          <button onClick={() => handleMinus(vinSmart)}>
                            -
                          </button>
                          {item1Count}
                          <button onClick={() => handlePlus(vinSmart)}>
                            +
                          </button>
                        </td>
                        <td>{vinSmart.price}</td>
                        <td>{vinSmart.price * item1Count}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(vinSmart)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ) : item2Count > 0 ? (
                      <tr className="card-item">
                        <td>{meizu.maSP}</td>
                        <td>{meizu.tenSP}</td>
                        <td>
                          <img src={meizu.hinhAnh} width={50} alt="" />
                        </td>
                        <td>
                          <button onClick={() => handleMinus(meizu)}>-</button>
                          {item2Count}
                          <button onClick={() => handlePlus(meizu)}>+</button>
                        </td>
                        <td>{meizu.price}</td>
                        <td>{meizu.price * item2Count}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(meizu)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ) : item3Count > 0 ? (
                      <tr className="card-item">
                        <td>{iPhone.maSP}</td>
                        <td>{iPhone.tenSP}</td>
                        <td>
                          <img src={iPhone.hinhAnh} width={50} alt="" />
                        </td>
                        <td>
                          <button onClick={() => handleMinus(iPhone)}>-</button>
                          {item3Count}
                          <button onClick={() => handlePlus(iPhone)}>+</button>
                        </td>
                        <td>{iPhone.price}</td>
                        <td>{iPhone.price * item3Count}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(iPhone)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
