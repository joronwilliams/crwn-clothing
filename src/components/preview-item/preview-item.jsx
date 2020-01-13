import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/custom-button";

import "./preview-item.scss";

const PreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="preview-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(PreviewItem);
