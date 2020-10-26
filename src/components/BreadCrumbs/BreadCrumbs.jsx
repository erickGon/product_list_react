import React, { useEffect, useState } from "react";
import "./BreadCrumbs.scss";

import { connect } from "react-redux";
import { setShowDetails } from "../../redux/actions";

function BreadCrumbs({ showDetails, selectItem, setShowDetails }) {
  useEffect(() => {
    makeList();
  }, [showDetails, selectItem]);

  const [list, setList] = useState([]);

  function handleClick(value) {
    setShowDetails(value);
  }

  function makeList() {
    let arrayList = [];
    if (selectItem?.id) {
      arrayList = [
        { name: "Phone list", value: false },
        {
          name: selectItem.model,
          value: true,
        },
      ];
    }
    setList(arrayList);
  }

  return (
    <section className="breadcrumbs-container">
      <ul className="breadcrumbs-container_list">
        {list
          ? list.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleClick(item.value)}>
                  {`${item.name} >`}
                </button>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    selectItem: state.selectItem,
    showDetails: state.showDetails,
  };
};

export default connect(mapStateToProps, { setShowDetails })(BreadCrumbs);
