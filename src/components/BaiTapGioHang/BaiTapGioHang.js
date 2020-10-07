import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import item1 from "../../assets/img-card/vsphone.jpg";
import item2 from "../../assets/img-card/meizuphone.jpg";
import item3 from "../../assets/img-card/applephone.jpg";

class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1Count: 0,
      item2Count: 0,
      item3Count: 0,
      totalCount: 0,
      isAddedItem1: false,
      isAddedItem2: false,
      isADdedItem3: false,
      item: {
        count: 0,
        hinhAnh: item2,
        tenSP: "Meizu 16Xs",
        thongSoKyThuat: {
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          RAM: "4GB",
          ROM: "6GB",
        },
      },
    };
  }

  handleChiTiet = (data) => {
    this.setState({
      item: data,
    });
  };

  handleAdd = (data) => {
    const { totalCount, item1Count, item2Count, item3Count } = this.state;
    switch (data.tenSP) {
      case "VinSmart Live":
        this.setState({
          item1Count: item1Count + 1,
          isAddedItem1: true,
        });
        setTimeout(() => this.setState({ isAddedItem1: false }), 3000);
        break;
      case "Meizu 16Xs":
        this.setState({
          item2Count: item2Count + 1,
          isAddedItem2: true,
        });
        setTimeout(() => this.setState({ isAddedItem2: false }), 3000);
        break;
      case "Iphone XS Max":
        this.setState({
          item3Count: item3Count + 1,
          isAddedItem3: true,
        });
        setTimeout(() => this.setState({ isAddedItem3: false }), 3000);
        break;
      default:
        return;
    }
    this.setState({
      totalCount: totalCount + 1,
    });
  };

  handleMinus = (data) => {
    const { totalCount, item1Count, item2Count, item3Count } = this.state;
    switch (data.tenSP) {
      case "VinSmart Live":
        this.setState({
          item1Count: item1Count - 1,
          totalCount: totalCount - 1,
        });
        break;
      case "Meizu 16Xs":
        this.setState({
          item2Count: item2Count - 1,
          totalCount: totalCount - 1,
        });
        break;
      case "Iphone XS Max":
        this.setState({
          item3Count: item3Count - 1,
          totalCount: totalCount - 1,
        });
        break;
      default:
        return;
    }
  };
  handlePlus = (data) => {
    this.handleAdd(data);
  };
  handleDelete = (data) => {
    const { totalCount, item1Count, item2Count, item3Count } = this.state;
    const temp1 = item1Count;
    const temp2 = item2Count;
    const temp3 = item3Count;
    switch (data.tenSP) {
      case "VinSmart Live":
        this.setState({
          item1Count: 0,
          totalCount: totalCount - temp1,
        });
        break;
      case "Meizu 16Xs":
        this.setState({
          item2Count: 0,
          totalCount: totalCount - temp2,
        });
        break;
      case "Iphone XS Max":
        this.setState({
          item3Count: 0,
          totalCount: totalCount - temp3,
        });
        break;
      default:
        return;
    }
  };
  render() {
    const data = [
      {
        count: 0,
        hinhAnh: item1,
        maSP: 1,
        tenSP: "VinSmart Live",
        price: 5700000,
        thongSoKyThuat: {
          manHinh: `AMOLED, 6.2", Full HD+`,
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          RAM: "4GB",
          ROM: "6GB",
        },
      },
      {
        count: 0,
        hinhAnh: item2,
        maSP: 2,
        tenSP: "Meizu 16Xs",
        price: 7600000,
        thongSoKyThuat: {
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          RAM: "4GB",
          ROM: "6GB",
        },
      },
      {
        count: 0,
        hinhAnh: item3,
        maSP: 3,
        tenSP: "Iphone XS Max",
        price: 27000000,
        thongSoKyThuat: {
          manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          RAM: "4GB",
          ROM: "6GB",
        },
      },
    ];
    const {
      item1Count,
      item2Count,
      item3Count,
      totalCount,
      isAddedItem1,
      isAddedItem3,
      isAddedItem2,
    } = this.state;
    console.log("abc", totalCount);
    return (
      <div>
        <Header
          totalCount={this.state.totalCount}
          item1Count={item1Count}
          item2Count={item2Count}
          item3Count={item3Count}
          data={data}
          handlePlus={this.handlePlus}
          handleMinus={this.handleMinus}
          handleDelete={this.handleDelete}
          isAddedItem1={isAddedItem1}
          isAddedItem2={isAddedItem2}
          isAddedItem3={isAddedItem3}
        />
        <Content
          item={this.state.item}
          data={data}
          handleChiTiet={this.handleChiTiet}
          handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default BaiTapGioHang;
