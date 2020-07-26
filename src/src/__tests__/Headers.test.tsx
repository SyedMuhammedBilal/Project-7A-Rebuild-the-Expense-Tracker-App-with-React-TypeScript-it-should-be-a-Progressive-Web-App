import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import Headers from '../components/Headers';

describe("<Headers />", () => {
  beforeEach(() => {
    render(<Headers />);
  });
  
  it("should render balance", () => {
    expect(screen.getByTestId("heading")).toBeInTheDocument();
  });

});