import React from "react";
import "./ItemCard.scss";
import { connect } from "react-redux";
import { setShowDetails, setSelectedItem } from "../../redux/actions";

function ItemCard({ item, setShowDetails, setSelectedItem }) {
  function selectItem() {
    setSelectedItem(item);
    setShowDetails(true);
  }

  return (
    <button onClick={selectItem} className="card-container">
      <div
        className="card-container_image"
        style={{ backgroundImage: `url(${item?.imgUrl})` }}
      ></div>
      <div className="card-container_description">
        <h3>Model: {item?.model}</h3>
        <p>Brand: {item?.brand}</p>
        <p>Price: {item?.price ? `${item.price}€` : ""}</p>
      </div>
    </button>
  );
}

const mapStateToProps = (state) => {
  return { isShowingDetails: state.showDetails };
};

export default connect(mapStateToProps, { setShowDetails, setSelectedItem })(
  ItemCard
);
