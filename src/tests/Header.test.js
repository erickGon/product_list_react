import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

let storeFull = mockStore({
  carCount: 9,
  showDetails: true,
});

test("Header cart", () => {
  const { getByText } = render(
    <Provider store={storeFull}>
      <Header />
    </Provider>
  );
  const linkElement = getByText(/9/i);
  expect(linkElement).toBeInTheDocument();
});
