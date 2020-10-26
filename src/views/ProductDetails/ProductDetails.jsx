import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { getDetail } from "../../services/api";

import { connect } from "react-redux";
import { setShowDetails } from "../../redux/actions";

import ProductActionBox from "../../components/ProductActionBox/ProductActionBox";

function ProductDetails({ item, setShowDetails }) {
  const [product, setProduct] = useState({});

  const productDescriptionKeys = [
    "brand",
    "model",
    "price",
    "cpu",
    "ram",
    "os",
    "displayResolution",
    "battery",
    "primaryCamera",
    "dimentions",
    "weight",
  ];

  useEffect(() => {
    getDetail(item.id).then((data) => {
      setProduct(data);
    });
  }, [item]);

  function goToList() {
    setShowDetails(false);
  }

  function parseKeys(key) {
    return key.split(/(?=[A-Z])/).join(" ");
  }

  return (
    <section className="details-view">
      <div className="details-view_back-container">
        <button
          className="details-view_back-container_button"
          onClick={goToList}
        >
          {"<- GO BACK"}
        </button>
      </div>
      <div
        className="details-view_image"
        style={{ backgroundImage: `url(${product?.imgUrl})` }}
      ></div>
      <div className="details-view_details-container">
        <div className="details-view_details-container_description">
          <ul>
            {productDescriptionKeys.map((key, index) => (
              <li key={index}>
                <strong>{parseKeys(key)}:</strong>
                {` ${product[key]} ${key === "weight" ? "kg" : ""} ${
                  key === "price" ? "€" : ""
                }`}
              </li>
            ))}
          </ul>
        </div>
        <div className="details-view_details-container_actions">
          <ProductActionBox product={product} />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { item: state.selectItem };
};

export default connect(mapStateToProps, { setShowDetails })(ProductDetails);
