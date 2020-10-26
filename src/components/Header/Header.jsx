import React from "react";
import "./Header.scss";
import logo from "../../logo.svg";
import { connect } from "react-redux";
import { setShowDetails } from "../../redux/actions";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

function Header({ count, showDetails, setShowDetails }) {
  function goHome() {
    setShowDetails(false);
  }

  return (
    <header className="main-header">
      <button onClick={goHome} className="main-header_container">
        <img src={logo} className="main-header_container_logo" alt="logo" />
      </button>

      {showDetails ? <BreadCrumbs /> : null}

      <div className="main-header_cart">Cart: {count}</div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.carCount,
    showDetails: state.showDetails,
  };
};

export default connect(mapStateToProps, { setShowDetails })(Header);
