import React from "react";
import { render, screen } from "@testing-library/react"
import Balance from '../components/Balance';
import '@testing-library/jest-dom/extend-expect'

describe("<Balance />", () => {
  beforeEach(() => {
    render(<Balance />);
  });
  it("should render balance", () => {
    expect(screen.getByTestId("blnc")).toBeInTheDocument();
  });
});
