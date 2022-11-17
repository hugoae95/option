import React from "react";
import { render, screen } from "@testing-library/react";
import { Product } from "./../../../components/products/Product";
import renderer from "react-test-renderer";
import { product } from "../../../mocks/product";

test("renders title of the product", () => {
  render(<Product product={product} />);
  const title = screen.getByText(/Product 4/i);
  expect(title).toBeInTheDocument();
});

test("snaphot generate ", () => {
  const component = renderer.create(<Product product={product} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
