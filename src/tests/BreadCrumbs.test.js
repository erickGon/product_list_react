import React from "react";
import { render } from "@testing-library/react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

let storeFull = mockStore({
  selectItem: {
    id: 1,
    model: "test model",
  },
  showDetails: true,
});

test("Breadcrumb full", () => {
  const { getByText } = render(
    <Provider store={storeFull}>
      <BreadCrumbs />
    </Provider>
  );
  const linkElement = getByText(/test model >/i);
  expect(linkElement).toBeInTheDocument();
});
