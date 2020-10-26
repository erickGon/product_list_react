import React from "react";
import { render } from "@testing-library/react";
import ItemCard from "../components/ItemCard/ItemCard";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

let storeFull = mockStore({
  setShowDetails: {
    id: 1,
    model: "test model",
    brand: "test brand",
    price: "500",
  },
});

const props = {
  id: 1,
  model: "test model",
  brand: "test brand",
  price: "500",
};

test("Item card", () => {
  const { getByText } = render(
    <Provider store={storeFull}>
      <ItemCard item={props} />
    </Provider>
  );
  const linkElement = getByText(/test brand/i);
  expect(linkElement).toBeInTheDocument();
});
