import React from "react";
import { render } from "@testing-library/react";
import ProductActionBox from "../components/ProductActionBox/ProductActionBox";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

let storeFull = mockStore({});

const product = {
  id: 1,
  model: "test model",
  options: {
    colors: [{ code: 1, name: "test color" }],
    storages: [{ code: 2, name: "65 GB" }],
  },
};

test("Product action render button", () => {
  const { getByText } = render(
    <Provider store={storeFull}>
      <ProductActionBox />
    </Provider>
  );
  const linkElement = getByText(/Add to cart/i);
  expect(linkElement).toBeInTheDocument();
});

test("Product action render select", () => {
  const { getByText } = render(
    <Provider store={storeFull}>
      <ProductActionBox product={product} />
    </Provider>
  );
  const linkElement = getByText(/test color/i);
  expect(linkElement).toBeInTheDocument();
});
