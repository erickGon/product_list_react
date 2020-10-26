import React from "react";
import { render } from "@testing-library/react";
import InputSelect from "../components/InputSelect/InputSelect";

const options = [
  {
    code: 123,
    name: "test 1",
  },
  {
    code: 124,
    name: "test 2",
  },
];

const name = "test";

const selected = options[1];

test("Input select display options", () => {
  const { getByText } = render(
    <InputSelect name={name} options={options} selected={selected} />
  );
  const linkElement = getByText(/test 2/i);
  expect(linkElement).toBeInTheDocument();
});

test("Input select no selected", () => {
  const { getByTestId } = render(
    <InputSelect name={name} options={options} selected={null} />
  );
  const linkElement = getByTestId("empty-option");
  expect(linkElement).toBeInTheDocument();
});
