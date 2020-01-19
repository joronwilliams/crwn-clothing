import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop-selectors";

import PreviewItem from "../../components/preview-item/preview-item";

import "./collection-page.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map(item => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
