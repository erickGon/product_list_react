import React, { useEffect, useState } from "react";
import "./ProductActionBox.scss";
import InputSelect from "../InputSelect/InputSelect";

import { addProductToCart } from "../../services/api";
import { setDataCart, getDataCart } from "../../services/dataBase";

import { connect } from "react-redux";
import { setCartCount } from "../../redux/actions";

function ProductActionBox({ product, setCartCount }) {
  const messageObject = { succes: "", error: { color: "", storage: "" } };
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedStorage, setSelectedStorage] = useState({});
  const [message, setMessage] = useState(messageObject);

  useEffect(() => {
    if (product?.options?.colors?.length <= 1) {
      setSelectedColor(product.options.colors[0]);
    }

    if (product?.options?.storages?.length <= 1) {
      setSelectedStorage(product.options.storages[0]);
    }
  }, [product]);

  function handleChange(event, name) {
    switch (name) {
      case "color":
        setSelectedColor(event);
        break;
      case "storage":
        setSelectedStorage(event);
        break;
    }
  }

  function checkValues() {
    let pass = true;
    const object = { ...messageObject };

    if (!selectedColor.code) {
      pass = false;
      object.error.color = "Must select a color.";
    }

    if (!selectedStorage.code) {
      pass = false;
      object.error.storage = "Must select a storage.";
    }

    setMessage(object);

    return pass;
  }

  function handleClick() {
    if (checkValues() && product.id) {
      const object = {
        id: product.id,
        colorCode: selectedColor.code,
        storageCode: selectedStorage.code,
      };

      addProductToCart(object).then((data) => {
        setDataCart(data.count);
        setCartCount(getDataCart());
        let succesMessage = { ...messageObject };
        succesMessage.succes = "Added to cart";
        setMessage(succesMessage);
      });
    }
  }

  return (
    <section className="actions-container">
      <InputSelect
        onChange={(event) => handleChange(event, "color")}
        options={product?.options?.colors}
        selected={selectedColor ? selectedColor : ""}
        name="color"
      />
      <p className="actions-container_message-error">{message.error.color}</p>
      <InputSelect
        onChange={(event) => handleChange(event, "storage")}
        options={product?.options?.storages}
        selected={selectedStorage ? selectedStorage : ""}
        name="storage"
      />
      <p className="actions-container_message-error">{message.error.storage}</p>
      <button onClick={handleClick} className="actions-container_button">
        Add to cart
      </button>
      <p className="actions-container_message-succes">{message.succes}</p>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setCartCount })(ProductActionBox);
