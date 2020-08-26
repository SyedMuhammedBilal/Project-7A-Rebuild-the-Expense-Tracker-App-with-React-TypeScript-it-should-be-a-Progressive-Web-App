import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import IncomeExpenses from '../components/IncomeExpenses';

describe("<IncomeExpenses />", () => {
  beforeEach(() => {
    render(<IncomeExpenses/>);
  });
  
  it("should render Income", () => {
    expect(screen.getByTestId("income")).toBeInTheDocument();
  });
  
  it("should render Expense", () => {
    expect(screen.getByTestId("expense")).toBeInTheDocument();
  });

});
