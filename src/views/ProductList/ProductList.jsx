import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import { getList } from "../../services/api";
import isStringEmpty from "../../services/isStringEmpty";
import { setData, getData } from "../../services/dataBase";

function ProductList() {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [search] = useState("");

  useEffect(() => {
    getConditionalData();
  }, []);

  function getConditionalData() {
    getData().then((value) => {
      if (value.getNew) {
        getList().then((data) => {
          setData(data);
          setItems(data);
          setFilterItems(data);
        });
      } else {
        setItems(value.items);
        setFilterItems(value.items);
      }
    });

    setTimeout(() => {
      getConditionalData();
    }, 3600 * 1000);
  }

  function filter(event) {
    const text = event.target?.value?.toLowerCase();

    if (!isStringEmpty(text)) {
      const copyItems = items.filter((item) => {
        const regBrand = item?.brand?.toLowerCase().indexOf(text) !== -1;
        const regModel = item.model?.toLowerCase().indexOf(text) !== -1;
        return regBrand || regModel;
      });
      setFilterItems(copyItems);
    } else {
      setFilterItems(items);
    }
  }

  return (
    <section className="list-view">
      <div className="list-view_search-container">
        <input
          onChange={filter}
          className="list-view_search-container_search"
        ></input>
        {search}
      </div>
      <div className="list-view_list">
        {filterItems.length
          ? filterItems.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))
          : "Ups we couldn't find what you are looking for."}
      </div>
    </section>
  );
}

export default ProductList;
