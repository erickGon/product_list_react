import React from "react";
import "./styles/App.scss";

//Components
import Header from "./components/Header/Header";
import ProductList from "./views/ProductList/ProductList";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import { connect } from "react-redux";

function App({ isShowingDetails }) {
  return (
    <div className="App">
      <Header></Header>
      {isShowingDetails ? (
        <ProductDetails></ProductDetails>
      ) : (
        <ProductList></ProductList>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isShowingDetails: state.showDetails };
};

export default connect(mapStateToProps)(App);
