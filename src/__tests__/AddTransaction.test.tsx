import React from "react";
import { render, screen } from "@testing-library/react"
import AddTransaction from '../components/AddTransaction';

describe("<AddTransaction />", () => {
  beforeEach(() => {
    render(<AddTransaction />);
  });
  

  it("should render transaction form", () => {
    expect(screen.getByTestId("transaction-form"))
  });

  it("should render Name", () => {
    expect(screen.getByTestId("name"))
  });

  it("should render Amount", () => {
    expect(screen.getByTestId("amount"))
  });

})