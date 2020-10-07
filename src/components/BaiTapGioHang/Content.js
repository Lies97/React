import React, { Component } from "react";
import ListItem from "./ListItem";
import Detail from "./Detail";
class Content extends Component {
  render() {
    const { data, handleChiTiet, item, handleAdd } = this.props;
    return (
      <div>
        <ListItem
          data={data}
          handleChiTiet={handleChiTiet}
          handleAdd={handleAdd}
        />
        <Detail item={item} data={data} />
      </div>
    );
  }
}

export default Content;
