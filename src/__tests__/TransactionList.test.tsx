import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import TransactionsList from '../components/TransactionsList';

describe("<TransactionsList />", () => {
  
  beforeEach(() => {
    render(<TransactionsList />);
  });
  
  it("should render list", () => {
    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
